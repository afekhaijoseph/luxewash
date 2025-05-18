import {useEffect, useState} from 'react'

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false)

  useEffect(()=>{
    const onScroll =()=>{
      setIsScrolled(window.scrollY > 50);
    }
    window.addEventListener('scroll', onScroll);
    return ()=>  window.removeEventListener('scroll', onScroll)
  }, []);
  return (
  <div className={`w-full text-gray-300 items-center py-4 px-5 border-b border-stone-400 fixed top-0 left-1/2 -translate-x-1/2 font-playfair z-50 ${isScrolled && "bg-[#a98f73]" }`}>
        <div className='w-full md:w-10/12 ml-auto flex justify-between'>
          <div className="gap-10 hidden md:flex">
            <a href="#about" className="hover:text-[#002147]">About Us</a>
            <a href="#services" className="hover:text-[#002147]">Services</a>
        </div>
         <div className='items-center'>
            <a href="/">LuxeWash</a>
        </div>
        <div className="gap-10 hidden md:flex">
            <a href="#how-it-works" className="hover:text-[#002147]">How It Works</a>
            <a href="#faq" className="hover:text-[#002147]">FAQs</a>
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
    </div>
  )
}

export default NavBar