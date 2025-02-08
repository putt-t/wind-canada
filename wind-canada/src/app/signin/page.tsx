import { auth } from "@/app/auth";
import SignIn from "@/app/components/SignIn";
import { redirect } from 'next/navigation';

export default async function SignInPage() {
  const session = await auth();

  if (session?.user) {
    redirect('/landing');
  }

  return (
    <div>
      <SignIn />
    </div>
  );
}
