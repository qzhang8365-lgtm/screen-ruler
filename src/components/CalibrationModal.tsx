import { useState, useEffect } from 'react';

interface CalibrationModalProps {
  isOpen: boolean;
  pixelsPerMm: number;
  standardCardWidthMm: number;
  onSave: (newPixelsPerMm: number) => void;
  onClose: () => void;
}

export function CalibrationModal({
  isOpen,
  pixelsPerMm,
  standardCardWidthMm,
  onSave,
  onClose,
}: CalibrationModalProps) {
  const [cardWidthPx, setCardWidthPx] = useState(300);

  useEffect(() => {
    if (isOpen) {
      const currentWidthPx = standardCardWidthMm * pixelsPerMm;
      setCardWidthPx(currentWidthPx);
    }
  }, [isOpen, pixelsPerMm, standardCardWidthMm]);

  const handleSave = () => {
    const newPixelsPerMm = cardWidthPx / standardCardWidthMm;
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
        将其贴在屏幕上，调节下方滑块，
        <br />
        使蓝色边框宽度与卡片宽度完全一致。
      </p>

      <div
        className="h-[180px] border-2 border-[#00d2ff] rounded-[10px] flex items-center justify-center my-5 relative bg-white/10"
        style={{ width: `${cardWidthPx}px` }}
      >
        <div className="text-center text-[0.9rem] text-[#aaa]">
          标准卡片区域
          <br />
          (85.60 mm)
        </div>
      </div>

      <div className="w-4/5 my-5">
        <input
          type="range"
          min="200"
          max="500"
          step="0.5"
          value={cardWidthPx}
          onChange={(e) => setCardWidthPx(parseFloat(e.target.value))}
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
