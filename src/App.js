//for those who are going to build or update this website in future: I have kept css of some pages in App.css, Ok...,thank you for reading 

import './App.css';
import Footer from './Components/Footer';
import About from './Components/About';
import Navbar from './Components/Navbar';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home';
import Gallery from './Components/Gallery';
import Invitation from './Components/Invitation';

function App() {

  return (
    
    <>
    <Router>


   <Navbar/>

   <Routes>


    <Route exact path='/' element={<Home/>}></Route>
    <Route exact path='/about' element={<About/>}></Route>
    <Route exact path='/gallery' element={<Gallery/>}></Route>
    <Route exact path='/invitation' element={<Invitation/>}></Route>

   </Routes>
    
   <Footer/>
   </Router>

    </>
  );
}

export default App;
