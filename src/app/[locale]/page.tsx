import { Graph } from "~/components/pages/home/graph";
import { Projects } from "~/components/pages/home/projects";
import { StatsCard } from "~/components/pages/home/stats-card";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "~/components/ui/card";
import { CircleProgress } from "~/components/ui/progress";

export default function Home() {
  return (
    <div className="space-y-10">
      <StatsCard
        totalTasks={10}
        starredTasks={10}
        stuckTasks={10}
        completedTasks={10}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
        <Card className="bg-[#151521] h-full text-white">
          <CardHeader>
            <CardTitle>Running Tasks</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            <p className="text-4xl">65</p>
            <div className="flex items-center space-x-3">
              <CircleProgress value={45} />
              <p className="text-lg">
                100 <br />
                Tasks
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="secondary">View Tasks</Button>
          </CardFooter>
        </Card>
        <Graph />
      </div>
      <Projects />
    </div>
  );
}
