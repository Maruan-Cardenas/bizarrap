// styles
import styles from "../../../styles/pagesGeneralStyles.module.scss";

// Components
import Layout from "../../../components/Layout";
import TitleH2 from "../../../components/TitleH2";
import Iframe from "../../../components/Iframe";
import offertsModel from "../../../mongo/models/offerts.model";
import dbConnect from "../../../mongo/dbConnect";

const Pokemon = ({ offerts }) => {
  return (
    <Layout
      title="Margames | Horizon"
      description="las mejores ofertas en videojuegos de la saga Horizon para Playstation"
      tags={[
        "Horizon",
        "Horizon Zero Dawn",
        "Horizon: Zero Dawn",
        "Horizon: forbbiden west",
      ]}
    >
      <TitleH2>Pokémon</TitleH2>
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
  const result = await offertsModel.find({ subcategory: "Horizon" });
  const offerts = result.map((doc) => {
    const offert = doc.toObject();
    offert._id = offert._id.toString();
    return offert;
  });

  return { props: { offerts: offerts } };
}

export default Pokemon;
