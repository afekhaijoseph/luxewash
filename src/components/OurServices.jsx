import folded from '../assets/images/folded-clothes.jpg'
import dryclean from '../assets/images/dryclean.jpg'
import luxury from '../assets/images/luxury.jpg'
import hotel from '../assets/images/hotel.jpg'
import { motion } from 'motion/react'

const OurServices = () => {
   const serviceVariant = {
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
  return (
    <div id="services" className='bg-secondary text-white py-8'>   
    <motion.div variants={serviceVariant} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.2 }}>
      <h2 className='my-4 text-center text-4xl font-bold font-playfair'>Services</h2>
         <div className='grid grid-cols-1 gap-6 w-11/12 mx-auto my-10 md:grid-cols-2 lg:grid-cols-4'>
             <div className='h-full'>
             <h3 className='text-lg font-semibold my-2'>Regular Wash & Fold</h3>
             <div className='w-full h-[150px]'>
               <img className="w-full h-full object-cover rounded-2xl"src={folded} alt="" />
             </div>
             <div>
                <p>Everyday laundry, handled with care. Fresh, neatly folded clothes </p>
             </div>
             <p></p>
             </div>

             <div className='h-full'>
             <h3 className='text-lg font-semibold my-2'>Dry Cleaning (Suits, Native..)</h3>
             <div className='w-full h-[150px]'>
                 <img className='w-full h-full object-cover rounded-2xl' src={dryclean} alt="" />
             </div>
             <div>
                <p>Gentle on fabrics, powerful on stains. Perfect care for your finest outfits.</p>
             </div>
             </div>

             <div className=''>
             <h3 className='text-lg font-semibold my-2'>Luxury Care (Silk, Wool, etc.)</h3>
             <div className='w-full h-[150px]'>
                 <img className='w-full h-full object-cover rounded-2xl' src={luxury} alt="" />
             </div>
             <div>
                <p>Delicate garments deserve exceptional treatment. Expert handling for premium fabrics that require a softer touch.</p>
             </div>
            </div>
             <div className=''>
               <h3 className='text-lg font-semibold my-2'>Corporate (Offices, Hotels)</h3>
             <div className='w-full h-[150px]'>
                 <img className='w-full h-full object-cover rounded-2xl'src={hotel} alt="" />
             </div>
             <div>
                <p>Reliable, high-volume laundry solutions tailored for businesses. Impeccable service that reflects your brand’s standard.</p>
             </div>
             </div>
             <div>
         </div>
         </div>
         <div className='w-full flex items-center'>
            <button className='mx-auto border-2 p-2 rounded-md hover:bg-white hover:text-[#36454F] hover:border-[#36454F]'>Get a Quote</button>      
         </div>
    </motion.div> 
    </div>
  )
}

export default OurServices