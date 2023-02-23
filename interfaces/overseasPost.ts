import PostType from "./post";

interface OverseasPostType extends Omit<PostType, "tags"> {
  country: string;
}

export default OverseasPostType;
