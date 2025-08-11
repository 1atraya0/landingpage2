import React from 'react';

const Testimonial = () => (
  <section style={{ background: '#181818', color: '#fff', padding: '4rem 0', minHeight: 400, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{ maxWidth: 1400, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '3rem', width: '90%' }}>
      <div style={{ flex: '1 1 500px', minWidth: 320, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ fontSize: 64, fontWeight: 700, marginBottom: 16 }}>&ldquo;</div>
        <div style={{ fontSize: '2rem', fontWeight: 400, marginBottom: 24, lineHeight: 1.2 }}>
          "I've never been comfortable with silence. With PTSD and hyperanxiety, my mind was always racing... until I found Still."
        </div>
        <div style={{ fontSize: '1.1rem', color: '#ccc', fontWeight: 400 }}>
          Archana | National Record–Holding Freediver and Lawyer
        </div>
      </div>
      <div style={{ flex: '1 1 350px', minWidth: 280, display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ width: '100%', aspectRatio: '1/1', borderRadius: 24, overflow: 'hidden', background: '#eee', marginBottom: 12 }}>
          <img src="/testimonials/archana1.jpg" alt="Testimonial 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ width: '100%', aspectRatio: '1/1', borderRadius: 24, overflow: 'hidden', background: '#eee' }}>
          <img src="/testimonials/archana2.jpg" alt="Testimonial 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </div>
    </div>
  </section>
);

export default Testimonial;
