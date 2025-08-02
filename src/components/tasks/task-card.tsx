import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Task } from "@/lib/data"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface TaskCardProps {
  task: Task
}

const priorityClasses = {
  High: "bg-red-500/20 text-red-700 border-red-500/30",
  Medium: "bg-yellow-500/20 text-yellow-700 border-yellow-500/30",
  Low: "bg-green-500/20 text-green-700 border-green-500/30",
}

export function TaskCard({ task }: TaskCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow duration-200 cursor-grab active:cursor-grabbing">
      <CardContent className="p-3">
        <p className="text-sm font-medium mb-2">{task.title}</p>
        <div className="flex items-center justify-between">
          <Badge variant="outline" className={priorityClasses[task.priority]}>
            {task.priority}
          </Badge>
          <Avatar className="h-6 w-6">
            <AvatarImage src={task.assignee.avatarUrl} alt={task.assignee.name} />
            <AvatarFallback>{task.assignee.name.charAt(0)}</AvatarFallback>
          </Avatar>
        </div>
      </CardContent>
    </Card>
  )
}
