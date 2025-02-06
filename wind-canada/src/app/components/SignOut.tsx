import { signOut } from "@/app/auth";

export function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut({ redirectTo: "/" });
      }}
    >
      <button type="submit" className="mb-4 hover:underline text-blue-300">
        sign out
      </button>
    </form>
  );
}
