import { signIn } from "@/app/auth";
import Link from "next/link";

export default function SignIn() {
  return (
    <div className="relative min-h-screen font-inter flex flex-col font-thin bg-gray-50">
      <header className="mb-2">
        <nav className="flex justify-between items-center p-2 sm:p-6">
          <div className="text-xl font-normal text-gray-800">Wind Canada</div>
          <div className="flex items-center space-x-4">
            <Link
              href="/"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900"
              aria-label="Home"
            >
              Home
            </Link>
          </div>
        </nav>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center">
        <section className="text-center">
          <form
            action={async () => {
              "use server";
              await signIn("google", { redirectTo: "/landing" });
            }}
          >
            <button
              type="submit"
              className="mb-4 hover:underline text-blue-500"
            >
              Sign in with Google
            </button>
          </form>
          <form
            action={async () => {
              "use server";
              await signIn("github", { redirectTo: "/landing" });
            }}
          >
            <button
              type="submit"
              className="mb-4 hover:underline text-blue-500"
            >
              Sign in with GitHub
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
