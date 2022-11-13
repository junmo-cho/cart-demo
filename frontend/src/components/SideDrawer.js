import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './SideDrawer.css';

const SideDrawer = ({ show, click }) => {
  const sidedrawerClass = ["sidedrawer"];

  if(show) {
    sidedrawerClass.push("show");
  }

  return (
    <div className={sidedrawerClass.join(" ")}>
      <ul className='sidedrawer__links' onClick={click}>
        <li>
          <Link to="/cart">
            <FontAwesomeIcon icon={faCartShopping} />
            <span>
              Cart <span className="sidedrawer__cartbadge">0</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>
    </div>
  );
}

export default SideDrawer;