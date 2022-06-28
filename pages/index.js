// Hooks
import { useState } from "react";

// styles
import styles from "../styles/Home.module.scss";

// Components
import Iframe from "../components/Iframe";
import Image from "next/image";
import Layout from "../components/Layout";

// Data
import { PlayList } from "../components/PlayList";

// Images
import biza from "../public/bizarrapPerfil.jpg";
import Link from "next/link";

export default function Home() {
  const [uri, setUri] = useState("");
  const [title, setTitle] = useState("");

  const randomSession = () => {
    const min = Math.ceil(1);
    const max = Math.floor(PlayList.length + 1);
    const randomNumber = Math.floor(Math.random() * (max - min) + min);
    console.log(randomNumber);
    const session = PlayList.find((res) => res.id === randomNumber);
    setUri(session.uri);
    setTitle(session.title);
  };

  return (
    <Layout
      title="Bizarrap | home"
      description="La mejor musica producida por Bizarrap, todas las sesiones en la palma de tu mano"
      tags={["videojuegos", "nintendo", "playstation", "xbox", "pc"]}
    >
      <section className={styles.biografy}>
        <h2 className={styles.biografyTitle}>Bizarrap: Gonzalo Julián Conde</h2>
        <div className={styles.imageBox}>
          <Image
            src={biza}
            layout="fill"
            alt="Imágen de perfil de youtube de Bizarrap"
          />
        </div>
        <div className={styles.biografyData}>
          <div>
            <span>Nacimiento: </span>
            <span>29 de agosto de 1998.</span>
          </div>
          <div>
            <span>Nacionalidad: </span>
            <span>Argentina.</span>
          </div>
          <div>
            <span>Educado en: </span>
            <span>
              <Link href="https://www.uade.edu.ar/">
                <a target="_blanck">universidad Argentina de la Empresa.</a>
              </Link>
            </span>
          </div>
          <div>
            <span>Ocupación: </span>
            <span>DJ, Productor discográfico y Compositor.</span>
          </div>
          <div>
            <span>Años activo: </span>
            <span>Desde 2017.</span>
          </div>
          <div>
            <span>Seudónimo: </span>
            <span>Bizarrap.</span>
          </div>
          <div>
            <span>Generos: </span>
            <span>
              Electronic dance music, future, bass, trap latino, rap, hip hop y
              reguetón.
            </span>
          </div>
          <div>
            <span>Intrumentos: </span>
            <span>Sintetizador, sampler, turntable y guitarra</span>
          </div>
          <div>
            <span>Discográfica: </span>
            <span>
              <Link href="https://www.instagram.com/daleplayrecords/?hl=es">
                <a target="_blank">Dale Play Records</a>
              </Link>
            </span>
          </div>
        </div>
      </section>
      <section className={styles.ramdomSession}>
        <h2 className={styles.sessionTitle}>Random Session</h2>
        <div className={styles.sessionBox}>
          {uri ? (
            <Iframe uri={uri} title={title} />
          ) : (
            <div className={styles.placeholder}>Hola</div>
          )}
          <h3 className={styles.videoTitle}>
            {title ? title : "¿Qué canción tocará?"}
          </h3>
        </div>
        <button className={styles.sessionButton} onClick={randomSession}>
          Random
        </button>
      </section>
    </Layout>
  );
}
