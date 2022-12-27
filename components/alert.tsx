import Container from "./container";
import cn from "classnames";

type Props = {
  preview?: boolean;
};

const Alert = ({ preview }: Props) => {
  return (
    <div
      className={cn("border-b ig-bg", {
        "bg-neutral-800 border-neutral-800 text-white": preview,
        "bg-neutral-50 border-neutral-200": !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              This page is a preview.{" "}
              <a
                href="/api/exit-preview"
                className="underline hover:text-teal-300 duration-200 transition-colors"
              >
                Click here
              </a>{" "}
              to exit preview mode.
            </>
          ) : (
            <>
              <a
                href={`https://www.instagram.com/audrey_the_foodie/`}
                className="underline hover:text-blue-600 duration-200 transition-colors"
              >
                Follow me on Instagram
              </a>{" "}
              for more food recommendations!
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Alert;
