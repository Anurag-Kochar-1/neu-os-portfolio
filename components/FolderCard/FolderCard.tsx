"use client"

import React, { useContext } from 'react'
import { IFolderData } from '@/constants/FoldersData/FoldersData'
import folderIcon from "../../public/images/folderIcon.png"
import Image from 'next/image'
import { AppContext, IAppContextType } from '@/context/AppContext'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'


interface IProps {
  folder: IFolderData
}


const FolderCard = ({ folder }: IProps) => {
  const { isFolderOpen, setIsFolderOpen } = useContext<IAppContextType>(AppContext)

  const searchParams = useSearchParams();

  const folderName = searchParams.get('folder');

  return (
    <Link
      href={`?folder=${folder.folderName}`}
      onClick={() => {
        setIsFolderOpen(!isFolderOpen)
      }}
      className='flex flex-col justify-start items-center space-y-2 m-1 hover:scale-105'>
      <Image src={folderIcon} alt={folder.folderName} width={400} height={400} className="w-20 xl:w-32" draggable="false" />
      <h3 className='text-black text-xl font-bold'> {folder.folderName} </h3>
    </Link>
  )
}

export default FolderCard