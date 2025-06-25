import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import VideoSection from '../components/VideoSection'
import ProjectFeatures from '../components/ProjectFeatures'
import AnswerYesSection from '../components/AnswerYesSection'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <VideoSection />
      <AnswerYesSection />
      <ProjectFeatures />
    </div>
  )
} 