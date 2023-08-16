import { useState } from "react";
import Button from "./Button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div className="logo-container">
        <h2 className="logo">Shortly</h2>
      </div>
      <nav role="navigation">
        <div id="menuToggle">
          <div id="hamburgerMenu">
            <input
              type="checkbox"
              onClick={() => setIsOpen((isOpen) => !isOpen)}
            />
            <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>
          </div>
          <div id="menu" className={isOpen ? "expand" : null}>
            <div className="details-menu">
              <ul className="nav-links">
                <li>
                  <a className="nav-link" href="#">
                    Features
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#">
                    Pricing
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#">
                    Resources
                  </a>
                </li>
              </ul>
            </div>
            <div className="user-login-menu">
              <ul className="nav-links">
                <li>
                  <a className="nav-link" href="#">
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
