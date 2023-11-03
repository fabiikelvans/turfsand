import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Topbar from "@/app/components/layout/topbar";
import React from "react";
import Footer from "@/app/components/layout/footer";
import {MainNav} from "@/app/components/layout/main-nav";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Turf Sand Constructions',
  description: 'Building Tomorrow Together',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className='max-w-7xl'>
          <Topbar />
          <MainNav/>
          {children}
          <Footer/>
      </div>
      </body>
    </html>
  )
}
