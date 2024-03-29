import React, { useEffect, useState, useContext } from "react";
import { ProjectsData } from "@/constants/data/ProjectsData/ProjectsData";
import { IProject } from "@/types/ProjectData";
import { AppContext } from "@/context/AppContext";
import Carousel from "../Carousel/Carousel";
import Tag from "../ProjectCard/Tag";

const ParagraphContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-start justify-start mt-4 space-y-2">
      {children}
    </div>
  );
};

const ParagraphHeading = ({ heading }: { heading: string }) => {
  return <h4 className="text-2xl md:text-3xl font-bold">{heading}</h4>;
};

const ParagraphContent = ({ content }: { content: string }) => {
  return <p className="text-base font-normal">{content}</p>;
};

const ProjectContent = () => {
  const [projectData, setProjectData] = useState<IProject | null>(null);
  const { folderState, setFolderState } = useContext(AppContext);

  function getProjectData() {
    const project = ProjectsData?.find(
      (x) => x.projectName === folderState?.subFolderName
    );
    if (project) setProjectData(project);
  }

  useEffect(() => {
    getProjectData();
  }, [folderState]);

  if (!folderState?.subFolderName) return null;
  return (
    <div className="w-full flex flex-col justify-center items-center space-y-6">

      <div className="w-full flex flex-col justify-start items-center p-3 space-y-2">
        <Carousel images={projectData?.images as string[]} width={"max-w-md"} />

        {/* TECH STACK */}
        <div className="flex gap-3">
          {projectData?.techStack?.map((skill) => (
            <Tag text={skill} key={skill} />
          ))}
        </div>

        {/* BUTTONS */}
        <div className="flex gap-3 py-10">
          <a
            className="text-lg uppercase font-semibold hover:cursor-pointer px-4 py-2 border-2 border-black"
            href={projectData?.liveLink}
            target="_blank"
            rel="noreferrer"
          >
            Live Site
          </a>
          <a
            className="text-lg uppercase font-semibold hover:cursor-pointer px-4 py-2 border-2 border-black"
            href={projectData?.sourceCodeLink}
            target="_blank"
            rel="noreferrer"
          >
            Source Code
          </a>
        </div>

        {/* PARAGRAPHS */}
        <div className="w-full flex flex-col justify-start items-start space-y-7">
          <ParagraphContainer>
            <ParagraphHeading heading={"Overview"} />
            <ParagraphContent
              content={projectData?.caseStudy?.overview as string}
            />
          </ParagraphContainer>

          <ParagraphContainer>
            <ParagraphHeading heading={"Goals"} />
            {projectData?.caseStudy?.goals?.map((goal) => (
              <ParagraphContent content={goal} key={goal} />
            ))}
          </ParagraphContainer>

          <ParagraphContainer>
            <ParagraphHeading heading={"Design"} />
            <ParagraphContent
              content={projectData?.caseStudy?.design as string}
            />
          </ParagraphContainer>

          <ParagraphContainer>
            <ParagraphHeading heading={"Development"} />
            <ParagraphContent
              content={projectData?.caseStudy?.development as string}
            />
          </ParagraphContainer>
          <ParagraphContainer>
            <ParagraphHeading heading={"Process"} />
            <ParagraphContent
              content={projectData?.caseStudy?.process as string}
            />
          </ParagraphContainer>

          <ParagraphContainer>
            <ParagraphHeading heading={"Challenges"} />
            {projectData?.caseStudy?.challenges?.map((challenge) => (
              <div key={challenge.id} className="w-full flex flex-col justify-start items-start space-y-2">
                <span className="text-xl font-semibold"> {challenge?.heading} </span>
                <ParagraphContent content={challenge?.content as string} />
              </div>
            ))}
          </ParagraphContainer>
          
          <ParagraphContainer>
            <ParagraphHeading heading={"Conclusion"} />
            <ParagraphContent
              content={projectData?.caseStudy?.conclusion as string}
            />
          </ParagraphContainer>

        </div>
      </div>
    </div>
  );
};

export default React.memo(ProjectContent);
