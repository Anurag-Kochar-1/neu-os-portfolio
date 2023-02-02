import { FoldersDataArray } from '@/constants/FoldersData/FoldersData'
import React from 'react'
import FolderCard from '../FolderCard/FolderCard'

const FoldersContainer = () => {
  return (
    <div className='w-full col-span-full flex flex-wrap justify-between items-center '>
      {FoldersDataArray && FoldersDataArray?.map((folder) => {
        return <FolderCard folder={folder} />
      })}
    </div>
  )
}

export default FoldersContainer