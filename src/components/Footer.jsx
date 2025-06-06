import logo from '../assets/logo.svg'
const Footer = () => {
  return (
    <div className="bg-secondary text-gray-300 py-3">
      <div className="w-11/12 mx-auto flex flex-col md:flex-row items-center justify-between py-3">
         <div className='lg:flex-1 flex flex-row lg:text-center items-center'>
            <div className='w-7 p-1'>
              <img className='w-full' src={logo} alt="company logo"/>
            </div>
            <a href="/" className='p-0 m-0'>LuxeWash</a>
        </div>
      <div className="flex gap-3">
        <p className="hover:text-primary">About Us</p>
        <p className="hover:text-primary">Services</p>
        <p className="hover:text-primary">How it works</p>
        <p className="hover:text-primary">Faqs</p>
      </div>
      </div>
      <div className="w-full">
        <p className="text-center text-sm">© 2025 Luxe Laundry. All rights reserved. Premium laundry services.</p> 
      </div>
    </div>
  )
}

export default Footer