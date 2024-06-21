import { TabsTrigger, TabsList, TabsContent, Tabs } from "../../components/ui/tabs"
import { Label } from "../../components/ui/label"
import { Input } from "../../components/ui/input"
import { Button } from "../../components/ui/button"
import { useState } from "react";
import { useRouter } from 'next/router';
import { useAuth } from '../../authContext';
import { LoginCO, LoginEC, LoginRE, LoginRV } from "../../api/api"
import Link from "next/link"


export default function Component() {

  const [error, setError] = useState(null);
  const [showNotFoundAlert, setShowNotFoundAlert] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
   const { login, currentUser } = useAuth();

  const handleCOLogin = async (e) => {
        e.preventDefault();

    console.log("email: ", email)
    console.log("password: ", password)

     try {
      const res = await LoginCO({email,password})
      // console.log("user: ", res.data)
      if (res.data === "User not found") {
        setShowNotFoundAlert(true);
      } else {
        login(res.data);
        // console.log("check this out: ",res.data)
        router.push('/dashboard/organizer');
      }

    } catch (err) {
      console.log(err)
    }
  };

  const handleECLogin = async (e) => {
        e.preventDefault();

    console.log("email: ", email)
    console.log("password: ", password)

     try {
      const res = await LoginEC({email,password})
      // console.log("user: ", res.data)
      if (res.data === "User not found") {
        setShowNotFoundAlert(true);
      } else {
        login(res.data);
        // console.log("check this out: ",res.data)
        router.push('/dashboard/editorial');
      }

    } catch (err) {
      console.log(err)
    }
  };

  const handleRELogin = async (e) => {
        e.preventDefault();

    console.log("email: ", email)
    console.log("password: ", password)

     try {
      const res = await LoginRV({email,password})
      // console.log("user: ", res.data)
      if (res.data === "User not found") {
        setShowNotFoundAlert(true);
      } else {
        login(res.data);
        // console.log("check this out: ",res.data)
        router.push('/dashboard/reviewer');
      }

    } catch (err) {
      console.log(err)
    }
  };

  const handleRSLogin = async (e) => {
        e.preventDefault();

    console.log("email: ", email)
    console.log("password: ", password)

     try {
      const res = await LoginRE({email,password})
      // console.log("user: ", res.data)
      if (res.data === "User not found") {
        setShowNotFoundAlert(true);
      } else {
        login(res.data);
        // console.log("check this out: ",res.data)
        router.push('/dashboard/researcher');
      }

    } catch (err) {
      console.log(err)
    }
  };


  return (
    <div
      key="1"
      className="flex min-h-[100dvh] flex-col items-center justify-center bg-gradient-to-br from-[#6366F1] to-[#9333EA] px-4 py-12 md:px-6"
    >
      <div className="flex flex-col items-center space-y-6">
        <div className="flex flex-col items-center space-y-2">
          <MountainIcon className="h-12 w-12 text-white" />
          <Link href="/home">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">Welcome to BibConfetti</h1>
          </Link>
          <p className="text-lg font-medium text-white">Sign in to your account to get started.</p>
        </div>
        <div className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-lg">
          <Tabs className="grid w-full grid-cols-4 gap-4" defaultValue="email">
            <TabsList className="col-span-4 rounded-t-2xl bg-gray-100 p-2 dark:bg-gray-800">
              <TabsTrigger value="conference-organizer">
                <ConeIcon className="mr-2 h-5 w-5" />
                Conference Organizer
              </TabsTrigger>
              <TabsTrigger value="researcher">
                <SearchIcon className="mr-2 h-5 w-5" />
                Researcher
              </TabsTrigger>
              <TabsTrigger value="reviewer">
                <ViewIcon className="mr-2 h-5 w-5" />
                Reviewer
              </TabsTrigger>
              <TabsTrigger value="editorial-head">
                <DeleteIcon className="mr-2 h-5 w-5" />
                Editorial Head
              </TabsTrigger>
            </TabsList>
            <TabsContent className="col-span-4 space-y-4" value="conference-organizer">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Sign in as Conference Organizer</h2>
                <p className="text-gray-500">Enter your email and password to sign in.</p>
              </div>
              <form className="space-y-4" >
                <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="m@example.com" type="email" value={email}
          onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" value={password}
          onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <Button onClick={handleCOLogin} className="w-full">Sign in</Button>
              </form>
            </TabsContent>
            <TabsContent className="col-span-4 space-y-4" value="researcher">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Sign in as Researcher</h2>
                <p className="text-gray-500">Enter your email and password to sign in.</p>
              </div>
              <form className="space-y-4">
                <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="m@example.com" type="email"  value={email}
          onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" value={password}
          onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <Button onClick={handleRSLogin}  className="w-full">Sign in</Button>
              </form>
            </TabsContent>
            <TabsContent className="col-span-4 space-y-4" value="reviewer">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Sign in as Reviewer</h2>
                <p className="text-gray-500">Enter your email and password to sign in.</p>
              </div>
              <form className="space-y-4">
                <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="m@example.com" type="email"  value={email}
          onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="password" >Password</Label>
                  <Input id="password" type="password" value={password}
          onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <Button onClick={handleRELogin}  className="w-full">Sign in</Button>
              </form>
            </TabsContent>
            <TabsContent className="col-span-4 space-y-4" value="editorial-head">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Sign in as Editorial Head</h2>
                <p className="text-gray-500">Enter your email and password to sign in.</p>
              </div>
              <form className="space-y-4">
                <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="m@example.com" type="email"  value={email}
          onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="password" >Password</Label>
                  <Input id="password" type="password" value={password}
          onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <Button onClick={handleECLogin}  className="w-full">Sign in</Button>
              </form>
            </TabsContent>
            {/* <TabsContent className="col-span-4 space-y-4" value="email">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Sign in with Email</h2>
                <p className="text-gray-500">Enter your email and password to sign in.</p>
              </div>
              <form className="space-y-4">
                <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="m@example.com" type="email" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" />
                </div>
                <Button className="w-full">Sign in</Button>
              </form>
            </TabsContent>
            <TabsContent className="col-span-4 space-y-4" value="google">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Sign in with Google</h2>
                <p className="text-gray-500">Sign in with your Google account to continue.</p>
              </div>
              <Button className="w-full" variant="outline">
                <ChromeIcon className="mr-2 h-5 w-5" />
                Sign in with Google
              </Button>
            </TabsContent>
            <TabsContent className="col-span-4 space-y-4" value="github">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Sign in with GitHub</h2>
                <p className="text-gray-500">Sign in with your GitHub account to continue.</p>
              </div>
              <Button className="w-full" variant="outline">
                <GithubIcon className="mr-2 h-5 w-5" />
                Sign in with GitHub
              </Button>
            </TabsContent>
            <TabsContent className="col-span-4 space-y-4" value="twitter">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Sign in with Twitter</h2>
                <p className="text-gray-500">Sign in with your Twitter account to continue.</p>
              </div>
              <Button className="w-full" variant="outline">
                <TwitterIcon className="mr-2 h-5 w-5" />
                Sign in with Twitter
              </Button>
            </TabsContent> */}
          </Tabs>
        </div>
      </div>
    </div>
  )
}

function ChromeIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  )
}


function ConeIcon(props) {
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
      <path d="m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98" />
      <ellipse cx="12" cy="19" rx="9" ry="3" />
    </svg>
  )
}


function DeleteIcon(props) {
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
      <path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" />
      <line x1="18" x2="12" y1="9" y2="15" />
      <line x1="12" x2="18" y1="9" y2="15" />
    </svg>
  )
}


function GithubIcon(props) {
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
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
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


function SearchIcon(props) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function TwitterIcon(props) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}


function ViewIcon(props) {
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
      <path d="M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z" />
      <path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
      <path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" />
      <path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" />
    </svg>
  )
}