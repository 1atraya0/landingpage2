import React from 'react';

const focusStates = [
  {
    title: 'SCATTERED',
    hindi: 'कषिप्त',
    desc: 'I feel anxious, distracted and out of control.'
  },
  {
    title: 'DULL & DEPRESSED',
    hindi: 'मूढ़',
    desc: 'I feel dull, depressed, and lazy.'
  },
  {
    title: 'GATHERING',
    hindi: 'विक्षिप्ति',
    desc: 'I have fleeting moments of motivation but can’t focus for too long.'
  },
  {
    title: 'SINGULAR FOCUS',
    hindi: 'एकाग्रता',
    desc: 'I can concentrate on the task at hand.'
  },
  {
    title: 'STILL',
    hindi: 'निरुद्ध',
    desc: 'I feel peaceful, happy, productive and in a state of flow.'
  }
];


const FocusStateTimeline = () => (
  <div style={{
    width: '100%',
    background: '#111',
    minHeight: '340px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '3.5rem 0',
  }}>
    <div style={{
      display: 'flex',
      width: '100%',
      maxWidth: 1100,
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      position: 'relative',
      background: '#fff',
      borderRadius: '2rem',
      boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
      padding: '2.5rem 1.5rem',
      margin: '0 auto',
      gap: '0.5rem',
    }}>
      {focusStates.map((state, idx) => (
        <div key={state.title} style={{ flex: 1, textAlign: 'center', position: 'relative', minWidth: 160 }}>
          {/* Dotted line */}
          {idx !== 0 && (
            <div style={{ position: 'absolute', left: '-50%', top: 32, width: '100%', height: 2, borderTop: '2px dotted #bbb', zIndex: 0 }} />
          )}
          {/* Black dot */}
          <div style={{ width: 38, height: 38, borderRadius: '50%', background: 'radial-gradient(circle, #000 60%, #0008 100%)', margin: '0 auto', marginBottom: 12, zIndex: 1 }} />
          <div style={{ fontWeight: 800, fontSize: '1.15rem', letterSpacing: '1px', marginBottom: 2, color: '#111', textTransform: 'uppercase', lineHeight: 1.1 }}>
            {state.title}
            <span style={{ display: 'block', fontWeight: 600, fontSize: '1.05rem', color: '#111', marginTop: 2 }}>{state.hindi}</span>
          </div>
          <div style={{ color: '#111', fontSize: '1.08rem', marginTop: 8, fontWeight: 400, lineHeight: 1.5 }}>{state.desc}</div>
        </div>
      ))}
    </div>
  </div>
);

export default FocusStateTimeline;
