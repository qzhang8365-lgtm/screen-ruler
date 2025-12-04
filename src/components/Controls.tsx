interface ControlsProps {
  onOpenCalibration: () => void;
  detectedDevice?: string;
}

export function Controls({ onOpenCalibration, detectedDevice }: ControlsProps) {
  return (
    <div className="p-5 bg-black/80 z-[100] text-center shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
      <h1 className="m-0 mb-2.5">屏幕尺子</h1>
      
      {detectedDevice && (
        <div className="text-[0.75rem] text-[#00d2ff] mb-0 bg-[#00d2ff]/10 rounded-lg px-3 py-1.5 inline-block">
          📱 {detectedDevice}
        </div>
      )}
    </div>
  );
}