import Logo from '../Logo/Logo'
import Nav from '../Nav/Nav';
import NavItem from '../NavItem/NavItem';
import './header.scss'
import {FaStar} from  "react-icons/fa";

const Header = () => {
    return <header className="header">
        <Logo>Logo <FaStar /></Logo>
        <div className="header__nav">
            <Nav>
                <NavItem>Home</NavItem>
                <NavItem>Favorite films</NavItem>
            </Nav>
        </div>
    </header>
}

export default Header