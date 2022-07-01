import "../styles/globals.scss";
import Script from "next/script";

{
  /*
<ins class="adsbygoogle"
     style="display:block; text-align:center;"
     data-ad-layout="in-article"
     data-ad-format="fluid"
     data-ad-client="ca-pub-4272631115818771"
     data-ad-slot="8559582849"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script> */
}

function MyApp({ Component, pageProps }) {
  const key = process.env.NEXT_PUBLIC_ANALYTICS_ID;
  return (
    <>
      <Script
        strategy="lazyOnload"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4272631115818771"
        crossOrigin="anonymous"
      />
      <Script id="my-script" strategy="lazyOnload">
        {`
          (adsbygoogle = window.adsbygoogle || []).push({});
        `}
      </Script>
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
