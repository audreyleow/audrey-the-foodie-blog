import React from "react";
import Link from "next/link";
import Layout from "../../components/layout";
import Head from "next/head";
import OverseasPost from "../../interfaces/overseasPost";
import Post from "../../interfaces/post";
import CountryRoute from "../../components/utils/country-route";
import { join } from "path";
import { getAllPosts } from "../../lib/api";

type Props = {
  allOverseasPosts: OverseasPost[];
  allPosts: Post[];
};

export default function Index({ allOverseasPosts, allPosts }: Props) {
  return (
    <>
      <Layout>
        <Head>
          <title>AudreyTheFoodie</title>
        </Head>
        <div className="sitemap-container">
          <div className="sitemap-heading">Site Map</div>
          <div>
            <div>
              <div className="sitemap-subheading">SG Food Reviews</div>
              <ul className="sitemap-segment">
                {allPosts.map((post) => {
                  return (
                    <li className="sitemap-indiv">
                      <Link href={`/posts/${post.slug}`}>{post.title}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <div className="sitemap-subheading">Overseas</div>
              <ul className="sitemap-segment">
                {allOverseasPosts.map((overseasPost) => {
                  return (
                    <li className="sitemap-indiv">
                      <Link
                        href={`/overseas/${CountryRoute(
                          overseasPost.country
                        )}/${overseasPost.slug}`}
                      >
                        {overseasPost.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <div className="sitemap-subheading">My Recipes</div>
              <ul className="sitemap-segment">
                <div className="sitemap-indiv">
                  <Link href={`/my_recipes`}>My Recipes</Link>
                </div>
              </ul>
            </div>
            <div>
              <div className="sitemap-subheading">About Me</div>
              <ul className="sitemap-segment">
                <div className="sitemap-indiv">
                  <Link href={`/about_me`}>About Me</Link>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const overseasPostsDirectory = join(process.cwd(), "_overseas");
  const allOverseasPosts = getAllPosts(overseasPostsDirectory, [
    "title",
    "slug",
    "country",
  ]);

  const postsDirectory = join(process.cwd(), "_posts");
  const allPosts = getAllPosts(postsDirectory, ["title", "slug"]);

  return {
    props: { allOverseasPosts, allPosts },
  };
};
