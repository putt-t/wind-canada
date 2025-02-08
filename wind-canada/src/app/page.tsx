import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen font-inter flex flex-col font-thin bg-gray-100">
      <header className="mb-2">
        <nav className="flex justify-between items-center p-2 sm:p-6">
          <div className="text-xl font-normal text-gray-800">nathaphat.dev</div>
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/putt-t"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900"
              aria-label="GitHub"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https:/nathaphat.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900"
              aria-label="Website"
            >
              <CgWebsite className="w-6 h-6" />
            </a>
          </div>
        </nav>
      </header>

      <main className="flex-grow max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        <section className="text-center">
          <h1 className="text-2xl sm:text-3xl font-normal mb-2 text-gray-800">
            currently under development.
          </h1>
          <p className="text-gray-600 mt-3 mb-5">
            a web-based tool for calculating wind loads on buildings, compliant
            with the National Building Code of Canada 2020.
          </p>
        </section>
        <Link href="/signin" className="text-blue-500 hover:underline">
          Sign In
      </Link> 
      </main>

    </div>
  );
}
