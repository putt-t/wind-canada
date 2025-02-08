import { auth } from "@/app/auth";
import { SignOut } from "../components/SignOut";
import UserAvatar from "../components/UserAvatar";
import Calculator from "../components/CalcTest";

export default async function Page() {
  const session = await auth();
  if (!session) return <div>Not authenticated</div>;

  return (
    <div>
      <p className="text-gray-600 mt-2">your avatar.</p>
      <UserAvatar />
      <p className="text-gray-600 mt-2">this app is still under dev.</p>
      <Calculator />
      <SignOut />
    </div>
  );
}
