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
      <p className="text-4xl text-white font-black my-10"> Case Study of this Project is still under development : {")"} </p>

      <a className="text-2xl md:text-3xl font-semibold hover:cursor-pointer" href={projectData?.liveLink} target="_blank" rel="noreferrer">
        Live Site
      </a>
      <a className="text-2xl md:text-3xl font-semibold hover:cursor-pointer" href={projectData?.sourceCodeLink} target="_blank" rel="noreferrer">
        Source Code
      </a>
    </div>
  );
};

export default ProjectContent;
