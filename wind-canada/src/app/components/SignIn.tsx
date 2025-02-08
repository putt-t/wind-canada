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
      <form
      action={async (formData) => {
          "use server";
          await signIn("resend", {
            email: formData.get("email") as string,
            redirect: false,
            callbackUrl: "/landing",
          });
      }}
    >
      <input type="text" name="email" placeholder="Email" />
      <br></br>
      <button type="submit"className="mb-4 hover:underline text-blue-500">One-time Email Login</button>
    </form>
    </>
  );
}
