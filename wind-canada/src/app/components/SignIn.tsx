import { signIn } from "@/app/auth";

export default function SignIn() {
  return (
    <>
      <form
        action={async () => {
          "use server";
          await signIn("google", { redirectTo: "/landing" });
        }}
      >
        <button type="submit" className="mb-4 hover:underline text-blue-500">
          Sign in with Google
        </button>
      </form>
      <form
        action={async () => {
          "use server";
          await signIn("github", { redirectTo: "/landing" });
        }}
      >
        <button type="submit" className="mb-4 hover:underline text-blue-500">
          Sign in with GitHub
        </button>
      </form>
    </>
  );
}
