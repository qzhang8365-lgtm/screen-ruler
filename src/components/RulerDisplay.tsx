import { useState, useRef, useEffect } from 'react';

interface RulerDisplayProps {
  pixelsPerMm: number;
}

export function RulerDisplay({ pixelsPerMm }: RulerDisplayProps) {
  const totalMm = 200; // 20cm total length
  const ticks = [];
  
  // 辅助线状态
  const [line1Position, setLine1Position] = useState(50); // 第一条线位置（像素）
  const [line2Position, setLine2Position] = useState(150); // 第二条线位置（像素）
  const [draggingLine, setDraggingLine] = useState<1 | 2 | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // 处理拖动
  useEffect(() => {
    if (draggingLine === null) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const scrollTop = containerRef.current.scrollTop;
      const newPosition = e.clientY - rect.top + scrollTop;
      
      if (newPosition >= 0 && newPosition <= totalMm * pixelsPerMm) {
        if (draggingLine === 1) {
          setLine1Position(newPosition);
        } else {
          setLine2Position(newPosition);
        }
      }
    };

    const handleMouseUp = () => {
      setDraggingLine(null);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [draggingLine, pixelsPerMm, totalMm]);

  // 计算两条线之间的距离
  const distanceMm = Math.abs(line2Position - line1Position) / pixelsPerMm;
  const distanceCm = distanceMm / 10;

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
    <div 
      ref={containerRef}
      className="flex-1 relative bg-[#252525] overflow-y-scroll flex justify-start"
    >
      <div className="w-full h-[2000px] relative">
        {ticks}
        
        {/* 第一条辅助线 */}
        <div
          className="absolute left-0 right-0 h-[2px] bg-[#ff6b6b] cursor-ns-resize z-10 group"
          style={{ top: `${line1Position}px` }}
          onMouseDown={() => setDraggingLine(1)}
        >
          <div className="absolute left-[100px] -top-[10px] bg-[#ff6b6b] text-white text-[11px] px-2 py-0.5 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Line 1: {(line1Position / pixelsPerMm).toFixed(1)} mm
          </div>
          {/* 拖动手柄 */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-[6px] w-[40px] h-[14px] bg-[#ff6b6b] rounded-full border-2 border-[#1a1a1a] flex items-center justify-center">
            <div className="w-[20px] h-[2px] bg-white/50"></div>
          </div>
        </div>

        {/* 第二条辅助线 */}
        <div
          className="absolute left-0 right-0 h-[2px] bg-[#4ecb71] cursor-ns-resize z-10 group"
          style={{ top: `${line2Position}px` }}
          onMouseDown={() => setDraggingLine(2)}
        >
          <div className="absolute left-[100px] -top-[10px] bg-[#4ecb71] text-white text-[11px] px-2 py-0.5 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Line 2: {(line2Position / pixelsPerMm).toFixed(1)} mm
          </div>
          {/* 拖动手柄 */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-[6px] w-[40px] h-[14px] bg-[#4ecb71] rounded-full border-2 border-[#1a1a1a] flex items-center justify-center">
            <div className="w-[20px] h-[2px] bg-white/50"></div>
          </div>
        </div>

        {/* 距离显示标签 */}
        <div
          className="absolute left-[150px] bg-[#00d2ff] text-[#1a1a1a] px-3 py-1.5 rounded-lg text-[13px] font-medium shadow-lg z-20"
          style={{ 
            top: `${(line1Position + line2Position) / 2 - 15}px`,
          }}
        >
          📏 {distanceCm.toFixed(2)} cm / {distanceMm.toFixed(1)} mm
        </div>
      </div>
    </div>
  );
}