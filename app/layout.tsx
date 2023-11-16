import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import { ThemeProvider } from '@/components/ThemeProvider'
import ClientProviders from '@/components/ClientProviders'
import FirebaseAuthProvider from '@/components/FirebaseAuthProvider'
import SubscriptionProvider from '@/components/SubscriptionProvider'

export const metadata: Metadata = {
  title: 'BabbleOn',
  description: 'BabbleOn Chat App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClientProviders>
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <FirebaseAuthProvider>
        <SubscriptionProvider>

        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            >
        <Header />

        {children}
        </ThemeProvider>
        </SubscriptionProvider>
        </FirebaseAuthProvider>
        </body>
    </html>
    </ClientProviders>
  )
}
