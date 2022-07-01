// Components
import Layout from "../../components/Layout";
import Session from "../../components/Sessions";

// Images
import bizarrap from "../../public/Bizarrap-actual.jpg";

const Session51 = () => {
  return (
    <Layout>
      <Session id={51} image={bizarrap}>
        Biografia
      </Session>
    </Layout>
  );
};

export default Session51;
