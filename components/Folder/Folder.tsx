import React, { useContext } from 'react'
import { AppContext, IAppContextType } from '@/context/AppContext'
import Draggable from 'react-draggable';


const Folder = () => {
    const { isFolderOpen, setIsFolderOpen } = useContext<IAppContextType>(AppContext)


    if (!isFolderOpen) return null
    return (
        <div
            className='z-30 fixed inset-0 w-full h-screen bg-black/[.70] flex justify-center items-center'>
            <Draggable
                handle='.headerHandle'
                bounds="parent"
            >
                <div className='w-[70%] h-[70vh] bg-white'>
                    <div className='headerHandle w-full h-12 bg-black flex justify-between items-center'>
                        <strong
                            className='text-3xl text-red-600'
                            onClick={() => setIsFolderOpen(!isFolderOpen)}
                        > X
                        </strong>
                    </div>
                </div>

            </Draggable>
        </div>
    )
}

export default Folder