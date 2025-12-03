import { useState, useEffect } from 'react';
import { Controls } from './components/Controls';
import { RulerDisplay } from './components/RulerDisplay';
import { CalibrationModal } from './components/CalibrationModal';
import { DeviceSelectionModal } from './components/DeviceSelectionModal';

const STANDARD_CARD_WIDTH_MM = 85.60;
const DEFAULT_PIXELS_PER_MM = 3.78;

export default function App() {
  const [pixelsPerMm, setPixelsPerMm] = useState(DEFAULT_PIXELS_PER_MM);
  const [isCalibrationOpen, setIsCalibrationOpen] = useState(false);
  const [isDeviceSelectionOpen, setIsDeviceSelectionOpen] = useState(false);

  useEffect(() => {
    // Load calibration from localStorage
    const savedPPM = localStorage.getItem('ruler_pixels_per_mm');
    if (savedPPM) {
      setPixelsPerMm(parseFloat(savedPPM));
    } else {
      // If not calibrated, show device selection first
      const timer = setTimeout(() => setIsDeviceSelectionOpen(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleOpenCalibration = () => {
    setIsCalibrationOpen(true);
  };

  const handleSaveCalibration = (newPixelsPerMm: number) => {
    setPixelsPerMm(newPixelsPerMm);
    localStorage.setItem('ruler_pixels_per_mm', newPixelsPerMm.toString());
    setIsCalibrationOpen(false);
  };

  const handleDeviceSelect = (devicePixelsPerMm: number) => {
    setPixelsPerMm(devicePixelsPerMm);
    localStorage.setItem('ruler_pixels_per_mm', devicePixelsPerMm.toString());
    setIsDeviceSelectionOpen(false);
  };

  const handleManualCalibration = () => {
    setIsDeviceSelectionOpen(false);
    setIsCalibrationOpen(true);
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-[#1a1a1a] text-[#e0e0e0] select-none">
      <Controls onOpenCalibration={handleOpenCalibration} />
      <RulerDisplay pixelsPerMm={pixelsPerMm} />
      <DeviceSelectionModal
        isOpen={isDeviceSelectionOpen}
        onDeviceSelect={handleDeviceSelect}
        onManualCalibration={handleManualCalibration}
      />
      <CalibrationModal
        isOpen={isCalibrationOpen}
        pixelsPerMm={pixelsPerMm}
        standardCardWidthMm={STANDARD_CARD_WIDTH_MM}
        onSave={handleSaveCalibration}
        onClose={() => setIsCalibrationOpen(false)}
      />
    </div>
  );
}
