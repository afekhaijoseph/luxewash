import timing from '../assets/timing.png'
import delivery from '../assets/home-delivery.png'
import gentle from '../assets/gentle.png'
import premium from '../assets/premium.png'
import qrcode from '../assets/qrcode.png'
import {motion} from 'motion/react'


const Hero = () => {
  const heroVariant = {
    initial:{
      filter: "blur(10px)",
      opacity: 0,
      y: 100},

    animate:{
      filter: "blur(0)",
      opacity: 1,
      y: 0},

  }

    const heroButtonVariant = {
    initial:{
      opacity: 0,
      y: 50,
    },

    animate:{
      opacity: 1,
      y: 0},

  }
  const sentence = "Premium Laundry. Delivered to Your Doorstep.";
  const letters = sentence.split("");
  return (
    <>
      <motion.div className='absolute top-20 md:top-1/3 left-1/2 -translate-x-1/2 w-11/12 lg:w-8/12 mx-auto flex flex-col gap-10 text-gray-300'>
            <h1 className='text-6xl font-playfair text-center'>{letters.map((letter, index) => (
              <motion.span className='' variants={heroVariant} initial="initial" animate="animate" transition={{ delay: index * 0.05, duration: 0.5 }} key={index}>{letter}</motion.span>
            ))}</h1>
            <motion.button className='border border-gray-300 w-fit self-center p-3 rounded-md hover:bg-[#002147] hover:border-[#002147] hover:text-white' variants={heroButtonVariant} initial="initial" animate="animate" transition={{ delay: (letters.length + 1) * 0.05, duration: 0.5 }}>Schedule a Pick up</motion.button>
      </motion.div>
        
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex justify-between font-playfair font-thin text-md w-full lg:w-9/12 mx-auto px-3">
          <div className='flex items-center gap-2'>
            <div className='max-w-7'>
                <img src={timing} alt="" />
            </div>
            <p>24 to 48hrs turnaround</p>
          </div>
            <div className='h-6 bg-gray-300 w-[2px]'></div>
            <div className='flex items-center gap-2'>
            <div className='max-w-7'>
                <img src={delivery} alt="" />
            </div>
            <p>Doorstep service</p>
          </div>
            
            <div className='h-6 bg-gray-300 w-[2px]'></div>

            <div className='flex items-center gap-2'>
            <div className='max-w-7'>
                <img src={gentle} alt="" />
            </div>
            <p>Gentle on fabric, tough on stain</p>
          </div>
            <div className='h-6 bg-gray-300 w-[2px]'></div>
            <div className='flex items-center gap-2'>
            <div className='max-w-7'>
                <img src={premium} alt="" />
            </div>
            <p>Premium Finishing</p>
          </div>
          </div>
          <div className='w-1/2 lg:w-24 aspect-square mx-auto md:absolute bottom-14 right-6'>
            <img className='w-full h-full rounded-md' src={qrcode} alt="" />
          </div>
    </>
  )
}

export default Hero