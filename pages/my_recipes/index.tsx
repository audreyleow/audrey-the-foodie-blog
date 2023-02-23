import React from "react";
import Container from "../../components/container";
import Layout from "../../components/layout";
import Head from "next/head";

export default function Index() {
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
