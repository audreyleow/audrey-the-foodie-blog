type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <div className="container mx-auto mobile" style={{ maxWidth: "950px" }}>
      {children}
    </div>
  );
};

export default Container;
