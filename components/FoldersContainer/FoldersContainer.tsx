import { FoldersDataArray } from '@/constants/FoldersData/FoldersData'
import React from 'react'
import FolderCard from '../FolderCard/FolderCard'

// lg:col-start-3 lg:col-end-11 xl:col-start-1 xl:col-end-7 xl:mx-5 2xl:col-start-1 2xl:col-end-6 2xl:mx-6 

const FoldersContainer = () => {
  return (
    <div className='col-start-2 col-end-12 xl:col-start-7 xl:col-end-11 2xl:col-start-7 2xl:col-end-10 flex flex-wrap justify-between items-center xl:space-x-5 pb-72 lg:pb-0'>
      {FoldersDataArray && FoldersDataArray?.map((folder) => {
        return <FolderCard key={folder.id} folder={folder} />
      })}
    </div>
  )
}

export default FoldersContainer