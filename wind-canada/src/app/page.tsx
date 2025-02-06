import React from "react";
import SignIn from "./components/SignIn";

export default function Home() {
  return (
    <div className="relative min-h-screen font-inter flex flex-col">
      <header className="mb-8">
        <nav className="flex justify-between items-center p-4 sm:p-10">
          <div className="text-xl font-bold text-gray-800">nathaphat.dev</div>
        </nav>
      </header>

      <main className="flex-grow max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">
        <section>
          <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-800">
            currently under development.
          </h1>
          <span className="text-gray-600">repo link - </span>
          <a
            href="https://github.com/putt-t/wind-canada"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-blue-300"
          >
            https://github.com/putt-t/wind-canada
          </a>{" "}
          <p className="text-gray-600 mt-3 mb-5">
            a web-based tool for calculating wind loads on buildings, compliant
            with the National Building Code of Canada 2020.
          </p>
        </section>

        <section className="flex justify-center">
          <SignIn />
        </section>
      </main>
    </div>
  );
}
