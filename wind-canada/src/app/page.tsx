import React from "react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { UpdateBoard } from "./components/UpdateBoard";

export default function Home() {
  const teamMembers = [["Nathaphat Taleongpong"]];
  return (
    <div className="min-h-screen font-inter font-normal bg-gray-50">
      <header className="mb-2">
        <nav className="flex justify-between items-center p-4 sm:p-6">
          <div className="text-xl font-medium text-gray-800">nathaphat.net</div>
          <div className="flex items-center space-x-4 mr-5">
            <a
              href="https://github.com/putt-t/wind-canada"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900"
              aria-label="GitHub"
            >
              <FaGithub className="w-6 h-6" />
            </a>
          </div>
        </nav>
      </header>
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-4xl mx-auto">
          <header className="flex justify-between items-center mb-4">
            <h1 className="text-4xl font-serif">Wind Canada</h1>
          </header>

          <main>
            <div className="mb-8">
              <p>
                a free fully open sourced web app for calculating wind loads on
                buildings, compliant with the National Building Code of Canada
                2020. Update board is provided below.
              </p>
            </div>

            <div className="flex items-center justify-center mb-10">
              <div className="flex flex-col items-center">
                <div className="flex flex-col items-center mb-2">
                  <Link
                    href="/signin"
                    className="text-blue-500 hover:underline font-semibold"
                  >
                    Sign In Here
                  </Link>
                </div>
              </div>
            </div>

            <UpdateBoard />

            <section>
              <h2 className="text-xl font-medium mb-6">Team</h2>
              <div className="grid grid-cols-3 gap-y-4 gap-x-8">
                {teamMembers.map((row, rowIndex) =>
                  row.map((member, colIndex) => (
                    <div
                      key={`${rowIndex}-${colIndex}`}
                      className="text-gray-800"
                    >
                      {member}
                    </div>
                  )),
                )}
              </div>
            </section>

            <footer className="mt-12 pt-8 border-t italic font-light">
              <p>
                If you want to help me out on this project, let me know! Connect
                with me via Linkedin.
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
