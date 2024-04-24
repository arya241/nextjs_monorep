import Image from "next/image";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const navigateToApp1 = () => {
    window.location.href = 'http://localhost:3001'; // Redirect to app1 URL
  };

  const navigateToApp2 = () => {
    window.location.href = 'http://localhost:3002'; // Redirect to app2 URL
  };
  return (
    <main
    className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
  >
    <div>
      <h1>Hi this is Container App</h1>
      <button onClick={navigateToApp1}>Go to App1</button>
      <button onClick={navigateToApp2}>Go to App2</button>
    </div>
  </main>
);
}
