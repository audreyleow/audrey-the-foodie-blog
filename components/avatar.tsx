type Props = {
  zone: string;
};

const Avatar = ({ zone }: Props) => {
  return (
    <div className="flex items-center">
      {/* <img src={picture} className="w-12 h-12 rounded-full mr-4" alt={name} /> */}
      <div className="text-xl font-bold">{zone} Region</div>
    </div>
  );
};

export default Avatar;
