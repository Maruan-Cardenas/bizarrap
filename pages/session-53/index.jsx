// Styles
import styles from "../../styles/SessionsPages.module.scss";

// Components
import Layout from "../../components/Layout";
import Session from "../../components/Sessions";
import Link from "next/link";

// Images
import shakira from "../../public/miniature/Shakira.png";

// Next Components
import Image from "next/image";
import Social from "../../components/Social";

const Session53 = () => {
  return (
    <Layout
      title="SHAKIRA || BZRP Music Sessions #53"
      description="Bizzarap Music Session 53 con SHAKIRA (Shakira Isabel Mebarak Ripoll ) la esperadísima colaboración entre el argentino Bizarrap y la Colombiana Shakira Isabel Mebarak Ripoll "
      tags={["Bizarrap", "shakira", "Shakira Isabel Mebarak Ripoll ", "bzrp", "bizarrap session", "session"]}
    >
      <Session id={53} />
      <article className={styles.biografy}>
        <div className={styles.paragraph}>
          <p>
            Su alto nivel de ventas, versatilidad vocal y su éxito global la ha llevado a ser calificada por importantes revistas y medios con el apodo de «Reina del pop latino. Es considerada un icono mundial de la música latina, desde su debut en los años 90 hasta la actualidad ha tenido una gran repercusión en la escena musical, siendo citada en numerosas ocasiones por inspirar e influir a toda una generación de cantantes. Con una carrera artística de más de 30 años es una de las artistas con mayores ventas discrográficas en la historia, con más 80 millones de ventas, siendo también la artista latina con mayores ventas en los Estados Unidos.
          </p>
          <p>
            Shakira es una de las artistas más galardonadas de todos los tiempos y la artista latina más premiada, posee diversos premios, entre ellos están varios, 41 Latin Billboard Music Awards, 7 Billboard Music Awards, 3 Grammy Awards, una nominación al globo de oro, 12 Latin Grammy y un Grammy latino a persona del año, siendo la artista más joven en ganarlo y la única suramericana en poseer uno. También ostenta varios Guinness World Records y una estrella en el paseo de la fama de Hollywood.
          </p>
        </div>
        <figure className={styles.image}>
          <div>
            <Image src={shakira} alt="Shakira Isabel Mebarak Ripoll" />
          </div>
          <figcaption>Shakira Isabel Mebarak Ripoll</figcaption>
        </figure>
      </article>
      <Social
        singer="Shakira"
        instagram="https://www.instagram.com/shakira/"
        twitter="https://twitter.com/shakira"
        youtube="https://www.youtube.com/channel/UCYLNGLIzMhRTi6ZOLjAPSmw"
        spotify="https://open.spotify.com/artist/0EmeFodog0BfCgMzAIvKQp"
      />
    </Layout>
  );
};

export default Session53;
