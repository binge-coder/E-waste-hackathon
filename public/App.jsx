import Navbar from './Navbar'
import { Routes, Route} from 'react-router-dom'
import Home from "./Home"
import Locate from "./Locate"
import Credit_Calc from "./Credit_Calc"
import About from "./About"


// import './App.css'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/locate" Component={Locate}/>
        <Route path="/credit_calc" Component={Credit_Calc}/>
        <Route path="/about" Component={About}/>
      </Routes>


    </>
  )
}

export default App
