"use client";

import { ISong, SONGS_DATA } from "@/constants/data/SongsData/SongsData";
import React, { useState, ReactNode, createContext, useRef } from "react";

export interface IAppContextType {
    songs: ISong[];
    setSongs: React.Dispatch<React.SetStateAction<ISong[]>>;
    isSongPlaying: boolean;
    setIsSongPlaying: React.Dispatch<React.SetStateAction<boolean>>;
    currentSong: ISong | null;
    setCurrentSong: React.Dispatch<React.SetStateAction<ISong>>;
    isMusicPlayerVisible: boolean
    setIsMusicPlayerVisible: React.Dispatch<React.SetStateAction<boolean>>;
    audioRef: any;
    isFolderOpen: boolean
    setsFolderOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const defaultState: IAppContextType = {
    songs: [],
    setSongs: () => {},
    isSongPlaying: false,
    setIsSongPlaying:  () => {},
    currentSong: null,
    setCurrentSong: () => {},
    isMusicPlayerVisible: true,
    setIsMusicPlayerVisible: () => {},
    audioRef: null,
    isFolderOpen: false,
    setsFolderOpen: () => {}
}


export const AppContext = createContext(defaultState);

const AppContextProvider = ({ children }: { children: ReactNode }) => {

  const [isFolderOpen, setsFolderOpen] =  useState <boolean> (false)
  const [songs, setSongs] = useState<ISong[]>(SONGS_DATA);
  const [currentSong, setCurrentSong] = useState<ISong>(SONGS_DATA[0]);
  const [isSongPlaying, setIsSongPlaying] = useState<boolean>(false);
  const [isMusicPlayerVisible, setIsMusicPlayerVisible] = useState <boolean> (true)
  const audioRef = useRef<HTMLAudioElement | null>(null);

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
        isFolderOpen,
        setsFolderOpen
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
