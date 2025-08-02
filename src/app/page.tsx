import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { KpiCard } from "@/components/dashboard/kpi-card"
import { OverviewChart } from "@/components/dashboard/overview-chart"
import { TasksByStatusChart } from "@/components/dashboard/tasks-by-status-chart"
import { Activity, ArrowDown, ArrowUp, DollarSign, ListChecks, Users, FileClock } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const recentActivities = [
  { user: { name: 'Alice Johnson', avatar: 'https://placehold.co/32x32/D0BFFF/47386B.png' }, action: 'closed deal "Project Titan"', timestamp: '5m ago' },
  { user: { name: 'System', avatar: '' }, action: 'generated "Q4 Sales Report"', timestamp: '1h ago' },
  { user: { name: 'Bob Williams', avatar: 'https://placehold.co/32x32/ADD8E6/2E4D56.png' }, action: 'updated task "Fix login bug"', timestamp: '2h ago' },
  { user: { name: 'AI Assistant', avatar: '' }, action: 'flagged inventory "SKU-123" for reorder', timestamp: '3h ago' },
]


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
