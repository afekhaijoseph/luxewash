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
    {question: "Where is Luxe Wash Laundry located?", answer: "We’re inside Muri Akinola Street, Victoria Island, Shops 33 & 58 44 Prime Shopping Mall Off Ajose Adeogun & Beside Mobil Filling Station Lekki-Epe Expressway, Victoria Island, Lagos. Just walk in or drive in and ask for Luxe Wash Laundry—you can’t miss us!" },
    {question: "What kind of clothes do you wash?", answer: " We wash all kinds of clothes—like shirts, suits, dresses, native wear, school uniforms, and even bedsheets." },
    {question: "Can I come wash my own clothes?", answer: "Yes! We have special washing machines just for clients who want to wash by themselves. It’s clean, comfy, and a great place to network and relax while doing laundry." },
    {question: "Do you iron and fold clothes too?", answer: "Yes! We can wash, iron, fold, and package your clothes. You just relax—we’ll handle everything." },
    {question: "Do you pick up and deliver clothes?", answer: "Yes, we do! Just send us a WhatsApp message, and we’ll come get your clothes and bring them back when they’re ready." },
    {question: "How long does laundry take?", answer: "Most clothes are ready in 24–48 hours, but we also offer same-day service if you need it faster (extra charge applies)." },
    {question: "How do I book a laundry service or self-wash session?", answer: "Just click the WhatsApp button on our website or scan the QR code to message us directly." },
    {question: "What are your prices?", answer: "Prices start from ₦500 per item. We also have self-wash packages at friendly rates. Just message us to get the full list." },
    {question: "Do you clean delicate or luxury clothes like lace, silk, or agbada?", answer: "Yes! We’re experts in delicate fabrics and treat every item with love and care so it stays in great shape." },
    {question: "How can I pay?", answer: "You can pay with cash, bank transfer, or card (POS). Whatever works for you!" },
    {question: "What are your opening hours", answer: "We’re open Monday to Saturday, from 8 AM to 7 PM. We rest on Sundays." },
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
                 <p className='flex-grow text-gray-600 font-semibold'>{item.question}</p>
                 <div>
                   <ChevronDown className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} size={24} color={'#1e1b4b'}/> 
                 </div>
               </div>
               <p className='text-base text-gray-700'>{isOpen&&item.answer}</p>
           </motion.div>  
          )
          })}
        </div>
    </motion.div>
  )
}
export default Faqs