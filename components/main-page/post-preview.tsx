import Avatar from "../avatar";
import DateFormatter from "../date-formatter";
import CoverImage from "../cover-image";
import Link from "next/link";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  zone: string;
  nearestMRT: string;
  location: string;
  rating: string;
  collab: boolean;
  slug: string;
};

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  zone,
  nearestMRT,
  location,
  rating,
  collab,
  slug,
}: Props) => {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link
          as={`/posts/${slug}`}
          href="/posts/[slug]"
          className="hover:underline"
        >
          {title}
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}...</p>
      <Avatar zone={zone} />
    </div>
  );
};

export default PostPreview;
