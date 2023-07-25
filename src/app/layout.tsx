import "../styles/globals.css";
import { Inter } from "next/font/google";
import { NavBar } from "@/components/navbar.component";
import { Footer } from "@/components/footer.component";
import Provider from "@/components/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Precedent - Building blocks for your Next.js project",
  description:
    "Precedent is the all-in-one solution for your Next.js project. It includes a design system, authentication, analytics, and more.",
  twitter: {
    card: "summary_large_image",
    title: "Precedent - Building blocks for your Next.js project",
    description:
      "Precedent is the all-in-one solution for your Next.js project. It includes a design system, authentication, analytics, and more.",
    creator: "@lukols",
  },
  metadataBase: new URL("https://precedent.dev"),
  themeColor: "#FFF",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <NavBar />
          <main className="flex min-h-screen w-full flex-col bg-black">
            {children}
          </main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
