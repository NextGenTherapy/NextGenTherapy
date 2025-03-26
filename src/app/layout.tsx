import type { Metadata } from "next";
import "../styles/globals.css";
import "../styles/variables.css";
import { geistSans, geistMono } from "../styles/fonts"; 
import Header from "../components/header";
import Footer from "../components/footer";



export const metadata: Metadata = {
  title: "Next Generation Therapy",
  description: "Providing professional therapy and psychodynamic psychotherapist services for children, teenagers, young adults and adults. Specializing in mental health, personal growth, and emotional well-being in Colchester and Chelmsford. Contact us today.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}