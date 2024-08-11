import { FC } from "react";
import { ProjectCard } from "./project-card";

export const Projects: FC = () => {
  return (
    <div className="space-y-10 w-full">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-2xl font-bold uppercase">Latest Projects</h1>
        <p className="hover:text-blue-500 duration-300 cursor-pointer">
          View More
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};
