// Hooks
import { useState } from "react";

// Components
import Nav from "../Nav";
import Link from "next/link";

//styles
import styles from "./styles.module.scss";

const Header = ({ offerts }) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(offerts);
  return (
    <header className={styles.header}>
      <Link href="/">
        <a className={styles.title}>
          <div>MarGames</div>
        </a>
      </Link>
      <Nav isOpen={isOpen} offerts={offerts} />
      <div className={styles.navButton} onClick={() => setIsOpen(!isOpen)}>
        <div
          className={isOpen ? styles.NavButtonOpen : styles.navButtonClose}
        />
      </div>
    </header>
  );
};

export default Header;
