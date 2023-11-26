import { FaPhone, FaLocationPin, FaMessage } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer__section">
      <div className="footer__contact-section">
        <div className="footer__website">
          <h2 className="footer__head">website</h2>
          <div className="footer__para-container">
            <p className="footer__para">Categories</p>
            <p className="footer__para">Activities Near Me</p>
            <p className="footer__para">Add a Place</p>
          </div>
        </div>
        <div className="footer__important">
          <h2 className="footer__head">important</h2>
          <div className="footer__para-container">
            <p className="footer__para">Terms and Conditions</p>
            <p className="footer__para">Privacy Policy</p>
            <p className="footer__para">Terms of Usage</p>
          </div>
        </div>
        <div className="footer__contact">
          <h2 className="footer__head">contact</h2>
          <div className="footer__para-container">
            <p className="footer__para">
              <FaLocationPin
                style={{
                  margin: "0 0.2rem",
                }}
              />
              Mumbai, India
            </p>

            <p className="footer__para">
              <FaPhone
                style={{
                  margin: "0 0.2rem",
                }}
              />{" "}
              +91 1234567890
            </p>
            <p className="footer__para">
              <FaMessage
                style={{
                  margin: "0 0.2rem",
                }}
              />
              littlemoments@mail.com
            </p>
          </div>
        </div>
      </div>
      <div className="footer__rights">
        <p className="footer__rights-para">
          All Rights Reserverd by littlemoments.in
        </p>
        <a href="#sectionTop" className="footer__anchor">
          Back to Top
        </a>
      </div>
      <div className="footer__bg">
        <h1>little moments</h1>
      </div>
    </footer>
  );
};

export default Footer;
