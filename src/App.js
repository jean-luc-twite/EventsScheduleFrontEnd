import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About"; 
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Getstarted from "./pages/Getstarted";
function App() {
  useEffect(() => {
    AOS.init({
      offset: 0,
      easing: "ease",
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />  
        <Route exact path='/contact' element={<Contact />} /> 
        <Route exact path='/signin' element={<Login/>}/>
        <Route exact path='/signup' element={<Register/>}/>
        <Route exact path='/start' element={<Getstarted/>}/> 
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
