/* eslint-disable @next/next/no-html-link-for-pages */
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#f7f8fa] min-h-screen font-sans text-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          {/* Navbar */}
          <nav className="flex items-center justify-between py-6">
            <div className="text-2xl font-bold text-gray-700">Trip Narrative AI</div>
            <div>
              <ul className="flex gap-6 text-base font-medium">
                <li>
                  <a className="hover:text-gray-800 transition text-gray-600">Home</a>
                </li>
                <li>
                  <a href="/components/ticket" className="hover:text-gray-800 transition  text-gray-600">
                    Ticket Advisor
                  </a>
                </li>
                <li>
                  <a href="/components/trip" className="hover:text-gray-800 transition  text-gray-600">
                    Trip Generator
                  </a>
                </li>
                <li>
                  <a href="/components/chatbot" className="hover:text-gray-800 transition  text-gray-600">
                    Chatbot
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          {/* Main Content */}
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
export const metadata = {
  title: "Trip Narrative AI",
  description: "Generate Trip Narratives with AI",
};
