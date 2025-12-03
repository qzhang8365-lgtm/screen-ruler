interface ControlsProps {
  onOpenCalibration: () => void;
}

export function Controls({ onOpenCalibration }: ControlsProps) {
  return (
    <div className="p-5 bg-black/80 z-[100] text-center shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
      <h1 className="m-0 mb-2.5">屏幕尺子</h1>
      <button
        onClick={onOpenCalibration}
        className="bg-[#00d2ff] text-black border-none px-4 py-2 rounded-[20px] cursor-pointer"
      >
        ⚙️ 校准精度
      </button>
    </div>
  );
}
