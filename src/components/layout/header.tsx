"use client"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu, Package, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { UserNav } from "./user-nav"
import { MainNav } from "./main-nav"
import { useSidebar } from "../ui/sidebar"

export function Header() {
  const { toggleSidebar, isMobile } = useSidebar()

  return (
    <header className="flex h-16 items-center gap-4 border-b bg-card px-4 md:px-6 sticky top-0 z-30">
        {isMobile && (
             <Sheet>
                <SheetTrigger asChild>
                    <Button
                        variant="outline"
                        size="icon"
                        className="shrink-0 md:hidden"
                    >
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="flex flex-col p-0">
                    <div className="flex h-[60px] items-center px-6 border-b">
                        <a href="/" className="flex items-center gap-2 font-semibold font-headline">
                             <Package className="h-6 w-6" />
                            <span>MeERP</span>
                        </a>
                    </div>
                    <MainNav isMobile={true} />
                </SheetContent>
            </Sheet>
        )}
      <div className="flex w-full items-center gap-4 md:gap-2 lg:gap-4">
        <div className="w-full flex-1">
          <form>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
              />
            </div>
          </form>
        </div>
        <UserNav />
      </div>
    </header>
  )
}
