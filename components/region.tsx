type Props = {
  zone: string;
};

const Region = ({ zone }: Props) => {
  return <div className="region">{zone} Region</div>;
};

export default Region;
