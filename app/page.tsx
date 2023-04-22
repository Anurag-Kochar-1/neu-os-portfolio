"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import MusicPlayer from "@/components/MusicPlayer/MusicPlayer";
import MenuBar from "@/components/MenuBar/MenuBar";
import AboutCard from "@/components/AboutCard/AboutCard";
import FoldersContainer from "@/components/FoldersContainer/FoldersContainer";
import Folder from "@/components/Folder/Folder";
import TaskBar from "@/components/TaskBar/TaskBar";
import AppContextProvider from "@/context/AppContext";
import blueLinesBG from "../public/images/BGs/blueLinesBG.svg";

export default function Home() {
  const router = useRouter();

  function handleOpenModal() {
    router.push("/folder");
  }

  return (
    <AppContextProvider>
      <main className="w-full h-[100%] flex justify-center items-center md:border-0 md:border-black bg-black overflow-hidden">
        <div className="w-full h-full flex flex-col justify-start items-center md:border-0 md:border-black bg-white md:-mt-0 md:-ml-0 overflow-x-hidden overflow-y-scroll scrollbar-hide ">
          <MenuBar />
          <div className="bg-white w-full h-full relative grid grid-cols-12 auto-rows-min ">
            <Image
              src={blueLinesBG}
              alt="bg"
              width={500}
              height={1000}
              className={`absolute left-0 bottom-0 top-0 w-full h-[50vh] xl:h-full xl:w-full xl:col-start-1 xl:col-end-4 object-cover`}
              draggable={false}
              priority
              placeholder="blur"
              blurDataURL="/images/blueImageSmall"
            />
            <AboutCard />
            <FoldersContainer />
            <MusicPlayer />
          </div>
        </div>

        <TaskBar />
        <Folder />
      </main>
    </AppContextProvider>
  );
}
