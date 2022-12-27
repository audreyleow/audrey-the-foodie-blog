import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8">
        <Link href="/">audrey_the_foodie</Link>
      </h1>
      <div>
        <div>
          <Link href="/" className="hover:underline">
            About Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
