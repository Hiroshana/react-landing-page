import './App.css'
import CompanyLogo from './components/CompanyLogo'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import PurposeSection from './components/PurposeSection'
import FeatureSection from './components/FeatureSection'
import ScheduleSection from './components/ScheduleSection'
import MonitorSection from './components/MonitorSection'
import PricingSection from './components/PricingSection'
import ServiceSection from './components/ServiceSection'
import TestimonialSection from './components/TestimonialSection'
import NewsletterSection from './components/NewsletterSection'
import FooterSection from './components/FooterSection'


function App() {

  return (
    <main className='relative min-h-screen overflow-x-hidden'>
      <div className='absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-lime-300/40 to-gray-300/20 rounded-full blur-[80px] -z-10'></div>
      <div className='overflow-hidden'>
        <Navbar />
        <Hero />
        <CompanyLogo />
        <PurposeSection />
        <FeatureSection />
        <ScheduleSection />
        <MonitorSection />
        <PricingSection />
        <ServiceSection />
        <TestimonialSection />
        <NewsletterSection />
        <FooterSection />
      </div>

    </main>
  )
}

export default App
