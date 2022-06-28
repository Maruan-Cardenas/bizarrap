// Hooks
import { useState } from "react";

// styles
import styles from "./styles.module.scss";

// Next Components
import Link from "next/link";

const Nav = ({ isOpen }) => {
  return (
    <nav className={isOpen ? styles.navClose : styles.navOpen}>
      <ul>
        <li>
          <Link href="/session51">
            <a>Session 51</a>
          </Link>
        </li>
        <li>
          <Link href="">
            <a>Session 50 próximamente</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
