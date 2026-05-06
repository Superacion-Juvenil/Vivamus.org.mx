import { useEffect, useState } from 'react';

function pad(n) {
  return String(n).padStart(2, '0');
}

function getTimeLeft(target) {
  const now = new Date();
  const diff = new Date(target) - now;
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  return { days, hours, minutes, seconds };
}

function Block({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white border-3 border-black shadow-neo w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-lg">
        <span className="font-display text-2xl sm:text-3xl text-black leading-none">
          {pad(value)}
        </span>
      </div>
      <span className="mt-1 text-xs sm:text-sm font-bold text-black uppercase tracking-wide">
        {label}
      </span>
    </div>
  );
}

export default function Countdown({ target }) {
  const [time, setTime] = useState(() => getTimeLeft(target));

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  return (
    <div className="flex items-end gap-2 sm:gap-3 justify-center">
      <Block value={time.days} label="días" />
      <span className="text-black font-display text-2xl mb-4">:</span>
      <Block value={time.hours} label="horas" />
      <span className="text-black font-display text-2xl mb-4">:</span>
      <Block value={time.minutes} label="min" />
      <span className="text-black font-display text-2xl mb-4">:</span>
      <Block value={time.seconds} label="seg" />
    </div>
  );
}
