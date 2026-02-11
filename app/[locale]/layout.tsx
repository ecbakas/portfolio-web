import type { Metadata } from "next";
// import localFont from "next/font/local";
import "../globals.css";
import { Figtree } from "next/font/google";
import { cn } from "@/lib/utils";
import Footer from "@/components/molecules/footer";
import Navbar from "@/components/molecules/navbar";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/lib/theme-provider";
import { ScrollArea } from "@/components/ui/scroll-area";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';

const font = Figtree({ subsets: ["latin"] });

export async function generateMetadata() {
  const t = await getTranslations('Metadata');
  return {
    title: t('title'),
    description: t('description'),
  }
}

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;
  const locale = params.locale;
  const children = props.children;
  const messages = await getMessages();

  return (
    <html lang={locale} className="system" suppressHydrationWarning>
      <body className={cn(font.className, "antialiased overflow-hidden h-dvh")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
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
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
