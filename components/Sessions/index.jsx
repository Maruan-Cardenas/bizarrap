// Styles
import styles from "./Session.module.scss";

// Components
import Iframe from "../Iframe";

// Next Components
import Image from "next/image";

// Data
import { PlayList } from "../PlayList";

const Session = ({ alt, image, imageName, id, children }) => {
  const video = PlayList.find((res) => res.id === id);
  return (
    <section className={styles.session}>
      <h2 className={styles.title}>{video.title}</h2>
      <div className={styles.video}>
        <Iframe uri={video.uri} title={video.title} />
      </div>
      <article className={styles.biografy}>
        {children}
        <figure>
          <Image src={image} alt={alt} />
          <figcaption>{imageName}</figcaption>
        </figure>
      </article>
    </section>
  );
};

export default Session;
