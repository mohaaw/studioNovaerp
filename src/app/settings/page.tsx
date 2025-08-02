import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Building, 
  Users, 
  ShieldCheck, 
  CreditCard, 
  Mail, 
  Briefcase, 
  ShoppingCart, 
  GanttChartSquare, 
  HeartPulse, 
  Factory, 
  Truck, 
  Globe, 
  Link as LinkIcon, 
  SlidersHorizontal,
  BrainCircuit,
  FileLock
} from "lucide-react";
import Link from "next/link";

const settingsModules = [
  {
    title: "Company Settings",
    description: "Manage your organization's details, branding, and addresses.",
    icon: <Building className="h-8 w-8 text-primary" />,
    href: "#"
  },
  {
    title: "Users & Permissions",
    description: "Control user access, roles, and permission levels.",
    icon: <Users className="h-8 w-8 text-primary" />,
    href: "#"
  },
  {
    title: "Security & Compliance",
    description: "Configure security policies, 2FA, and data privacy.",
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    href: "#"
  },
  {
    title: "Financial Accounting",
    description: "Set up chart of accounts, fiscal years, and currencies.",
    icon: <CreditCard className="h-8 w-8 text-primary" />,
    href: "#"
  },
  {
    title: "Email & Notifications",
    description: "Manage email templates, SMTP settings, and system alerts.",
    icon: <Mail className="h-8 w-8 text-primary" />,
    href: "#"
  },
  {
    title: "CRM & Sales",
    description: "Customize lead sources, sales funnels, and opportunity stages.",
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    href: "#"
  },
  {
    title: "Buying & Purchases",
    description: "Configure supplier settings, purchase orders, and billing.",
    icon: <ShoppingCart className="h-8 w-8 text-primary" />,
    href: "#"
  },
  {
    title: "Inventory & Stock",
    description: "Manage warehouses, item variants, and stock entry types.",
    icon: <GanttChartSquare className="h-8 w-8 text-primary" />,
    href: "#"
  },
   {
    title: "HR & Payroll",
    description: "Set up salary structures, leave policies, and employee benefits.",
    icon: <HeartPulse className="h-8 w-8 text-primary" />,
    href: "#"
  },
   {
    title: "Manufacturing",
    description: "Define workstations, operations, and production settings.",
    icon: <Factory className="h-8 w-8 text-primary" />,
    href: "#"
  },
   {
    title: "Website & Portal",
    description: "Configure website theme, SEO settings, and customer portal.",
    icon: <Globe className="h-8 w-8 text-primary" />,
    href: "#"
  },
   {
    title: "Integrations",
    description: "Connect with third-party services like payment gateways and APIs.",
    icon: <LinkIcon className="h-8 w-8 text-primary" />,
    href: "#"
  },
  {
    title: "Customization",
    description: "Create custom fields, forms, and print formats.",
    icon: <SlidersHorizontal className="h-8 w-8 text-primary" />,
    href: "#"
  },
  {
    title: "AI Configuration",
    description: "Manage settings for Cosmic Insights and Prophecy Pricing.",
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    href: "#"
  },
   {
    title: "Blockchain Ledger",
    description: "Configure settings for the immutable transaction ledger.",
    icon: <FileLock className="h-8 w-8 text-primary" />,
    href: "#"
  },
];

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold font-headline">System Settings</h1>
        <p className="text-muted-foreground">Configure and customize every aspect of NovaX ERP.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {settingsModules.map((module) => (
          <Link href={module.href} key={module.title}>
            <Card className="h-full hover:shadow-lg hover:border-primary/50 transition-all duration-200 cursor-pointer flex flex-col">
              <CardHeader>
                <div className="mb-4">{module.icon}</div>
                <CardTitle className="font-headline text-lg">{module.title}</CardTitle>
                <CardDescription className="text-xs">{module.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
