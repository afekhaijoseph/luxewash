import {useEffect, useState} from 'react'
import {motion, AnimatePresence} from 'motion/react'
import logo from '/logo.svg'
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
  <motion.nav variants={navVariant} initial="initial" animate="animate" className={`w-full text-gray-300 items-center p-2 lg:px-5 border-b border-stone-400 fixed top-0 font-lato z-50 ${isScrolled && "bg-primary"}`}>
    <AnimatePresence>
    {/* mobile navigation */}
    {isOpen && 
    <motion.nav className='fixed w-3/4 h-screen bg-secondary top-0 left-0 p-2' variants={mobileNavVariant} initial="initial" animate="animate" exit="exit" id="mobile-menu">
      <div className='lg:flex-1 flex flex-row lg:text-center items-center'>
            <div className='w-7 p-1'>
              <img className='w-full' src={logo} alt="company logo"/>
            </div>
            <a href="/" className='p-0 m-0'>LuxeWash</a>
         </div>
         <ul className='flex flex-col mt-4 items-center'>
            <li className="hover:text-gray-400 p-3 text-center border-b border-gray-300 w-fit"><Link to="about" smooth={true} duration={500} offset={-70} >About Us</Link></li>
            <li className="hover:text-gray-400 p-3 text-center border-b border-gray-300 w-fit"><Link to="services" smooth={true} duration={500} offset={-50}>Services</Link></li>
            <li className="hover:text-gray-400 p-3 text-center border-b border-gray-300 w-fit"><Link to="howitworks" smooth={true} duration={500} offset={-50}>How It Works</Link></li>
            <li className="hover:text-gray-400 p-3 text-center border-b border-gray-300 w-fit"><Link to="faqs" smooth={true} duration={500} offset={-50}>FAQs</Link></li>
         </ul>
    </motion.nav>
    }
     </AnimatePresence>
        <div className='flex justify-between items-center lg:items-end lg:w-10/12 mx-auto'>
          <ul className="gap-10 hidden lg:flex">
            <li className="hover:text-secondary"><Link  to="about" smooth={true} duration={800} offset={-70}>About Us</Link></li>
            <li className="hover:text-secondary"><Link  to="services" smooth={true} duration={800} offset={-70}>Services</Link></li>
         </ul>
      <div className='lg:flex-1 flex flex-row md:flex-col lg:text-center items-center'>
            <div className='w-7 px-1'>
              <img className='' src={logo} alt="company logo"/>
            </div>
            <a href="/" className=''>LuxeWash</a>
         </div>
         <ul className="gap-10 hidden lg:flex">
          <li className="hover:text-secondary"><Link to="howitworks" smooth={true} duration={800} offset={-70}>How It Works</Link></li>
          <li className="hover:text-secondary"><Link  to="faqs" smooth={true} duration={800} offset={-70}>FAQs</Link></li>
         </ul> 
        <div>

        <div onClick={() => setIsOpen(!isOpen)} className="hamburger w-12 lg:hidden cursor-pointer" aria-controls="mobile-menu" aria-expanded={isOpen}>
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
    </motion.nav>
  )
}

export default NavBar