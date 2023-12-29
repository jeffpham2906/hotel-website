import "./footer.scss";

function Footer() {
  return (
    <footer>
      <div className="triagle"></div>
      <div className="footer-infor">
        <div>
          <h1>luxury</h1>
          <span>hotels</span>
        </div>
        <p>
          497 Evergreen Rd. Roseville, CA 95673 <br /> +44 345 678 903 <br />
          luxury_hotels@gmail.com
        </p>
      </div>
      <div className="footer-detail">
        <ul>
          <li>About Us</li>
          <li>Contact</li>
          <li>Terms & Conditions</li>
        </ul>
      </div>
      <div className="footer-detail">
        <ul>
          <li>
            <img src="./src/assets/fb.png" alt="facebook icon" />
            Facebook
          </li>
          <li>
            {" "}
            <img src="./src/assets/tw.png" alt="twitter icon" />
            Twitter
          </li>
          <li>
            {" "}
            <img src="./src/assets/ig.svg" alt="instagram icon" />
            Instagram
          </li>
        </ul>
      </div>
      <div className="footer-subscribe">
        <p>Subscribe to our newsletter</p>
        <form action="#">
          <input type="text" placeholder="Email Address" />
          <button className="btn">ok</button>
        </form>
      </div>
    </footer>
  );
}

export default Footer;
