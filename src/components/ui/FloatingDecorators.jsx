const decorators = [
  { shape: 'star', color: '#F72585', size: 24, top: '8%', left: '4%', anim: 'float-a', delay: '0s' },
  { shape: 'circle', color: '#FFD700', size: 18, top: '15%', right: '6%', anim: 'float-b', delay: '0.5s' },
  { shape: 'star', color: '#009B9B', size: 20, top: '40%', left: '2%', anim: 'float-c', delay: '1s' },
  { shape: 'circle', color: '#F72585', size: 14, top: '60%', right: '3%', anim: 'float-d', delay: '0.3s' },
  { shape: 'dot', color: '#FFD700', size: 12, top: '75%', left: '5%', anim: 'float-a', delay: '1.5s' },
  { shape: 'star', color: '#33B9E5', size: 16, top: '85%', right: '8%', anim: 'float-b', delay: '0.8s' },
  { shape: 'circle', color: '#009B9B', size: 22, top: '25%', left: '92%', anim: 'float-c', delay: '0.2s' },
  { shape: 'dot', color: '#F72585', size: 10, top: '50%', left: '96%', anim: 'float-d', delay: '1.2s' },
];

function Star({ size, color }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
    </svg>
  );
}

function Circle({ size, color }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" fill="none" stroke={color} strokeWidth="3" />
    </svg>
  );
}

function Dot({ size, color }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" fill={color} />
    </svg>
  );
}

export default function FloatingDecorators({ colors }) {
  const items = colors
    ? decorators.map((d, i) => ({ ...d, color: colors[i % colors.length] }))
    : decorators;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {items.map((d, i) => (
        <div
          key={i}
          className={d.anim}
          style={{
            position: 'absolute',
            top: d.top,
            left: d.left,
            right: d.right,
            animationDelay: d.delay,
            opacity: 0.85,
          }}
        >
          {d.shape === 'star' && <Star size={d.size} color={d.color} />}
          {d.shape === 'circle' && <Circle size={d.size} color={d.color} />}
          {d.shape === 'dot' && <Dot size={d.size} color={d.color} />}
        </div>
      ))}
    </div>
  );
}
