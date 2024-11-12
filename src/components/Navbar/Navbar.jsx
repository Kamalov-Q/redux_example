import './Navbar.css';
import logo from '../../assets/react.svg';
import Profile from '../Profile/Profile';
const Navbar = () => {

    console.log("Navbar Mounted");


    return (
        <div className='navbar-container'>
            <div className='logo_container'>
                <img src={logo} alt="Navbar Logo" className='navbar__logo' />
                <span>Logo</span>
            </div>
            <ul className='navbar__main'>
                <li className='navbar__item'>
                    <a className='navbar__link' href="#">Home</a>
                </li>
                <li className='navbar__item'>
                    <a className='navbar__link' href="#">About</a>
                </li>
                <li className='navbar__item'>
                    <a className='navbar__link' href="#">Contacts</a>
                </li>
                <li className='navbar__item'>
                    <Profile />
                </li>
            </ul>
        </div>
    )
}

export default Navbar
