import carouselone from '../assets/images/carouselone.png'
import carouseltwo from '../assets/images/carouseltwo.png'
import carouselthree from '../assets/images/carouselthree.jpg'
import carouselfour from '../assets/images/carouselfour.jpg'
import { useState, useEffect } from 'react'


const DoItYourself = () => {
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

  return (
    <div className='my-10'>
        <h2 className='my-4 text-center text-4xl font-semibold font-playfair'>Want to do it yourself?</h2>
        <div style={{ backgroundImage:`url(${bgImages[currentImage]})` }} className='relative text-white bg-cover bg-center h-[50vh] w-9/12 mx-auto my-6 lg:h-[90vh]'>
        <div className='absolute inset-0 bg-black opacity-30'></div>
        <div className='absolute z-10 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-center w-full'>
            <p className='text-3xl p-3 md:text-4xl font-lato'>Enjoy our self-service machines in a chill environment. Come wash, relax, and meet cool people.</p>
            <button className="border border-white p-3 text-white rounded-md my-3 hover:bg-slate-700 hover:border-slate-700">Book a Self-wash Slot</button>
        </div>
        </div>
      
    </div>
  )
}

export default DoItYourself