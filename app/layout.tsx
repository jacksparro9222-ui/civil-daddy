import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Civil Daddy | Interiors, Civil Works & Custom Furniture in Goa",
  description: "Civil Daddy helps shape homes and spaces in Goa through interior design, civil and renovation work, custom furniture, false ceilings and 3D visualisation. Enquire about your project.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
