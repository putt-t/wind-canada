import { auth } from "../auth";
import Image from "next/image";

export default async function UserAvatar() {
  const session = await auth();

  if (!session?.user) return null;
  const imageSrc = session.user.image ?? "/images/default-avatar.png";

  return (
    <div>
      <Image src={imageSrc} alt="User Avatar" width={100} height={100} />
    </div>
  );
}
