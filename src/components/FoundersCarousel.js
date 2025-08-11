import React from 'react';

const founders = [
  {
    name: 'RASIK PANSARE',
    title: 'Founder | Get My Parking',
    img: '/founders/rasik.jpg'
  },
  {
    name: 'DIVYA SHAH',
    title: 'Founder | Vinyasa Health',
    img: '/founders/divya.jpg'
  },
  {
    name: 'ESHNA KUTTY',
    title: 'Founder | Hoop Flo',
    img: '/founders/eshna.jpg'
  },
  {
    name: 'NIKITA DRESSWALA',
    title: 'Founder | Teleport',
    img: '/founders/nikita.jpg'
  },
  {
    name: 'UDAYAN WALVEKAR',
    title: 'Founder | GrowthX',
    img: '/founders/udayan.jpg'
  },
  {
    name: 'JEET MARWADI',
    title: 'Founder | 1 Finance',
    img: '/founders/jeet.jpg'
  }
];

const FoundersCarousel = () => (
  <section style={{ background: '#fff', padding: '2rem 0' }}>
    <div style={{ maxWidth: 1400, margin: '0 auto', borderRadius: 20, overflow: 'hidden', boxShadow: '0 2px 12px #0001' }}>
      <div style={{ background: '#111', color: '#fff', textAlign: 'center', padding: '1rem 0', fontWeight: 600, fontSize: '1.2rem', letterSpacing: 1 }}>
        SOME FOUNDERS WITH STILL
      </div>
      <div style={{ display: 'flex', overflowX: 'auto', gap: 32, padding: '2rem 1.5rem', background: '#fff', justifyContent: 'flex-start' }}>
        {founders.map(f => (
          <div key={f.name} style={{ minWidth: 200, maxWidth: 220, background: '#fff', borderRadius: 24, boxShadow: '0 2px 8px #0001', textAlign: 'center', padding: '1.5rem 1rem 1rem 1rem', margin: '0 8px', flex: '0 0 auto' }}>
            <div style={{ width: 140, height: 180, margin: '0 auto 1rem auto', borderRadius: 20, overflow: 'hidden', background: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={f.img} alt={f.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ fontWeight: 700, fontSize: '1.1rem', letterSpacing: 1 }}>{f.name}</div>
            <div style={{ color: '#444', fontSize: '1rem', marginTop: 2 }}>{f.title}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FoundersCarousel;
