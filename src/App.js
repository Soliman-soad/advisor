import './App.css';
import { Nav } from './components/Shared/Nav';
import { Footer } from './components/Shared/Footer';
import SliderBanner from './components/SliderBanner';

function App() {
  return (
    <div className="App">
      <Nav/>
      <SliderBanner/>
      <Footer/>
    </div>
  );
}

export default App;
