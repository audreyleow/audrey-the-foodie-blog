import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const CoverImage = ({ title, src, slug }: Props) => {
  const image = (
    <div className="aspect-video relative">
      <Image
        src={src}
        alt={`Cover Image for ${title}`}
        fill
        className="object-cover"
      />
    </div>
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={slug} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
