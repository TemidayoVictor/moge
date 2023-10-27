import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Discover from '@/components/Discover'
import Offers from '@/components/Offers'
import Works from '@/components/Works'
import Future from '@/components/Future'
import Cta from '@/components/Cta'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="mt-[5em]">
      
      <Header />
      <Hero />
      <Discover />
      <Works />
      <Future />
      <Offers />
      <Cta />
      <Footer />

    </div>
  )
}
