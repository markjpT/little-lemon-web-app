import './App.css';
import Navigation from './components/Navigation';
import Homepage from './components/Homepage';
import About from './components/About';
import Menu from './components/Menu';
import Reservations from './components/Reservations';
import OrderOnline from './components/OrderOnline';
import Login from './components/Login';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router';


function App() {
  return (
    <>
        <div className='allComponents'>
          <Navigation />
          <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='/about' element={<About />} />
              <Route path='/menu' element={<Menu />} />
              <Route path='/reservations' element={<Reservations />} />
              <Route path='/order-online' element={<OrderOnline />} />
              <Route path='/login' element={<Login />} />
          </Routes>
          <Footer />
        </div>
    </>
  );
}

export default App;
