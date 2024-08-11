import { Graph } from "~/components/pages/home/graph";
import { Projects } from "~/components/pages/home/projects";
import { StatsCard } from "~/components/pages/home/stats-card";

export default function Home() {
  return (
    <div className="space-y-10">
      <StatsCard
        totalTasks={10}
        starredTasks={10}
        stuckTasks={10}
        completedTasks={10}
        runningTasks={10}
      />
      <Projects />
      <Graph />
    </div>
  );
}
