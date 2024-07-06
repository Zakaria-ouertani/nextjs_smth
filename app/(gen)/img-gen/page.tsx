import { currentUser } from "@clerk/nextjs/server";
import ImageForm from "@/components/imageForm"

export default async function imageGen() {
  const user = await currentUser();
  return (
    <ImageForm userId={user?.id}/>
  );
}
