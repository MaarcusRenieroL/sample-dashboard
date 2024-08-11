import { FC } from "react";
import { ProjectCard } from "./project-card";

export const Projects: FC = () => {
  return (
    <div className="space-y-10">
      <h1 className="text-2xl font-bold uppercase">Latest Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};
