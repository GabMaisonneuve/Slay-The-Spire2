"use client";
import Image from "next/image";

import { useState } from "react";
import styles from "./Classes.module.css";

export default function Classes() {
  const [selectedClass, setSelectedClass] = useState("ironclad");
  const classes = {
    ironclad: {
      name: "Ironclad",
      description:
        "A brutal warrior who heals after combat and thrives on raw strength.",
      image: "/images/ironclad.png",
      icon: "/images/ironcladIcon.avif",
    },
    silent: {
      name: "Silent",
      description:
        "A deadly assassin who uses poison, speed, and precise strikes.",
      image: "/images/silent.jpg",
      icon: "/images/silentIcon.avif",
    },
    regent: {
      name: "Regent",
      description:
        "A noble ruler who commands powerful allies and strategic maneuvers.",
      image: "/images/regent.jpg",
      icon: "/images/regentIcon.avif",
    },
    necrobinder: {
      name: "Necrobinder",
      description:
        "A dark sorcerer who manipulates death and curses to control the battlefield.",
      image: "/images/necrobinder.jpg",
      icon: "/images/necrobinderIcon.avif",
    },
    defect: {
      name: "Defect",
      description:
        "A mysterious construct capable of channeling powerful elemental orbs.",
      image: "/images/defect.jpg",
      icon: "/images/defectIcon.avif",
    },
  };
  return (
    <section id="classes">
      <h2 className={styles.classesTitle}>Choose Your Class</h2>
      <div className={styles.classesContainer}>
        <div className={styles.icons}>
          <div>
            <button onClick={() => setSelectedClass("ironclad")}>
              <Image
                className={styles.iconsImage}
                src={classes.ironclad.icon}
                alt={classes.ironclad.name}
                width={80}
                height={80}
              />
            </button>
            <h3>{classes.ironclad.name}</h3>
          </div>

          <div>
            <button onClick={() => setSelectedClass("silent")}>
              <Image
                className={styles.iconsImage}
                src={classes.silent.icon}
                alt={classes.silent.name}
                width={80}
                height={80}
              />
            </button>
            <h3>{classes.silent.name}</h3>
          </div>

          <div>
            <button onClick={() => setSelectedClass("regent")}>
              <Image
                className={styles.iconsImage}
                src={classes.regent.icon}
                alt={classes.regent.name}
                width={80}
                height={80}
              />
            </button>
            <h3>{classes.regent.name}</h3>
          </div>

          <div>
            <button onClick={() => setSelectedClass("necrobinder")}>
              <Image
                className={styles.iconsImage}
                src={classes.necrobinder.icon}
                alt={classes.necrobinder.name}
                width={80}
                height={80}
              />
            </button>
            <h3>{classes.necrobinder.name}</h3>
          </div>

          <div>
            <button onClick={() => setSelectedClass("defect")}>
              <Image
                className={styles.iconsImage}
                src={classes.defect.icon}
                alt={classes.defect.name}
                width={80}
                height={80}
              />
            </button>
            <h3>{classes.defect.name}</h3>
          </div>
        </div>
        <div className={styles.classDisplay}>
          <div className={styles.classImageWrapper}>
            <Image
              src={classes[selectedClass].image}
              alt={classes[selectedClass].name}
              fill
              style={{ objectFit: "contain" }}
            />
          </div>

          <h3>{classes[selectedClass].name}</h3>

          <p>{classes[selectedClass].description}</p>
        </div>
      </div>
    </section>
  );
}
