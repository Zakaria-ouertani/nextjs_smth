import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default function ModelDashboard() {
  const { sessionClaims: user } = auth();

  // If the user does not have the admin role, redirect them to the home page
  if (user?.metadata.role !== "admin") {
    redirect("/");
  }
  return (
    <main>
    </main>
  );
}
