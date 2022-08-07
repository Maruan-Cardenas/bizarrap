import styles from "./Social.module.scss";

// Next Components
import Image from "next/image";
import Link from "next/link";

// Images
import Facebook from "../../public/facebook.png";
import Instagram from "../../public/instagram.png";
import Twitter from "../../public/twitter.png";
import Youtube from "../../public/youtube.png";
import Spotify from "../../public/spotify.png";

const Social = ({ singer, facebook, instagram, twitter, youtube, spotify }) => {
  return (
    <article className={styles.social}>
      <h3>Enlaces de {singer}</h3>
      <div className={styles.social__container}>
        {facebook && (
          <Link href={facebook}>
            <a target="_blanck">
              <Image src={Facebook} alt="facebook" />
            </a>
          </Link>
        )}
        {instagram && (
          <Link href={instagram}>
            <a target="_blanck">
              <Image src={Instagram} alt="instagram" />
            </a>
          </Link>
        )}
        {twitter && (
          <Link href={twitter}>
            <a target="_blanck">
              <Image src={Twitter} alt="twitter" />
            </a>
          </Link>
        )}
        {youtube && (
          <Link href={youtube}>
            <a target="_blanck">
              <Image src={Youtube} alt="youtube" />
            </a>
          </Link>
        )}
        {spotify && (
          <Link href={spotify}>
            <a target="_blanck">
              <Image src={Spotify} alt="spotify" />
            </a>
          </Link>
        )}
      </div>
    </article>
  );
};

export default Social;
