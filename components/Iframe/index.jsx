import styles from "./styles.module.scss";

const Iframe = ({ uri }) => {
  return <iframe className={styles.iframe} src={uri}></iframe>;
};

export default Iframe;
