
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import Contact from './components/Contact';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route exact path="/" componnet={Home}/>
        <Route exact path= "/products" componnet={Product}/>
        <Route exact path="/about" componnet={About}/>
        <Route exact path= "/contact" componnet={Contact}/>
        {/* <Navigate exact path="/"/> */}
       </Routes>
       <Footer/>
    </>
    
  );
}

export default App;
