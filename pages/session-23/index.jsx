// Styles
import styles from "../../styles/SessionsPages.module.scss";

// Componentes
import Layout from "../../components/Layout";
import Session from "../../components/Sessions";
import Social from "../../components/Social";

// Next Component
import Image from "next/image";
import Link from "next/link";

//images
import paulo from "../../public/paulo.jpg";

const Session48 = () => {
  return (
    <Layout
      title="PAULO LONDRA || BZRP Music Sessions #23"
      description="Bizzarap Music Session 52 con Paulo Londra (Paulo Ezequiel Londra Farías) el 25 de abril de 2022, lanzó su «Bizarrap Music Sessions» en colaboración con el artista Bizarrap siendo una de las más esperadas a nivel global por el artista, ya que se reservó su «Session 23» tras su conflicto con la discográfica Big Ligas."
      tags={[
        "Bizarrap",
        "Paulo",
        "Paulo Londra",
        "bzrp",
        "Music Session #23",
        "Bizarrap Session 23",
        "Session 23 Paulo Londra",
      ]}
    >
      <Session id={24} />
      <article className={styles.biografy}>
        <div className={styles.paragraph}>
          <p>
            Paulo Londra nació en Córdoba, Argentina, el 12 de abril de 1998.
            Hijo de un padre gendarme, y de una madre ama de casa, Paulo nunca
            tuvo ningún estímulo musical hasta que a los 12 años vio la película
            Ocho millas, protagonizada por el rapero Eminem, gracias a una
            recomendación de su hermana, que lo integró por completo en el mundo
            del rap y el hip-hop.
          </p>
          <p>
            Durante su infancia, confesó haber sufrido bullying por intentar
            representar el estilo de los raperos, hasta que interpretó un
            freestyle por el Día del Maestro, donde logró ganarse el respeto de
            todos los que lo molestaban. En su adolescencia practicó básquetbol
            y se vio influenciado por los vídeos de YouTube que miraba sobre
            Eminem y las batallas de rap de competencias populares de plaza en
            Argentina, como el Halabalusa o El Quinto Escalón.
          </p>
          <p>
            A los 14 años se presentó por primera vez en una competencia de
            freestyle, en un torneo conocido como Sin Escritura que se celebraba
            en la plaza de su ciudad. A raíz de eso Paulo empezó a ganar
            popularidad por asistir a competencias que estaban creciendo en
            auge, como El Quinto Escalón, La Rebeldía de los Dioses, entre
            otros. Sin embargo, Paulo confesó que no le iba bien en las batallas
            de rap, ya que en esas competencias solían triunfar los raperos que
            tiraban las barras más agresivas, y él demostraba otro tipo de
            estilo más melódico y técnico. Luego de finalizar el secundario,
            estudió dos años de derecho en la universidad en pararelo a su
            hobbie de componer canciones y participar en batallas de rap
          </p>
          <p>
            En 2017 lanzó su primer sencillo, «Relax», el cual fue un éxito
            inmediato. Haciendo dúo junto al productor Ovy on The Drums, Paulo
            lanzó el sencillo «Condenado para el millón», que marcó su despegue
            mundial. En 2018 se convirtió en el artista argentino con más
            reproducciones en Spotify y YouTube gracias a sus sencillos «Adán y
            Eva», «Nena maldición» y «Chica paranormal», y sus colaboraciones en
            «Cuando te besé» junto a Becky G y «Te amo» con la banda Piso 21.
          </p>
          <p>
            En 2019 lanzó los sencillos «Forever Alone», «Por eso vine», «Tal
            vez» y «Sólo pienso en ti» (junto a De La Ghetto y Justin Quiles),
            que terminarían de conformar su lista de sencillos para el estreno
            de su primer álbum de estudio, Homerun, que fue nominado para «álbum
            del año» en los Premios Gardel. Sin embargo, en 2020 se vería
            involucrado en una polémica junto a Ovy on The Drums y Big Ligas, ya
            que lo vincularon hasta 2025 con la discográfica Warner Music en los
            derechos por sus canciones, a pesar de que Londra nunca dio su
            consentimiento para ello. Esto produjo que el cantante no pudiera
            lanzar música hasta la resolución de su contrato con el sello en
            2022.
          </p>
          <p>
            En septiembre de 2021 se empezó a rumorear que Londra podría haber
            ganado su juicio ante Big Ligas. El 11 de noviembre de 2021, se hizo
            oficial que Londra ganó su conflicto legal ante la discográfica y
            Ovy on the Drums. El 10 de marzo de 2022, Warner Music Latina
            confirmó que Londra firmó contrato con ellos. El 17 de marzo, Londra
            anunció un nuevo sencillo para el 23 de marzo. El 23 de marzo de
            2022, estrenó su sencillo «Plan A», el cual debutó en el puesto N.º
            1 de la lista Argentina Hot 100 de Billboard en su primera semana de
            lanzamiento. El 6 de abril de 2022 estrenó otro sencillo llamado
            «Chance» Unos días más tarde, el 25 de abril de 2022, lanzó su
            «Bizarrap Music Sessions» en colaboración con el artista Bizarrap
            siendo una de las más esperadas a nivel global por el artista, ya
            que se reservó su «Session 23» tras su conflicto con la discográfica
            Big Ligas.
          </p>
        </div>
        <figure className={styles.image}>
          <div>
            <Image src={paulo} alt="Paulo Ezequiel Londra Farías" />
          </div>
          <figcaption>Paulo Ezequiel Londra Farías</figcaption>
        </figure>
      </article>
      <Social
        singer="Paulo Londra"
        instagram="https://www.instagram.com/paulolondra/"
        facebook="https://web.facebook.com/paulolondra?_rdc=1&_rdr"
        twitter="https://twitter.com/PauloLondra"
        youtube="https://www.youtube.com/c/PauloLondra/featured"
        spotify="https://open.spotify.com/artist/3vQ0GE3mI0dAaxIMYe5g7z"
      />
    </Layout>
  );
};

export default Session48;
