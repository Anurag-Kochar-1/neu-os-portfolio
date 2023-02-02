import { IFolderData } from '@/constants/FoldersData/FoldersData'
import React from 'react'

interface IProps {
  folder: IFolderData
}

const FolderCard = ( {folder}:IProps ) => {
  return (
    <div>
      <span> {folder.folderName} </span>
    </div>
  )
}

export default FolderCard