import type { Metadata } from 'next'
import { Theme, Flex } from '@radix-ui/themes'
import { NextThemesProvider } from '@/components/providers/NextThemesProvider'
import './globals.css'
import '@radix-ui/themes/styles.css'

import MyApp from '@/components/Button'
import TopBar from '@/components/top-bar/TopBar'
import AsideNav from '@/components/aside/AsideNav'

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
            <Flex direction={'column'}>
              <TopBar />

              <main>
                <Flex>
                  <AsideNav />
                  {children}
                </Flex>
              </main>
            </Flex>
          </Theme>
        </NextThemesProvider>
      </body>
    </html>
  )
}
