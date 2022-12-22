type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <div className="container mx-auto px-5" style={{ maxWidth: "800px" }}>
      {children}
    </div>
  );
};

export default Container;
