const Hero = () => {
    return (
        <section id='hero'>
            <view className='hero-left-section'>
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>We are a family owned Mediterranian restuarant, focused on traditional recipes served with a modern twist.</p>
                <button className='button reserve-button'>Reserve a table</button>
            </view>
            <view>
                <img className='hero-image' src={require('../icons_assets/restauranfood.jpg')} width='250px' alt='Resturant waiter holding food' />
            </view>
        </section>
    )
}

export default Hero;