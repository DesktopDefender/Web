import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="border-DDOrange border-t-4 bg-DDOrange">
      <head>
        <title>Desktop Defender</title>
        <meta name="description" content="Here to protect your home network!" />
        <link rel="icon" type="image/png" href="/DD_logo128x128.png" />
        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
          
      </head>
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
