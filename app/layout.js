import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import GitHubStarPopup from "@/components/GitHubStarPopup";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "PakTiles",
    template: "%s | PakTiles",
  },

  description:
    "Explore premium floor and wall tiles for homes, bathrooms, kitchens, and commercial spaces. Discover stylish tile designs at PakTiles.",

  keywords: [
    "PakTiles",
    "floor tiles",
    "wall tiles",
    "bathroom tiles",
    "kitchen tiles",
    "tiles in Pakistan",
  ],

  openGraph: {
    title: "PakTiles",
    description: "Discover stylish tiles for your project",
    siteName: "PakTiles",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#f3f5f3] text-[#111827] font-sans selection:bg-[#0f3e2e] selection:text-white">
        {children}
        <GitHubStarPopup />
      </body>
    </html>
  );
}
