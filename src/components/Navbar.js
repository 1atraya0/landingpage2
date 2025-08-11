import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>still</div>
      <ul className={styles.menu}>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#corporates">CORPORATES</a></li>
      </ul>
      <a href="#hero" className={styles.cta}>START TODAY</a>
    </nav>
  );
}
