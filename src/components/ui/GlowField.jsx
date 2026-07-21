const defaultBlobs = [
  { top: '-10%', left: '-8%', size: 420, opacity: 0.35, anim: 'float-a' },
  { top: '55%', left: '96%', size: 360, opacity: 0.3, anim: 'float-c' },
  { top: '85%', left: '10%', size: 280, opacity: 0.25, anim: 'float-b' },
];

export default function GlowField({ colors = ['#33B9E5', '#F72585', '#FFD700'] }) {
  const blobs = defaultBlobs.map((b, i) => ({ ...b, color: colors[i % colors.length] }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {blobs.map((b, i) => (
        <div
          key={i}
          className={`absolute rounded-full blur-3xl ${b.anim}`}
          style={{
            top: b.top,
            left: b.left,
            width: b.size,
            height: b.size,
            background: b.color,
            opacity: b.opacity,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
    </div>
  );
}
