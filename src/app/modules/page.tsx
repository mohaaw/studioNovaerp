import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Blocks, CheckCircle, Download, Cpu, Bot, ShieldCheck, Gem, Link, Landmark, Factory, Users, BarChart, ShoppingCart, Globe, BrainCircuit, Waves, GitCompareArrows, Fingerprint, Telescope, GanttChartSquare, Wind, Briefcase } from "lucide-react";

const modules = [
  { name: "CRM", description: "Customer Relationship Management.", icon: <Briefcase />, installed: true, category: 'Sales' },
  { name: "Accounting", description: "Financial tracking and reporting.", icon: <Landmark />, installed: true, category: 'Finance' },
  { name: "Inventory", description: "Manage stock levels and warehouses.", icon: <GanttChartSquare />, installed: false, category: 'Operations' },
  { name: "Human Resources", description: "Employee management and payroll.", icon: <Users />, installed: false, category: 'Management' },
  { name: "Project Management", description: "Plan, track, and manage projects.", icon: <GanttChartSquare />, installed: true, category: 'Operations' },
  { name: "Manufacturing", description: "Manufacturing orders and BOMs.", icon: <Factory />, installed: false, category: 'Operations' },
  { name: "Website Builder", description: "Create and manage your website.", icon: <Globe />, installed: false, category: 'Marketing' },
  { name: "eCommerce", description: "Sell your products online.", icon: <ShoppingCart />, installed: false, category: 'Sales' },
  { name: "Cosmic Insights", description: "AI-powered predictive analytics.", icon: <Bot />, installed: false, category: 'AI' },
  { name: "Prophecy Pricing", description: "Dynamic pricing & discounting engine.", icon: <Gem />, installed: false, category: 'AI' },
  { name: "Neural Automator", description: "Advanced workflow automation.", icon: <Cpu />, installed: false, category: 'Automation' },
  { name: "Hyper-Secure Ledger", description: "Blockchain for immutable records.", icon: <ShieldCheck />, installed: false, category: 'Security' },
  { name: "Compliance Guardian", description: "Automated regulatory monitoring.", icon: <ShieldCheck />, installed: false, category: 'Compliance' },
  { name: "Digital Twin", description: "Virtual replicas for simulation.", icon: <GitCompareArrows />, installed: false, category: 'IoT' },
  { name: "Sentiment Analysis", description: "Analyze customer feedback at scale.", icon: <Waves />, installed: false, category: 'Analytics' },
  { name: "Supply Chain Nebula", description: "End-to-end supply chain visibility.", icon: <Link />, installed: false, category: 'Operations' },
  { name: "Talent Galaxy", description: "AI-driven talent acquisition.", icon: <Telescope />, installed: false, category: 'HR' },
  { name: "Sustainability Matrix", description: "Track and report on ESG goals.", icon: <Wind />, installed: false, category: 'Compliance' },
  { name: "API Singularity", description: "Unified API gateway for integrations.", icon: <Link />, installed: false, category: 'Development' },
  { name: "Cyber-Defense Shield", description: "Proactive threat detection & response.", icon: <Fingerprint />, installed: false, category: 'Security' },
  { name: "Resource Arbitrage", description: "Optimize resource allocation.", icon: <BarChart />, installed: false, category: 'Finance' },
  { name: "Knowledge Constellation", description: "Centralized knowledge management.", icon: <BrainCircuit />, installed: false, category: 'Management' },
  { name: "Brand Orbit", description: "Comprehensive brand monitoring.", icon: <Globe />, installed: false, category: 'Marketing' },
  { name: "Risk Singularity", description: "Predictive risk modeling & mitigation.", icon: <Waves />, installed: false, category: 'Finance' },
  { name: "Inter-departmental Link", description: "Seamless cross-departmental communication.", icon: <Link />, installed: false, category: 'Productivity' },
  { name: "Innovation Hub", description: "Platform for internal ideation & development.", icon: <BrainCircuit />, installed: false, category: 'R&D' },
  { name: "Customer Journey Mapper", description: "Visualize and optimize the customer lifecycle.", icon: <GanttChartSquare />, installed: false, category: 'Sales' },
  { name: "Predictive Maintenance", description: "Forecast equipment failure to reduce downtime.", icon: <Factory />, installed: false, category: 'Operations' },
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
