import { useState } from "react";
import Button from "../UI/Button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div className="logo">
        <h2 className="logo--header">Shortly</h2>
      </div>
      <nav role="navigation">
        <div id="menuToggle">
          <div id="hamburgerMenu">
            <input
              type="checkbox"
              onClick={() => setIsOpen((isOpen) => !isOpen)}
            />
            <div className="hamburger__lines">
              <span className="hamburger__line line1"></span>
              <span className="hamburger__line line2"></span>
              <span className="hamburger__line line3"></span>
            </div>
          </div>
          <div id="menu" className={isOpen ? "expand" : null}>
            <div className="menu__content">
              <ul className="nav__links">
                <li>
                  <a className="nav__link" href="#">
                    Features
                  </a>
                </li>
                <li>
                  <a className="nav__link" href="#">
                    Pricing
                  </a>
                </li>
                <li>
                  <a className="nav__link" href="#">
                    Resources
                  </a>
                </li>
              </ul>
            </div>
            <div className="menu-login__content">
              <ul className="nav__links">
                <li>
                  <a className="nav__link" href="#">
                    Login
                  </a>
                </li>
                <li>
                  <Button rounded={true}>Sign Up</Button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
