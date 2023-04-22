import React from 'react'
import { IProject } from '@/types/ProjectData'
import Link from 'next/link'
import Image from 'next/image'
import Tag from './Tag'
import blackImageSmall from "../../public/images/blackImageSmall.png"


const ProjectCard = ( {project}: {project: IProject} ) => {

  return (
    <Link href={`/?folder=Projects&subFolder=${project.projectName}`} className='w-60 md:w-72 lg:w-80 aspect-video flex flex-col justify-center items-center bg-black border-2 border-black rounded-lg m-5 hover:cursor-pointer '>
        <div className='w-60 md:w-72 lg:w-80 aspect-video -mt-4 -ml-4 bg-white border-4 border-black rounded-lg pointer-events-none'>
            <Image 
                src={project?.thumbnail}
                width={400}
                height={400}
                alt={`${project.projectName}'s thumbnail`}
                className='border-b-4 border-b-black rounded-tr-sm rounded-tl-sm object-contain'
                draggable="false"
                placeholder='blur'
                blurDataURL={`/images/blackImageSmall`}
            />
            <div className='w-full flex flex-col justify-center items-start px-2 py-2 space-y-1'>
              <h4 className='text-base font-semibold text-black'> {project?.projectName} || {project?.tagline} </h4>
              <div className='w-full flex flex-wrap justify-start items-center py-1'>
                {project?.techStack?.map((tech) => {
                  return <Tag key={tech} text={tech} />
                })}
              </div>
              
            </div>

        </div>
    </Link>
  )
}

export default React.memo(ProjectCard)