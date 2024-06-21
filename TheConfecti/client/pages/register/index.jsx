import { TabsTrigger, TabsList, TabsContent, Tabs } from "../../components/ui/tabs"
import { Label } from "../../components/ui/label"
import { Input } from "../../components/ui/input"
import { Textarea } from "../../components/ui/textarea"
import { Button } from "../../components/ui/button"
import { Card } from "../../components/ui/card"
import React, { useState } from 'react';
import { registerCO, registerRE } from '../../api/api';
import { useRouter } from 'next/router';
import Link from "next/link"

export default function Component() {
  const router = useRouter();

  const [organizerFormData, setOrganizerFormData] = useState({
    username: '',
    email: '',
    password: '',
    Oname: '',
    Odetail: '',
    phone: ''
  });

  const [researcherFormData, setResearcherFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [organizerFormErrors, setOrganizerFormErrors] = useState({});
  const [researcherFormErrors, setResearcherFormErrors] = useState({});

  const handleOrganizerInputChange =  (e) => {
    const { name, value } = e.target;
    setOrganizerFormData({ ...organizerFormData, [name]: value });

  };

  const handleResearcherInputChange = (e) => {
    const { name, value } = e.target;
    setResearcherFormData({ ...researcherFormData, [name]: value });
  };

  async function handleOrganizerSubmit(e)  {
    e.preventDefault();
    
    const errors = {};
    Object.keys(organizerFormData).forEach((key) => {
      if (!organizerFormData[key]) {
        errors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
      }
    });
    if (Object.keys(errors).length === 0) {
      console.log("Organizer Form Data:", organizerFormData);
      
    } else {
      setOrganizerFormErrors(errors);
    }
    
     try {
      const response = await registerCO(organizerFormData);
      
      console.log('Registration successful:', response);
      if(response){
        router.push("/login");
      }
      
      
    } catch (error) {
      console.error('Registration error:', error);
    }
  }
      
  const handleResearcherSubmit = async (e) => {
    e.preventDefault();
    const errors = {};
    Object.keys(researcherFormData).forEach((key) => {
      if (!researcherFormData[key]) {
        errors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
      }
    });
    if (Object.keys(errors).length === 0) {
      console.log("Researcher Form Data:", researcherFormData);
    } else {
      setResearcherFormErrors(errors);
    }

     try {
      const response = await registerRE(researcherFormData);
      
      console.log('Registration successful:', response);
      if(response){
        router.push("/login");
      }
      
      
    } catch (error) {
      console.error('Registration error:', error);
    }
  };
  

  return (
    <div  className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <Link  href="/home">
      <div className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Bib Confetti</div>
      </Link>
      <Card className="w-full max-w-md">
        <Tabs  className="border-b" defaultValue="organizer">
          <TabsList className="flex">
            <TabsTrigger value="organizer">Conference Organizer</TabsTrigger>
            <TabsTrigger value="researcher">Researcher</TabsTrigger>
          </TabsList>
          <TabsContent value="organizer">
            <form  className="space-y-4 p-6" onSubmit={handleOrganizerSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" placeholder="Enter your username" name="username" onChange={handleOrganizerInputChange} />
                  {organizerFormErrors.username && <span style={{color:'red'}} className="text-red-500">{organizerFormErrors.username}</span>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="Enter your email" type="email" name="email" onChange={handleOrganizerInputChange} />
                  {organizerFormErrors.email && <span style={{color:'red'}} className="text-red-500">{organizerFormErrors.email}</span>}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" placeholder="Enter your password" type="password" name="password" onChange={handleOrganizerInputChange} />
                {organizerFormErrors.password && <span style={{color:'red'}} className="text-red-500">{organizerFormErrors.password}</span>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="organization-name">Organization Name</Label>
                <Input id="organization-name" placeholder="Enter your organization name" name="Oname" onChange={handleOrganizerInputChange} />
                {organizerFormErrors.Oname && <span style={{color:'red'}} className="text-red-500">{organizerFormErrors.Oname}</span>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="organization-details">Organization Details</Label>
                <Textarea id="organization-details" placeholder="Enter your organization details" name="Odetail" onChange={handleOrganizerInputChange} />
                {organizerFormErrors.Odetails && <span style={{color:'red'}} className="text-red-500">{organizerFormErrors.Odetails}</span>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="Enter your phone number" type="tel" name="phone" onChange={handleOrganizerInputChange} />
                {organizerFormErrors.phone && <span style={{color:'red'}} className="text-red-500">{organizerFormErrors.phone}</span>}
              </div>
              <Button  className="w-full" type="submit">
                Sign Up
              </Button>
            </form>
          </TabsContent>
          <TabsContent value="researcher">
            <form className="space-y-4 p-6" onSubmit={handleResearcherSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" placeholder="Enter your username" name="username" onChange={handleResearcherInputChange} />
                  {researcherFormErrors.username && <span style={{color:'red'}} className="text-red-500">{researcherFormErrors.username}</span>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="Enter your email" type="email" name="email" onChange={handleResearcherInputChange} />
                  {researcherFormErrors.email && <span style={{color:'red'}} className="text-red-500">{researcherFormErrors.email}</span>}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" placeholder="Enter your password" type="password" name="password" onChange={handleResearcherInputChange} />
                {researcherFormErrors.password && <span style={{color:'red'}} className="text-red-500">{researcherFormErrors.password}</span>}
              </div>
              <Button className="w-full" type="submit">
                Sign Up
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </Card>
    </div>

  )
}
