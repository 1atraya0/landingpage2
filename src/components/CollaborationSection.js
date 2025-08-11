import React from "react";
import Image from "next/image";
import styles from "./CollaborationSection.module.css";

export default function CollaborationSection() {
  return (
    <section className={styles.collabSection}>
      <div className={styles.left}>
        <h2 className={styles.heading}>STILLNESS IS BETTER, WHEN SHARED</h2>
        <p className={styles.desc}>
          We love collaborating on experiences, workshops, retreats, and brand partnerships. Reach out to explore possibilities.
        </p>
        <button className={styles.button}>
          COLLABORATE WITH US <span className={styles.arrow}>&#8594;</span>
        </button>
      </div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <Image src="/radisson-card.jpg" alt="Radisson Experience" width={260} height={260} className={styles.cardImg} />
          <div className={styles.cardLabel}>
            <span className={styles.locationIcon}>📍</span> Still in Radisson Rooms!
          </div>
        </div>
        <div className={styles.card}>
          <Image src="/event-photo.jpg" alt="Aastha at Future Tech Fest" width={260} height={260} className={styles.cardImg} />
          <div className={styles.cardLabel}>
            <span className={styles.locationIcon}>📍</span> Aastha @ Future Tech Fest | Germany 2024
          </div>
        </div>
      </div>
    </section>
  );
}
