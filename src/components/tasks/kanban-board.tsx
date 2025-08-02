import { mockTasks, columns } from "@/lib/data"
import { TaskCard } from "./task-card"
import { Badge } from "@/components/ui/badge"

export function KanbanBoard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-start">
      {columns.map(column => {
        const tasksInColumn = mockTasks.filter(task => task.status === column.id)
        return (
          <div key={column.id} className="bg-muted/50 rounded-lg p-3">
            <h3 className="font-semibold font-headline mb-4 flex items-center justify-between text-sm">
                {column.title}
                <Badge variant="secondary" className="text-muted-foreground">{tasksInColumn.length}</Badge>
            </h3>
            <div className="flex flex-col gap-3">
              {tasksInColumn.map(task => (
                <TaskCard key={task.id} task={task} />
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
