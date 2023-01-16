import React from "react";
import Layout from "../../components/layout";
import Head from "next/head";
import Image from "next/image";

export default function Index() {
  const EMAIL = "audreyleow@yahoo.com.sg";
  return (
    <>
      <Layout>
        <Head>
          <title>AudreyTheFoodie</title>
        </Head>
        <div className="intro-container">
          <div className="intro">
            <div className="content">
              <div className="greeting">Hi, I'm Audrey!</div>
              <br />
              I'm a Singaporean foodie on a journey to try everything yummy in
              the world! I hope this blog helps guide you in finding your next
              delicious meal! <br />
              <br />
              If you are an F&B business that wants to be featured, do contact
              me by DMing me on IG @audrey_the_foodie or dropping me an email at
              <a href={`mailto:${EMAIL}`} className="email">
                {" "}
                {EMAIL}{" "}
              </a>
              and I'll reply as soon as I can!
            </div>
            <div className="content">
              <div className="aspect-[3/4] relative">
                <Image
                  src={`/assets/personal/personal.jpg`}
                  //   src={`/assets/personal/IMG_1947.jpg`}
                  alt="profile"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
