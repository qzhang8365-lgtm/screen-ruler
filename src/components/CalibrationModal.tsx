import { useState, useEffect, useRef } from 'react';
import { Slider } from './ui/slider';
import { X } from 'lucide-react';

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
  const [cardHeightPx, setCardHeightPx] = useState(0);
  const [baseHeightPx, setBaseHeightPx] = useState(0);
  
  // Initialize state when modal opens
  useEffect(() => {
    if (isOpen) {
      const currentHeightPx = standardCardHeightMm * pixelsPerMm;
      setCardHeightPx(currentHeightPx);
      setBaseHeightPx(currentHeightPx);
    }
  }, [isOpen, pixelsPerMm, standardCardHeightMm]);

  const handleSave = () => {
    const newPixelsPerMm = cardHeightPx / standardCardHeightMm;
    onSave(newPixelsPerMm);
  };

  const handleSliderChange = (values: number[]) => {
    setCardHeightPx(values[0]);
  };

  if (!isOpen) return null;

  // Calculate coefficient and percentage
  // Avoid division by zero
  const coefficient = baseHeightPx > 0 ? cardHeightPx / baseHeightPx : 1;
  const percentage = (coefficient - 1) * 100;
  const sign = percentage >= 0 ? '+' : '';

  return (
    <div className="fixed inset-0 bg-black/95 z-[1000] flex flex-col items-center justify-center p-5 animate-in fade-in duration-200 dark">
      {/* Header with Close Button */}
      <div className="absolute top-5 right-5">
        <button 
          onClick={onClose}
          className="text-white/50 hover:text-white transition-colors"
        >
          <X size={32} />
        </button>
      </div>

      <h2 className="text-2xl font-bold mb-2 text-white">精度校准</h2>
      
      <div className="text-center space-y-4 max-w-md">
        <p className="text-gray-400">
          步骤 1：请拿出一张标准的银行卡或身份证
        </p>
        <p className="text-gray-400">
          步骤 2：将卡片<strong className="text-[#00d2ff] mx-1">横着</strong>贴在屏幕蓝色框内
        </p>
        <p className="text-gray-400">
          步骤 3：拖动滑块，使蓝色边框的高度与卡片短边完全一致
        </p>
      </div>

      {/* Visual Calibration Box */}
      <div
        className="w-[280px] border-2 border-[#00d2ff] rounded-[12px] flex flex-col items-center justify-center my-8 relative bg-white/5 transition-all duration-75 ease-out shadow-[0_0_20px_rgba(0,210,255,0.2)]"
        style={{ height: `${cardHeightPx}px` }}
      >
        {/* Card Direction Indicator */}
        <div 
          className="border-2 border-dashed border-[#00d2ff]/30 rounded-[8px] w-[180px] flex flex-col items-center justify-between p-4 bg-[#00d2ff]/5 select-none pointer-events-none"
          style={{ height: `${Math.max(cardHeightPx * 0.75, 100)}px` }}
        >
          {/* Chip */}
          <div className="w-[40px] h-[32px] border border-[#00d2ff]/40 rounded-[4px] bg-gradient-to-br from-[#ffd700]/20 to-[#ffed4e]/10 self-start ml-2"></div>
          
          {/* Text/Lines */}
          <div className="w-full space-y-2 mt-4">
            <div className="h-1.5 bg-[#00d2ff]/20 rounded w-full"></div>
            <div className="h-1.5 bg-[#00d2ff]/20 rounded w-3/4"></div>
          </div>
          
          <div className="text-[10px] text-[#00d2ff]/50 mt-auto">
            标准银行卡/身份证
          </div>
        </div>
        
        {/* Measurement Label */}
        <div className="absolute -right-[90px] text-[#00d2ff] text-xs flex flex-col items-start">
           <span>◀ 53.98 mm ▶</span>
           <span className="text-[10px] opacity-70">(短边高度)</span>
        </div>
      </div>

      {/* Coefficient Display */}
      <div className="bg-white/10 rounded-lg px-4 py-2 mb-6 text-sm text-gray-300 font-mono">
        当前校准系数：
        <span className={percentage !== 0 ? "text-[#00d2ff] font-bold ml-2" : "text-white ml-2"}>
          {coefficient.toFixed(3)}
        </span>
        <span className="ml-2 text-xs text-gray-500">
          ({sign}{percentage.toFixed(1)}% 缩放)
        </span>
      </div>

      {/* Slider Control */}
      <div className="w-full max-w-xs mb-8 px-4">
        <Slider
          value={[cardHeightPx]}
          min={100} // Wide enough range
          max={400}
          step={0.5}
          onValueChange={handleSliderChange}
          className="py-4"
        />
        <div className="flex justify-between text-xs text-gray-600 mt-1">
          <span>缩小</span>
          <span>放大</span>
        </div>
      </div>

      <button
        onClick={handleSave}
        className="bg-[#00d2ff] hover:bg-[#00b8e6] text-black font-medium text-lg px-8 py-3 rounded-full cursor-pointer transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-[#00d2ff]/20"
      >
        完成校准
      </button>
    </div>
  );
}
