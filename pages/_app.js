import "../styles/globals.css";
import { useRouter } from 'next/router'
import React from 'react'
import Navbar from '../components/Navbar'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
