import React from 'react';

const FocusState = () => (
  <section style={{ background: '#fff', padding: '6rem 0 2rem 0', minHeight: '60vh' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem' }}>
      <div style={{ flex: '1 1 400px', minWidth: 320 }}>
  <h2 style={{ fontSize: '2.5rem', fontWeight: 600, marginBottom: '1rem', letterSpacing: '-1px', color: '#111' }}>WHAT IS YOUR CURRENT FOCUS STATE?</h2>
        <div style={{ fontWeight: 500, color: '#111', marginBottom: '0.5rem', letterSpacing: '1px', fontSize: '1rem' }}>
          5 STATES OF MIND AS PER EASTERN PSYCHOLOGY
        </div>
      </div>
      <div style={{ flex: '1 1 400px', minWidth: 320, color: '#111', fontSize: '1.2rem', fontWeight: 400, lineHeight: 1.6 }}>
        <p>We feel scattered or dull when our minds are overstimulated with too many thoughts—very natural in today’s noisy world.</p>
        <p>The art of stillness lies in quietening these thoughts and emptying the mind. How, you ask?</p>
      </div>
    </div>
  </section>
);

export default FocusState;
