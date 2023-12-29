import "./Hero.scss";
import { Link } from "react-router-dom";

function Hero({ backGroundImage }) {
  return (
    <section
      id="hero"
      className="hero"
      style={{
        backgroundImage: `${"linear-gradient(rgba(20, 39, 74, 0.50), rgba(20, 39, 74, 0.50)),"}url(${backGroundImage})`,
      }}
    >
      <div className="header">
        <div className="logo">
          luxury
          <span>hotels</span>
        </div>
        <nav className="main-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/facilities">Facilities</Link>
            </li>
            <li>
              <Link to="/rooms">Rooms</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact-us</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="hero-body">
        <div className="sologan">
          <h4>Welcome to</h4>
          <h1>luxury</h1>
          <h3>hotels</h3>
          <p>
            Book your stay and enjoy Luxury <br /> redefined at the most
            affordable rates.
          </p>
        </div>
        <div className="action">
          <button>
            <img src="./src/assets/home.svg" alt="home icon" />
            book now
          </button>
          <div
            onClick={() =>
              window.scrollTo({
                top: document.getElementById("hero").offsetHeight,
                behavior: "smooth",
              })
            }
          >
            Scroll
            <img src="./src/assets/subtraction.svg" alt="subtraction icon" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
