import 'react-vertical-timeline-component/style.min.css';
import '../styles/timeline.css'
import '../styles/globals.css'
import '../styles/theme.css'
import '../styles/hljs.css'
import ts from 'highlight.js/lib/languages/typescript';

import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import hljs from 'highlight.js';

hljs.registerLanguage("typescript", ts)

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const body = document.querySelector("body");
    body?.classList.add("background")
    body?.classList.add("on-background-text")
  }, []);
  return <Component {...pageProps} />
}

export default MyApp
