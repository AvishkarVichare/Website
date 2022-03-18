import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Photos from './Components/Photos';
import Sponsors from './Components/Sponsors';
import Videos from './Components/Videos';

function App() {

  return (
    <div className="App">
   <Navbar/>
   <Photos/>
   <Videos/>
   {/* <Sponsors/> */}
   <Footer/>
    </div>
  );
}

export default App;
