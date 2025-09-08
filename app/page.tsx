import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { MenuSection } from "@/components/menu-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <MenuSection />
      <Footer />
    </main>
  )
}
