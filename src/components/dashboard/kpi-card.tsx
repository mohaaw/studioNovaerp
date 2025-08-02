import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { ReactNode } from "react"

interface KpiCardProps {
  title: string
  value: string
  icon: ReactNode
  description: string
  trend?: ReactNode
}

export function KpiCard({ title, value, icon, description, trend }: KpiCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="text-muted-foreground">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <div className="flex items-center gap-2">
            <p className="text-xs text-muted-foreground">{description}</p>
            {trend && <div className="text-xs">{trend}</div>}
        </div>
      </CardContent>
    </Card>
  )
}
