import styles from "./Hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        {/* <h1 className={styles.title}>
          Slay the Spire <span style={{ color: "#3eced7" }}>II</span>
        </h1> */}

        <Image
          src="/images/slaythespirelogo.webp"
          alt="test"
          width={500}
          height={300}
        ></Image>

        <p className={styles.subtitle}>Ascend the Spire once more.</p>
        <div className={styles.buttons}>
          <a href="#trailer" className={styles.button}>
            Watch Trailer
          </a>

          <a
            href="https://store.steampowered.com/app/2868840/Slay_the_Spire_2/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            Buy on Steam
          </a>
        </div>
      </div>
    </section>
  );
}
