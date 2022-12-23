import React from "react";
import cn from "classnames";

const FacebookIcon = ({
  className,
  ...rest
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10.4 19.3"
    className={cn("text-[#3a5a98]", className)}
    {...rest}
  >
    <path
      d="M0 10.3h3v9h3.7v-9h3.7V6.6H6.7V4.8c0-.6.4-1.1.7-1.1h3V0h-3C5 0 3 2.2 3 4.8v1.8H0v3.7z"
      fill="currentColor"
    />
  </svg>
);

export default FacebookIcon;
