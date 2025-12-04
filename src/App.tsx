import { useState, useEffect } from 'react';
import { Controls } from './components/Controls';
import { RulerDisplay } from './components/RulerDisplay';
import { CalibrationModal } from './components/CalibrationModal';
import { detectDevice, ppiToPixelsPerMm, getDeviceDisplayName } from './utils/deviceDatabase';

const STANDARD_CARD_WIDTH_MM = 85.60;
const STANDARD_CARD_HEIGHT_MM = 53.98; // 卡片短边
const DEFAULT_PIXELS_PER_MM = 3.78;

export default function App() {
  const [pixelsPerMm, setPixelsPerMm] = useState(DEFAULT_PIXELS_PER_MM);
  const [isCalibrationOpen, setIsCalibrationOpen] = useState(false);
  const [detectedDeviceName, setDetectedDeviceName] = useState<string>('');

  useEffect(() => {
    // Load calibration from localStorage
    const savedPPM = localStorage.getItem('ruler_pixels_per_mm');
    if (savedPPM) {
      setPixelsPerMm(parseFloat(savedPPM));
      // 加载设备信息
      const savedDeviceName = localStorage.getItem('ruler_device_name');
      if (savedDeviceName) {
        setDetectedDeviceName(savedDeviceName);
      }
    } else {
      // 尝试自动识别设备
      const device = detectDevice();
      if (device) {
        const autoPixelsPerMm = ppiToPixelsPerMm(device.ppi);
        setPixelsPerMm(autoPixelsPerMm);
        const displayName = getDeviceDisplayName(device);
        setDetectedDeviceName(displayName);
        
        // 保存到 localStorage
        localStorage.setItem('ruler_pixels_per_mm', autoPixelsPerMm.toString());
        localStorage.setItem('ruler_device_name', displayName);
        localStorage.setItem('ruler_auto_detected', 'true');
        
        console.log('✅ 自动识别设备:', displayName);
      } else {
        // If not calibrated and cannot auto-detect, open calibration after delay
        const timer = setTimeout(() => setIsCalibrationOpen(true), 500);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  const handleOpenCalibration = () => {
    setIsCalibrationOpen(true);
  };

  const handleSaveCalibration = (newPixelsPerMm: number) => {
    setPixelsPerMm(newPixelsPerMm);
    localStorage.setItem('ruler_pixels_per_mm', newPixelsPerMm.toString());
    localStorage.setItem('ruler_auto_detected', 'false'); // 标记为手动校准
    setIsCalibrationOpen(false);
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-[#1a1a1a] text-[#e0e0e0] select-none">
      <Controls 
        onOpenCalibration={handleOpenCalibration}
        detectedDevice={detectedDeviceName}
      />
      <RulerDisplay pixelsPerMm={pixelsPerMm} />
      
      {/* 右上角悬浮校准按钮 */}
      <button
        onClick={handleOpenCalibration}
        className="fixed top-5 right-5 w-10 h-10 bg-[#00d2ff] hover:bg-[#00b8e6] text-black border-none rounded-full cursor-pointer shadow-lg z-[200] flex items-center justify-center transition-all duration-200 hover:scale-110"
        title="校准精度"
      >
        ⚙️
      </button>
      
      <CalibrationModal
        isOpen={isCalibrationOpen}
        pixelsPerMm={pixelsPerMm}
        standardCardHeightMm={STANDARD_CARD_HEIGHT_MM}
        onSave={handleSaveCalibration}
        onClose={() => setIsCalibrationOpen(false)}
      />
    </div>
  );
}