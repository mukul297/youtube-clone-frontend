import Image from "next/image";
import { Inter } from "next/font/google";
import {AppBar} from "@/components/AppBar"
import {VideoGrid} from "@/components/VideoGrid"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
        <AppBar></AppBar>
        <VideoGrid></VideoGrid>
    </div>
  )
}
