import React from 'react';
import Hero from '../components/Home/hero';
import About from '../components/Home/about';
import Layout from '../components/layout';
import Background from '../components/background';
import { GatsbySeo } from 'gatsby-plugin-next-seo';
import Footer from '../components/footer';
import TechStack from '../components/Home/tech-stack';
import Customers from '../components/Home/customers';
import Contact from '../components/Home/contact';
export default function IndexPage() {
  return (
    <>
      <GatsbySeo
        title="IT Services | Kevin Kraus"
        description="I'm Kevin, a freelance full-stack developer from Hamburg Germany with a variety of IT services to offer."
        canonical="https://www.kevinkrs.com"
        language="en"
        openGraph={{
          url: 'https://www.kevinkrs.com',
          title: 'Full-Stack Development Services',
          description:
            "I'm Kevin, a freelance full-stack developer from Hamburg Germany with a variety of IT services to offer.",
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
        <TechStack></TechStack>
        {/*TODO: Add customers (PLANIT, elbWalker, Havendi, ...)*/}
        {/*<Customers></Customers>*/}
        <Contact></Contact>
        <Footer></Footer>
      </Layout>
    </>
  );
}
