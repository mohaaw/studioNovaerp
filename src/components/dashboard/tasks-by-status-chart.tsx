"use client"
import { Pie, PieChart, ResponsiveContainer, Tooltip, Legend } from "recharts"

import {
  ChartContainer,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { useEffect, useState } from "react"

const chartData = [
  { status: "To Do", count: 25, fill: "hsl(var(--chart-1))" },
  { status: "In Progress", count: 45, fill: "hsl(var(--chart-2))" },
  { status: "In Review", count: 15, fill: "hsl(var(--chart-3))" },
  { status: "Done", count: 85, fill: "hsl(var(--chart-4))" },
]

const chartConfig = {
  count: {
    label: "Tasks",
  },
  "To Do": {
    label: "To Do",
    color: "hsl(var(--chart-1))",
  },
  "In Progress": {
    label: "In Progress",
    color: "hsl(var(--chart-2))",
  },
  "In Review": {
    label: "In Review",
    color: "hsl(var(--chart-3))",
  },
  "Done": {
    label: "Done",
    color: "hsl(var(--chart-4))",
  },
}

export function TasksByStatusChart() {
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        setData(chartData);
    }, []);

  return (
    <ChartContainer config={chartConfig} className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Tooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel indicator="dot" />}
          />
          <Pie
            data={data}
            dataKey="count"
            nameKey="status"
            cx="50%"
            cy="50%"
            outerRadius={100}
            innerRadius={60}
            paddingAngle={5}
            labelLine={false}
          />
          <Legend
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
            wrapperStyle={{ paddingBottom: '20px' }}
           />
        </PieChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
