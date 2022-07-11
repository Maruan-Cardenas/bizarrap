// Styles
import styles from "./Session.module.scss";

// Components
import Iframe from "../Iframe";

// Next Components
import Image from "next/image";

// Data
import { PlayList } from "../PlayList";

const Session = ({ altBiografy, image, imageName, id, children }) => {
  const video = PlayList.find((res) => res.id === id);
  return (
    <section className={styles.session}>
      <h1 className={styles.title}>{video.title}</h1>
      <div className={styles.video}>
        <Iframe uri={video.uri} title={video.title} />
      </div>
      <article className={styles.biografy}>{children}</article>
      <article>
        <h2>{video.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: video.letra }} />
      </article>
    </section>
  );
};

export default Session;
