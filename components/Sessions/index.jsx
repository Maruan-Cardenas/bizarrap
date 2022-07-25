import { useState } from "react";

// Styles
import styles from "./Session.module.scss";

// Components
import Iframe from "../Iframe";
import { motion } from "framer-motion";

// Data
import { PlayList } from "../PlayList";

const Session = ({ id }) => {
  const video = PlayList.find((res) => res.id === id);
  const [letterOpen, setLetterOpen] = useState(false);
  return (
    <section className={styles.session}>
      <h1 className={styles.title}>{video.title}</h1>
      <div className={styles.video}>
        <Iframe uri={video.uri} title={video.title} />
      </div>
      <article className={styles.letterBox}>
        <h2 className={styles.letterTitle}>Letra de {video.title}</h2>
        <motion.div
          className={styles.letter}
          dangerouslySetInnerHTML={{ __html: video.letter }}
          animate={{ height: letterOpen ? "100%" : "200px" }}
          transition={{ duration: 1 }}
        />
        <button onClick={() => setLetterOpen(!letterOpen)}>
          {letterOpen ? "Ver menos" : "Ver más"}
        </button>
      </article>
    </section>
  );
};

export default Session;
