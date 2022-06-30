import styles from "./Biografy.module.scss";
import Layout from "../../components/Layout";

const Biografy = () => {
  return (
    <Layout>
      <article className={styles.biografy}>
        <p>
          Gonzalo Julián Conde (Ramos Mejía, Buenos Aires, 29 de agosto de
          1998), conocido artísticamente como Bizarrap (abreviado BZRP), es un
          DJ, compositor y productor discográfico argentino. Es conocido por sus
          BZRP Music Sessions y sus BZRP Freestyle Sessions, sesiones que
          realiza junto a otros artistas
        </p>
        <p>
          Sus inicios se remontan al año 2017, cuando comenzó su carrera
          artística subiendo ediciones de batallas de freestyle argentinas
          mezcladas con ediciones y remezclas a la plataforma YouTube. Estos
          trabajos audiovisuales incrementaron el reconocimiento de Bizarrap en
          la escena local y terminó participando como productor de canciones de
          artistas argentinos.
        </p>
        <p>
          En 2018 lanzó las denominadas Freestyle Session junto a freestylers
          argentinos como Trueno, Sony, Kodigo, entre otros. En 2019 sacó su
          primer Music Session con el artista argentino Bhavi, esto
          desencadenaría una serie de sesiones con artistas locales e
          internacionales como Nicky Jam, Nicki Nicole, Trueno, Zaramay, Cazzu,
          Nathy Peluso, YSY A, Bejo, Don Patricio, L-Gante, Anuel AA, Kiddo
          Toto, Residente, Paulo Londra, Tiago PZK, entre otros.
        </p>
        <p>
          Su mayor éxito global fue su colaboración con Residente en marzo de
          2022, sin embargo su BZRP Music Sessions con más reproducciones en la
          plataforma YouTube es la número 36 con la artista Nathy Peluso.
        </p>
      </article>
    </Layout>
  );
};

export default Biografy;