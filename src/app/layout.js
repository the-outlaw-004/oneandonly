import "./globals.css";

export const metadata = {
  title: "One&Only",
  description: "Real estate gallery",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
