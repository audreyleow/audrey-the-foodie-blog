type Props = {
  country: string;
};

const Country = ({ country }: Props) => {
  return <div style={{ fontWeight: "bold" }}>{country}</div>;
};

export default Country;
