import { FC } from "react";
import { Card, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";

type Props = {
  totalTasks: number;
  completedTasks: number;
  starredTasks: number;
  stuckTasks: number;
};

export const StatsCard: FC<Props> = ({
  totalTasks,
  completedTasks,
  starredTasks,
  stuckTasks,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      <Card className="h-32 relative text-white w-full">
        <img
          src="/assets/total-tasks.png"
          className="w-full h-32 object-cover rounded-lg"
          alt="total-task"
        />
        <div className="absolute top-0 left-0 w-full">
          <CardHeader className="w-full">
            <CardTitle>Total Tasks</CardTitle>
          </CardHeader>
          <CardFooter className="w-full">{totalTasks}</CardFooter>
        </div>
      </Card>

      <Card className="h-32 relative text-white w-full">
        <img
          src="/assets/completed-tasks.png"
          className="w-full h-32 object-cover rounded-lg"
          alt="total-task"
        />
        <div className="absolute top-0 left-0 w-full">
          <CardHeader className="w-full">
            <CardTitle>Completed Tasks</CardTitle>
          </CardHeader>
          <CardFooter className="w-full">{completedTasks}</CardFooter>
        </div>
      </Card>

      <Card className="h-32 relative text-white w-full">
        <img
          src="/assets/starred-tasks.png"
          className="w-full h-32 object-cover rounded-lg"
          alt="total-task"
        />
        <div className="absolute top-0 left-0 w-full">
          <CardHeader className="w-full">
            <CardTitle>Starred Tasks</CardTitle>
          </CardHeader>
          <CardFooter className="w-full">{starredTasks}</CardFooter>
        </div>
      </Card>

      <Card className="h-32 relative text-white w-full">
        <img
          src="/assets/stuck-tasks.png"
          className="w-full h-32 object-cover rounded-lg"
          alt="total-task"
        />
        <div className="absolute top-0 left-0 w-full">
          <CardHeader className="w-full">
            <CardTitle>Stuck Tasks</CardTitle>
          </CardHeader>
          <CardFooter className="w-full">{stuckTasks}</CardFooter>
        </div>
      </Card>
    </div>
  );
};
