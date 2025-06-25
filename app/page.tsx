import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import VideoSection from '../components/VideoSection'
import ProjectFeatures from '../components/ProjectFeatures'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <VideoSection />
      <ProjectFeatures />
    </div>
  )
} 