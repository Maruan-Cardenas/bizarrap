// styles
import styles from "./Miniature.module.scss";

// Next Component
import Image from "next/image";
import Link from "next/link";

import { PlayList } from "../PlayList";

const Miniature = () => {
  const miniature = PlayList.filter((res) => res.miniature).reverse();
  return (
    <section className={styles.miniature}>
      <h2 className={styles.miniatureTitle}>Sesiones disponibles</h2>
      {miniature.map(({ session, title, miniature }, index) => (
        <div className={styles.item} key={index}>
          <Link href={`session-${session}`}>
            <a>
              <Image src={miniature} alt={title} />
              <h3 className={styles.title}>{title}</h3>
            </a>
          </Link>
        </div>
      ))}
    </section>
  );
};

export default Miniature;
