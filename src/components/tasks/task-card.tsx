import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Task } from "@/lib/data"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface TaskCardProps {
  task: Task
}

const priorityClasses = {
  High: "bg-destructive/20 text-destructive border-destructive/20",
  Medium: "bg-primary/20 text-primary-foreground border-primary/20",
  Low: "bg-secondary text-secondary-foreground border-secondary",
}

export function TaskCard({ task }: TaskCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow duration-200 cursor-grab active:cursor-grabbing">
      <CardContent className="p-3">
        <div className="flex justify-between items-start mb-2">
            <span className="text-xs text-muted-foreground">{task.id}</span>
            <Badge variant="outline" className={priorityClasses[task.priority]}>
                {task.priority}
            </Badge>
        </div>
        <p className="text-sm font-medium mb-2">{task.title}</p>
        <div className="flex items-center justify-end">
          <Avatar className="h-6 w-6">
            <AvatarImage src={task.assignee.avatarUrl} alt={task.assignee.name} />
            <AvatarFallback>{task.assignee.name.charAt(0)}</AvatarFallback>
          </Avatar>
        </div>
      </CardContent>
    </Card>
  )
}
