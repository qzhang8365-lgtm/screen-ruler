import { useState } from 'react';
import { devices, DeviceCategory } from '../data/devices';

interface DeviceSelectionModalProps {
  isOpen: boolean;
  onDeviceSelect: (pixelsPerMm: number) => void;
  onManualCalibration: () => void;
}

export function DeviceSelectionModal({
  isOpen,
  onDeviceSelect,
  onManualCalibration,
}: DeviceSelectionModalProps) {
  const [selectedCategory, setSelectedCategory] = useState<DeviceCategory>('iPhone');
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const categories: DeviceCategory[] = ['iPhone', 'iPad', 'Android', 'Other'];
  
  const filteredDevices = devices.filter(
    (device) =>
      device.category === selectedCategory &&
      device.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fixed inset-0 bg-black/95 z-[1000] flex flex-col items-center justify-center p-5 overflow-y-auto">
      <div className="w-full max-w-md">
        <h2 className="text-center mb-2">选择你的设备</h2>
        <p className="text-[0.8rem] text-[#888] text-center mb-6">
          选择你的设备型号以自动设置精确的屏幕尺寸
        </p>

        {/* Category Tabs */}
        <div className="flex gap-2 mb-4 overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setSearchTerm('');
              }}
              className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                selectedCategory === category
                  ? 'bg-[#00d2ff] text-black'
                  : 'bg-[#252525] text-[#e0e0e0] hover:bg-[#333]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Search */}
        <input
          type="text"
          placeholder="搜索设备型号..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 mb-4 bg-[#252525] border border-[#444] rounded-lg text-[#e0e0e0] placeholder:text-[#666] focus:outline-none focus:border-[#00d2ff]"
        />

        {/* Device List */}
        <div className="bg-[#252525] rounded-lg max-h-[300px] overflow-y-auto mb-4">
          {filteredDevices.length > 0 ? (
            filteredDevices.map((device) => (
              <button
                key={device.name}
                onClick={() => onDeviceSelect(device.pixelsPerMm)}
                className="w-full px-4 py-3 text-left hover:bg-[#333] border-b border-[#333] last:border-b-0 transition-colors"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-[#e0e0e0]">{device.name}</div>
                    <div className="text-[0.75rem] text-[#888]">
                      {device.screenSize}" · {device.ppi} PPI
                    </div>
                  </div>
                  <div className="text-[#00d2ff] text-sm">选择</div>
                </div>
              </button>
            ))
          ) : (
            <div className="px-4 py-8 text-center text-[#666]">
              未找到匹配的设备
            </div>
          )}
        </div>

        {/* Manual Calibration Button */}
        <button
          onClick={onManualCalibration}
          className="w-full px-4 py-3 bg-[#252525] text-[#e0e0e0] border border-[#444] rounded-lg hover:bg-[#333] transition-colors mb-2"
        >
          📏 手动校准（使用银行卡）
        </button>

        <p className="text-[0.7rem] text-[#666] text-center mt-4">
          提示：如果列表中没有你的设备，请选择手动校准
        </p>
      </div>
    </div>
  );
}
