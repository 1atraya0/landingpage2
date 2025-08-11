import React from "react";
import Image from "next/image";
import styles from "./TestimonialWide.module.css";

export default function TestimonialWide() {
  return (
    <section className={styles.wideSection}>
      <div className={styles.left}>
        <span className={styles.quoteMark}>&ldquo;</span>
        <p className={styles.quote}>
          &quot;I&apos;ve seen a big difference in my willpower, especially when it comes to my relationship with food. And I will attribute this to my Daily Still practice - since nothing else has changed.&quot;
        </p>
        <p className={styles.name}>Harini | Artist and Actor</p>
      </div>
      <div className={styles.right}>
        <div className={styles.card}>
          <Image
            src="/event-photo.jpg"
            alt="Testimonial video call"
            width={300}
            height={260}
            className={styles.cardImg}
          />
          <div className={styles.logo}>still</div>
        </div>
      </div>
    </section>
  );
}
