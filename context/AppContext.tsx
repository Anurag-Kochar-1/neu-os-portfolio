"use client";

import { useEffect } from "react";
import { ISong, SONGS_DATA } from "@/constants/data/SongsData/SongsData";
import { useSearchParams } from "next/navigation";
import React, { useState, ReactNode, createContext, useRef } from "react";

export interface IAppContextType {
  songs: ISong[];
  setSongs: React.Dispatch<React.SetStateAction<ISong[]>>;
  isSongPlaying: boolean;
  setIsSongPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  currentSong: ISong | null;
  setCurrentSong: React.Dispatch<React.SetStateAction<ISong>>;
  isMusicPlayerVisible: boolean;
  setIsMusicPlayerVisible: React.Dispatch<React.SetStateAction<boolean>>;
  audioRef: any;
  folderState: IFolderState;
  setFolderState: React.Dispatch<React.SetStateAction<IFolderState>>;
}

const defaultState: IAppContextType = {
  songs: [],
  setSongs: () => {},
  isSongPlaying: false,
  setIsSongPlaying: () => {},
  currentSong: null,
  setCurrentSong: () => {},
  isMusicPlayerVisible: true,
  setIsMusicPlayerVisible: () => {},
  audioRef: null,
  folderState: {
    isFolderOpen: false,
    folderType: null,
    folderName: null,
    subFolderName: null,
  },
  setFolderState: () => {},
};

export const AppContext = createContext(defaultState);

interface IFolderState {
  isFolderOpen: boolean;
  folderName: string | null;
  folderType: "Folder" | "SubFolder" | null;
  subFolderName: string | null;
}

const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const searchParams = useSearchParams();
  const folderQueryParam = searchParams?.get("folder");
  const subFolderQueryParam = searchParams?.get("subFolder");
  const availableFolders = ['Skills', 'Projects', 'About', 'Contact']



  // ---- STATES -----
  const [songs, setSongs] = useState<ISong[]>(SONGS_DATA);
  const [currentSong, setCurrentSong] = useState<ISong>(SONGS_DATA[0]);
  const [isSongPlaying, setIsSongPlaying] = useState<boolean>(false);
  const [isMusicPlayerVisible, setIsMusicPlayerVisible] =
    useState<boolean>(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [folderState, setFolderState] = useState<IFolderState>({
    isFolderOpen: false,
    folderType: null,
    folderName: null,
    subFolderName: null,
  });

  // useEffect(() => {
  //   if (availableFolders?.includes(folderQueryParam as string)) {
  //     setFolderState({
  //       isFolderOpen: true,
  //       folderType: !subFolderQueryParam ? "Folder" : "SubFolder" ,
  //       folderName: folderQueryParam,
  //       subFolderName: !subFolderQueryParam ? null : subFolderQueryParam,
  //     });
  //   } 
  // }, [folderQueryParam, subFolderQueryParam]);

  return (
    <AppContext.Provider
      value={{
        songs,
        setSongs,
        isSongPlaying,
        setIsSongPlaying,
        currentSong,
        setCurrentSong,
        isMusicPlayerVisible,
        setIsMusicPlayerVisible,
        audioRef,
        folderState,
        setFolderState,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
