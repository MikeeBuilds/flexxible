export const metadata = {
  title: 'Flexxible',
  description: 'Showcase and discover remarkable developer projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        Navbar
        <main>
        {children}
        </main>
        Footer
      </body>
    </html>
  )
}
