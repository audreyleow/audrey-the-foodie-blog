import Alert from "./alert";
import Footer from "./footer";
import Meta from "./meta";
import Navbar from "./navbar";
import { figtree } from "./utils/font";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className={`min-size ${figtree.className}`}>
        <Alert preview={preview} />
        <Navbar />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
