import "./App.css";
import WorkingImg from "./assets/images/illustration-working.svg";
import FacebookIcon from "./assets/images/icon-facebook.svg";
import TwitterIcon from "./assets/images/icon-twitter.svg";
import PinterestIcon from "./assets/images/icon-pinterest.svg";
import InstagramIcon from "./assets/images/icon-instagram.svg";

import BrandRecognitionIcon from "./assets/images/icon-brand-recognition.svg";
import DetailedRecordsIcon from "./assets/images/icon-detailed-records.svg";
import FullyCustomizableIcon from "./assets/images/icon-fully-customizable.svg";

function App() {
  return (
    <>
      <header>
        <div className="logo-container">
          <h2 className="logo">Shortly</h2>
        </div>
        <nav>
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
        </nav>
        <div className="user-login">
          <ul className="nav-links">
            <li>
              <a className="nav-link" href="#">
                Login
              </a>
            </li>
            <li>
              {/* <a className="nav-link" href="#"> */}
              <button>Sign Up</button>
              {/* </a> */}
            </li>
          </ul>
        </div>
      </header>

      <main>
        <section className="presentation">
          <div className="introduction">
            <div className="intro-text">
              <h1>More than just shorter links</h1>
              <p>
                Build your brand&apos;s recognition and get detailed insights on
                how your links are performing.
              </p>
              <button>Get Started</button>
            </div>
          </div>
          <div className="cover">
            <img className="cover-img" src={WorkingImg} alt="working-image" />
          </div>
        </section>
        <section className="url-shortening">
          <input type="text" placeholder="Shorten a link here..." />
          <button>Shorten it!</button>
        </section>
        <section className="statistics">
          <div className="intro-text">
            <h2>Advanced Statistics</h2>
            <p>
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </p>
          </div>
          <div className="cards">
            <div className="card">
              <div className="advanced-icon">
                <img src={BrandRecognitionIcon} />
              </div>
              <h4>Brand Recognition</h4>
              <p>
                Boost your brand recognition with each click. Generic links
                don&apos;t mean a thing. Branded links help instil confidence in
                your content.
              </p>
            </div>
            <div className="card">
              <div className="advanced-icon">
                <img src={DetailedRecordsIcon} />
              </div>
              <h4>Detailed Records</h4>
              <p>
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </div>
            <div className="card">
              <div className="advanced-icon">
                <img src={FullyCustomizableIcon} />
              </div>
              <h4>Fully Customizable</h4>
              <p>
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </div>
            <div className="horizontal-line"> </div>
          </div>
        </section>
        <section className="get-started">
          <div className="get-started-container">
            <h2>Boost your links today</h2>
            <button>Get Started</button>
          </div>
        </section>
      </main>
      <footer>
        <div className="logo">
          <h3>Shortly</h3>
        </div>
        <div className="features">
          <p>Features</p>
          <ul>
            <li>
              {" "}
              <a href="#">Link Shortening</a>
            </li>
            <li>
              <a href="#">Branded Links</a>
            </li>
            <li>
              <a href="#">Analytics</a>
            </li>
          </ul>
        </div>
        <div className="resources">
          <p>Resources</p>
          <ul>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Developers</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
        </div>
        <div className="company">
          <p>Company</p>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Our Team</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="social">
          <img src={FacebookIcon} />
          <img src={TwitterIcon} />
          <img src={PinterestIcon} />
          <img src={InstagramIcon} />
        </div>
      </footer>
      <div className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="#">Fran M.</a>.
      </div>
    </>
  );
}

export default App;
