export interface IProject {
  id: number;
  projectName: string;
  tagline: string;
  thumbnail: string;
  techStack: string[];
  liveLink: string;
  sourceCodeLink: string;
  images?: string[]
  caseStudy?: {
    overview?: string;
    goals?: string[];
    design?: string;
    development?: string;
    process?: string;
    challenges?: {
        id: number
        heading?:string;
        content?: string
    }[];
    conclusion?: string;
  };
}
