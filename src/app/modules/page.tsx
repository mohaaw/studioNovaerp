import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Download, Landmark, Briefcase, Users, GanttChartSquare, Factory, ShoppingCart, Truck, Building, HeartPulse, GraduationCap, Leaf, Link, Wrench, Scale, Globe, Bot, LineChart, Target, FileLock, Users2, ShieldCheck, FilePieChart, Megaphone, Receipt, Puzzle, Handshake, Microscope, BrainCircuit, Waves, GitCompareArrows, Fingerprint, Telescope, Wind, Book } from "lucide-react";

const modules = [
    // Core ERPNext & Odoo Modules
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
    
    // Inspired by SAP & Microsoft Dynamics
    { name: "Supply Chain", description: "End-to-end supply chain planning and logistics.", icon: <GitCompareArrows />, installed: false, category: 'Logistics' },
    { name: "Business Intelligence", description: "Advanced analytics and data visualization.", icon: <LineChart />, installed: false, category: 'Analytics' },
    { name: "Governance & Risk", description: "Manage compliance and corporate governance.", icon: <ShieldCheck />, installed: false, category: 'Administration' },
    { name: "Talent Management", description: "Recruiting, onboarding, and performance.", icon: <Users2 />, installed: false, category: 'HR' },
    { name: "Treasury Management", description: "Manage cash flow, liquidity, and financial risk.", icon: <FilePieChart />, installed: false, category: 'Finance' },
    
    // Inspired by Salesforce & other Top CRMs
    { name: "Marketing Automation", description: "Automate marketing campaigns and lead nurturing.", icon: <Megaphone />, installed: false, category: 'Marketing' },
    { name: "Sales Enablement", description: "Provide sales teams with resources and tools.", icon: <Target />, installed: false, category: 'Sales' },
    { name: "Partner Management", description: "Manage relationships with channel partners.", icon: <Handshake />, installed: false, category: 'Sales' },

    // Innovative & Futuristic Modules
    { name: "AI Insights", description: "AI-powered predictive business analytics.", icon: <Bot />, installed: false, category: 'AI' },
    { name: "Sustainability", description: "Track and manage environmental impact.", icon: <Leaf />, installed: false, category: 'ESG' },
    { name: "Digital Twin", description: "Create virtual models of physical assets.", icon: <Puzzle />, installed: false, category: 'IoT' },
    { name: "Blockchain Ledger", description: "Secure, immutable transaction recording.", icon: <FileLock />, installed: false, category: 'Security' },
    { name: "R&D Management", description: "Manage innovation pipelines and research.", icon: <Microscope />, installed: false, category: 'Strategy' },
    
    // Domain-Specific Modules
    { name: "Healthcare", description: "Manage patient records, appointments, and billing.", icon: <HeartPulse />, installed: false, category: 'Domain' },
    { name: "Education", description: "Manage students, courses, and programs.", icon: <GraduationCap />, installed: false, category: 'Domain' },
    { name: "Agriculture", description: "Manage crop cycles, land, and livestock.", icon: <Leaf />, installed: false, category: 'Domain' },
    { name: "Legal", description: "Manage legal documents and compliance.", icon: <Scale />, installed: false, category: 'Administration' },
    { name: "Non Profit", description: "Manage members, donors, and grants.", icon: <Users />, installed: false, category: 'Domain' },

    // Tool & Integration Modules
    { name: "Integrations", description: "Connect with third-party services.", icon: <Link />, installed: false, category: 'Tools' },
    { name: "Customization", description: "Create custom fields, forms, and reports.", icon: <Wrench />, installed: true, category: 'Tools' },
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
                        <Button variant="ghost" disabled>
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
