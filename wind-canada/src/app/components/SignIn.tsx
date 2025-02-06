import { signIn } from "@/app/auth";

export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google", { redirectTo: "/landing" });
      }}
    >
      <button type="submit" className="mb-4 hover:underline text-blue-500">
        sign in with google.
      </button>
    </form>
  );
}
