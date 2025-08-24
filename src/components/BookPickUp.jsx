import Form from "./Form"
import Whatsapp from "./Whatsapp"
import { useState} from "react"
import { motion } from "motion/react"

const BookPickUp = () => {
  const [view, setView] = useState('first');

const bipVariant = {
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
    <div className="bg-gray-200 py-14">
      <motion.section variants={bipVariant} initial="initial" whileInView="animate" viewport={{once: true, amount: 0.2}}>
        <div className="text-center px-3">
        <h2 className='my-4 text-center text-4xl font-semibold font-playfair'>Book a Pickup</h2>
        <p>We make it easy to schedule a pickup for your items</p>
      </div>
      <div className="flex flex-col items-center my-6 bg-white w-full md:w-10/12 mx-auto shadow-xl rounded-md">
        <h3 className="text-2xl my-3 text-center">Quickest way to book:</h3>
        <div className="w-10/12 mx-auto">
          <div className="flex gap-2 my-3 bg-gray-100 p-1.5 rounded-md">
          <button onClick={()=>setView('first')} className={`basis-full border border-white p-1 rounded-md ${view === 'first' && 'bg-gray-300'}`}>Book Laundry Pickup Via Whatsapp</button>
          <button onClick={()=>setView('second')} className={`basis-full border border-white p-1 rounded-md ${view === 'second' && 'bg-gray-300'}`}>Schedule laundry pickup with our form</button>
        </div>
        <div>
          {view === 'first' && <Whatsapp/>}
          {view === 'second' && <Form/>}
        </div>
        </div>
      </div>
      </motion.section>
    </div>
  )
}

export default BookPickUp