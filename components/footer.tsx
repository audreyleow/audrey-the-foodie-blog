import EmailUpdate from "./utils/email-update";

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <div className="main-container">
        <div className="footer-container">
          <div className="left-container">
            <h3 className="heading">
              Join me on my <br /> foodie journey!
            </h3>
            <a
              href="https://www.instagram.com/audrey_the_foodie/"
              className="ig-bg footer-ig duration-200 transition"
            >
              Follow me on Instagram for <br /> more food recommendations!
            </a>
          </div>

          <div className="right-container">
            <div className="sign-up-heading">
              Sign up for my weekly updates!
            </div>
            {/* <div></div> */}
            <EmailUpdate />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
