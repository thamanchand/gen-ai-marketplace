"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/Navigation/Header";
import AuthProvider from "./context/AuthProvider";
import Footer from "./components/Footer/Footer";
import Providers from "./context/ThemeProvider";

import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <Providers>
            <AuthProvider>
              <Header />
              <main>{children}</main>
              <Footer />
            </AuthProvider>
          </Providers>
        </QueryClientProvider>
      </body>
    </html>
  );
}
