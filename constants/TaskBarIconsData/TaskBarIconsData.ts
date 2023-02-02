// icons
import { IconType } from "react-icons/lib/esm/iconBase"
import {IoMdDownload} from "react-icons/io"
import {MdMail} from "react-icons/md"
import {BsFillPersonFill} from "react-icons/bs"
import {ImLinkedin2} from "react-icons/im"




interface ITaskBarIconsData {
    id: number
    iconName: string
    icon: any
    backgroundColorValue: string
}

export const TaskBarIconsDataArray: ITaskBarIconsData[] = [
    {
        id: 0,
        iconName: "download",
        icon: IoMdDownload ,
        backgroundColorValue: "#00FE74"
    },
    {
        id: 1,
        iconName: "mail",
        icon: MdMail,
        backgroundColorValue: "#FEF400"
    },
    {
        id: 2,
        iconName: "about",
        icon: BsFillPersonFill,
        backgroundColorValue: "#DC7CFE"
    },
    {
        id: 3,
        iconName: "linkedin",
        icon: ImLinkedin2,
        backgroundColorValue: "#007BB6"
    }

]