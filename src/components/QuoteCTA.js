import React from "react";
import styles from "./QuoteCTA.module.css";

export default function QuoteCTA() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.card}>
        <p className={styles.quote}>
          "I've tried every meditation program, but I never found what worked. Still gave me the structure and clarity I needed, without overwhelming me with options."<br />
          <span className={styles.author}>— Unnati, Founder & Marketer</span>
        </p>
        <button className={styles.button}>START TODAY</button>
      </div>
    </section>
  );
}
