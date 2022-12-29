import Link from "next/link";
import MobileNavbar from "./mobile-navbar";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="name-header md:text-6xl tracking-tighter leading-tight md:pr-8">
        <Link href="/">audrey_the_foodie</Link>
      </h1>
      <div className="options">
        <div className="indiv">
          <Link href="/overseas" className="hover:underline">
            Overseas
          </Link>
        </div>
        <div className="indiv">
          <Link href="/my_recipes" className="hover:underline">
            My Recipes
          </Link>
        </div>
        <div className="indiv">
          <Link href="/about_me" className="hover:underline">
            About Me
          </Link>
        </div>
      </div>
      <div className="options-mobile">
        <MobileNavbar />
      </div>
    </div>
  );
};

export default Navbar;
