import logo from './logo.svg';
import './App.css';
import Card from './components/card'
import Navbard from './components/navbard';
import Footer from './components/footer';


function App() {
  return (
    <div className="App">
      <Navbard />
      <div className='container'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        
      </div>
      <Footer />
    </div>
  );
}

export default App;
