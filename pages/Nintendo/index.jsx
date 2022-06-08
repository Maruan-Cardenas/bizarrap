// styles
import styles from "../../styles/pagesGeneralStyles.module.scss";

// Components
import Layout from "../../components/Layout";
import TitleH2 from "../../components/TitleH2";
import Iframe from "../../components/Iframe";

// Data
import dbConnect from "../../mongo/dbConnect";
import offertsModel from "../../mongo/models/offerts.model";

const Nintendo = ({ offerts }) => {
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
      <div className={styles.cardBox}>
        {offerts.map((res, index) => (
          <div key={index} className={styles.iframeBox}>
            <Iframe uri={res.uri} />
            <h3>{res.uri}</h3>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  await dbConnect();

  /* find all the data in database */
  const result = await offertsModel.find({ category: "Nintendo" });
  const offerts = result.map((doc) => {
    const offert = doc.toObject();
    offert._id = offert._id.toString();
    return offert;
  });

  return { props: { offerts: offerts } };
}

export default Nintendo;
