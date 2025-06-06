import {useEffect, useState} from 'react'
import {motion, AnimatePresence} from 'motion/react'
import logo from '../assets/logo.svg'
import { Link } from 'react-scroll'
import { LiaNodeJs } from 'react-icons/lia'

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

  const mobileNavVariant = {
     initial: { opacity: 0, x: -100 },
     animate: { 
      opacity: 1,
       x: 0,
      transition: {
      duration: 0.3,
     } },
     exit: {
      opacity: 0,
      x: -100,
      transition: {
      duration: 0.3,
     } },
  }
  useEffect(()=>{
    const onScroll =()=>{
      setIsScrolled(window.scrollY > 50);
    }
    window.addEventListener('scroll', onScroll);
    return ()=>  window.removeEventListener('scroll', onScroll)
  }, []);
  return (
  <motion.div variants={navVariant} initial="initial" animate="animate" className={`w-full text-gray-300 items-center p-2 lg:px-5 border-b border-stone-400 fixed top-0 font-lato z-50 ${isScrolled && "bg-primary"}`}>
    <AnimatePresence>
    {/* mobile navigation */}
    {isOpen && 
    <motion.div className='fixed w-3/4 h-screen bg-secondary top-0 left-0 p-2' variants={mobileNavVariant} initial="initial" animate="animate" exit="exit">
      <div className='lg:flex-1 flex flex-row lg:text-center items-center'>
            <div className='w-7 p-1'>
              <img className='w-full' src={logo} alt="company logo"/>
            </div>
            <a href="/" className='p-0 m-0'>LuxeWash</a>
         </div>
         <div className='flex flex-col mt-4 items-center'>
          <Link to="about" smooth={true} duration={500} offset={-70} className="cursor-pointer">About Us</Link>
          <Link to="services" smooth={true} duration={500} offset={-50}  className="hover:text-gray-400 p-3 text-center border-b border-gray-300 w-fit">Services</Link>
          <Link to="howitworks" smooth={true} duration={500} offset={-50}  className="hover:text-gray-400 p-3 text-center border-b border-gray-300 w-fit">How It Works</Link>
          <Link to="faqs" smooth={true} duration={500} offset={-50}  className="hover:text-gray-400 p-3 text-center border-b border-gray-300 w-fit ">FAQs</Link>
         </div>
    </motion.div>
    }
     </AnimatePresence>
        <div className='flex justify-between items-center lg:items-end lg:w-10/12 mx-auto'>
          <div className="gap-10 hidden lg:flex">
            <Link  to="about" smooth={true} duration={800} offset={-70} className="hover:text-secondary">About Us</Link>
            <Link  to="services" smooth={true} duration={800} offset={-70} className="hover:text-secondary">Services</Link>
         </div>
      <div className='lg:flex-1 flex flex-row md:flex-col lg:text-center items-center'>
            <div className='w-7 px-1'>
              <img className='' src={logo} alt="company logo"/>
            </div>
            <Link href="/" className=''>LuxeWash</Link>
         </div>
         <div className="gap-10 hidden lg:flex">
            <Link to="howitworks" smooth={true} duration={800} offset={-70} className="hover:text-secondary">How It Works</Link>
            <Link  to="faqs" smooth={true} duration={800} offset={-70}  className="hover:text-secondary">FAQs</Link>
         </div> 
        <div>

        <div onClick={() => setIsOpen(!isOpen)} className="hamburger w-12 lg:hidden cursor-pointer">
          <div className="w-full flex flex-col gap-1 transition-all duration-300">
            <span
              className={`block h-1 bg-gray-300 rounded-md transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-1 bg-gray-300 rounded-md transition-opacity duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-1 bg-gray-300 rounded-md transition-transform duration-300 ${
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