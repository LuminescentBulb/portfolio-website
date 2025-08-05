import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
