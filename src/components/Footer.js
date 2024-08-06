import "./Footer.css";

function Footer() {
  return (
    <div className="footer" id="foot">
      <div className="cont">
        <h2> Get In Touch </h2>
        <ul>
          <li>✉️: esraa@example.com</li>
          <li>☎️: +91 1234567890</li>
        </ul>
      </div>

      <div>
        <button className="btn">CONTACT ME</button>
      </div>

      <div className="icon">
        <img
          src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Facebook_svg-128.png"
          alt="Facebook"
        />

        <img
          src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Twitter5_svg-128.png"
          alt="twitter"
        />

        <img
          src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Linkedin2_svg-128.png"
          alt="lin"
        />
        <p>Copyright © 2024. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
