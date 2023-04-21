import { useSearchParams } from "next/navigation";
import React from "react";

const ProjectContent = () => {
  const searchParams = useSearchParams();
  const subFolderName = searchParams.get("subFolder");

  if(!subFolderName) return null;
  return (
    <h1 className="text-5xl font-bold" onClick={() => {
        null
    }}>
        {subFolderName}
    </h1>
  )
};

export default ProjectContent;
