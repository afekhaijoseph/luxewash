import { HashRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import DeleteDataPage from "./pages/DeleteData"

function App() {
  return (
    <div className='font-lato text-gray-700'>
      <Router>
        <Routes>
          <Route path='/' element= {<HomePage/>}/>
          <Route path='/privacy-policy' element= {<PrivacyPolicy/>}/>
          <Route path='/delete-data' element= {<DeleteDataPage/>}/>
        </Routes>
      </Router>
    </div>
  )
}
export default App
