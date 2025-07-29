import React from 'react';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] p-4 sm:p-8 bg-white dark:bg-[#0D0C11] text-gray-900 dark:text-gray-100 font-inter">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto mb-16 px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-balance">
          Welcome to <span className="text-purple-600 dark:text-purple-700">ABOODISEC</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          This website is for documenting my cybersecurity journey and contains notes, tutorials and anything interesting related to the world of cybersecurity.
        </p>
        {/* "Get Started with Docs" button removed as requested */}
      </section>

      {/* Pentesting Labs/Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-3 mb-16">
        <a
          href="/docs/lab/introduction" // Replace with your actual link for Active Directory Lab
          className="block bg-white border border-purple-600 dark:border-purple-500 dark:bg-[#1a1820] rounded-xl shadow-lg p-6 text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl group" // Fixed shadow-x1 to shadow-xl
        >
          <h2 className="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-500">Active Directory Lab</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Set up and explore an Active Directory home lab for learning
          </p>
        </a>
        <div className="cursor-not-allowed bg-white border border-purple-600 dark:border-purple-500 dark:bg-[#1a1820] rounded-xl shadow-lg p-6 text-center transition-transform duration-300 hover:scale-105 hover:shadow-x1">
          <h2 className="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-500">Active Directory Pentesting</h2>
          <p className="mb-5 text-gray-700 dark:text-gray-300">
            Techniques and tools for assessing security in Active Directory.
          </p>
           <p className="text-yellow-800 dark:text-yellow-500 font-bold">
            ⚠️ Work in progress </p>
        </div>
        <div className="cursor-not-allowed bg-white border border-purple-600 dark:border-purple-500 dark:bg-[#1a1820] rounded-xl shadow-lg p-6 text-center transition-transform duration-300 hover:scale-105 hover:shadow-x1">
          <h2 className="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-500">Web App Pentesting</h2>
          <p className="mb-18 text-gray-700 dark:text-gray-300"> 
            Finding and exploiting vulnerabilities in webapps
          </p>
            <p className="text-yellow-800 dark:text-yellow-500 font-bold">
           ⚠️ Work in Progress </p>
        </div>
         <div className="cursor-not-allowed block bg-white border border-purple-600 dark:border-purple-500 dark:bg-[#1a1820] rounded-xl shadow-lg p-6 text-center transition-transform duration-300 hover:scale-105 hover:shadow-x1 group">
          <h2 className="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-500">Android Pentesting</h2>
          <p className="mb-12 text-gray-800 dark:text-gray-300">
            Methods for security testing Android applications.
          </p>
            <p className="text-yellow-800 dark:text-yellow-500 font-bold" >
            ⚠️ Work in Progress</p>
        </div>

      </section>

      {/* Gemini AI Integration Section removed as requested */}

      {/* Socials Section */}
      <section className="text-center max-w-4xl mx-auto mt-16 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800 dark:text-gray-200">
          Connect with Me
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          Find me on my social media channels for updates and more!
        </p>  
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/your-linkedin" // Replace with your LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 border border-purple-600 dark:border-purple-400 text-base font-medium rounded-full text-purple-600 hover:bg-purple-50 transition-all duration-300 ease-in-out dark:text-purple-400 dark:hover:bg-gray-700"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/your-github" // Replace with your GitHub URL
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gray-700 hover:bg-gray-800 transition-all duration-300 ease-in-out dark:bg-gray-600 dark:hover:bg-gray-700"
          >
            GitHub
          </a>
          <a
            href="https://www.instagram.com/your-instagram" // Replace with your Instagram URL
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 border border-purple-600 dark:border-purple-400 text-base font-medium rounded-full text-purple-600 hover:bg-purple-50 transition-all duration-300 ease-in-out dark:text-purple-400 dark:hover:bg-gray-700"
          >
            Instagram
          </a>
        </div>
      </section>
    </main>
  );
}



















/*

import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">Hello World</h1>
      <p className="text-fd-muted-foreground">
        You can open{' '}
        <Link
          href="/docs"
          className="text-fd-foreground font-semibold underline"
        >
          /docs
        </Link>{' '}
        and see the documentation.
      </p>
    </main>
  );
}

*/