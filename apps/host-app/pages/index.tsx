import Image from "next/image";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const navigateToApp1 = () => {
    window.location.href = 'http://localhost:3001';
  };

  const navigateToApp2 = () => {
    window.location.href = 'http://localhost:3002'; 
  };
  return (
    <main
    className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className} light-background`}
  >
   <div className="flex justify-between" > 
  <button className="theme-button"><h1>Hi This is Home App </h1></button></div>
      <nav className="flex justify-between">
      <button className="theme-button" onClick={navigateToApp1}>Go to App1</button>
      <br></br><br></br><br></br>
      <button  className="theme-button"onClick={navigateToApp2}>Go to App2</button></nav>    
  </main>
);
}
