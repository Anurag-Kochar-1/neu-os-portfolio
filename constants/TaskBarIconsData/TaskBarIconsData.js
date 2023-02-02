// icons
import { IconType } from "react-icons/lib/esm/iconBase"
import {IoMdDownload} from "react-icons/io"
import {MdMail} from "react-icons/md"
import {BsFillPersonFill} from "react-icons/bs"
import {ImLinkedin2} from "react-icons/im"




// interface ITaskBarIconsData {
//     id: number
//     iconName: string
//     icon: any
//     backgroundColorValue: string
// }

export const TaskBarIconsDataArray = [
    {
        id: 0,
        iconName: "download",
        icon: <IoMdDownload className="text-black text-lg"/>  ,
        backgroundColorValue: "bg-[#00FD74]",
        iconColor: "text-white"
    },
    {
        id: 1,
        iconName: "mail",
        icon: <MdMail className="text-black text-lg"/>,
        backgroundColorValue: "bg-[#FEF400]",
        iconColor: "text-white"
    },
    {
        id: 2,
        iconName: "about",
        icon: <BsFillPersonFill className="text-black text-lg"/>,
        backgroundColorValue: "bg-[#DC7CFE]",
        iconColor: "text-white"
    },
    {
        id: 3,
        iconName: "linkedin",
        icon: <ImLinkedin2 className="text-black text-lg"/>,
        backgroundColorValue: "bg-[#007BB6]",
        iconColor: "text-white"
    }

]