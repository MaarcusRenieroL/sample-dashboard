import { FC } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  CardContent,
} from "~/components/ui/card";
import { Progress } from "~/components/ui/progress";
import { Button } from "~/components/ui/button";

export const ProjectCard: FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Creating Awesome Mobile Apps</CardTitle>
        <CardDescription>UI/UX Designer</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-2">
          <span>Progress</span>
          <span>90%</span>
        </div>
        <Progress value={90} className="w-full" indicatorColor="bg-blue-500" />
        <p className="mt-2">1 Hour</p>
        <div className="mt-4 space-y-2">
          <p>Detail Task</p>
          <ul className="list-disc pl-5">
            <li>Understanding the tools in Figma</li>
            <li>Understand the basics of making designs</li>
            <li>Design a mobile application with Figma</li>
          </ul>
        </div>
      </CardContent>
      <CardFooter className="w-full">
        <Button className="w-full bg-blue-500">Go To Detail</Button>
      </CardFooter>
    </Card>
  );
};
