export interface ISong {
    id?: number;
    title?: string;
    songBy?: string;
    audioSrc?: string;
    thumbnail?: string;
    progress?: number;
    length?: number;
  }

export const SONGS_DATA:ISong[] = [
    {
        id: 0,
        title: "Hotel California",
        songBy: "Eagles",
        audioSrc: `/songs/hotel-california/hotel-california-audio.mp3`,
        thumbnail: "/images/songs/hotel-california/thumbnail.png"
    },
    {
        id: 1,
        title: "Scopin",
        songBy: "Kordhell",
        audioSrc: `/songs/scopin/scopin-audio.mp3`,
        thumbnail: "/images/songs/scopin/thumbnail.png"
    }
]
