import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { SidebarProvider, Sidebar, SidebarInset, SidebarHeader, SidebarContent, SidebarFooter } from '@/components/ui/sidebar';
import { MainNav } from '@/components/layout/main-nav';
import { Header } from '@/components/layout/header';
import { Bot, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeProvider } from '@/components/layout/theme-provider';

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
  description: 'A modular, AI-powered ERP system from the future.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('font-body antialiased', inter.variable, spaceGrotesk.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
          themes={['light', 'dark', 'system', 'pro']}
        >
          <SidebarProvider>
            <Sidebar>
              <SidebarHeader className="p-4">
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="h-9 w-9 bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90">
                    <Package className="h-5 w-5" />
                  </Button>
                  <h1 className="text-xl font-headline font-semibold">MeERP</h1>
                </div>
              </SidebarHeader>
              <SidebarContent>
                <MainNav />
              </SidebarContent>
              <SidebarFooter className="p-4">
                <div className="rounded-lg bg-sidebar-accent/10 p-4 text-center">
                    <Bot className="mx-auto mb-2 h-8 w-8 text-sidebar-foreground/50" />
                    <h3 className="font-semibold font-headline text-sidebar-foreground">AI Assistant</h3>
                    <p className="text-xs text-sidebar-foreground/70 mt-1 mb-3">Get suggestions on how to improve your workflows.</p>
                    <Button asChild size="sm" className="w-full bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90">
                      <a href="/assistant">Get Started</a>
                    </Button>
                </div>
              </SidebarFooter>
            </Sidebar>
            <SidebarInset>
              <Header />
              <main className="flex-1 p-4 md:p-6 lg:p-8 animate-fade-in">
                {children}
              </main>
            </SidebarInset>
          </SidebarProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
