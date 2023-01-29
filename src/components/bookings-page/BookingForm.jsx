import React, { useState } from 'react'
import { availableTimes } from './availableTimes';

function BookingForm() {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState('');
    const [occasion, setOccasion] = useState('');

    function handleEvent(e) {
        e.preventDefault()
        alert('Booked')
    }

  return (
        <>
        <form className='reserve-form'>
            <div className="form-input">
                <label htmlFor="res-date">Choose date:</label>
                <input type="date" id="res-date" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <div className="form-input">
                <label htmlFor="res-time">Choose time:</label>
                <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
                    {availableTimes.map(item =>{
                        return (
                            <option>{item.time}</option>
                        )
                    })}
                </select>
            </div>
            <div className="form-input">
                <label htmlFor="guests">Number of guests:</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)} />
            </div>
            <div className="form-input">
                <label htmlFor="occasion">Occasion:</label>
                <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
            </div>
            <input type="submit" className='button booking-form-button' onClick={handleEvent} />
        </form>
        <div className="booking-info">
            <p>Date: {date}</p>
            <p>Time: {time}</p>
            <p>Number of guests: {guests}</p>
            <p>Occasion: {occasion}</p>

        </div>
        </>
  )
}

export default BookingForm