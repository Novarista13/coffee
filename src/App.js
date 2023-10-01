import './App.css';
import Hero from './components/Hero';
import Footer from './reusable/Footer';
import NavBar from './reusable/Nav';

function App() {
  return (
    <div className="app">
      <NavBar />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
