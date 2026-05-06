export default function SectionDivider({ color = '#FFD700', direction = 'down', height = 60 }) {
  if (direction === 'down') {
    return (
      <div style={{ height, overflow: 'hidden', marginBottom: -1 }}>
        <svg viewBox={`0 0 1440 ${height}`} preserveAspectRatio="none" style={{ width: '100%', height: '100%', display: 'block' }}>
          <polygon points={`0,0 1440,0 1440,${height * 0.2} 0,${height}`} fill={color} />
        </svg>
      </div>
    );
  }
  return (
    <div style={{ height, overflow: 'hidden', marginTop: -1 }}>
      <svg viewBox={`0 0 1440 ${height}`} preserveAspectRatio="none" style={{ width: '100%', height: '100%', display: 'block' }}>
        <polygon points={`0,0 1440,${height * 0.8} 1440,${height} 0,${height}`} fill={color} />
      </svg>
    </div>
  );
}
