import { FC } from "react";
import { Card, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";

type Props = {
  totalTasks: number;
  completedTasks: number;
  starredTasks: number;
  stuckTasks: number;
  runningTasks: number;
};

export const StatsCard: FC<Props> = ({
  totalTasks,
  completedTasks,
  starredTasks,
  stuckTasks,
  runningTasks,
}) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-10">
      <Card>
        <CardHeader>
          <CardTitle>Total Tasks</CardTitle>
        </CardHeader>
        <CardFooter>{totalTasks}</CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Completed Tasks</CardTitle>
        </CardHeader>
        <CardFooter>{completedTasks}</CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Starred Tasks</CardTitle>
        </CardHeader>
        <CardFooter>{starredTasks}</CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Stuck Tasks</CardTitle>
        </CardHeader>
        <CardFooter>{stuckTasks}</CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Running Tasks</CardTitle>
        </CardHeader>
        <CardFooter>{runningTasks}</CardFooter>
      </Card>
    </div>
  );
};
