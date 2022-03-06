import React from 'react';
import Hero from '../components/Home/hero';
import About from '../components/Home/about';
import Layout from '../components/layout';
import Background from '../components/background';
import { GatsbySeo } from 'gatsby-plugin-next-seo';
export default function IndexPage() {
  return (
    <>
      <GatsbySeo
        title="Full-Stack Development Services"
        description="I'm Kevin, a full-stack developer and graphic designer from Hamburg Germany with a variety of services to offer."
        canonical="https://www.kevinkrs.com"
        openGraph={{
          url: 'https://www.kevinkrs.com',
          title: 'Full-Stack Development Services',
          description:
            "I'm Kevin, a full-stack developer and graphic designer from Hamburg Germany with a variety of services to offer.",
          site_name: 'kevinkrs | Home',
          images: [
            {
              url: 'https://www.kevinkrs.com/logo.png',
              width: 8018,
              height: 4509,
              alt: 'Company logo',
            },
          ],
        }}
      />
      <Background />
      <Layout>
        <Hero></Hero>
        <About></About>
      </Layout>
    </>
  );
}
