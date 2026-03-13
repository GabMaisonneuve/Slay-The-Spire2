import styles from "./Trailer.module.css";

export default function Trailer() {
  return (
    <section id="trailer">
      <div className={styles.trailerContainer}>
        <div className={styles.trailerVideo}>
          <iframe
            src="https://www.youtube.com/embed/PW22jwFNxU8"
            title="Slay the Spire 2 Trailer"
            allowFullScreen
          ></iframe>
        </div>

        <div className={styles.trailerText}>
          <h2 className={styles.trailerTextTitle}>Welcome to the Spire</h2>
          <p>
            Return to the Spire in the highly anticipated sequel to the
            legendary deck-building roguelike. In Slay the Spire 2, players once
            again climb the ever-changing tower, crafting powerful card
            combinations, discovering mysterious relics, and battling dangerous
            enemies with strategic precision. Each run offers new challenges,
            new characters, and endless possibilities, rewarding creativity and
            careful planning as you push deeper into the unknown.
          </p>
        </div>
      </div>
    </section>
  );
}
