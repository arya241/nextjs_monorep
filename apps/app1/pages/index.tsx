import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
<div>
  <h1 className="theme-button"> Hello Welcome to App1</h1> 
  <br></br>
  <br></br>
  <div><h2>In the context of Micro Frontends (MFEs), Module Federation is a technique that enables you to create a single, composite application by dynamically loading code from independent, remotely hosted MFE apps. 
    </h2>
    <h2>Module Federation is a powerful tool for building complex applications using MFE architecture. It promotes independent development, code sharing, and dynamic composition, leading to more maintainable and scalable applications.</h2></div>

    <nav className="flex justify-between">
  <button className="theme-button">
    <Link href="http://localhost:3002">Go to App2</Link>
  </button>
  <br></br> <br></br><br></br>
  <button className="theme-button">
    <Link href="http://localhost:3000">Go to Home App</Link>
  </button>
</nav>
</div>

    </main>
  );
}
