import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { FloatingMenu } from "@/components/floating-menu";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Taemin - Data Science Portfolio",
  description: "Data Science Major at University of Michigan. Specializing in data visualization, simulation modeling, and applied analytics. Building complex systems that bring data, policy, and human behavior into interactive environments.",
  keywords: ["data science", "data visualization", "simulation modeling", "policy research", "University of Michigan", "React", "Next.js", "Python", "C++"],
  authors: [{ name: "Taemin" }],
  creator: "Taemin",
  openGraph: {
    title: "Taemin - Data Science Portfolio",
    description: "Data Science Major at University of Michigan. Specializing in data visualization, simulation modeling, and applied analytics.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taemin - Data Science Portfolio",
    description: "Data Science Major at University of Michigan. Specializing in data visualization, simulation modeling, and applied analytics.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
        >
          <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
            <FloatingMenu />
            <main className="pt-20 md:pt-0">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
