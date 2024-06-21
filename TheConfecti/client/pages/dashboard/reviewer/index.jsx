import { Button } from "@/components/ui/button"
import { TabsTrigger, TabsList, TabsContent, Tabs } from "../../../components/ui/tabs"
import { useRouter } from 'next/router';
import axiosClient from "../../../api/axiosClient";
import { useAuth } from "../../../authContext";
import dynamic from 'next/dynamic';

// Dynamically imported components for each tab
const Tab1Content = dynamic(() => import('./screens/one.jsx'));
const Tab2Content = dynamic(() => import('./screens/two.jsx'));
const Tab3Content = dynamic(() => import('./screens/three.jsx'));
const Tab4Content = dynamic(() => import('./screens/four.jsx'));
const Tab5Content = dynamic(() => import('./screens/five.jsx'));

export default function Component() {

   const { currentUser,logout } = useAuth()
  const router = useRouter()

    const handleLogout = async () => {
      try {
        
        await axiosClient.post("/logout")
        // localStorage.setItem("currentUser", null)   
        logout()     
        router.push("/home")
      } catch (error) {
        console.log(error)
      }
    }

  return (
    <div key="1" style={{ backgroundColor: 'black' }} className="flex flex-col min-h-screen bg-gray-950">
      <header style={{ backgroundColor: 'black', marginTop: '25px' }} className="flex items-center justify-between h-16 px-6 bg-gray-950 shadow-sm">
        <div className="flex items-center gap-4">
          <MountainIcon className="h-6 w-6 text-gray-50" />
          <h1 className="text-lg font-semibold text-gray-50 transition-transform duration-300 hover:scale-105">
             {currentUser ? (
        <div>
          <p>{currentUser.username}</p>
        </div>
      ) : (
        <p>No user data</p>
      )}
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <Button className="text-gray-50" size="icon" variant="ghost">
            <UserIcon className="h-5 w-5" />
            <span className="sr-only">Profile</span>
          </Button>
          <Button className="text-gray-50" variant="ghost">
            Documentation
          </Button>
          <Button onClick={handleLogout} className="text-gray-50" variant="ghost">
            Sign Out
          </Button>
          <Button className="text-gray-50" variant="ghost">
            Contact Us
          </Button>
        </div>
      </header>
      <div className="flex-1 px-6 py-16">
        <Tabs style={{paddingLeft: '90px'}} className="w-full" defaultValue="tab1">
          <TabsList className="flex w-full justify-start gap-2 bg-gray-950 rounded-t-lg p-4">
            {["generate Insight", "Check Plagiarism", "Chat with pdf" ].map((tab, index) => (
              <TabsTrigger
                key={tab}
                style={{ width: '150px' }}
                className="rounded-t-lg bg-gray-950 text-gray-50 transition-colors duration-300 hover:bg-gray-700 focus:bg-white focus:text-gray-950"
                value={`tab${index + 1}`}
              >
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>
          <br></br>
          {[
            <Tab1Content />,
            <Tab2Content />,
            <Tab3Content />,
            <Tab4Content />,
            <Tab5Content />
          ].map((ContentComponent, index) => (
            <TabsContent
              key={`tab${index + 1}`}
              style={{ width: '90%', marginLeft: "0%", height: '700px' }}
              className="rounded-b-lg bg-white p-6 shadow-md transition-all duration-300"
              value={`tab${index + 1}`}
            >
              {ContentComponent}
            </TabsContent>
          ))}
        </Tabs>
      </div>
      <br></br>
      <br></br>
      <footer className="p-4 bg-gray-950 text-white text-center w-full">
        <div style={{color: 'white'}} className="text-sm">
          © 2024 BibConfetti All rights reserved.
        </div>
        <div style={{height: '20px'}}></div>
      </footer>
    </div>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}