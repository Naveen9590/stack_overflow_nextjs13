import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="h-screen">
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}

// "use client";
// import Link from "next/link";
// import Clientcomp from "@/components/clientcomp";

// export default function Page() {
//   console.log("c or s?");
//   return (
//     <main>
//       <Link href="/projects/list">See projects</Link>
//       <div>Home</div>
//       <Clientcomp />
//     </main>
//   );
// }
