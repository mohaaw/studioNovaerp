'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { LayoutDashboard, ListChecks, FileText, Cog, Users, Bot, GitBranch, Blocks, LineChart, Settings, FolderKanban, FileJson, GitFork, BarChart3, Puzzle, BrainCircuit } from "lucide-react"
import { useSidebar } from "../ui/sidebar"

const navItems = [
    { href: '/', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/tasks', label: 'Tasks', icon: FolderKanban },
    { href: '/documents', label: 'Documents', icon: FileText },
    { href: '/workflows', label: 'Workflows', icon: GitFork },
    { href: '/modules', label: 'Modules', icon: Puzzle },
    { href: '/analytics', label: 'Analytics', icon: BarChart3 },
    { href: '/team', label: 'Team', icon: Users },
    { href: '/assistant', label: 'AI Assistant', icon: BrainCircuit },
    { href: '/settings', label: 'Settings', icon: Settings },
]

export function MainNav({ isMobile = false }: { isMobile?: boolean }) {
    const pathname = usePathname()
    const { state } = useSidebar()
    const isCollapsed = !isMobile && state === "collapsed"

    const renderLink = (item: typeof navItems[0]) => {
        const isActive = pathname === item.href
        const linkClasses = isMobile ? "text-sidebar-foreground" : "text-muted-foreground";
        const activeClasses = isMobile ? "bg-sidebar-accent text-sidebar-accent-foreground" : "bg-accent text-accent-foreground"

        if (isCollapsed) {
            return (
                 <Tooltip key={item.href}>
                    <TooltipTrigger asChild>
                        <Link
                            href={item.href}
                            className={cn(
                                "flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8",
                                linkClasses,
                                isActive && "text-primary hover:text-primary",
                                !isActive && "hover:text-sidebar-foreground",
                            )}
                        >
                            <item.icon className="h-5 w-5" />
                            <span className="sr-only">{item.label}</span>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">{item.label}</TooltipContent>
                </Tooltip>
            )
        }
        
        return (
            <Link
                key={item.href}
                href={item.href}
                className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 transition-all",
                    linkClasses,
                    isActive && "text-primary font-semibold",
                    !isActive && "hover:text-sidebar-foreground"
                )}
            >
                <item.icon className="h-4 w-4" />
                {item.label}
            </Link>
        )
    }

    return (
        <nav className={cn(
            "flex flex-col items-center gap-2 px-2 sm:py-5",
            isCollapsed ? "px-2" : "px-4",
            isMobile && "gap-4 text-lg font-medium p-4"
        )}>
            {navItems.map(item => renderLink(item))}
        </nav>
    )
}
