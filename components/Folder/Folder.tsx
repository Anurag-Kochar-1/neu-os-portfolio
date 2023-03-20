"use client"

import React, { useContext, useRef, MouseEvent } from 'react'
import { AppContext, IAppContextType } from '@/context/AppContext'
import Draggable from 'react-draggable';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { projectsData } from '@/data/projects';
import { skillsData } from '@/data/skiils';


const Folder = () => {
    // const { isFolderOpen, setIsFolderOpen } = useContext<IAppContextType>(AppContext)
    const router = useRouter()
    const searchParams = useSearchParams();
    const folderName = searchParams.get('folder');
    const subFolderName = searchParams.get('subFolder');
    const containerRef = useRef<HTMLDivElement | null>(null)
    const folderRef = useRef<HTMLDivElement | null>(null)

    const handleOverlayClick = (e: MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
        console.log(e.target)
        if (e.target === containerRef.current && e.target !== folderRef.current) {
            router.push('/')
        }
    }


    if (!folderName) return null

    return (
        <div
            className='z-30 fixed inset-0 w-full h-screen bg-black/[.90] flex justify-center items-center'
            ref={containerRef}
            onClick={(e) => handleOverlayClick(e)}
        >
            <Draggable
                handle='.headerHandle'
                bounds="parent"
            >
                <div className='w-[70%] h-[70vh] bg-white' ref={folderRef}>
                    <div className='headerHandle w-full h-12 bg-black flex justify-between items-center'>
                        <Link
                            href={'/'}
                            className='text-4xl text-red-600'
                        > X
                        </Link>
                    </div>

                    {/* <h1 className='text-8xl text-black'> {folderName} </h1>

                    {folderName === 'Projects' && projectsData?.map((project) => {
                        return (
                            <Link
                                href={`/?folder=${folderName}&subFolder=${project.projectName}`}
                                key={project.projectName}
                                className="p-2 text-sky-400 m-2 text-4xl"
                            >
                                {project.projectName}
                            </Link>
                        )
                    })}


                    {folderName === 'Skills' && skillsData?.map((skill: any) => {
                        return <h1 key={skill.skillName}> {skill.skillName} </h1>
                    })}



                    {subFolderName && (
                        <div>
                            <h1 className='text-8xl'> subFolderName :  {subFolderName}</h1>
                        </div>
                    )} */}



                </div>

            </Draggable>
        </div>
    )
}

export default Folder