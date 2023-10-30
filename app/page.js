import Footer from '@/components/Footer'
import Header from '@/components/Headerr/Header'
import GetStarted from '@/components/Pages/Home/GetStarted'
import HeroSection from '@/components/Pages/Home/HeroSection'
import VisitStore from '@/components/Pages/Home/VisitStore'
import Image from 'next/image'

export default function Home() {
  return (
    <main className=''>
      <Header/>
      <HeroSection />
      <GetStarted />
      <VisitStore />
      <Footer/>
    </main>
  )
}
