// styles
import styles from "../../styles/pagesGeneralStyles.module.scss";

// Components
import Layout from "../../components/Layout";
import TitleH2 from "../../components/TitleH2";
import Iframe from "../../components/Iframe";

// Data
import { PRODUCTS } from "../../components/Iframe/Products.js";

const Nintendo = () => {
  const nintendo = PRODUCTS.filter((res) => res.category === "Nintendo");
  return (
    <Layout
      title="Margames | Nintendo"
      description="las mejores ofertas en videojuegos de Nintendo, videojuegos para Nintendo Switch"
      tags={[
        "Nintendo",
        "Nintendo Switch",
        "Pokémon",
        "Mario",
        "The legend of Zelda",
        "metroid",
      ]}
    >
      <TitleH2>Nintendo</TitleH2>
      <section>
        <div className={styles.cardBox}>
          {nintendo.map((res, index) => (
            <div key={index} className={styles.iframeBox}>
              <Iframe uri={res.uri} />
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Nintendo;
