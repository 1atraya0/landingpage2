"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./TestimonialCarousel.module.css";

const testimonials = [
  {
    image: "/event-photo.jpg",
    quote: `I love practicing with Still. The audio sessions are so polished and so good. I really enjoy the quieter nature of the recordings\n\nPractice is so peaceful. It's truly a joy to open the app and practice everyday. I love it so much. I can never stop thanking you and your team for creating Still`,
    name: "Harini | Artist & Actor",
  },
  // Add more testimonials as needed
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const next = () => setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  return (
    <section className={styles.carouselSection}>
      <h2 className={styles.heading}>HEAR FROM OUR COMMUNITY</h2>
      <div className={styles.carouselContainer}>
        <button className={styles.arrow} onClick={prev} aria-label="Previous testimonial">&#8592;</button>
        <div className={styles.testimonialCard}>
          <Image
            src={testimonials[current].image}
            alt={testimonials[current].name}
            width={220}
            height={260}
            className={styles.avatar}
          />
          <div className={styles.quoteBox}>
            <span className={styles.quoteMark}>&ldquo;</span>
            <p className={styles.quote}>{testimonials[current].quote}</p>
            <p className={styles.name}>{testimonials[current].name}</p>
          </div>
        </div>
        <button className={styles.arrow} onClick={next} aria-label="Next testimonial">&#8594;</button>
      </div>
      <div className={styles.dots}>
        {testimonials.map((_, idx) => (
          <span
            key={idx}
            className={idx === current ? styles.activeDot : styles.dot}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </section>
  );
}
