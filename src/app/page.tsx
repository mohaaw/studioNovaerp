import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { KpiCard } from "@/components/dashboard/kpi-card"
import { OverviewChart } from "@/components/dashboard/overview-chart"
import { SalesPipelineChart } from "@/components/dashboard/sales-pipeline-chart"
import { ProjectStatusChart } from "@/components/dashboard/project-status-chart"
import { Activity, ArrowDownRight, ArrowUpRight, BarChart, Bell, Calendar, DollarSign, ListChecks, Star, Trophy, Users, TrendingUp } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { mockTasks, recentActivities, salesLeaderboard, upcomingDeadlines } from "@/lib/data"
import { Button } from "@/components/ui/button"

const highPriorityTasks = mockTasks.filter(task => task.priority === 'High').slice(0, 5);

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-headline">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's a snapshot of your operations.</p>
        </div>
        <div className="flex items-center gap-2">
            <Button variant="outline"><Calendar className="mr-2"/> <span>This Month</span></Button>
            <Button><Bell/></Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <KpiCard title="Total Revenue" value="$45,231.89" icon={<DollarSign />} description="+20.1% from last month" trend={<TrendingUp className="text-green-500"/>} />
        <KpiCard title="New Leads" value="+120" icon={<Users />} description="+15% from last month" trend={<TrendingUp className="text-green-500"/>} />
        <KpiCard title="MRR" value="$12,870" icon={<BarChart />} description="+5% from last month" trend={<TrendingUp className="text-green-500"/>} />
        <KpiCard title="Churn Rate" value="1.2%" icon={<ArrowDownRight />} description="-0.5% from last month" trend={<ArrowDownRight className="text-green-500"/>} />
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
                <CardTitle className="font-headline">Sales Pipeline</CardTitle>
                <CardDescription>Current state of your sales funnel.</CardDescription>
            </CardHeader>
            <CardContent>
                <SalesPipelineChart />
            </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="font-headline">Project Status</CardTitle>
            <CardDescription>Progress of key ongoing projects.</CardDescription>
          </CardHeader>
          <CardContent>
            <ProjectStatusChart />
          </CardContent>
        </Card>
         <Card>
            <CardHeader>
                <CardTitle className="font-headline flex items-center gap-2"><Trophy className="text-yellow-500"/>Sales Leaderboard</CardTitle>
                <CardDescription>Top performers this month.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableBody>
                        {salesLeaderboard.map((user, index) => (
                            <TableRow key={user.id}>
                                <TableCell>
                                    <div className="flex items-center gap-3">
                                        <Avatar className="h-9 w-9">
                                            <AvatarImage src={user.avatarUrl} alt={user.name} />
                                            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className="font-medium">{user.name}</p>
                                            <p className="text-sm text-muted-foreground">{user.role}</p>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell className="text-right font-medium">${user.sales.toLocaleString()}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
      </div>

       <div className="grid gap-4 lg:grid-cols-2">
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
                            <Badge variant={task.status === 'in-progress' ? 'default' : 'outline'}>{task.status}</Badge>
                        </TableCell>
                    </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card>
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
            <CardTitle className="font-headline">Upcoming Deadlines</CardTitle>
            <CardDescription>Keep track of important upcoming dates.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Item</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead>Assigned To</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {upcomingDeadlines.map((item) => (
                    <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.title}</TableCell>
                        <TableCell>
                           <Badge variant="secondary">{item.type}</Badge>
                        </TableCell>
                        <TableCell>
                           {item.dueDate}
                        </TableCell>
                        <TableCell>
                            <div className="flex items-center gap-2">
                                <Avatar className="h-6 w-6">
                                    <AvatarImage src={item.assignee.avatarUrl} alt={item.assignee.name} />
                                    <AvatarFallback>{item.assignee.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <span className="text-sm text-muted-foreground">{item.assignee.name}</span>
                            </div>
                        </TableCell>
                    </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
    </div>
  )
}
