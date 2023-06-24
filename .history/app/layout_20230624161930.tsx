import NavBar from '@/components/NavBar';
import './globals.css';
import Footer from '@/components/Footer';


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
        <NavBar/>
        <main>
        {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}
