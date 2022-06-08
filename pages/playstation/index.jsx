// styles
import styles from "../../styles/pagesGeneralStyles.module.scss";

// Components
import Layout from "../../components/Layout";
import TitleH2 from "../../components/TitleH2";
import Iframe from "../../components/Iframe";

// Data
import dbConnect from "../../mongo/dbConnect";
import offertsModel from "../../mongo/models/offerts.model";

const Playstation = ({ offerts }) => {
  return (
    <Layout
      title="Margames | PlayStation"
      description="las mejores ofertas en videojuegos de Sony Playstation"
      tags={[
        "Playstation",
        "Fifa",
        "Uncharter",
        "Sony",
        "PS1",
        "PS2",
        "PS3",
        "PS4",
        "PS5",
      ]}
    >
      <TitleH2>Playstation</TitleH2>
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
  const result = await offertsModel.find({ category: "Playstation" });
  const offerts = result.map((doc) => {
    const offert = doc.toObject();
    offert._id = offert._id.toString();
    return offert;
  });

  return { props: { offerts: offerts } };
}

export default Playstation;
