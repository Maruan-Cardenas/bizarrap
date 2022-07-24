import "../styles/globals.scss";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  const key = process.env.NEXT_PUBLIC_ANALYTICS_ID;

  return (
    <>
      <Script
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4272631115818771"
        crossOrigin="anonymous"
      />
      <Script
        async
        custom-element="amp-ad"
        src="https://cdn.ampproject.org/v0/amp-ad-0.1.js"
      />
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${key}`}
      />
      <Script strategy="lazyOnload" id="my-script">
        {`
          window.dataLayer = window.dataLayer || []; 
          function gtag(){
            dataLayer.push(arguments)
          }
          gtag('js', new Date())
          gtag('config', '${key}')
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
