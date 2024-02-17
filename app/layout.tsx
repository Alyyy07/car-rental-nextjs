import "./globals.css";
import { Footer, Navbar } from "@/components";
import Provider from "@/components/Provider";

export const metadata = {
  title: "Albin Trans",
  description: "Discover the best car in the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Provider>
          <Navbar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
