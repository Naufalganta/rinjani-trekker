import "./globals.css";

export const metadata = {
  title: "Rinjani DedyTrekker",
  description:
    "Official Rinjani DedyTrekker - Professional trekking service to Mount Rinjani.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

        {children}

      </body>
    </html>
  );
}