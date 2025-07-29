import Logo from '../Logo/Logo'
import './header.scss'
import {FaStar} from  "react-icons/fa";

const Header = () => {
    return <header className="header">
        <Logo>Logo <FaStar /></Logo>
    </header>
}

export default Header