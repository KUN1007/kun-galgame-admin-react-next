import type { Metadata } from 'next'
import { Theme } from '@radix-ui/themes'
import { NextThemesProvider } from '@/components/providers/NextThemesProvider'
import './globals.css'
import '@radix-ui/themes/styles.css'

import MyApp from '@/components/Button'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <NextThemesProvider attribute="class" defaultTheme="system">
          <Theme>
            <MyApp />
            <nav></nav>
            {children}
          </Theme>
        </NextThemesProvider>
      </body>
    </html>
  )
}
