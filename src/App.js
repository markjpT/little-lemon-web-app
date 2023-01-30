import './App.css';
import Navigation from './components/Navigation';
import Homepage from './components/homepage/Homepage';
import About from './components/About';
import Menu from './components/Menu';
import OrderOnline from './components/OrderOnline';
import Login from './components/Login';
import Footer from './components/Footer';
import BookingPage from './components/bookings-page/BookingPage';
import { Routes, Route } from 'react-router';
import { useReducer } from 'react';
import { fetchAPI, submitAPI } from './components/api/webApi';
import {availableTimes} from './components/availableTimes';

const reducer = (availableTime, action) => {
  return availableTime
}

function App() {

  


  function updateTimes() {
    return availableTime;
  }

  function initializeTimes() {
    const times = fetchAPI(new Date())
    return times
  }

  const initialState = initializeTimes();
  const [availableTime, setAvailabletime] = useReducer(reducer, initialState);

  return (
    <>
        <div className='allComponents'>
          <Navigation />
          <h1>{availableTime}</h1>
          <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='/about' element={<About />} />
              <Route path='/menu' element={<Menu />} />
              <Route path='/order-online' element={<OrderOnline />} />
              <Route path='/login' element={<Login />} />
              <Route path='/bookings' element={<BookingPage times={availableTime} setAvailabletime={setAvailabletime} />} />
          </Routes>
          <Footer />
        </div>
    </>
  );
}

export default App;
