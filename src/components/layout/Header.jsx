// src/components/Header.jsx
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="site-header">
      <div className="site-logo">JOHN DOE</div>

      <nav className="main-nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/mentions-legales">Mentions légales</NavLink>
      </nav>
    </header>
  );
}

export default Header;
