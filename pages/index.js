import Image from "next/image";
import { Inter } from "next/font/google";
import Sidebar from "@/components/sidebar/sidebar.component";
import Navigation from "@/components/navigation/navigation.component";
import DataTables from "@/components/table/table.component";
import Layout from "@/components/layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <DataTables />
    </Layout>
  );
}
