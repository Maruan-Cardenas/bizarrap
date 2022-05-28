// styles
import styles from "../../../styles/pagesGeneralStyles.module.scss";

// Components
import Layout from "../../../components/Layout";
import TitleH2 from "../../../components/TitleH2";
import Iframe from "../../../components/Iframe";

// Data
import { PRODUCTS } from "../../../components/Iframe/Products.js";

const Pokemon = () => {
  const pokemon = PRODUCTS.filter((res) => res.subCategory === "Pokemon");
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
      <section>
        <div className={styles.cardBox}>
          {pokemon.map((res, index) => (
            <div key={index} className={styles.iframeBox}>
              <Iframe uri={res.uri} />
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Pokemon;
