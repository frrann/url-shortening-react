import FacebookIcon from "../../assets/images/icon-facebook.svg";
import TwitterIcon from "../../assets/images/icon-twitter.svg";
import PinterestIcon from "../../assets/images/icon-pinterest.svg";
import InstagramIcon from "../../assets/images/icon-instagram.svg";

const Footer = () => {
  return (
    <footer>
      <div className="logo">
        <h3 className="logo--footer">Shortly</h3>
      </div>
      <div className="footer__column">
        <div className="features">
          <p>Features</p>
          <ul>
            <li>
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
      </div>
      <div className="footer__column">
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
          <img src={FacebookIcon} alt="facebook icon" />
          <img src={TwitterIcon} alt="twitter icon" />
          <img src={PinterestIcon} alt="pinterest icon" />
          <img src={InstagramIcon} alt="instagram icon" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;