import NavBar from './NavBar'
import landingpage from '../assets/images/landingpage.png'
import Hero from './Hero'

const LandingPage = () => {
  return (
    <div className='h-[90vh] bg-cover bg-no-repeat bg-center lg:bg-top text-gray-300 relative' style={{ backgroundImage: `url(${landingpage})`}}>
        <div className='h-[90vh] bg-black opacity-50'></div>
        <div>
            <NavBar/>
            <Hero/>
        </div>
        
        
    </div>
  )
}

export default LandingPage