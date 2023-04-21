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
    audioRef: any;
}

const defaultState: IAppContextType = {
    songs: [],
    setSongs: () => {},
    isSongPlaying: false,
    setIsSongPlaying:  () => {},
    currentSong: null,
    setCurrentSong: () => {},
    audioRef: null,
  };

export const AppContext = createContext(defaultState);

const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [songs, setSongs] = useState<ISong[]>(SONGS_DATA);
  const [currentSong, setCurrentSong] = useState<ISong>(SONGS_DATA[0]);
  const [isSongPlaying, setIsSongPlaying] = useState<boolean>(false);
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
        audioRef
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
