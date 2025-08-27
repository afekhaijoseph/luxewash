import carouselone from '../assets/images/carousel-one.jpg'
import carouseltwo from '../assets/images/carousel-two.jpg'
import carouselthree from '../assets/images/carousel-three.jpg'
import carouselfour from '../assets/images/carousel-four.jpg'
import { useState, useEffect } from 'react'
import { motion } from 'motion/react'


const DoItYourself = () => {
    const diyVariant = {
    initial : {
    opacity: 0,
    y: 100,
     },

    animate : {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      type: 'tween',
      ease: 'easeIn'
    }
  }
  }
    const [currentImage, setCurrentImage] = useState(0)
    const bgImages = [
        carouselone,
        carouseltwo, 
        carouselthree,
        carouselfour
    ]

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setCurrentImage(prev => prev >= 3 ? 0 : prev + 1)
        }, 2000)
        return () => clearTimeout(timer)
    },[currentImage])

  const handleBookClick = () => {
  if (typeof window !== "undefined" && window.gtag_report_conversion) {
    window.gtag_report_conversion("https://luxewash.vercel.app/thank-you");
  } else {
    // fallback in case gtag is not available
    window.location.href = "https://luxewash.vercel.app/thank-you";
  }
};
  return (
    <motion.section id="do-it-yourself" className='my-10' variants={diyVariant} initial="initial" whileInView="animate" viewport ={{once: true, amount: 0.2}}>
        <h2 className='my-4 text-center text-4xl font-semibold font-playfair'>Self-Service Laundry at LuxeWash</h2>
        <div style={{ backgroundImage:`url(${bgImages[currentImage]})` }} className='relative text-white bg-cover bg-center h-[50vh] w-11/12 lg:w-10/12 mx-auto my-6 lg:h-[80vh] rounded-xl'>
        <div className='absolute inset-0 bg-black opacity-30 rounded-xl'></div>
        <div className='absolute z-10 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-center w-full'>
            <p className='text-3xl p-3 md:text-3xl font-lato'>Enjoy our premium self-service laundry machines in a comfortable environment. Wash, relax, and connect with others at LuxeWash</p>
            <a onClick={handleBookClick} href='https://wa.me/2349161497203' rel="noopener noreferrer" target='_blank' className="border border-white p-3 text-white rounded-md my-3 hover:bg-slate-700 hover:border-slate-700">Book a Self-wash Slot</a>
        </div>
        </div>
    </motion.section>
  )
}

export default DoItYourself