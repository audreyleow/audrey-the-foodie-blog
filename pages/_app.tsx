import { AppProps } from "next/app";
import "../styles/index.css";
import { MDXProvider } from "@mdx-js/react";
import Image from "next/image";

const components = {
  h1: (props) => <h1 {...props} className="text-xl" />,
  p: (props) => <p {...props} className="mb-6" />,
  img: (props: any) => (
    <span className="block relative aspect-video">
      <Image {...props} fill className="object-cover" />
    </span>
  ),
  th: (props) => (
    <th {...props} className="border-solid border-2 border-black" />
  ),
  td: (props) => (
    <td
      {...props}
      className="border-solid border-2 border-black min-w-[180px] p-[10px]"
    />
  ),
  table: (props) => (
    <table {...props} className="border-solid border-2 border-black w-full" />
  ),
};

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  );
}
