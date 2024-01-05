import "./Hero.scss";
import Navigation from "../Navigation/Navigation";

function Hero({ backGroundImage }) {
  return (
    <section
      id="hero"
      className="hero"
      style={{
        backgroundImage: `${"linear-gradient(rgba(20, 39, 74, 0.50), rgba(20, 39, 74, 0.50)),"}url(${backGroundImage})`,
      }}
    >
      <Navigation />
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
