import { ChevronDown } from 'lucide-react'
import { useState} from 'react'
import { motion } from 'motion/react'

const Faqs = () => {
    const faqVariant = {
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
      ease: 'easeIn',
      delay: 0.2,
      staggerChildren: 0.2,
    }
  }
  }

  const listVariant = {
    initial : {
    opacity: 0,
    y: 100,
  },

  animate : {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      ease: 'easeIn',
    }
  }
  }


  const faqData = [
    {question: "Where is Luxe Wash Laundry located?",
      answer: "We’re inside Muri Akinola Street, Victoria Island, Shops 33 & 58 44 Prime Shopping Mall Off Ajose Adeogun & Beside Mobil Filling Station Lekki-Epe Expressway, Victoria Island, Lagos. Just walk in or drive in and ask for Luxe Wash Laundry—you can’t miss us!"
    },
    {question: "What kind of clothes do you wash?", 
    answer: "We wash all kinds of clothes—shirts, suits, dresses, native wear, school uniforms, bedsheets, and more. Whether you’re in Victoria Island, Ikoyi, or Lekki, we handle everyday wear and luxury fabrics with care." },

    {question: "Can I come wash my own clothes?", 
    answer: "Yes! We have self-service machines available in our Victoria Island laundry lounge. It’s a clean, air-conditioned, and comfy space where you can wash, relax, and even network while doing laundry." },

    {question: "Do you iron and fold clothes too?", 
    answer: "Yes! We don’t just wash—we also iron, fold, and package your clothes neatly. Many clients in VI Lagos use this for office wear and corporate outfits so they’re always ready to go." },

    {question: "Do you pick up and deliver clothes?", 
    answer: "Absolutely! We offer free pickup and delivery within Victoria Island and nearby areas like Ikoyi and Lekki Phase 1. Just send us a WhatsApp message, and we’ll handle the rest." },

    {question: "How long does laundry take?", 
    answer: "Most clothes are ready in 24–48 hours. For busy professionals in Victoria Island, we also offer same-day service at an extra charge." },

    {question: "How do I book a laundry service or self-wash session?", 
    answer: "You can book by clicking the WhatsApp button on our website or scanning our QR code. Our Victoria Island laundry team will confirm your pickup or reserve a self-wash slot immediately." },

    {question: "What are your prices?", 
    answer: "Prices start from ₦500 per item. We also have affordable self-wash packages for students and residents in VI, Ikoyi, and Lekki. Message us on WhatsApp for the full price list." },

    {question: "Do you clean delicate or luxury clothes like lace, silk, or agbada?", 
    answer: "Yes! Our Victoria Island laundry service specializes in delicate and luxury fabrics. From lace gowns to agbadas and silk shirts, we use gentle, fabric-friendly cleaning methods." },

    {question: "How can I pay?", 
    answer: "You can pay with cash, bank transfer, or POS. Most of our clients in VI prefer transfers, but all options are available for your convenience." },

    {question: "What are your opening hours?", 
    answer: "We’re open Monday to Saturday, from 8 AM to 7 PM. Whether you’re working in an office on Victoria Island or living nearby, you can always count on us during business hours." },

  ]
    const [openIndex, setOpenIndex] = useState(null);
    const handleClick = (e) => {
      const index = e.target.closest("[data-index]")?.dataset.index;
    if (index === undefined) return;
    setOpenIndex((prev) => (prev === index ? null : index));
    }
  return (
    <motion.div id="faqs" className="py-3 w-11/12 lg:w-2/4 mx-auto" variants={faqVariant} initial="initial" whileInView="animate" viewport={{once: true, amount: 0.2}} onClick={handleClick}>
        <h2 className='my-4 text-center text-4xl font-semibold font-playfair'>Frequently Asked Questions</h2>
        <div className='my-6'>
        {faqData.map((item, index)=>{
          const isOpen = openIndex === index.toString();
          return (
            <motion.div variants={listVariant} className='border-2 rounded-lg my-2 border-gray-300 p-3' key={index} data-index={index}>
               <div className='w-full flex items-center'>
                 <p className='flex-grow text-gray-600'>{item.question}</p>
                 <div>
                   <ChevronDown className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} size={24} color={'#1e1b4b'}/> 
                 </div>
               </div>
               <p className='text-sm pt-2 text-gray-700'>{isOpen&&item.answer}</p>
           </motion.div>  
          )
          })}
        </div>
    </motion.div>
  )
}
export default Faqs