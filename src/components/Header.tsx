import { NavLink } from "react-router";
import { useState } from "react";
import siteLogo from '../assets/images/site-logo.png';
import styles from './Header.module.css';
import CloseIcon from "./UI/CloseIcon";
import MobileMenuIcon from "./UI/MobileMenuIcon";

export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <NavLink to="." onClick={() => setShowMobileMenu(false)}>
          <img src={siteLogo} alt="Give Me Foods Website Logo" />
        </NavLink>
      </div>
      <div className={styles.linksContainer}>
        <div onClick={() => setShowMobileMenu(prevValue => !prevValue)}>
          {!showMobileMenu && <MobileMenuIcon />}
          {showMobileMenu && <CloseIcon />}
        </div>
        <nav id={showMobileMenu ? styles.showMobileMenu : ''}>
          <ul>
            <li>
              <NavLink to="." className={({isActive}) => isActive ? styles.active : ''} onClick={() => setShowMobileMenu(false)}>Home</NavLink>
            </li>
            <li>
              <NavLink to="about" className={({isActive}) => isActive ? styles.active : ''} onClick={() => setShowMobileMenu(false)}>About</NavLink>
            </li>
            <li>
              <NavLink to="faq" className={({isActive}) => isActive ? styles.active : ''} onClick={() => setShowMobileMenu(false)}>FAQ</NavLink>
            </li>
            <li>
              <NavLink to="contact" className={({isActive}) => isActive ? `${styles.button} ${styles.active}` : styles.button} onClick={() => setShowMobileMenu(false)}>Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}