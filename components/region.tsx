type Props = {
  zone: string;
};

const Region = ({ zone }: Props) => {
  return (
    // <div className="flex items-center">
    //   {/* <img src={picture} className="w-12 h-12 rounded-full mr-4" alt={name} /> */}
    //   <div className="">{zone} Region</div>
    // </div>
    <div style={{ fontWeight: "bold" }}>{zone} Region</div>
  );
};

export default Region;
