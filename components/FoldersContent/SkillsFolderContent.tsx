import { SkillsData } from "@/constants/data/SkillsData/SkillsData";
import React from "react";
import FolderIcon from "../FolderIcon/FolderIcon";

const SkillsFolderContent = () => {
  return (
    <div className="w-full flex justify-center md:justify-start items-center flex-wrap py-10">
      {SkillsData?.map((skill) => {
        return (
          <FolderIcon
            key={skill.skillName}
            folderName={skill.skillName}
            folderIcon={`/images/skillIcons/${skill.skillIcon}`}
            folderLinkHref={`/?folder=Skills`}
            bgColor={`${skill?.skillBgColor}`}
          />
        );
      })}
    </div>
  );
};

export default React.memo(SkillsFolderContent);
