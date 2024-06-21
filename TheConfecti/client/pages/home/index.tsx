import React from 'react'
import Link from "next/link"
import { Label } from "../../components/ui/label"
import { Input } from "../../components/ui/input"
import { Textarea } from "../../components/ui/textarea"
import { Button } from "../../components/ui/button"
import Image from 'next/image'


function index() {
  return (
   <>
      <header className="flex items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <Link className="text-2xl font-bold" href="#">
          BibConfetti
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors duration-300"
            href="#"
          >
            Home
          </Link>
          <Link
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors duration-300"
            href="#"
          >
            Services
          </Link>
          <Link
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors duration-300"
            href="#"
          >
            About
          </Link>
          <Link
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors duration-300"
            href="#"
          >
            Contact
          </Link>
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <Link
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
            href="/register"
          >
            Get Started
          </Link>
          <Link
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-50 bg-gray-900 rounded-md shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 dark:bg-gray-200 dark:text-gray-900 dark:hover:bg-gray-300 transition-all duration-300 transform hover:scale-105"
            href="/login"
          >
            Sign In
          </Link>
        </div>
        {/* <button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md md:hidden hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
          <span className="sr-only">Open menu</span>
          <MenuIcon className="h-6 w-6" />
        </button> */}
      </header>
      <main>
        <section className="relative overflow-hidden bg-gray-100 dark:bg-gray-800 py-20 sm:py-32 lg:py-40">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-50 sm:text-5xl lg:text-6xl">
                  Streamline Academic Reviews with AI
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md">
                  Automate reviewer assignment, extract document key insights, and integrate plagiarism checking.
                </p>
                <div className="flex space-x-4">
                  <Link
                    className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-50 bg-gray-900 rounded-md shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 dark:bg-gray-200 dark:text-gray-900 dark:hover:bg-gray-300"
                    href=""
                  >
                    Get Started
                  </Link>
                  <Link
                    className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-700"
                    href="#"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="relative">
                <Image
                  alt="Hero Image"
                  className="w-full h-auto rounded-lg shadow-lg"
                  height="400"
                  src="/Assets/background.png"
                  style={{
                    aspectRatio: "600/400",
                    objectFit: "cover",
                  }}
                  width="600"
                />
                <div className="absolute top-0 left-0 w-full h-full" />
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 sm:py-32 lg:py-40">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl lg:text-5xl">
                Our Services
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-md mx-auto">
              At BibConfetti, we're dedicated to making academic publishing more efficient and accessible for researchers worldwide. Our comprehensive suite of services includes:
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
                <div className="p-6 sm:p-8">
                  <div className="flex items-center mb-4">
                    {/* <RocketIcon className="h-8 w-8 text-gray-900 dark:text-gray-50" /> */}
                    <h3 className="ml-4 text-xl font-bold text-gray-900 dark:text-gray-50">1. Auto Assignment of Reviewers</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                  Streamline the reviewer assignment process with our advanced AI algorithm. Save time and ensure fair and unbiased reviews for your submissions.
                  </p>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
                <div className="p-6 sm:p-8">
                  <div className="flex items-center mb-4">
                    {/* <BriefcaseIcon className="h-8 w-8 text-gray-900 dark:text-gray-50" /> */}
                    <h3 className="ml-4 text-xl font-bold text-gray-900 dark:text-gray-50">2. AI-Powered Document Conversations</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                  Engage in insightful discussions with your documents using our AI-powered conversation feature. Seamlessly communicate.
                  </p>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
                <div className="p-6 sm:p-8">
                  <div className="flex items-center mb-4">
                    {/* <BarChartIcon className="h-8 w-8 text-gray-900 dark:text-gray-50" /> */}
                    <h3 className="ml-4 text-xl font-bold text-gray-900 dark:text-gray-50">3. Key Insights Extraction</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                  Extract key insights from your documents effortlessly. Our AI technology identifies and highlights essential information, including abstracts, keywords, topics, and suggested improvements.
                  </p>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
                <div className="p-6 sm:p-8">
                  <div className="flex items-center mb-4">
                    {/* <BarChartIcon className="h-8 w-8 text-gray-900 dark:text-gray-50" /> */}
                    <h3 className="ml-4 text-xl font-bold text-gray-900 dark:text-gray-50">4. Integration of Plagiarism Checker</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                  Ensure the originality and integrity of your research with BibConfetti's integrated plagiarism checker. Our robust tool scans submissions against vast databases to detect any instances of plagiarism, helping you maintain academic integrity and credibility.
                  </p>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
                <div className="p-6 sm:p-8">
                  <div className="flex items-center mb-4">
                    {/* <BarChartIcon className="h-8 w-8 text-gray-900 dark:text-gray-50" /> */}
                    <h3 className="ml-4 text-xl font-bold text-gray-900 dark:text-gray-50">5. Payment Module</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                  Simplify the payment process for publication fees with BibConfetti's integrated payment module. Seamlessly handle transactions and manage payment details securely, allowing researchers to focus on their work without worrying about administrative hassles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 sm:py-32 lg:py-40 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="relative">
                <img
                  alt="About Us"
                  className="w-full h-auto rounded-lg shadow-lg"
                  height="400"
                  src="/Assets/AboutUs.jpg"
                  style={{
                    aspectRatio: "600/400",
                    objectFit: "cover",
                  }}
                  width="600"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-100 to-transparent dark:from-gray-800 dark:to-transparent" />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl lg:text-5xl">
                  About Us
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md">
                At BibConfetti, we are committed to excellence, integrity, and collaboration. We believe in fostering an environment where researchers can thrive, collaborate, and make meaningful contributions to their fields. Our team is comprised of passionate individuals with diverse expertise, working together to support the global research community.
                </p>
                <div className="flex space-x-4">
                  <Link
                    className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-50 bg-gray-900 rounded-md shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 dark:bg-gray-200 dark:text-gray-900 dark:hover:bg-gray-300"
                    href="#"
                  >
                    Learn More
                  </Link>
                  <Link
                    className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-700"
                    href="#"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 sm:py-32 lg:py-40">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl lg:text-5xl">
                Get in Touch
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                Have a question or want to learn more about our services? Contact us today!
              </p>
            </div>
            <div className="max-w-md mx-auto">
              <form className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Enter your name" type="text" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="Enter your email" type="email" />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Enter your message" />
                </div>
                <Button className="w-full" type="submit">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-gray-400 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16">
            <div>
              <h4 className="text-lg font-bold mb-4 text-gray-50">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link className="hover:text-gray-300 transition-colors duration-300" href="#">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-gray-300 transition-colors duration-300" href="#">
                    Team
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-gray-300 transition-colors duration-300" href="#">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4 text-gray-50">Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link className="hover:text-gray-300 transition-colors duration-300" href="#">
                  Auto Assignment of Reviewers
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-gray-300 transition-colors duration-300" href="#">
                  AI-Powered Document Conversations
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-gray-300 transition-colors duration-300" href="#">
                  Key Insights Extraction
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-gray-300 transition-colors duration-300" href="#">
                  Integration of Plagiarism Checker
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-gray-300 transition-colors duration-300" href="#">
                  Payment Module
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4 text-gray-50">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link className="hover:text-gray-300 transition-colors duration-300" href="#">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-gray-300 transition-colors duration-300" href="#">
                    Case Studies
                  </Link>
                </li>
                <li />
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default index