import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import { Figtree } from "next/font/google";
import { cn } from "@/lib/utils";
import Footer from "@/components/molecules/footer";
import Navbar from "@/components/molecules/navbar";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/lib/theme-provider";
import { ScrollArea } from "@/components/ui/scroll-area";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ertugrulcan Bakas - Portfolio",
  description: "Developed by ertugrulcan with Next.js and Tailwind CSS. Deployed with Vercel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(font.className, "antialiased overflow-hidden h-dvh")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollArea className="h-full">
            <main className="xs:pt-4 relative mx-auto flex max-w-xl flex-col gap-4 p-2">
              <Navbar />
              <section className="h-full min-h-16 w-full max-w-full rounded-xl border bg-white p-2 shadow-xl dark:bg-black">
                {children}
                <Footer />
              </section>
            </main>
            <Toaster />
          </ScrollArea>
        </ThemeProvider>
      </body>
    </html>
  );
}
