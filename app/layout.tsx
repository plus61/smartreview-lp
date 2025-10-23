import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Analytics as GoogleAnalytics } from "@/components/analytics"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SmartReview - 習い事教室専用 口コミ集客ツール",
  description:
    "悪い口コミを防ぎ、良い口コミだけを増やす。アンケートで満足度を測定してから高評価のお客様だけを口コミサイトへ自動誘導。",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
        <GoogleAnalytics />
      </body>
    </html>
  )
}
