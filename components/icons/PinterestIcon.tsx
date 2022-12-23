import * as React from "react";
import cn from "classnames";

const PinterestIcon = ({
  className,
  ...rest
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16.9 20.8"
    className={cn("text-[#c8232c]", className)}
    {...rest}
  >
    <path
      d="M16.8 6.3C16.5 3.2 13.6.4 10.1.1 4.8-.5.1 2.7 0 7.9c0 2.4.8 4 2.9 4.8 1.5-1.5-.3-2.4-.5-4C2 4.3 7.1.1 11.7 2.9c3.2 1.9 2.6 9.9-1.2 10.7-.8.1-1.8-.1-2.1-.5-1.9-1.8 1.5-4.8.4-7.3-.9-2.1-3.6-.4-3.9 1.5-.2 1 .3 2 .3 2.9 0 2.1-1.3 5-1.7 7.1-.2.9-.3 2.6-.1 3.4h1.5c1-1.6 1.6-4.1 2.1-6.3.3-.2.5.4.7.6 1.8 1.4 5 .6 6.4-.7 2.1-1.7 3-5.2 2.7-8"
      fill="currentColor"
    />
  </svg>
);

export default PinterestIcon;
