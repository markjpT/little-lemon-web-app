import Nav from './Nav';
import Logo from '../icons_assets/logo.svg';

const Header = ( )=> {
    return (
        <section id='header'>
          <Nav src={Logo} />
        </section>
    )
}

export default Header