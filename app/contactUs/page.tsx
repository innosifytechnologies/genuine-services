import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import React from 'react'
import developing from '../../public/images/developing.gif'
import Image from 'next/image'
import MobileNavigation from '@/components/MobileNavigation'
import ContactCard from '@/components/Contact'

const page = () => {
  return (
    <div className='flex flex-col items-center'>
    <Navigation/><MobileNavigation/>
      <ContactCard/>
    <Footer/>
  </div>
  )
}

export default page