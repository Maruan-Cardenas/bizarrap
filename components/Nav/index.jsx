// Hooks
import { useState } from "react";

// styles
import styles from "./styles.module.scss";

// Next Components
import Link from "next/link";
import Image from "next/image";

// Images
import arrow from "../../public/flecha.png";

const Nav = ({ isOpen }) => {
  const [isSubNavOpen, setIsSubNavOpen] = useState(false);
  const CATEGORYS = {
    NINTENDO: "Nintendo",
    PLAYSTATION: "Playstation",
    XBOX: "Xbox",
    PC: "PC",
  };
  return (
    <nav className={isOpen ? styles.navClose : styles.navOpen}>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <section className={styles.navArrow}>
            <Link href="/Nintendo">
              <a>Nintendo</a>
            </Link>
            <div
              className={
                isSubNavOpen === CATEGORYS.NINTENDO
                  ? styles.arrowPosition2
                  : styles.arrowPosition1
              }
              onClick={() => {
                if (!isSubNavOpen) {
                  setIsSubNavOpen(CATEGORYS.NINTENDO);
                } else {
                  setIsSubNavOpen(false);
                }
              }}
            >
              <Image width={10} height={10} src={arrow} alt="flecha" />
            </div>
          </section>
          <section className={styles.subNav}>
            <ul
              className={
                isSubNavOpen === CATEGORYS.NINTENDO
                  ? styles.subNavOpen
                  : styles.subNavClose
              }
            >
              <li>
                <Link href="/Nintendo/Pokemon">
                  <a>Pokémon</a>
                </Link>
              </li>
            </ul>
          </section>
        </li>
        <li>
          <section className={styles.navArrow}>
            <Link href="/Playstation">
              <a>Playstation</a>
            </Link>
            <div
              className={
                isSubNavOpen === CATEGORYS.PLAYSTATION
                  ? styles.arrowPosition2
                  : styles.arrowPosition1
              }
              onClick={() => {
                if (!isSubNavOpen) {
                  setIsSubNavOpen(CATEGORYS.PLAYSTATION);
                } else if (
                  isSubNavOpen === CATEGORYS.NINTENDO ||
                  isSubNavOpen === CATEGORYS.PC ||
                  isSubNavOpen === CATEGORYS.XBOX
                ) {
                  setIsSubNavOpen(CATEGORYS.PLAYSTATION);
                } else {
                  setIsSubNavOpen(false);
                }
              }}
            >
              <Image width={10} height={10} src={arrow} alt="flecha" />
            </div>
          </section>
          <section className={styles.subNav}>
            <ul
              className={
                isSubNavOpen === CATEGORYS.PLAYSTATION
                  ? styles.subNavOpen
                  : styles.subNavClose
              }
            >
              <li>
                <Link href="/Playstation/Horizon_Zero_Down">
                  <a>Horizon Zero Down</a>
                </Link>
              </li>
            </ul>
          </section>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
