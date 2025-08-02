import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { SidebarProvider, Sidebar, SidebarInset, SidebarTrigger, SidebarHeader, SidebarContent, SidebarFooter } from '@/components/ui/sidebar';
import { MainNav } from '@/components/layout/main-nav';
import { Header } from '@/components/layout/header';
import { Bot, GitFork, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: 'MeERP Simplified',
  description: 'A modern, AI-powered ERP system.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('font-body antialiased', inter.variable, spaceGrotesk.variable)}>
        <SidebarProvider>
          <Sidebar>
            <SidebarHeader className="p-4">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="h-9 w-9 bg-primary/20 text-primary-foreground hover:bg-primary/30">
                  <Package className="h-5 w-5" />
                </Button>
                <h1 className="text-xl font-headline font-semibold">MeERP</h1>
              </div>
            </SidebarHeader>
            <SidebarContent>
              <MainNav />
            </SidebarContent>
            <SidebarFooter className="p-4">
              <div className="rounded-lg bg-muted/50 p-4 text-center">
                  <Bot className="mx-auto mb-2 h-8 w-8 text-muted-foreground" />
                  <h3 className="font-semibold font-headline">AI Assistant</h3>
                  <p className="text-xs text-muted-foreground mt-1 mb-3">Get suggestions on how to improve your workflows.</p>
                  <Button asChild size="sm" className="w-full">
                    <a href="/assistant">Get Started</a>
                  </Button>
              </div>
            </SidebarFooter>
          </Sidebar>
          <SidebarInset>
            <Header />
            <main className="flex-1 p-4 md:p-6 lg:p-8">
              {children}
            </main>
          </SidebarInset>
        </SidebarProvider>
        <Toaster />
      </body>
    </html>
  );
}
