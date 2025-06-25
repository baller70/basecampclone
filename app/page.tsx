import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import VideoSection from '../components/VideoSection'
import ProjectFeatures from '../components/ProjectFeatures'
import WalkthroughSection from '../components/WalkthroughSection'
import ReportsSection from '../components/ReportsSection'
import ClientTools from '../components/ClientTools'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <VideoSection />
      <ProjectFeatures />
      <WalkthroughSection />
      <ReportsSection />
      <ClientTools />
      <FAQ />
      <Footer />
    </div>
  )
} 