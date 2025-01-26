function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="pt-12 pb-8 bg-gradient-to-t from-[#043D39] to-[#14764E] min-h-screen flex items-center justify-center">
      {children}
    </section>
  )
}

export default AuthLayout