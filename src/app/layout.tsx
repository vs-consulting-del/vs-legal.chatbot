import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'VS Legal Chatbot',
  description: 'Popup legal chatbot for lawyers',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="sr">
      <body>{children}</body>
    </html>
  )
}