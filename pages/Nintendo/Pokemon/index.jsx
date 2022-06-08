// styles
import styles from "../../../styles/pagesGeneralStyles.module.scss";

// Components
import Layout from "../../../components/Layout";
import TitleH2 from "../../../components/TitleH2";
import Iframe from "../../../components/Iframe";
import offertsModel from "../../../mongo/models/offerts.model";
import dbConnect from "../../../mongo/dbConnect";
import Image from "next/image";
import Link from "next/link";

// Images
import PokemonPuryEsc from "../../../public/pokemonescarlataypurpura.jpg";

const Pokemon = ({ offerts }) => {
  return (
    <Layout
      title="Margames | Pokémon"
      description="las mejores ofertas en videojuegos de la saga Pokémon para Nintendo Switch"
      tags={[
        "Pokémon",
        "Pokémon Sword",
        "Pokémon Shield",
        "Pokémon Espada",
        "Pokémon Escudo",
        "Pokémon legends",
        "Leyendas Pokémon: Arceus",
        "Pokemon Violeta",
        "Pokémon Escarlata",
      ]}
    >
      <TitleH2>Pokémon</TitleH2>
      <section className={styles.notices}>
        <h1>Pokémon Escarlata y Pokémon Purpura</h1>
        <Image
          src={PokemonPuryEsc}
          alt="Imagen de Pokémon Purpura y Pokémon Escarlata"
        />
        <div>
          <p>
            <Link href="https://amzn.to/3MpQz8m">
              <a target="_black">Pokémon Escarlata</a>
            </Link>{" "}
            y{" "}
            <Link href="https://amzn.to/3GUT80R">
              <a target="_black">Pokémon Púrpura</a>
            </Link>{" "}
            , las nuevas entregas del universo Pokémon, llegarán a Nintendo
            Switch a finales de este año. Con estos nuevos títulos, Pokémon da
            un gran paso hacia delante al permitir a los jugadores explorar
            libremente un extenso mundo abierto lleno de vida.
          </p>
          <p>
            Como cabe esperar de un título de la saga Pokémon, el mundo abierto
            que se presenta en Pokémon Escarlata y Pokémon Púrpura está al
            alcance hasta de los más novatos.​ Disfrutarás de una aventura con
            un estilo totalmente nuevo, en la que podrás explorar libremente y
            sin tener que seguir un orden establecido por la trama. Por
            supuesto, además de todos los descubrimientos y las historias que
            están esperándote, tendrás que perfeccionar tus habilidades como
            Entrenador o Entrenadora. Conoce a los habitantes de la región y a
            muchos Pokémon y adéntrate en el mundo de Pokémon como quieras.
          </p>
        </div>
      </section>
      <section>
        <div className={styles.cardBox}>
          {offerts.map((res, index) => (
            <div key={index} className={styles.iframeBox}>
              <Iframe uri={res.uri} />
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export async function getServerSideProps() {
  await dbConnect();

  /* find all the data in database */
  const result = await offertsModel.find({ subcategory: "pokemon" });
  const offerts = result.map((doc) => {
    const offert = doc.toObject();
    offert._id = offert._id.toString();
    return offert;
  });

  return { props: { offerts: offerts } };
}

export default Pokemon;
