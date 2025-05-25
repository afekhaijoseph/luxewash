import timing from '../assets/timing.png'
import delivery from '../assets/home-delivery.png'
import gentle from '../assets/gentle.png'
import premium from '../assets/premium.png'
import qrcode from '../assets/qrcode.png'
import { FaWhatsapp } from "react-icons/fa";
import {motion} from 'motion/react'
import { useState } from 'react'
import Modal from './Modal'


const Hero = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const sentence = "Premium Laundry. Delivered to Your Doorstep.";
  const letters = sentence.split("");

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

  const ariseVariant = {
    initial:{
      opacity: 0,
      y: 50,
    },

    animate:{
      opacity: 1,
      y: 0},
  }

  const whatsappVariant = {
    initial:{
      opacity: 0,
      scale: 1,
    },

    animate:{
      opacity: 1,
      scale: [1, 1.2, 1],
      transition:{
        opacity: {
          delay: (letters.length + 10) * 0.05,
          duration: 0.8,
        },
        scale: {
          delay: (letters.length + 10) * 0.05,
      duration: 0.8,
      repeat: 5,
      repeatType: "loop",
      ease: "easeInOut"
        }
      }
    }
}

  return (
    <>
    {modalOpen && <div className="h-screen flex justify-center items-center text-center">
      <Modal showModal={modalOpen} closeModal={() => setModalOpen(false)}>
        <h2 className="text-xl font-semibold mb-4">WhatsApp QR Code</h2>
        <p>Scan to start a chat with us!</p>
        <div className='w-10/12 mx-auto'>
          <img className= "rounded-xl" src={qrcode} alt="whatsapp qrcode" />
        </div>
      </Modal>
    </div> }
      <motion.div className='absolute top-[20%] md:top-1/3 left-1/2 -translate-x-1/2 w-11/12 lg:w-8/12 mx-auto flex flex-col gap-10 text-gray-300'>
            <h1 className='text-5xl font-playfair text-center '>{letters.map((letter, index) => (
              <motion.span className='' variants={heroVariant} initial="initial" animate="animate" transition={{ delay: index * 0.05, duration: 0.5 }} key={index}>{letter}</motion.span>
            ))}</h1>
            <motion.button className='border border-gray-300 w-fit self-center p-3 rounded-md hover:bg-[#002147] hover:border-[#002147] hover:text-white' variants={ariseVariant} initial="initial" animate="animate" transition={{ delay: (letters.length + 1) * 0.05, duration: 0.5 }}>Schedule a Pick up</motion.button>
      </motion.div>
        
      <motion.div variants={ariseVariant} initial="initial" animate="animate" transition={{ delay: (letters.length + 10) * 0.05, duration: 0.3 }} className="absolute bottom-5 left-0 right-0 hidden md:flex justify-between font-playfair font-thin text-base w-full lg:w-9/12 mx-auto px-3">
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
            
            <div className='h-6 bg-gray-300 w-[2px] hidden md:block'></div>

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
      </motion.div>
      
      <div className='w-32 aspect-square mx-auto absolute hidden lg:block bottom-6 right-6'>
        <img className='w-full h-full rounded-lg' src={qrcode} alt="whatsapp qrcode" />
      </div>
      <div>
        <motion.div variants={whatsappVariant} initial="initial" animate="animate" className='absolute bottom-24 right-6 flex flex-col lg:hidden items-center'>
          <button onClick={() => setModalOpen(true)}><FaWhatsapp className='h-11 w-11'/></button>
          <p className='text-sm'>click to scan</p>
        </motion.div>
      </div>
    </>
  )
}

export default Hero