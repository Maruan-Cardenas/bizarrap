import styles from "./styles.module.scss";

const Iframe = ({ uri }) => {
  return (
    <iframe
      className={styles.iframe}
      sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
      marginWidth="0"
      marginHeight="0"
      scrolling="no"
      frameBorder="0"
      src={uri}
    ></iframe>
  );
};

export default Iframe;
