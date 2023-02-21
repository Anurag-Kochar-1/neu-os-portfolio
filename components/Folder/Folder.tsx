import React, { useContext } from 'react'
import { FolderContext } from '@/context/FolderContext/FolderContext'
import Draggable from 'react-draggable';


const Folder = () => {
    const { isFolderOpen, setIsFolderOpen }: any = useContext(FolderContext)


    if (!isFolderOpen) return null
    return (

        <div className='z-30 fixed inset-0 w-full h-screen bg-black/[.40] flex justify-center items-center'>
            <Draggable
                handle='.headerHandle'
            >
                <div className='w-[80%] h-[80vh] bg-white'>
                    <div className='headerHandle w-full h-12 bg-black flex justify-between items-center'>
                        <strong
                            className='text-3xl text-red-600'
                            onClick={() => setIsFolderOpen(!isFolderOpen)}> X
                        </strong>
                    </div>
                </div>

            </Draggable>
        </div>
    )
}

export default Folder