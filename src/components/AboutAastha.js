import React from 'react';

const AboutAastha = () => (
  <section style={{ background: '#fff', padding: '6rem 0 2rem 0', minHeight: '60vh' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '3rem' }}>
      <div style={{ flex: '1 1 350px', minWidth: 280, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: 320, height: 400, borderRadius: 20, overflow: 'hidden', background: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="/about/aastha.jpg" alt="Aastha" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </div>
      <div style={{ flex: '2 1 500px', minWidth: 320 }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 600, marginBottom: '1rem', letterSpacing: '-1px' }}>ABOUT AASTHA</h2>
        <div style={{ color: '#444', fontSize: '1.2rem', fontWeight: 400, lineHeight: 1.6, marginBottom: 24 }}>
          With a Master of Yoga (M.Y) from Sivananda, Aastha is the founder and teacher at Still. An athlete and avid practitioner of vipassana, she has trained in the Sivananda lineage since 2014, specializing in breathwork and meditation and guiding thousands worldwide to stillness through breath.
        </div>
        <button style={{ padding: '0.8rem 2rem', border: '2px solid #111', borderRadius: 32, background: '#fff', color: '#111', fontWeight: 600, fontSize: '1.1rem', cursor: 'pointer', transition: 'all 0.2s', outline: 'none', marginBottom: 8 }}>
          MORE ABOUT US <span style={{ fontSize: 18, marginLeft: 8 }}>&#8594;</span>
        </button>
      </div>
    </div>
  </section>
);

export default AboutAastha;
