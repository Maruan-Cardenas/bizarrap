const Ads = () => {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
  const slot = process.env.NEXT_PUBLIC_ADSENSE_SLOT;
  return (
    <amp-ad
      width="100vw"
      height="320"
      type="adsense"
      data-ad-client={client}
      data-ad-slot={slot}
      data-auto-format="rspv"
      data-full-width=""
    >
      <div overflow=""></div>
    </amp-ad>
  );
};

export default Ads;
