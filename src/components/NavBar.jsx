import {useEffect, useState} from 'react'
import {motion} from 'motion/react'

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false)

  const navVariant = {
    initial: {
      opacity: 0,
      y: -100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      }
     }

  }
  useEffect(()=>{
    const onScroll =()=>{
      setIsScrolled(window.scrollY > 50);
    }
    window.addEventListener('scroll', onScroll);
    return ()=>  window.removeEventListener('scroll', onScroll)
  }, []);
  return (
  <motion.div variants={navVariant} initial="initial" animate="animate" className={`w-full text-gray-300 items-center py-4 px-5 border-b border-stone-400 fixed top-0 font-lato z-50 ${isScrolled && "bg-primary"}`}>
        <div className='flex justify-between lg:w-10/12 mx-auto'>
          <div className="gap-10 hidden md:flex">
            <a href="#about" className="hover:text-gray-400">About Us</a>
            <a href="#services" className="hover:text-gray-400">Services</a>
         </div>
         <div className='lg:flex-1 lg:text-center'>
            <a href="/">LuxeWash</a>
         </div>
         <div className="gap-10 hidden md:flex">
            <a href="#howitworks" className="hover:text-gray-400">How It Works</a>
            <a href="#faq" className="hover:text-gray-400">FAQs</a>
         </div> 
        <div>

        <div onClick={() => setIsOpen(!isOpen)} className="hamburger w-12 md:hidden cursor-pointer">
          <div className="w-full flex flex-col gap-1 transition-all duration-300">
            <span
              className={`block h-1 bg-white rounded-md transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-1 bg-white rounded-md transition-opacity duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-1 bg-white rounded-md transition-transform duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </div>
        </div>
    </div>     
    </motion.div>
  )
}

export default NavBar