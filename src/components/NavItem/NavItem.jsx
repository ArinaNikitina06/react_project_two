import './navItem.scss'

const NavItem = ({ children, href, active}) => {
  return (
    <li className={`nav-item  ${active ? "nav-item_active" : "" }`}>
      {href && <a className={`nav-item__link ${active ? 'nav-item__link_active' : ''}`} href={href}>{children}</a>}
      {!href && children}
    </li>
  );
};

export default NavItem