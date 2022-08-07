// Styles
import styles from "../../styles/SessionsPages.module.scss";

// Componentes
import Layout from "../../components/Layout";
import Session from "../../components/Sessions";

// Next Component
import Image from "next/image";
import Link from "next/link";

//Images
import villana from "../../public/villano.jpg";
import Social from "../../components/Social";

const Session51 = () => {
  return (
    <Layout
      title="QUEVEDO || BZRP Music Sessions #51"
      description="Bizzarap Music Session 51 con Villano Antillano. Villana Santiago Pacheco salta a la fama mundial tras lanzar su colaboración junto al productor argentino Bizarrap."
      tags={[
        "Bizarrap",
        "Villano",
        "Villano Antillano",
        "Villana Santiago Pacheco",
        "bzrp",
      ]}
    >
      <Session id={51} />
      <article className={styles.biografy}>
        <div className={styles.paragraph}>
          <p>
            Villana Santiago Pacheco Nació en la ciudad puertorriqueña de
            Bayamón el 27 de marzo de 1995,13​ desde pequeña tuvo interes por la
            música y sus primeros referentes musicales fueron la música que
            solía escucharse en su casa, donde destaca a Rubén Blades y Gustavo
            Cerati
          </p>
          <p>
            Su carrera musical comienza en el año 2019​ con la publicación de su
            EP Tiranía donde trata temas como los prejuicios y estereotipos
            hacia las personas trans y LGBT. Desde entonces Villana ha publicado
            música regularmente colaborando con artistas del ámbito musical
            latinoamericano como Young Miko ó Paopao, sus letras están cargadas
            con mensajes en contra del machismo y homofobia presente en la
            música urbana.
          </p>
          <p>
            En el 2022 salta a la fama mundial tras lanzar su colaboración
            «Villano Antillano: Bzrp Music Sessions, Vol. 51 junto al productor
            argentino Bizarrap la cual logró posicionarse como decimo primera en
            el Billboard Argentina Hot 10011​ y como decimo segunda en el
            Billboard Spain Hot 10012​, fue la primera artista transgénero y no
            binaria en entrar en la Top 50: Global de Spotify.
          </p>
        </div>
        <figure className={styles.image}>
          <div>
            <Image src={villana} alt="Villana Santiago Pacheco" />
          </div>
          <figcaption>Villana Santiago Pacheco</figcaption>
        </figure>
      </article>
      <Social
        singer="Villano Antillano"
        youtube="https://www.youtube.com/c/villanoantillano/about"
        facebook="https://web.facebook.com/villanoantillano?_rdc=1&_rdr"
        twitter="https://twitter.com/villanomalandro"
        spotify="https://open.spotify.com/artist/1pi7nGhOM7PTHR5YEgXVGq?si=rGRw5c6eRuiABZWaqwFPGg&dl_branch=1&nd=1"
        instagram="https://www.instagram.com/villanoantillano/"
      />
    </Layout>
  );
};

export default Session51;
