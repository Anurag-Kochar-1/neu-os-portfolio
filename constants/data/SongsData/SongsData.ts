export interface ISong {
    id: number
    title: string
    songBy: string
    audioSrc: string
    thumbnail: string
    progress?: any
    length?: any
}

export const SONGS_DATA:ISong[] = [
    {
        id: 0,
        title: "Hotel California",
        songBy: "Eagles",
        audioSrc: `/songs/hotel-california/hotel-california-audio.mp3`,
        thumbnail: ""
    },
    {
        id: 1,
        title: "Hotel California",
        songBy: "Kordhell",
        audioSrc: `/songs/scopin/scopin-audio.mp3`,
        thumbnail: ""
    }
]
