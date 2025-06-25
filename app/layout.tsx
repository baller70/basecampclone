import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'
import './globals.css'
import { ErrorBoundary } from '../components/ErrorBoundary'
import { StagewiseToolbar } from '../components/StagewiseToolbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Basecamp Clone',
  description: 'A modern project management and team collaboration tool',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ErrorBoundary>
          <StagewiseToolbar />
          {children}
        </ErrorBoundary>
      </body>
    </html>
  )
} 