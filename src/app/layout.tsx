import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "@/providers/query-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { NavbarWrapper } from "@/components/ui/navbar-wrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Patwatoli AI",
  description: "Enterprise AI Infrastructure Platform",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
  interactiveWidget: "resizes-content",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        h-full
        antialiased
      `}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var b = localStorage.getItem('patwatoli_brightness');
                if (b === 'dim') {
                  document.documentElement.style.filter = 'brightness(0.92)';
                } else if (b === 'soft') {
                  document.documentElement.style.filter = 'brightness(0.85)';
                }
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body className="h-full bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange
        >
          <QueryProvider>
            <NavbarWrapper />
            <main className="h-full bg-white dark:bg-slate-950">{children}</main>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
