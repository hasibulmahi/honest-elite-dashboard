import Image from "next/image";
import { Inter } from "next/font/google";
import Sidebar from "@/components/sidebar/sidebar.component";
import Navigation from "@/components/navigation/navigation.component";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Sidebar />
      <Navigation/>
    </>
  );
}
