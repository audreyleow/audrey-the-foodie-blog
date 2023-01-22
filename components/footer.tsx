import EmailUpdate from "./utils/email-update";
import Link from "next/link";
import { localLinks, overseasLinks } from "./footer-links";
import ReusableAccordion from "./utils/accordion";

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <div className="main-container">
        <div className="footer-container">
          <div className="top-footer">
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
              {/* <div>Join me on my foodie journey!</div> */}
              <EmailUpdate />
            </div>
          </div>
          <div className="bottom-footer">
            <div className="bottom-indiv">
              <div className="topic"> Quick Local Links</div>
              {localLinks.map((localLink) => (
                <div>
                  <Link href={localLink.route} className="link-decoration">
                    {localLink.linkText}
                  </Link>
                </div>
              ))}
            </div>
            <div className="bottom-indiv">
              <div className="topic"> Quick Overseas Links</div>
              {overseasLinks.map((overseasLink) => (
                <div>
                  <Link href={overseasLink.route} className="link-decoration">
                    {overseasLink.country} Food Reviews
                  </Link>
                </div>
              ))}
            </div>
            <div className="bottom-indiv-last">
              <div className="topic"> AudreyTheFoodie</div>
              <div>
                <Link href={`/sitemap`} className="link-decoration">
                  Site Map
                </Link>
              </div>
              <div>
                <a
                  href="https://www.instagram.com/audrey_the_foodie/"
                  className="link-decoration"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="mobile-bottom-footer">
            <ReusableAccordion />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
