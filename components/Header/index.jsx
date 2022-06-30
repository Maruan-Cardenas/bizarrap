// Hooks
import { useState } from "react";

// Components
import Link from "next/link";
import Nav from "../Nav/index";

//styles
import styles from "./styles.module.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className={styles.header}>
      <Link href="/">
        <a className={styles.title}>
          <h1>Bizarrap&apos;s Sessions</h1>
        </a>
      </Link>
      <div className={styles.navButton} onClick={() => setIsOpen(!isOpen)}>
        <div
          className={isOpen ? styles.NavButtonOpen : styles.navButtonClose}
        />
      </div>
      <Nav open={isOpen} />
    </header>
  );
};

export default Header;
