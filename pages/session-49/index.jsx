// Styles
import styles from "../../styles/SessionsPages.module.scss";

// Componentes
import Layout from "../../components/Layout";
import Session from "../../components/Sessions";

// Next Component
import Image from "next/image";

// Images
import proximamente from "../../public/site_in_construction.png";

const Session49 = () => {
  return (
    <Layout title="Próximamente">
      <Session
        id={50}
        altBiografy="Imágen indicando que la esta página esta actualmente en construcción"
      >
        <article className={styles.biografy}>
          <figure className={styles.imageProx}>
            <Image src={proximamente} alt="Pedro Domínguez Quevedo" />
            {/* <figcaption>Pedro Domínguez Quevedo</figcaption> */}
          </figure>
        </article>
      </Session>
    </Layout>
  );
};

export default Session49;
