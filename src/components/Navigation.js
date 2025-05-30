import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Navigation = () => {
  const navItems = ['About', 'Skills', 'Experience', 'Education', 'Certifications'];
  return (
    <nav className="navigation">
      <div className="container">
        <ul className="nav-list">
          {navItems.map(item => (
            <li key={item}>
              <ScrollLink
                activeClass="active"
                to={item.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-70} // Adjust as needed for sticky nav height
                duration={500}
                className="nav-link"
              >
                {item}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;