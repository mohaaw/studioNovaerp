import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Blocks, CheckCircle, Download } from "lucide-react";

const modules = [
  { name: "CRM", description: "Customer Relationship Management.", icon: <Blocks className="h-8 w-8" />, installed: true, category: 'Sales' },
  { name: "Accounting", description: "Financial tracking and reporting.", icon: <Blocks className="h-8 w-8" />, installed: true, category: 'Finance' },
  { name: "Inventory", description: "Manage stock levels and warehouses.", icon: <Blocks className="h-8 w-8" />, installed: false, category: 'Operations' },
  { name: "Human Resources", description: "Employee management and payroll.", icon: <Blocks className="h-8 w-8" />, installed: false, category: 'Management' },
  { name: "Project Management", description: "Plan, track, and manage projects.", icon: <Blocks className="h-8 w-8" />, installed: true, category: 'Operations' },
  { name: "Manufacturing", description: "Manufacturing orders and BOMs.", icon: <Blocks className="h-8 w-8" />, installed: false, category: 'Operations' },
  { name: "Website Builder", description: "Create and manage your website.", icon: <Blocks className="h-8 w-8" />, installed: false, category: 'Marketing' },
  { name: "eCommerce", description: "Sell your products online.", icon: <Blocks className="h-8 w-8" />, installed: false, category: 'Sales' },
];

export default function ModulesPage() {
  return (
    <div className="flex flex-col gap-8">
       <div>
        <h1 className="text-3xl font-bold font-headline">Module Marketplace</h1>
        <p className="text-muted-foreground">Expand the capabilities of NovaX ERP by installing new modules.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {modules.map(module => (
          <Card key={module.name} className="flex flex-col">
            <CardHeader className="flex flex-row items-start justify-between gap-4">
              <div className="space-y-1.5">
                <CardTitle className="font-headline text-xl">{module.name}</CardTitle>
                <CardDescription>{module.description}</CardDescription>
              </div>
              <div className="text-primary">{module.icon}</div>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-end">
                <div className="flex justify-between items-center">
                    <Badge variant="outline">{module.category}</Badge>
                    {module.installed ? (
                        <Button variant="ghost" disabled className="text-green-500">
                            <CheckCircle className="mr-2 h-4 w-4" />
                            Installed
                        </Button>
                    ) : (
                        <Button>
                            <Download className="mr-2 h-4 w-4" />
                            Install
                        </Button>
                    )}
                </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
