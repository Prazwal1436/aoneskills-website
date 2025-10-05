import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutSection from '../components/AboutSection';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Digital Extra (A-One Skills)</title>
        <meta name="description" content="Learn about A-One Skills: our mission, values, team, and why we are the best digital agency for your business." />
      </Head>
      <Navbar />
      <AboutSection />
      <Footer />
    </>
  );
}
