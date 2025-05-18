import aboutthree from '../assets/images/about-lxws.png'
import aboutone from '../assets/images/about.jpg'
import { motion } from 'motion/react'

const About = () => {
  const aboutVariant = {
    initial : {
    opacity: 0,
    y: 100,
  },

  animate : {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      type: 'tween',
      ease: 'easeIn'
    }
  }
  }

  return (
    <motion.div className='my-14 w-10/12 lg:w-3/5 mx-auto' variants={aboutVariant} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.2}}>
      <h2 className='my-4 text-center text-4xl font-bold font-playfair'>About Us</h2>
      <div className="flex gap-6 my-6 flex-col md:flex-row h-[600px] md:h-[40vh] lg:h-[60vh] items-center">
      <div className="flex-1 grid-layout basis-full gap-3 md:h-full max-h-80"> {/* Set a fixed or relative height */}
      <div className="area-aboutone rounded-lg">
        <img className="w-full h-full object-cover rounded-lg" src={aboutone} alt="" />
      </div>
      <div className="area-abouttwo flex items-center justify-center border rounded-lg bg-[#27333a] text-white p-2">
        <p className="text-2xl font-semibold rounded-lg ">Luxury</p>
      </div>
      <div className="area-aboutthree h-full w-full rounded-lg">
        <img className="w-full h-full object-cover rounded-lg" src={aboutthree} alt="" />
      </div>
    </div>

        <div className='basis-full'>
          <p className='text-center md:text-left text-lg leading-relaxed'>At LuxeWash, luxury isn't just a label — it's the standard we live by. We provide premium, fabric-friendly laundry
             care with unmatched attention to detail, ensuring every garment is handled with elegance and precision. From delicate
             fabrics to designer pieces, our service is designed to preserve quality and deliver a seamless, personalized experience
             that feels as refined as it looks.
        </p>
        </div>
      </div>
        
    </motion.div>
  )
}

export default About