import React, { useEffect, useState } from "react";
import { ProjectsData } from "@/constants/data/ProjectsData/ProjectsData";
import { useSearchParams } from "next/navigation";
import { IProject } from "@/types/ProjectData";

const ProjectContent = () => {
  const [projectData, setProjectData] = useState <IProject | null> (null);
  const searchParams = useSearchParams();
  const subFolderName = searchParams.get("subFolder");

  function getProjectData() {
    const project = ProjectsData?.find(
      (x) => x.projectName === subFolderName
    );
    if(project) setProjectData(project)
  }

  useEffect(() => {
    getProjectData();
  }, [subFolderName]);

  if (!subFolderName) return null;
  return (
    <h1
      className="text-5xl font-bold"
      onClick={() => {
        null;
      }}
    >
      {JSON.stringify(projectData?.liveLink)}
    </h1>
  );
};

export default ProjectContent;
