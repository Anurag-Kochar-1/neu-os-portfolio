import { AnalyticsWrapper } from "@/components/AnalyticsWrapper";
import AppContextProvider from "@/context/AppContext";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {




  return (
    <html lang="en">
      <head />
      <body className="bg-black w-full h-screen flex flex-col justify-center items-center">
        <AppContextProvider>
          {children}
          <AnalyticsWrapper />
        </AppContextProvider>
      </body>
    </html>
  );
}
