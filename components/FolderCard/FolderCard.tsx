"use client"

import React, { useContext } from 'react'
import { IFolderData } from '@/constants/FoldersData/FoldersData'
import folderIcon from "../../public/images/folderIcon.png"
import Image from 'next/image'
import { FolderContext } from '@/context/FolderContext/FolderContext'

interface IProps {
  folder: IFolderData
}

interface ABC {
  isFolderOpen: boolean
  setIsFolderOpen: any

}

const FolderCard = ({ folder }: IProps) => {
  const { isFolderOpen, setIsFolderOpen }: any = useContext(FolderContext)

  return (
    <div
      onClick={() => setIsFolderOpen(!isFolderOpen)}
      className='flex flex-col justify-start items-center space-y-2 m-1 hover:scale-105'>
      <Image src={folderIcon} alt={folder.folderName} width={400} height={400} className="w-20 xl:w-32" draggable="false" />
      <h3 className='text-black text-xl font-bold'> {folder.folderName} </h3>
    </div>
  )
}

export default FolderCard