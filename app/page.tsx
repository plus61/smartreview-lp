import { HeroSection } from "@/components/hero-section"
import { CompanyLogos } from "@/components/company-logos"
import { ProblemSection } from "@/components/problem-section"
import { HowItWorks } from "@/components/how-it-works"
import { Features } from "@/components/features"
import { Templates } from "@/components/templates"
import { Results } from "@/components/results"
import { Pricing } from "@/components/pricing"
import { CaseStudies } from "@/components/case-studies"
import { FAQ } from "@/components/faq"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <CompanyLogos />
      <ProblemSection />
      <HowItWorks />
      <Features />
      <Templates />
      <Results />
      <Pricing />
      <CaseStudies />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
