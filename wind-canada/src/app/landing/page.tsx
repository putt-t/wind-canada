import { auth } from "@/app/auth";
import { SignOut } from "../components/SignOut";
import ImportanceFactorDisplay from "../components/ImportanceFactorDisplay";


export default async function Page() {
  const session = await auth();
  if (!session) return <div>Not authenticated</div>;

  return (
    <div>
      <ImportanceFactorDisplay />
      <SignOut />
    </div>
  );
}
