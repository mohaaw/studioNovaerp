"use client";

import { Progress } from "@/components/ui/progress";
import { projectStatuses } from "@/lib/data";
import { cn } from "@/lib/utils";

const statusColors = {
  "On Track": "bg-green-500",
  "At Risk": "bg-yellow-500",
  "Needs Review": "bg-blue-500",
};

export function ProjectStatusChart() {
  return (
    <div className="space-y-4">
      {projectStatuses.map((project) => (
        <div key={project.name} className="space-y-2">
          <div className="flex justify-between items-center">
            <p className="text-sm font-medium">{project.name}</p>
            <p className="text-sm text-muted-foreground">{project.status}</p>
          </div>
          <Progress value={project.progress} className="h-2" indicatorClassName={cn(statusColors[project.status as keyof typeof statusColors])} />
        </div>
      ))}
    </div>
  );
}
