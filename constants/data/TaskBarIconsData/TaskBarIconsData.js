import { FaSearch } from "react-icons/fa"
import { BsPersonFill, BsInstagram, BsTwitter, BsLinkedin, BsYoutube } from "react-icons/bs"
import { MdMail } from "react-icons/md"
import { RiMusic2Fill } from "react-icons/ri"
import { IoMdDownload, IoMdPerson} from "react-icons/io"


export const TaskBarIconsDataArray = [
  {
    id: 0,
    iconName: "Search",
    icon: <FaSearch />,
    bgColor: "bg-[#FFFFFF]",
    iconColor: "text-black",
    isVisibleOnMobile: true,
    link: null
  },
  {
    id: 1,
    iconName: "Music",
    icon: <RiMusic2Fill />,
    bgColor: "bg-[#FFFFFF]",
    iconColor: "text-black",
    isVisibleOnMobile: false,
    link: null
  },
  {
    id: 2,
    iconName: "Mail",
    icon: <MdMail />,
    bgColor: "bg-[#FEF400]",
    iconColor: "text-black",
    isVisibleOnMobile: true,
    link: null
  },
  {
    id: 3,
    iconName: "Download Resume",
    icon: <IoMdDownload />,
    bgColor: "bg-[#FFFFFF]",
    iconColor: "text-black",
    isVisibleOnMobile: true,
    link: null
  },
  {
    id: 4,
    iconName: "About",
    icon: <IoMdPerson />,
    bgColor: "bg-[#DB7CFD]",
    iconColor: "text-black",
    isVisibleOnMobile: true,
    link: null
  },
  {
    id: 5,
    iconName: "Instagram",
    icon: <BsInstagram />,
    bgColor: "bg-[#DB3073]",
    iconColor: "text-black",
    isVisibleOnMobile: false,
    link: `https://www.instagram.com/anurag__kochar/`
  },
  {
    id: 6,
    iconName: "Twitter",
    icon: <BsTwitter />,
    bgColor: "bg-[#1DA1F2]",
    iconColor: "text-black",
    isVisibleOnMobile: false,
    link: `https://twitter.com/anurag__kochar`
  },
  {
    id: 7,
    iconName: "YouTube",
    icon: <BsYoutube />,
    bgColor: "bg-[#FE0002]",
    iconColor: "text-black",
    isVisibleOnMobile: false,
    link: `https://youtu.be/xvFZjo5PgG0`
  },
  {
    id: 8,
    iconName: "LinkedIn",
    icon: <BsLinkedin />,
    bgColor: "bg-[#007BB6]",
    iconColor: "text-black",
    isVisibleOnMobile: true,
    link: `https://www.linkedin.com/in/anurag-kochar-527696242/`
  },
];
