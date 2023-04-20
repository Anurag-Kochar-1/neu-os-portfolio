import { ProjectsData } from '@/constants/data/ProjectsData/ProjectsData'
import { IProject } from '@/types/ProjectData'
import React from 'react'
import ProjectCard from '../ProjectCard/ProjectCard'

const ProjectsFolderContent = () => {
  return (
    <div className="w-full flex justify-center md:justify-start items-center flex-wrap px-5 py-10 scrollbar-hide">
        {ProjectsData?.map((project: IProject) => {
            return <ProjectCard key={project.id} project={project} />
        })}
    </div>
  )
}

export default React.memo(ProjectsFolderContent)