import LandingPage from '../components/LandingPage'
import About from '../components/About'
import OurServices from '../components/OurServices'
import HowItWorks from '../components/HowItWorks'
import BookPickUp from '../components/BookPickUp'
import Faqs from '../components/Faqs'
import Footer from '../components/Footer'
import DoItYourself from '../components/DoItYourself'
const HomePage = () => {
  return (
    <div>
        <LandingPage/>
        <About/>
        <OurServices/>
        <HowItWorks/>
        <BookPickUp/>
        <DoItYourself/>
        <Faqs/>
        <Footer/>
    </div>
  )
}

export default HomePage