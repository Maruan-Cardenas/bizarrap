import styles from "./styles.module.scss";
const TitleH2 = ({ children }) => {
  return <h2 className={styles.title}>{children}</h2>;
};
export default TitleH2;
