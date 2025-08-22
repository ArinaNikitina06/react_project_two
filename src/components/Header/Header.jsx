import Logo from '../Logo/Logo'
import Nav from '../Nav/Nav';
import NavItem from '../NavItem/NavItem';
import Button from '../UI/Button/Button';
import './header.scss'
import {FaStar, FaBoxOpen, FaRegFrownOpen} from  "react-icons/fa";

const Header = ({averageRating}) => {
  return (
    <header className="header">
      <Logo>
        Logo <FaStar /> ({averageRating})
      </Logo>
      <div className="header__nav">
        <Nav>
          <NavItem href="home" active>
            Home
          </NavItem>
          <NavItem href="top">
            top 250 <FaStar />
          </NavItem>
          <NavItem href="favorite">favorite films</NavItem>
        </Nav>
      </div>
      <div className="header__btns">
        <Button use="secondary" handler={() => console.log("Вход")}>
          Вход <FaBoxOpen />
        </Button>
        <Button use="primary" handler={() => console.log("регистрация")}>
          Регистрация
          <FaRegFrownOpen />
        </Button>
      </div>
    </header>
  );
};

export default Header