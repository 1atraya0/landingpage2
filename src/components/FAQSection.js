"use client";
import React, { useState } from "react";
import styles from "./FAQSection.module.css";

const faqs = [
  { q: "Who is this for?", a: "" },
  { q: "What if I miss a day?", a: "" },
  { q: "Do I need prior experience?", a: "" },
  { q: "Where does breathwork come from, and what will I learn with Still?", a: "" },
  { q: "What’s the difference between yoga, meditation, and breathwork? Where should I start?", a: "" },
  { q: "Will I need the app forever?", a: "" },
  { q: "What happens after 30 days?", a: "" },
  { q: "Can I really get a refund?", a: "" },
  { q: "How is this different from other meditation apps?", a: "" },
  { q: "Is breathwork backed by science, and what are its benefits?", a: "" },
];

export default function FAQSection() {
  const [open, setOpen] = useState(null);
  return (
    <section className={styles.faqSection}>
      <h2 className={styles.heading}>FAQS</h2>
      <div className={styles.grid}>
        {[0, 1].map((col) => (
          <div className={styles.col} key={col}>
            {faqs.filter((_, i) => i % 2 === col).map((faq, idx) => (
              <div key={faq.q} className={styles.faqItem}>
                <button
                  className={styles.question}
                  onClick={() => setOpen(open === faq.q ? null : faq.q)}
                  aria-expanded={open === faq.q}
                >
                  <span className={styles.plus}>+</span> <span>{faq.q}</span>
                </button>
                {open === faq.q && faq.a && (
                  <div className={styles.answer}>{faq.a}</div>
                )}
                <div className={styles.divider} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
