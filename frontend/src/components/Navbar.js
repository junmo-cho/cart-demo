import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Navbar = ({ click }) => {
  return (
    <nav className="navbar">
      {/* logo */}
      <div className="navbar__logo">
        <h2>MERN Shopping Cart</h2>
      </div>
      {/* links */}
      <ul className='navbar__links'>
        <li>
          <Link to="/cart">
          <FontAwesomeIcon icon={faCartShopping} />
            Cart
            <span className='cartlogo__badge'>0</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            Shop
          </Link>
        </li>
      </ul>

      {/* hamburger menu */}
      <div className='hamburger__menu' onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
}

export default Navbar;