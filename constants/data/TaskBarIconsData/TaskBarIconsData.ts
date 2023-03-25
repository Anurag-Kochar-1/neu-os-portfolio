import { IconType } from "react-icons/lib/esm/iconBase"
import { IoMdDownload } from "react-icons/io"
import { MdMail } from "react-icons/md"
import { BsFillPersonFill } from "react-icons/bs"
import { ImLinkedin2 } from "react-icons/im"




export interface ITaskBarIconsData {
    id: number
    iconName: string
    icon?: any
    backgroundColorValue: string
    iconColor: string
    isVisibleOnMobile: boolean
}


export const TaskBarIconsDataArray: ITaskBarIconsData[] = [
    {
        id: 0,
        iconName: "download",
        icon: "IoMdDownload",
        backgroundColorValue: "bg-[#00FD74]",
        iconColor: "text-black",
        isVisibleOnMobile: true
    },
    {
        id: 1,
        iconName: "mail",
        icon: "MdMail",
        backgroundColorValue: "bg-[#FEF400]",
        iconColor: "text-black",
        isVisibleOnMobile: true
    },
    {
        id: 2,
        iconName: "about",
        icon: "BsFillPersonFill",
        backgroundColorValue: "bg-[#DC7CFE]",
        iconColor: "text-black",
        isVisibleOnMobile: true
    },
    {
        id: 3,
        iconName: "linkedin",
        icon: "ImLinkedin2",
        backgroundColorValue: "bg-[#007BB6]",
        iconColor: "text-black",
        isVisibleOnMobile: true
    },
    {
        id: 4,
        iconName: "instagram",
        icon: "BsInstagram",
        backgroundColorValue: "bg-[#DB3073]",
        iconColor: "text-black",
        isVisibleOnMobile: false
    },
    {
        id: 5,
        iconName: "twitter",
        icon: "BsTwitter",
        backgroundColorValue: "bg-[#1DA1F2]",
        iconColor: "text-black",
        isVisibleOnMobile: false
    },
    {
        id: 6,
        iconName: "youtube",
        icon: "BsYoutube",
        backgroundColorValue: "bg-[#FE0002]",
        iconColor: "text-black",
        isVisibleOnMobile: false
    },
    {
        id: 7,
        iconName: "music",
        icon: "RiMusic2Fill",
        backgroundColorValue: "bg-[#FD5D5D]",
        iconColor: "text-black",
        isVisibleOnMobile: false
    }

]