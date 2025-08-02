import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Blocks, CheckCircle, Download, Cpu, Bot, ShieldCheck, Gem, Link, Landmark, Factory, Users, BarChart, ShoppingCart, Globe, BrainCircuit, Waves, GitCompareArrows, Fingerprint, Telescope, GanttChartSquare, Wind, Briefcase, HeartPulse, Leaf, GraduationCap, Building, Book, Scale, Truck, Wrench } from "lucide-react";

const modules = [
  { name: "Accounting", description: "Financial statements, ledgers, and invoicing.", icon: <Landmark />, installed: true, category: 'Finance' },
  { name: "CRM", description: "Manage leads, opportunities, and customers.", icon: <Briefcase />, installed: true, category: 'Sales' },
  { name: "Human Resources", description: "Employee lifecycle, payroll, and attendance.", icon: <Users />, installed: true, category: 'HR' },
  { name: "Inventory", description: "Manage stock levels, warehouses, and transfers.", icon: <GanttChartSquare />, installed: true, category: 'Stock' },
  { name: "Manufacturing", description: "Production planning, BOMs, and job cards.", icon: <Factory />, installed: false, category: 'Manufacturing' },
  { name: "Project Management", description: "Plan, track, and manage projects and tasks.", icon: <GanttChartSquare />, installed: true, category: 'Projects' },
  { name: "Sales", description: "Manage sales orders, quotations, and shipments.", icon: <ShoppingCart />, installed: true, category: 'Sales' },
  { name: "Buying", description: "Manage purchase orders, suppliers, and receipts.", icon: <Truck />, installed: false, category: 'Stock' },
  { name: "Asset Management", description: "Track and manage company assets.", icon: <Building />, installed: false, category: 'Finance' },
  { name: "Support", description: "Handle customer support tickets and issues.", icon: <HeartPulse />, installed: false, category: 'Support' },
  { name: "Quality Management", description: "Define and manage quality assurance.", icon: <CheckCircle />, installed: false, category: 'Tools' },
  { name: "Website", description: "Manage your public website and blog.", icon: <Globe />, installed: false, category: 'Content' },
  { name: "E-commerce", description: "Run your online store and process orders.", icon: <ShoppingCart />, installed: false, category: 'Sales' },
  { name: "Healthcare", description: "Manage patient records, appointments, and billing.", icon: <HeartPulse />, installed: false, category: 'Domain' },
  { name: "Education", description: "Manage students, courses, and programs.", icon: <GraduationCap />, installed: false, category: 'Domain' },
  { name: "Agriculture", description: "Manage crop cycles, land, and livestock.", icon: <Leaf />, installed: false, category: 'Domain' },
  { name: "Non Profit", description: "Manage members, donors, and grants.", icon: <Users />, installed: false, category: 'Domain' },
  { name: "Integrations", description: "Connect with third-party services.", icon: <Link />, installed: false, category: 'Tools' },
  { name: "Customization", description: "Create custom fields, forms, and reports.", icon: <Wrench />, installed: true, category: 'Tools' },
  { name: "Legal", description: "Manage legal documents and compliance.", icon: <Scale />, installed: false, category: 'Administration' },
  { name: "AI Insights", description: "AI-powered predictive business analytics.", icon: <Bot />, installed: false, category: 'AI' },
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
                <CardTitle className="font-headline text-lg">{module.name}</CardTitle>
                <CardDescription className="text-xs">{module.description}</CardDescription>
              </div>
              <div className="text-primary">{module.icon}</div>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-end">
                <div className="flex justify-between items-center mt-4">
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
