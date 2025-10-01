import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import React from 'react'
import developing from '../../public/images/developing.gif'
import Image from 'next/image'
import MobileNavigation from '@/components/MobileNavigation'

const page = () => {
  return (
    <div className='flex flex-col items-center'>
    <Navigation/><MobileNavigation/>
    <div className='w-full h-[80vh] flex items-center justify-center flex-col'>
        <Image src={developing} alt="" className='w-50  h-50' />
        <p className='text-xl font-bold'>Under-Development</p>
    </div>
    <Footer/>
  </div>
  )
}

export default page