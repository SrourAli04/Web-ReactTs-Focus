import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {


  return (
    <div className="app-container">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App
