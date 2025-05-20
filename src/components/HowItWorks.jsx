 import bookwhatsapp from '../assets/bookwhatsapp.png'
import pickup from '../assets/pickup.png'
import laundry from '../assets/dryclean.png'
import delivery from '../assets/doorstep.png'
import {motion} from 'motion/react'
 
const hiwVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.4,
    }
  }
}

const boxVariants = {
   initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: "easeIn",
    }
  }
}
 const HowItWorks = () => {
   return (
    //visual show four step process with either icons or image sliders
     <motion.div id="howitworks" className='my-10 flex flex-col items-center md:h-[50vh] lg:h-[70vh]' variants={hiwVariants} initial="initial" whileInView="animate" viewport={{once: true, amount: 0.2}}>
        <h2 className='my-4 text-center text-4xl font-semibold font-playfair'>How it works</h2>
        <div className='my-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 w-9/12'>
          <motion.div variants={boxVariants} className='relative rounded-lg shadow-lg border flex flex-col items-center py-6'>
            <div className='absolute bg-primary w-12 h-12 text-white p-3 text-xl font-bold rounded-full -top-5 -left-5'>
              <p>01</p>
            </div>
          <div className='max-w-14'>
              <img src={bookwhatsapp} alt="" />
          </div>
            <p>Book via Whatsapp</p>
          </motion.div>

          <motion.div variants={boxVariants} className='relative rounded-lg shadow-lg border flex flex-col items-center py-6'>
            <div className='absolute bg-primary w-12 h-12 text-white p-3 text-xl font-bold rounded-full -top-5 -left-5'>
              <p>02</p>
            </div>
            <div className='w-14'>
              <img src={pickup} alt="" />
          </div>
            <p>We Pick up</p>
          </motion.div>

          <motion.div variants={boxVariants} className='relative rounded-lg shadow-lg border flex flex-col items-center py-6'>
            <div className='absolute bg-primary w-12 h-12 text-white p-3 text-xl font-bold rounded-full -top-5 -left-5'>
              <p>03</p>
            </div>
            <div className='max-w-14'>
              <img src={laundry} alt="" />
          </div>
            <p>We clean with care</p>
          </motion.div>

          <motion.div variants={boxVariants} className='relative rounded-lg shadow-lg border flex flex-col items-center py-6'>
            <div className='absolute bg-primary w-12 h-12 text-white p-3 text-xl font-bold rounded-full -top-5 -left-5'>
              <p>04</p>
            </div>
            <div className='max-w-14'>
              <img src={delivery} alt="" />
          </div>
            <p>We deliver</p>
          </motion.div>
        </div>
        <div className='mt-8 md:mt-0'>
          <motion.a variants={boxVariants} href="https://wa.me/234XXXXXXXXXX" target="_blank" className="bg-green-500 text-white px-4 py-2 rounded inline-block">Chat on WhatsApp</motion.a>
        </div>
        
     </motion.div>
   )
 }
 
 export default HowItWorks