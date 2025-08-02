"use client"

import { Funnel, FunnelChart, LabelList, ResponsiveContainer, Tooltip } from "recharts"

import {
  ChartContainer,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { salesPipelineData } from "@/lib/data"
import { useEffect, useState } from "react"

const chartConfig = {
  value: {
    label: "Value",
  },
  Leads: {
    label: "Leads",
    color: "hsl(var(--chart-1))",
  },
  Qualified: {
    label: "Qualified",
    color: "hsl(var(--chart-2))",
  },
  Proposal: {
    label: "Proposal",
    color: "hsl(var(--chart-3))",
  },
  Negotiation: {
    label: "Negotiation",
    color: "hsl(var(--chart-4))",
  },
  Closed: {
    label: "Closed",
    color: "hsl(var(--chart-5))",
  },
}

export function SalesPipelineChart() {
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        setData(salesPipelineData);
    }, []);
  
  if (!data.length) return null;

  return (
    <div className="h-[300px] w-full">
      <ChartContainer config={chartConfig}>
        <ResponsiveContainer width="100%" height="100%">
          <FunnelChart data={data} layout="vertical">
            <Tooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dot" />}
            />
            <Funnel dataKey="value" nameKey="name" lastShapeType="rectangle">
                 <LabelList
                    position="right"
                    dataKey="name"
                    fill="hsl(var(--foreground))"
                    stroke="none"
                    className="text-sm font-medium"
                />
            </Funnel>
          </FunnelChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  )
}
