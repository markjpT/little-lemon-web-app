import Logo from '../icons_assets/logo.svg'

const Footer = (props)=> {
    return (
            <section id='footer'>
                <img src={Logo} alt='Logo' />
                <div className='doormat-navigation'>
                    <h4>Doormat Navigation</h4>
                    <ul>
                        <li><a href='/home'>Home</a></li>
                        <li><a href='/about'>About</a></li>
                        <li><a href='/menu'>Menu</a></li>
                        <li><a href='/reservations'>Reservations</a></li>
                        <li><a href='/order-online'>Order Online</a></li>
                        <li><a href='/login'>Login</a></li>
                    </ul>
                </div>
                <div>
                    <h4>Contact</h4>
                    <p>97 Bob Junction</p>
                    <p>+31 505 256 2654</p>
                    <p>littlelemon@restuarant.com</p>
                </div>
                <div>
                    <h4>Social Media Links</h4>
                    <ul>
                        <li><a href='www.instagram.com'>Instagram</a></li>
                        <li><a href='www.twitter.com'>Twitter</a></li>
                        <li><a href='www.facebook.com'>Facebook</a></li>
                    </ul>
                </div>
            </section>
    )
}

export default Footer