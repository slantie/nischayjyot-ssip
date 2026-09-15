import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "NishchayJyot | Grievance Portal Demo", description: "Frontend-only portfolio demo for a traffic challan grievance portal." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
