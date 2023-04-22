import React, { useEffect, useState } from "react";
import { ProjectsData } from "@/constants/data/ProjectsData/ProjectsData";
import { useSearchParams } from "next/navigation";
import { IProject } from "@/types/ProjectData";

const ProjectContent = () => {
  const [projectData, setProjectData] = useState<IProject | null>(null);
  const searchParams = useSearchParams();
  const subFolderName = searchParams.get("subFolder");

  function getProjectData() {
    const project = ProjectsData?.find((x) => x.projectName === subFolderName);
    if (project) setProjectData(project);
  }

  useEffect(() => {
    getProjectData();
  }, [subFolderName]);

  if (!subFolderName) return null;
  return (
    <div className="w-full flex flex-col justify-center items-center space-y-6">
      <p className="text-4xl text-white font-bold my-10 px-10 text-center"> The case study for All Projects is still being written. Until then, Check out the live site or source code : {")"} </p>

      <div className="flex justify-center items-center space-x-3">
        <a className="text-2xl md:text-3xl font-semibold hover:cursor-pointer p-3 border-2 border-black" href={projectData?.liveLink} target="_blank" rel="noreferrer">
          Live Site
        </a>
        <a className="text-2xl md:text-3xl font-semibold hover:cursor-pointer p-3 border-2 border-black" href={projectData?.sourceCodeLink} target="_blank" rel="noreferrer">
          Source Code
        </a>
      </div>
    </div>
  );
};

export default ProjectContent;
