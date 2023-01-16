import Container from "./container";
import cn from "classnames";

const Alert = () => {
  return (
    <div className={cn("border-b ig-bg", "bg-neutral-50 border-neutral-200")}>
      <Container>
        <div className="py-2 text-center text-sm">
          <>
            <a
              href={`https://www.instagram.com/audrey_the_foodie/`}
              className="underline hover:text-blue-600 duration-200 transition-colors"
            >
              Follow me on Instagram
            </a>
            &nbsp;for more food recommendations!
          </>
        </div>
      </Container>
    </div>
  );
};

export default Alert;
