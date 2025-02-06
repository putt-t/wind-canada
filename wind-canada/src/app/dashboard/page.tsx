import { auth } from "@/app/auth"
import { SignOut } from "../components/SignOut"
import UserAvatar from "../components/UserAvatar"

export default async function Page() {
    const session = await auth()
    if (!session) return <div>Not authenticated</div>

    return (
        <div>
            <UserAvatar />
            <pre>{JSON.stringify(session, null, 2)}</pre>
            <SignOut />
        </div>
    )
}