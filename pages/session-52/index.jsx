// Styles
import styles from "./Session52.module.scss";

// Components
import Layout from "../../components/Layout";
import Session from "../../components/Sessions";

// Images
import quevedo from "../../public/Quevedo_cantante_foto.jpg";
import miniatureQuevedo from "../../public/miniatura_quevedo.jpg";

// Next Components
import Image from "next/image";

const Session52 = () => {
  return (
    <Layout>
      <Session
        id={52}
        altBiografy="Imágen de Quevedo"
        miniature={miniatureQuevedo}
        altMiniature="Miniatura de la Bizarrap Music Session 52 con Quevedo"
      >
        <article className={styles.biografy}>
          <figure className={styles.image}>
            <Image src={quevedo} alt="Pedro Domínguez Quevedo" />
            <figcaption>Pedro Domínguez Quevedo</figcaption>
          </figure>
          <p>
            Pedro Domínguez Quevedo (Gran Canaria, 7 de diciembre de 2001),
            conocido artísticamente como Quevedo, es un cantante español de
            música urbana.
          </p>
          <p>
            Antes de iniciarse en la música de manera profesional, Quevedo
            realizó freestyle. Actualmente reside en las Islas Canarias, y es
            considerado uno de los referentes de la música urbana española a
            pesar de tener pocos años de trayectoria. Poco a poco fue
            incrementando en el mundo de la música urbana después de su
            lanzamiento de &quot;Cayó la noche Remix&quot; con grandes artistas
            canarios, a partir de ahí comenzó abrirse puertas.
          </p>
        </article>
      </Session>
    </Layout>
  );
};

export default Session52;
