import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className} light-background `}
    >
  <div className="flex justify-between" > 
  <button className="theme-button"><h1>Welcome to  App 2 </h1></button></div>
  <nav className="flex justify-between">
  <button className="theme-button">
    <Link href="http://localhost:3001">Go to App1</Link>
  </button>
  <br></br> <br></br><br></br>
  <button className="theme-button">
    <Link href="http://localhost:3000">Go to Home App</Link>
  </button>
</nav>
    </main>
  );
}
