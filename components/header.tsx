import Link from "next/link";

const Header = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight md:pr-8">
        audrey_the_foodie
      </h2>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        <Link href="/" className="hover:underline">
         Check out my other food reviews here!
        </Link>
      </h4>
    </section>
  );
};

export default Header;
