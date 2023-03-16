"use client"

import React, { useContext } from 'react'
import { AppContext, IAppContextType } from '@/context/AppContext'
import Draggable from 'react-draggable';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { projectsData } from '@/data/projects';
import { skillsData } from '@/data/skiils';


const Folder = () => {
    const { isFolderOpen, setIsFolderOpen } = useContext<IAppContextType>(AppContext)

    const searchParams = useSearchParams();
    const folderName = searchParams.get('folder');



    // if (!isFolderOpen) return null

    if (!folderName) return null

    return (
        <div
            className='z-30 fixed inset-0 w-full h-screen bg-black/[.70] flex justify-center items-center'>
            <Draggable
                handle='.headerHandle'
                bounds="parent"
            >
                <div className='w-[70%] h-[70vh] bg-white'>
                    <div className='headerHandle w-full h-12 bg-black flex justify-between items-center'>
                        <Link
                            href={'/'}
                            className='w-20 h-full bg-blue-400 text-3xl text-red-600'
                        // onClick={() => {
                        //     setIsFolderOpen(!isFolderOpen)
                        // }}
                        > X
                        </Link>
                    </div>

                    <h1 className='text-8xl text-black'> {folderName} </h1>

                    {folderName === 'Projects' && projectsData?.map((project) => {
                        return <h1 key={project.projectName}> {project.projectName} </h1>
                    })}


                    {folderName === 'Skills' && skillsData?.map((skill: any) => {
                        return <h1 key={skill.skillName}> {skill.skillName} </h1>
                    })}


                </div>

            </Draggable>
        </div>
    )
}

export default Folder