// Styles
import styles from "./Session.module.scss";

// Components
import Iframe from "../Iframe";

// Data
import { PlayList } from "../PlayList";

const Session = ({ id, children }) => {
  const video = PlayList.find((res) => res.id === id);
  return (
    <section className={styles.session}>
      <h1 className={styles.title}>{video.title}</h1>
      <div className={styles.video}>
        <Iframe uri={video.uri} title={video.title} />
      </div>
      <article className={styles.biografy}>{children}</article>
      <article className={styles.letterBox}>
        <h2 className={styles.letterTitle}>Letra de {video.title}</h2>
        <div
          className={styles.letter}
          dangerouslySetInnerHTML={{ __html: video.letter }}
        />
      </article>
    </section>
  );
};

export default Session;
