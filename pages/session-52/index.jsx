// Styles
import styles from "../../styles/SessionsPages.module.scss";

// Components
import Layout from "../../components/Layout";
import Session from "../../components/Sessions";
import Link from "next/link";

// Images
import quevedo from "../../public/Quevedo_cantante_foto.jpg";
import miniatureQuevedo from "../../public/miniatura_quevedo.jpg";

// Next Components
import Image from "next/image";
import Social from "../../components/Social";

const Session52 = () => {
  return (
    <Layout
      title="QUEVEDO || BZRP Music Sessions #52"
      description="Bizzarap Music Session 52 con Quevedo (Pedro domínguez quevedo) la esperadísima colaboración entre el argentino Bizarrap y el canario Pedro Domínguez Quevedo"
      tags={["Bizarrap", "Quevedo", "Pedro Domínguez Quevedo", "bzrp"]}
    >
      <Session id={52} />
      <article className={styles.biografy}>
        <div className={styles.paragraph}>
          <p>
            Pedro Domínguez Quevedo (Gran Canaria, 7 de diciembre de 2001),
            conocido artísticamente como Quevedo, es un cantante español de
            música urbana.
          </p>
          <p>
            Con apenas 20 años, Quevedo es una figura que crece en popularidad
            en la escena española y, a través de las redes , en todo el mundo.
            Un salto exponencial ha sido el que experimentó luego de colaborar,
            recientemente,{" "}
            <Link href="https://www.youtube.com/watch?v=a03iy6vnUdQ">
              <a target="_blanck">con Ed Sheeran en el single “2step”</a>
            </Link>
            , que en YouTube ya superó el millón de reproducciones
          </p>
          <p>
            Antes de iniciarse en la música de manera profesional, Quevedo
            realizó freestyle. Actualmente reside en las Islas Canarias, y es
            considerado uno de los referentes de la música urbana española a
            pesar de tener pocos años de trayectoria. Poco a poco fue
            incrementando en el mundo de la música urbana después de su
            lanzamiento de{" "}
            <Link href="https://www.youtube.com/watch?v=iyjMwZQTN-o">
              <a target="_blanck">&quot;Cayó la noche Remix&quot;</a>
            </Link>{" "}
            con grandes artistas canarios, a partir de ahí comenzó abrirse
            puertas.
          </p>
          <p>
            La Music Session 52 fue publicitada en el Burger King situado en la
            Carretera Vicálvaro a la Estación de O&apos;Donnel, 11 en Madrid.
            Donde se ofrecia un menú especial Bizarrap que incluía un muñeco de
            plástico de Bizarrap, el cual emitía una cación donde se distinguía
            la voz de Quevedo.
          </p>
        </div>
        <figure className={styles.image}>
          <div>
            <Image src={quevedo} alt="Pedro Domínguez Quevedo" />
          </div>
          <figcaption>Pedro Domínguez Quevedo</figcaption>
        </figure>
      </article>
      <Social
        singer="Quevedo"
        instagram="https://www.instagram.com/quevedo.pd/"
        twitter="https://twitter.com/pedrodquevedo"
        youtube="https://www.youtube.com/c/QuevedoPD"
        spotify="https://open.spotify.com/artist/52iwsT98xCoGgiGntTiR7K?si=woV5b46PT7aKn3z1nmc7fg&nd=1"
      />
    </Layout>
  );
};

export default Session52;
