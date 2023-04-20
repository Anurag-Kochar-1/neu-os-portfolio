"use client";

import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import MenuBar from "@/components/MenuBar/MenuBar";
import AboutCard from "@/components/AboutCard/AboutCard";
import FoldersContainer from "@/components/FoldersContainer/FoldersContainer";
import Folder from "@/components/Folder/Folder";
import TaskBar from "@/components/TaskBar/TaskBar";
import AppContextProvider from "@/context/AppContext";
const inter = Inter({ subsets: ["latin"] });

import { useRouter } from "next/navigation";
import MusicPlayer from "@/components/MusicPlayer/MusicPlayer";

export default function Home() {
  const router = useRouter();

  function handleOpenModal() {
    router.push("/folder");
  }

  return (
    <AppContextProvider>
      <main className="w-full h-[100%] flex justify-center items-center md:border-0 md:border-black bg-black overflow-hidden">
        <div className="w-full h-full flex flex-col justify-start items-center md:border-0 md:border-black bg-white md:-mt-0 md:-ml-0 overflow-x-hidden overflow-y-scroll scrollbar-hide">
          <MenuBar />
          <div className="bg-white w-full h-full relative grid grid-cols-12 auto-rows-min ">
            <div className=" absolute left-0 bottom-0 top-0 bg-blue-500 w-full h-[50vh] xl:h-full xl:w-full xl:col-start-1 xl:col-end-4"></div>
            <AboutCard />
            {/* <FoldersContainer /> */}
            <MusicPlayer />
          </div>
        </div>

        <TaskBar />
        <Folder />
      </main>
    </AppContextProvider>
  );
}
