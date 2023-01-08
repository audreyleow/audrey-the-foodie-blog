import React from "react";
import Container from "../../components/container";
import MoreOverseasStories from "../../components/overseas/overseas-more-stories";
import HeroPost from "../../components/main-page/hero-post";
import Intro from "../../components/intro";
import Layout from "../../components/layout";
import Head from "next/head";
import OverseasPost from "../../interfaces/overseasPost";

type Props = {
  allOverseasPosts: OverseasPost[];
};

export default function Index({ allOverseasPosts }: Props) {
  // const heroPost = allOverseasPosts[0];
  // const morePosts = allOverseasPosts.slice(1);
  // console.log(allOverseasPosts);
  return (
    <>
      <Layout>
        <Head>
          <title>AudreyTheFoodie</title>
        </Head>
        <Container>
          <div
            style={{
              margin: "auto",
              display: "flex",
              justifyContent: "center",
              paddingTop: "50px",
              fontSize: "30px",
            }}
          >
            Check back soon!
          </div>
          {/*           <Intro text={`Looking for something specific?`} />

          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              zone={heroPost.country}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreOverseasStories posts={morePosts} />} */}
        </Container>
      </Layout>
    </>
  );
}

// export const getStaticProps = async () => {
//   const allOverseasPosts = getAllOverseasPosts([
//     "title",
//     "date",
//     "slug",
//     "coverImage",
//     "excerpt",
//     "nearestMRT",
//     "country",
//   ]);

//   return {
//     props: { allOverseasPosts },
//   };
// };
