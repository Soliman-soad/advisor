import './App.css';
import { Nav } from './components/Shared/Nav';
import { Footer } from './components/Shared/Footer';
import SliderBanner from './components/Home/SliderBanner';
import About from './components/Home/About';
import Expert from './components/Home/Expert';
import HomeServices from './components/Home/HomeServices';
import ServiceDetails from './components/Services/ServiceDetails';


function App() {
  return (
    <div className="mx-auto max-w-7xl overflow-hidden relative">
      <div className='sticky top-5'>        
      <Nav/>
      </div>
      <ServiceDetails/>
      <Footer/>
    </div>
  );
}

export default App;
