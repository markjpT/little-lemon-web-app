import React, { useState } from 'react'

function BookingForm(props) {
    const initialDate = new Date();
    initialDate.setDate(initialDate.getDate() + 1);
    const yyyy = initialDate.getFullYear();
    const mm = initialDate.getMonth() < 10 ? "0" + (initialDate.getMonth() + 1) : initialDate.getMonth() + 1;
    const dd = initialDate.getDate() < 10 ? "0" + initialDate.getDate() : initialDate.getDate();

    const [date, setDate] = useState(yyyy + "-" + mm + "-" + dd);
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState('');
    const [occasion, setOccasion] = useState('');

    function handleEvent(e) {
        e.preventDefault()
        alert('Booked')
    }
    
    let arr = props.availableTimes;

  return (
        <>
        <h1 data-testid='heading'>Reserve a table</h1>
        <form className='reserve-form' onSubmit={handleEvent}>
            <div className="form-input">
                <label htmlFor="res-date">Choose date:</label>
                <input type="date" id="res-date" value={date} onChange={(e) => setDate(e.target.value)} required/>
            </div>
            <div className="form-input">
                <label htmlFor="res-time">Choose time:</label>
                <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
                    {
                    arr?.map((item, index) => {
                        return (
                            <option key={index}>{item}</option>
                        )
                    })}
                </select>
            </div>
            <div className="form-input">
                <label htmlFor="guests">Number of guests:</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)} required/>
            </div>
            <div className="form-input">
                <label htmlFor="occasion">Occasion:</label>
                <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
            </div>
            <input type="submit" className='button booking-form-button' />
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