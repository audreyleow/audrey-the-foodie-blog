import React from "react";
import Container from "../../components/container";
import Layout from "../../components/layout";
import Head from "next/head";
import OverseasPost from "../../interfaces/overseasPost";

type Props = {
  allOverseasPosts: OverseasPost[];
};

export default function Index({ allOverseasPosts }: Props) {
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
