import 'react-vertical-timeline-component/style.min.css';
import '../styles/timeline.css'
import '../styles/globals.css'
import '../styles/theme.css'


import type { AppProps } from 'next/app'
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect( () => { 
    const body = document.querySelector("body");
    body?.classList.add("background")  
    body?.classList.add("on-background-text") 
  });
  return <Component {...pageProps} />
}

export default MyApp
