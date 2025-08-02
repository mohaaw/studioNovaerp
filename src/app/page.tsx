import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { KpiCard } from "@/components/dashboard/kpi-card"
import { OverviewChart } from "@/components/dashboard/overview-chart"
import { TasksByStatusChart } from "@/components/dashboard/tasks-by-status-chart"
import { Activity, DollarSign, ListChecks, Users } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { mockTasks } from "@/lib/data"

const recentActivities = [
  { user: { name: 'Alice Johnson', avatar: 'https://placehold.co/32x32/D0BFFF/47386B.png' }, action: 'closed deal "Project Titan"', timestamp: '5m ago' },
  { user: { name: 'System', avatar: '' }, action: 'generated "Q4 Sales Report"', timestamp: '1h ago' },
  { user: { name: 'Bob Williams', avatar: 'https://placehold.co/32x32/ADD8E6/2E4D56.png' }, action: 'updated task "Fix login bug"', timestamp: '2h ago' },
  { user: { name: 'AI Assistant', avatar: '' }, action: 'flagged inventory "SKU-123" for reorder', timestamp: '3h ago' },
]

const highPriorityTasks = mockTasks.filter(task => task.priority === 'High').slice(0, 5);


export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold font-headline">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's a snapshot of your operations.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <KpiCard title="Total Revenue" value="$45,231.89" icon={<DollarSign className="h-4 w-4 text-muted-foreground" />} description="+20.1% from last month" />
        <KpiCard title="New Leads" value="+120" icon={<Users className="h-4 w-4 text-muted-foreground" />} description="+15% from last month" />
        <KpiCard title="Open Projects" value="12" icon={<Activity className="h-4 w-4 text-muted-foreground" />} description="2 urgent" />
        <KpiCard title="Pending Tasks" value="52" icon={<ListChecks className="h-4 w-4 text-muted-foreground" />} description="5 overdue" />
      </div>

      <div className="grid gap-4 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle className="font-headline">Quarterly Performance</CardTitle>
            <CardDescription>A summary of your key metrics over the last quarter.</CardDescription>
          </CardHeader>
          <CardContent>
            <OverviewChart />
          </CardContent>
        </Card>
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle className="font-headline">Recent Activity</CardTitle>
            <CardDescription>What's been happening across the system.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center gap-4">
                  <Avatar className="h-9 w-9">
                    {activity.user.avatar ? <AvatarImage src={activity.user.avatar} alt={activity.user.name} /> : null}
                    <AvatarFallback>
                      {activity.user.name === 'System' ? 'SYS' : activity.user.name === 'AI Assistant' ? 'AI' : activity.user.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="text-sm"><span className="font-medium">{activity.user.name}</span> {activity.action}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{activity.timestamp}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Tasks by Status</CardTitle>
            <CardDescription>A breakdown of all tasks in the system.</CardDescription>
          </CardHeader>
          <CardContent>
            <TasksByStatusChart />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">High Priority Tasks</CardTitle>
            <CardDescription>Top priority tasks that require attention.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Task</TableHead>
                  <TableHead>Assignee</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {highPriorityTasks.map((task) => (
                    <TableRow key={task.id}>
                        <TableCell className="font-medium">{task.title}</TableCell>
                        <TableCell>
                            <div className="flex items-center gap-2">
                                <Avatar className="h-6 w-6">
                                    <AvatarImage src={task.assignee.avatarUrl} alt={task.assignee.name} />
                                    <AvatarFallback>{task.assignee.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <span className="text-sm text-muted-foreground">{task.assignee.name}</span>
                            </div>
                        </TableCell>
                        <TableCell>
                            <Badge variant="outline">{task.status}</Badge>
                        </TableCell>
                    </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
