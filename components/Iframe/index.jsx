import styles from "./Iframe.module.scss";

const Iframe = ({ uri, title }) => {
  return (
    <iframe
      className={styles.iframe}
      src={`https://www.youtube.com/embed/${uri}`}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

export default Iframe;
