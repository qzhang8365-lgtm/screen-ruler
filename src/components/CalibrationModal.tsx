import { useState, useEffect } from 'react';

interface CalibrationModalProps {
  isOpen: boolean;
  pixelsPerMm: number;
  standardCardHeightMm: number;
  onSave: (newPixelsPerMm: number) => void;
  onClose: () => void;
}

export function CalibrationModal({
  isOpen,
  pixelsPerMm,
  standardCardHeightMm,
  onSave,
  onClose,
}: CalibrationModalProps) {
  const [cardHeightPx, setCardHeightPx] = useState(200);

  useEffect(() => {
    if (isOpen) {
      const currentHeightPx = standardCardHeightMm * pixelsPerMm;
      setCardHeightPx(currentHeightPx);
    }
  }, [isOpen, pixelsPerMm, standardCardHeightMm]);

  const handleSave = () => {
    const newPixelsPerMm = cardHeightPx / standardCardHeightMm;
    onSave(newPixelsPerMm);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/95 z-[1000] flex flex-col items-center justify-center p-5">
      <h2 className="mb-4">精度校准</h2>
      <p className="text-[0.8rem] text-[#888] text-center">
        请拿出一张标准的银行卡/身份证
      </p>
      <p className="text-[0.8rem] text-[#888] text-center mb-5">
        将其<strong className="text-[#00d2ff]">竖着</strong>贴在屏幕上，调节下方滑块，
        <br />
        使蓝色边框高度与卡片<strong className="text-[#00d2ff]">高度</strong>（短边）完全一致。
      </p>

      <div
        className="w-[280px] border-2 border-[#00d2ff] rounded-[10px] flex flex-col items-center justify-center my-5 relative bg-white/10"
        style={{ height: `${cardHeightPx}px` }}
      >
        {/* 卡片方向指示图 */}
        <div className="border-2 border-dashed border-[#00d2ff]/50 rounded-[8px] w-[160px] mb-3 flex flex-col items-center justify-between p-3 bg-white/5"
             style={{ height: `${Math.max(cardHeightPx * 0.7, 120)}px` }}>
          {/* 芯片图标 */}
          <div className="w-[35px] h-[28px] border border-[#00d2ff]/60 rounded-[4px] bg-gradient-to-br from-[#ffd700]/20 to-[#ffed4e]/10"></div>
          {/* 卡号示意线 */}
          <div className="w-full space-y-1.5">
            <div className="h-[2px] bg-[#00d2ff]/40 rounded w-full"></div>
            <div className="h-[2px] bg-[#00d2ff]/40 rounded w-3/4"></div>
            <div className="h-[2px] bg-[#00d2ff]/40 rounded w-2/3"></div>
          </div>
        </div>
        
        <div className="text-center text-[0.9rem] text-[#aaa]">
          标准卡片高度（短边）
          <br />
          (53.98 mm)
        </div>
      </div>

      <div className="w-4/5 my-5">
        <input
          type="range"
          min="150"
          max="350"
          step="0.5"
          value={cardHeightPx}
          onChange={(e) => setCardHeightPx(parseFloat(e.target.value))}
          className="w-full"
        />
      </div>

      <button
        onClick={handleSave}
        className="bg-[#00d2ff] text-black border-none px-4 py-2 rounded-[20px] cursor-pointer"
      >
        完成校准
      </button>
    </div>
  );
}
