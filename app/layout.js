import Cookies from "./components/Cookies";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <div className="relative z-50">
          {/* cookies modal for all pages */}
          <Cookies />
        </div>

        <Header />
        <div className="w-full max-w-[1500px] mx-auto px-0 sm:px-5">
          <div className="min-h-[calc(100vh-250px)]">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
