/** @format */

export const metadata = {
  title: 'Meetup Importer',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
