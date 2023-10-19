import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from './components/About';
import Events from "./components/Events";
import Address from "./components/Address";
import Footer from "./components/Footer";
import Book from "./pages/Book";



function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Events />
      <Address />
      <Book />
      <Footer />
    </div>
  );
}

export default App;
