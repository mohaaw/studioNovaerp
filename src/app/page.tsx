import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { KpiCard } from "@/components/dashboard/kpi-card"
import { OverviewChart } from "@/components/dashboard/overview-chart"
import { TasksByStatusChart } from "@/components/dashboard/tasks-by-status-chart"
import { Rocket, Orbit, ListChecks, Users } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold font-headline">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's a snapshot of your operations.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <KpiCard title="Total Revenue" value="$45,231.89" icon={<Rocket className="h-4 w-4 text-muted-foreground" />} description="+20.1% from last month" />
        <KpiCard title="Subscriptions" value="+2350" icon={<Users className="h-4 w-4 text-muted-foreground" />} description="+180.1% from last month" />
        <KpiCard title="Active Projects" value="12" icon={<Orbit className="h-4 w-4 text-muted-foreground" />} description="+2 since last week" />
        <KpiCard title="Tasks Completed" value="234" icon={<ListChecks className="h-4 w-4 text-muted-foreground" />} description="+19% from last month" />
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Quarterly Performance</CardTitle>
            <CardDescription>A summary of your key metrics over the last quarter.</CardDescription>
          </CardHeader>
          <CardContent>
            <OverviewChart />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Task Status Distribution</CardTitle>
            <CardDescription>Current distribution of tasks in your projects.</CardDescription>
          </CardHeader>
          <CardContent>
            <TasksByStatusChart />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="font-headline">System Log</CardTitle>
          <CardDescription>A log of recent significant events in the system.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Event</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">AI insight generated for 'Project Andromeda'</TableCell>
                <TableCell>AI Assistant</TableCell>
                <TableCell><Badge variant="outline">Completed</Badge></TableCell>
                <TableCell>2023-10-26</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Project 'Phoenix' moved to 'Done'</TableCell>
                <TableCell>Bob Williams</TableCell>
                <TableCell><Badge>Success</Badge></TableCell>
                <TableCell>2023-10-25</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">New user 'Charlie Brown' invited</TableCell>
                <TableCell>Admin</TableCell>
                <TableCell><Badge variant="outline">Completed</Badge></TableCell>
                <TableCell>2023-10-24</TableCell>
              </TableRow>
               <TableRow>
                <TableCell className="font-medium">Workflow 'Invoice Approval' triggered</TableCell>
                <TableCell>System</TableCell>
                <TableCell><Badge variant="secondary">In Progress</Badge></TableCell>
                <TableCell>2023-10-23</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
