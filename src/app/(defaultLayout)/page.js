import { auth } from "@clerk/nextjs";
import Image from "next/image";
import { redirect } from "next/navigation";

export default function Home() {

  // const { userId } = auth();

  // if (userId) {
  //   redirect('/dashboard')
  // }


  return (
    <main className="font-bold text-center m-10">
      <h1>Home</h1>
    </main>
  );
}