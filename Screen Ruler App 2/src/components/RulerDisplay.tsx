interface RulerDisplayProps {
  pixelsPerMm: number;
}

export function RulerDisplay({ pixelsPerMm }: RulerDisplayProps) {
  const totalMm = 200; // 20cm total length
  const ticks = [];

  for (let i = 0; i <= totalMm; i++) {
    const topPosition = i * pixelsPerMm;
    const isCm = i % 10 === 0;
    const isHalfCm = i % 5 === 0 && !isCm;

    ticks.push(
      <div
        key={i}
        className={`absolute left-0 h-[1px] ${
          isCm
            ? 'w-10 bg-[#00d2ff]'
            : isHalfCm
            ? 'w-[30px] bg-white'
            : 'w-5 bg-white'
        }`}
        style={{ top: `${topPosition}px` }}
      >
        {isCm && (
          <span className="absolute left-[45px] text-[12px] -translate-y-1/2 text-[#00d2ff]">
            {i / 10}
          </span>
        )}
      </div>
    );
  }

  return (
    <div className="flex-1 relative bg-[#252525] overflow-y-scroll flex justify-start">
      <div className="w-full h-[2000px] relative">{ticks}</div>
    </div>
  );
}
