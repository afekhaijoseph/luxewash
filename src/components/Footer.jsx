const Footer = () => {
  return (
    <div className="bg-secondary text-gray-300 py-3">
      <div className="w-11/12 mx-auto flex flex-col md:flex-row items-center justify-between py-3">
        <div className="py-2">
        <div>
          {/* <img src="" alt="" /> */}
        </div>
        <p>LuxeWash</p>
      </div>
      <div className="flex gap-3">
        <p className="hover:text-white">About Us</p>
        <p className="hover:text-white">Services</p>
        <p className="hover:text-white">How it works</p>
        <p className="hover:text-white">Faqs</p>
      </div>
      </div>
      <div className="w-full">
        <p className="text-center text-sm">© 2025 Luxe Laundry. All rights reserved. Premium laundry services.</p> 
      </div>
    </div>
  )
}

export default Footer