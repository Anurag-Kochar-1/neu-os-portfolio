import { FolderContext } from '@/context/FolderContext/FolderContext'
import React, { useContext } from 'react'

const Folder = () => {
    const { isFolderOpen, setIsFolderOpen }: any = useContext(FolderContext)


    if (!isFolderOpen) return null
    return (
        <div className='z-30 fixed inset-0 w-full h-screen bg-black/[.40] flex justify-center items-center'>
            <div className='w-[80%] h-[80vh] bg-white'>
                <strong
                    className='text-3xl text-red-600'
                    onClick={() => setIsFolderOpen(!isFolderOpen)}> X
                </strong>
            </div>

        </div>
    )
}

export default Folder