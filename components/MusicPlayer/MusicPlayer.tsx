import React, { use, useState } from "react";
import { ISong, SONGS_DATA } from "../../constants/data/SongsData/SongsData";
import Player from "./Player";

const MusicPlayer = () => {
  const [songs, setSongs] = useState<ISong[]>(SONGS_DATA);
  const [currentSong, setCurrentSong] = useState<ISong>(SONGS_DATA[0]);
  const [isSongPlaying, setIsSongPlaying] = useState<boolean>(false);

  return (
    <div className="my-10">
      <audio src={SONGS_DATA[0].audioSrc} />
      <Player
        songs={songs}
        setSongs={setSongs}
        isSongPlaying={isSongPlaying}
        setIsSongPlaying={setIsSongPlaying}
      />
    </div>
  );
};

export default MusicPlayer;
