import logo from './logo.svg';
import './App.css';
import Navbard from './components/navbard';
import Footer from './components/footer';
import Hero from './components/hero';


function App() {
  return (
    <div className="App">
      <Navbard />
      <Hero/>
      <Footer />
    </div>
  );
}

export default App;
