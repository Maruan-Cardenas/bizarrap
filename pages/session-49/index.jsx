// Styles
import styles from "../../styles/SessionsPages.module.scss";

// Componentes
import Layout from "../../components/Layout";
import Session from "../../components/Sessions";
import Social from "../../components/Social";

// Next Component
import Image from "next/image";

// Images
import Residente from "../../public/residente.jpg";

const Session49 = () => {
  return (
    <Layout
      title="RESIDENTE || BZRP Music Sessions #49"
      description="Bizzarap Music Session 49 con Residente. René Pérez Joglar (San Juan, Puerto Rico; 23 de febrero de 1978), es un rapero, compositor, cantante, productor y activista puertorriqueño. fundador y vocalista de Calle 13 (2004-2014). En 2015 inició su carrera como solista.​ Su música combina la música del mundo y el contenido de sus letras principalmente están relacionados con temas sociales y políticos.​ Como líder de Calle 13 ha ganado un total de 31 premios Grammy Latinos y en su carrera en solitario otros 5."
      tags={[
        "Bizarrap",
        "Residente",
        "Rene Pérez Joglar",
        "Rene Pérez",
        "Rene",
        "Music Session 49",
      ]}
    >
      <Session id={50} />
      <article className={styles.biografy}>
        <div className={styles.paragraph}>
          <p>
            René Pérez Joglar (San Juan, Puerto Rico; 23 de febrero de 1978), es
            un rapero, compositor, cantante, productor y activista
            puertorriqueño. fundador y vocalista de Calle 13 (2004-2014). En
            2015 inició su carrera como solista.​ Su música combina la música
            del mundo y el contenido de sus letras principalmente están
            relacionados con temas sociales y políticos.​ Como líder de Calle 13
            ha ganado un total de 31 premios Grammy Latinos y en su carrera en
            solitario otros 5.
          </p>
          <p>
            Nació en un hospital de Hato Rey, un sector que pertenece al área de
            San Juan. Su entorno familiar es clave en su proceso. Su madre, Flor
            Joglar de Gracia, formó parte de la compañía Teatro del 60, y en sus
            años de estudiante perteneció a la Juventud Independentista
            Universitaria (JIU)​ Su padre, Reinaldo Pérez Ramírez, era un
            abogado laboralista, músico y escritor también independentista que
            participó en diferentes brigadas internacionales en la Nicaragua
            sandinista y en Cuba.​ Estudió en la escuela libre de música y a los
            17 años junto a Louis García, trombonista y arreglista, fundan la
            banda Latin Tempo.
          </p>
          <p>
            En 2005, Residente debutó por primera vez en la música junto a una
            agrupación musical con el nombre de Calle 13 lanzando un álbum de
            estudio homónimo al nombre del grupo.​ Ese mismo año, The New York
            Times invitó a los estadounidenses a visitar Puerto Rico para que
            tuvieran la oportunidad de ver a lo que llamaron el «primer
            intelectual que llega al estrellato del género reguetón»,
            refiriendose a él.​ Para el 2006, junto a su agrupación musical
            obtuvo más reconocimiento por sus sencillos, Se Vale To-To​ y
            Atrévete-te-te.
          </p>
        </div>
        <figure className={styles.image}>
          <div>
            <Image src={Residente} alt="René Pérez Joglar" />
          </div>
          <figcaption>René Pérez Joglar</figcaption>
        </figure>
      </article>
      <Social
        singer="Residente"
        youtube="https://www.youtube.com/c/ResidenteOfficial/featured"
        twitter="https://twitter.com/Residente?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
        spotify="https://open.spotify.com/artist/5GcWBUX00IPuWVGMIRK1sS"
        instagram="https://www.instagram.com/residente/?hl=en"
      />
    </Layout>
  );
};

export default Session49;
