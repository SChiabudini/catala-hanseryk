import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer';
import Home from './components/views/home/Home';
import Services from './components/views/services/Services';
import Contact from './components/views/contact/Contact';
import Error from './components/views/error/Error';
import emailjs from 'emailjs-com';
import { useEffect } from 'react';

function App() {

  const location = useLocation();
  const hideFooter = location.pathname.includes('/contacto');

  useEffect(() => {
    emailjs.init('P0x0l4dlHg2Tkuo5I');
  }, [])

  return (
    <div className="App">
      <div className="header"><Header/></div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/servicios' element={<Services/>}/>
        <Route path='/contacto' element={<Contact/>}/>
        <Route path='/*' element={<Error/>}/>
      </Routes>
      {!hideFooter && <Footer/>}
    </div>
  );
}

export default App;
