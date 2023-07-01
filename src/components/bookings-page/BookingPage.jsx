import React from 'react'
import './Styles.css'
import BookingForm from './BookingForm'

function BookingPage(props) {
  return (
    <>
        <section id='booking'>
                <BookingForm availableTimes={props.times} dispatch={props.dispatchs} formSubmit={props.form} />
        </section>
        <section id="restaurant-display">
            <img className='' src={require('../../icons_assets/restaurant-chef-b.webp')} alt='Resturant waiter holding food' />
            <img className='' src={require('../../icons_assets/mario-and-adrian.webp')} alt='Resturant waiter holding food' />
            <img className='' src={require('../../icons_assets/restaurant.webp')} alt='Resturant waiter holding food' />
        </section>
    </>
  )
}

export default BookingPage