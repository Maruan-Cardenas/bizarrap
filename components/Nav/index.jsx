// Hooks
import { useState } from "react";

// styles
import styles from "./styles.module.scss";

// Next Components
import Link from "next/link";
import Image from "next/image";

// motion Component
import { motion } from "framer-motion";

// Images
import subNavIcon from "../../public/subNavIcon.png";

const Nav = ({ open }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={open ? styles.navClose : styles.navOpen}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li onClick={() => setIsOpen(!isOpen)}>
          <div>
            <span
              className={isOpen ? styles.subNavIcon : styles.subNavIconOpen}
            >
              <Image src={subNavIcon} alt="Icono de submenu" />
            </span>
            Sessions
          </div>
          {isOpen && (
            <motion.ol
              className={styles.subNav}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <li>
                <Link href="session-52">Session 52 - Quevedo</Link>
              </li>
              <li>
                <Link href="session-50">Session 51 próximanente</Link>
              </li>
              <li>
                <Link href="session-50">Session 50 próximanente</Link>
              </li>
              <li>
                <Link href="session-49">Session 49 próximanente</Link>
              </li>
            </motion.ol>
          )}
        </li>
        <li>
          <Link href="/biografia">Biografía</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
