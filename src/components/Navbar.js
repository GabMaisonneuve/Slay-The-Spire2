import styles from "./NavBar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>MEGA CRIT</div>
      <ul className={styles.navLinks}>
        <li>
          <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#trailer">Trailer</a>
        </li>
        <li>
          <a href="#classes">Classes</a>
        </li>
        <li>
          <a href="#features">Features</a>
        </li>
      </ul>
    </nav>
  );
}
