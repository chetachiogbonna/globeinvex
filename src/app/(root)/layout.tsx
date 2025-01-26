import Footer from "@/components/Footer"
import Header from "@/components/Header"
import React from "react"

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default RootLayout