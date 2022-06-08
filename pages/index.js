// Components
import Layout from "../components/Layout";
import Slider from "../components/Slider";
import TitleH2 from "../components/TitleH2";

export default function Home({ offerts }) {
  return (
    <Layout
      title="Margames | home"
      description="Videojuegos de Nintendo, Playstation, Xbox y PC al mejor precio"
      tags={["videojuegos", "nintendo", "playstation", "xbox", "pc"]}
    >
      <TitleH2>Home</TitleH2>
    </Layout>
  );
}
