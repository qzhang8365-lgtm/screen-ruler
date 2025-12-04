// 设备数据库 - 包含70+款设备的PPI信息
export interface DeviceInfo {
  name: string;
  ppi: number;
  screenSize: string;
  category: 'iPhone' | 'iPad' | 'Android' | 'Tablet' | 'Laptop' | 'Desktop';
  userAgentPattern?: RegExp;
}

export const deviceDatabase: DeviceInfo[] = [
  // iPhone 系列
  { name: 'iPhone 16 Pro Max', ppi: 460, screenSize: '6.9"', category: 'iPhone', userAgentPattern: /iPhone17,1/ },
  { name: 'iPhone 16 Pro', ppi: 460, screenSize: '6.3"', category: 'iPhone', userAgentPattern: /iPhone17,2/ },
  { name: 'iPhone 16 Plus', ppi: 460, screenSize: '6.7"', category: 'iPhone', userAgentPattern: /iPhone17,3/ },
  { name: 'iPhone 16', ppi: 460, screenSize: '6.1"', category: 'iPhone', userAgentPattern: /iPhone17,4/ },
  { name: 'iPhone 15 Pro Max', ppi: 460, screenSize: '6.7"', category: 'iPhone', userAgentPattern: /iPhone16,2/ },
  { name: 'iPhone 15 Pro', ppi: 460, screenSize: '6.1"', category: 'iPhone', userAgentPattern: /iPhone16,1/ },
  { name: 'iPhone 15 Plus', ppi: 460, screenSize: '6.7"', category: 'iPhone', userAgentPattern: /iPhone15,5/ },
  { name: 'iPhone 15', ppi: 460, screenSize: '6.1"', category: 'iPhone', userAgentPattern: /iPhone15,4/ },
  { name: 'iPhone 14 Pro Max', ppi: 460, screenSize: '6.7"', category: 'iPhone', userAgentPattern: /iPhone15,3/ },
  { name: 'iPhone 14 Pro', ppi: 460, screenSize: '6.1"', category: 'iPhone', userAgentPattern: /iPhone15,2/ },
  { name: 'iPhone 14 Plus', ppi: 460, screenSize: '6.7"', category: 'iPhone', userAgentPattern: /iPhone14,8/ },
  { name: 'iPhone 14', ppi: 460, screenSize: '6.1"', category: 'iPhone', userAgentPattern: /iPhone14,7/ },
  { name: 'iPhone 13 Pro Max', ppi: 458, screenSize: '6.7"', category: 'iPhone', userAgentPattern: /iPhone14,3/ },
  { name: 'iPhone 13 Pro', ppi: 460, screenSize: '6.1"', category: 'iPhone', userAgentPattern: /iPhone14,2/ },
  { name: 'iPhone 13', ppi: 460, screenSize: '6.1"', category: 'iPhone', userAgentPattern: /iPhone14,5/ },
  { name: 'iPhone 13 mini', ppi: 476, screenSize: '5.4"', category: 'iPhone', userAgentPattern: /iPhone14,4/ },
  { name: 'iPhone 12 Pro Max', ppi: 458, screenSize: '6.7"', category: 'iPhone', userAgentPattern: /iPhone13,4/ },
  { name: 'iPhone 12 Pro', ppi: 460, screenSize: '6.1"', category: 'iPhone', userAgentPattern: /iPhone13,3/ },
  { name: 'iPhone 12', ppi: 460, screenSize: '6.1"', category: 'iPhone', userAgentPattern: /iPhone13,2/ },
  { name: 'iPhone 12 mini', ppi: 476, screenSize: '5.4"', category: 'iPhone', userAgentPattern: /iPhone13,1/ },
  { name: 'iPhone SE (3rd)', ppi: 326, screenSize: '4.7"', category: 'iPhone', userAgentPattern: /iPhone14,6/ },
  { name: 'iPhone 11 Pro Max', ppi: 458, screenSize: '6.5"', category: 'iPhone', userAgentPattern: /iPhone12,5/ },
  { name: 'iPhone 11 Pro', ppi: 458, screenSize: '5.8"', category: 'iPhone', userAgentPattern: /iPhone12,3/ },
  { name: 'iPhone 11', ppi: 326, screenSize: '6.1"', category: 'iPhone', userAgentPattern: /iPhone12,1/ },
  { name: 'iPhone XS Max', ppi: 458, screenSize: '6.5"', category: 'iPhone', userAgentPattern: /iPhone11,6/ },
  { name: 'iPhone XS', ppi: 458, screenSize: '5.8"', category: 'iPhone', userAgentPattern: /iPhone11,2/ },
  { name: 'iPhone XR', ppi: 326, screenSize: '6.1"', category: 'iPhone', userAgentPattern: /iPhone11,8/ },
  { name: 'iPhone X', ppi: 458, screenSize: '5.8"', category: 'iPhone', userAgentPattern: /iPhone10,6/ },

  // iPad 系列
  { name: 'iPad Pro 12.9" (6th)', ppi: 264, screenSize: '12.9"', category: 'iPad', userAgentPattern: /iPad14,6/ },
  { name: 'iPad Pro 11" (4th)', ppi: 264, screenSize: '11"', category: 'iPad', userAgentPattern: /iPad14,3/ },
  { name: 'iPad Air (5th)', ppi: 264, screenSize: '10.9"', category: 'iPad', userAgentPattern: /iPad13,16/ },
  { name: 'iPad (10th)', ppi: 264, screenSize: '10.9"', category: 'iPad', userAgentPattern: /iPad13,18/ },
  { name: 'iPad mini (6th)', ppi: 326, screenSize: '8.3"', category: 'iPad', userAgentPattern: /iPad14,1/ },

  // Samsung Galaxy S 系列
  { name: 'Samsung Galaxy S24 Ultra', ppi: 505, screenSize: '6.8"', category: 'Android', userAgentPattern: /SM-S928/ },
  { name: 'Samsung Galaxy S24+', ppi: 513, screenSize: '6.7"', category: 'Android', userAgentPattern: /SM-S926/ },
  { name: 'Samsung Galaxy S24', ppi: 416, screenSize: '6.2"', category: 'Android', userAgentPattern: /SM-S921/ },
  { name: 'Samsung Galaxy S23 Ultra', ppi: 501, screenSize: '6.8"', category: 'Android', userAgentPattern: /SM-S918/ },
  { name: 'Samsung Galaxy S23+', ppi: 393, screenSize: '6.6"', category: 'Android', userAgentPattern: /SM-S916/ },
  { name: 'Samsung Galaxy S23', ppi: 425, screenSize: '6.1"', category: 'Android', userAgentPattern: /SM-S911/ },
  { name: 'Samsung Galaxy S22 Ultra', ppi: 501, screenSize: '6.8"', category: 'Android', userAgentPattern: /SM-S908/ },
  { name: 'Samsung Galaxy S22+', ppi: 393, screenSize: '6.6"', category: 'Android', userAgentPattern: /SM-S906/ },
  { name: 'Samsung Galaxy S22', ppi: 425, screenSize: '6.1"', category: 'Android', userAgentPattern: /SM-S901/ },
  { name: 'Samsung Galaxy S21 Ultra', ppi: 515, screenSize: '6.8"', category: 'Android', userAgentPattern: /SM-G998/ },
  { name: 'Samsung Galaxy S21+', ppi: 394, screenSize: '6.7"', category: 'Android', userAgentPattern: /SM-G996/ },
  { name: 'Samsung Galaxy S21', ppi: 421, screenSize: '6.2"', category: 'Android', userAgentPattern: /SM-G991/ },

  // Google Pixel 系列
  { name: 'Google Pixel 9 Pro XL', ppi: 486, screenSize: '6.8"', category: 'Android', userAgentPattern: /Pixel 9 Pro XL/ },
  { name: 'Google Pixel 9 Pro', ppi: 495, screenSize: '6.3"', category: 'Android', userAgentPattern: /Pixel 9 Pro/ },
  { name: 'Google Pixel 9', ppi: 422, screenSize: '6.3"', category: 'Android', userAgentPattern: /Pixel 9[^P]/ },
  { name: 'Google Pixel 8 Pro', ppi: 489, screenSize: '6.7"', category: 'Android', userAgentPattern: /Pixel 8 Pro/ },
  { name: 'Google Pixel 8', ppi: 428, screenSize: '6.2"', category: 'Android', userAgentPattern: /Pixel 8[^P]/ },
  { name: 'Google Pixel 7 Pro', ppi: 512, screenSize: '6.7"', category: 'Android', userAgentPattern: /Pixel 7 Pro/ },
  { name: 'Google Pixel 7', ppi: 416, screenSize: '6.3"', category: 'Android', userAgentPattern: /Pixel 7[^P]/ },
  { name: 'Google Pixel 6 Pro', ppi: 512, screenSize: '6.7"', category: 'Android', userAgentPattern: /Pixel 6 Pro/ },
  { name: 'Google Pixel 6', ppi: 411, screenSize: '6.4"', category: 'Android', userAgentPattern: /Pixel 6[^P]/ },

  // Xiaomi 系列
  { name: 'Xiaomi 14 Ultra', ppi: 522, screenSize: '6.73"', category: 'Android', userAgentPattern: /2405CPX3DG/ },
  { name: 'Xiaomi 14 Pro', ppi: 522, screenSize: '6.73"', category: 'Android', userAgentPattern: /23116PN5BC/ },
  { name: 'Xiaomi 14', ppi: 460, screenSize: '6.36"', category: 'Android', userAgentPattern: /23127PN0CC/ },
  { name: 'Xiaomi 13 Ultra', ppi: 522, screenSize: '6.73"', category: 'Android', userAgentPattern: /2304FPN6DC/ },
  { name: 'Xiaomi 13 Pro', ppi: 522, screenSize: '6.73"', category: 'Android', userAgentPattern: /2210132C/ },
  { name: 'Xiaomi 13', ppi: 414, screenSize: '6.36"', category: 'Android', userAgentPattern: /2211133C/ },

  // OnePlus 系列
  { name: 'OnePlus 12', ppi: 510, screenSize: '6.82"', category: 'Android', userAgentPattern: /CPH2583/ },
  { name: 'OnePlus 11', ppi: 525, screenSize: '6.7"', category: 'Android', userAgentPattern: /CPH2449/ },
  { name: 'OnePlus 10 Pro', ppi: 525, screenSize: '6.7"', category: 'Android', userAgentPattern: /NE2213/ },
  { name: 'OnePlus 9 Pro', ppi: 525, screenSize: '6.7"', category: 'Android', userAgentPattern: /LE2123/ },

  // Huawei 系列
  { name: 'Huawei Mate 60 Pro', ppi: 460, screenSize: '6.82"', category: 'Android', userAgentPattern: /ALN-AL00/ },
  { name: 'Huawei P60 Pro', ppi: 460, screenSize: '6.67"', category: 'Android', userAgentPattern: /BNE-AL00/ },
  { name: 'Huawei Mate 50 Pro', ppi: 424, screenSize: '6.74"', category: 'Android', userAgentPattern: /DCO-AL00/ },

  // OPPO 系列
  { name: 'OPPO Find X7 Ultra', ppi: 510, screenSize: '6.82"', category: 'Android', userAgentPattern: /PHZ110/ },
  { name: 'OPPO Find X6 Pro', ppi: 510, screenSize: '6.82"', category: 'Android', userAgentPattern: /PHM110/ },
  { name: 'OPPO Find X5 Pro', ppi: 525, screenSize: '6.7"', category: 'Android', userAgentPattern: /CPH2305/ },

  // vivo 系列
  { name: 'vivo X100 Pro', ppi: 452, screenSize: '6.78"', category: 'Android', userAgentPattern: /V2309A/ },
  { name: 'vivo X90 Pro+', ppi: 517, screenSize: '6.78"', category: 'Android', userAgentPattern: /V2227A/ },
  { name: 'vivo X90 Pro', ppi: 452, screenSize: '6.78"', category: 'Android', userAgentPattern: /V2242A/ },
];

// PPI 转换为 pixels per mm
export function ppiToPixelsPerMm(ppi: number): number {
  return ppi / 25.4; // 1 inch = 25.4 mm
}

// 根据 User Agent 检测设备
export function detectDevice(): DeviceInfo | null {
  const userAgent = navigator.userAgent;
  
  // 尝试匹配设备数据库
  for (const device of deviceDatabase) {
    if (device.userAgentPattern && device.userAgentPattern.test(userAgent)) {
      return device;
    }
  }
  
  // 如果无法精确匹配，尝试通过通用模式匹配
  return detectDeviceByGenericPattern(userAgent);
}

// 通用模式匹配（当精确匹配失败时使用）
function detectDeviceByGenericPattern(userAgent: string): DeviceInfo | null {
  // iPhone 通用匹配
  if (/iPhone/.test(userAgent)) {
    // 根据屏幕分辨率推测
    const width = window.screen.width;
    const height = window.screen.height;
    const devicePixelRatio = window.devicePixelRatio || 1;
    
    // iPhone 14 Pro 及以上（Dynamic Island 机型）
    if (devicePixelRatio === 3 && (width === 393 || width === 430)) {
      return { name: 'iPhone (Pro Model)', ppi: 460, screenSize: '6.1-6.7"', category: 'iPhone' };
    }
    // iPhone 标准分辨率
    if (devicePixelRatio === 3 && width === 390) {
      return { name: 'iPhone (Standard)', ppi: 460, screenSize: '6.1"', category: 'iPhone' };
    }
    // iPhone mini
    if (devicePixelRatio === 3 && width === 375 && height === 812) {
      return { name: 'iPhone (mini)', ppi: 476, screenSize: '5.4"', category: 'iPhone' };
    }
    // iPhone SE / 8 / 7 / 6s
    if (devicePixelRatio === 2 && width === 375) {
      return { name: 'iPhone (SE/8)', ppi: 326, screenSize: '4.7"', category: 'iPhone' };
    }
  }
  
  // iPad 通用匹配
  if (/iPad/.test(userAgent)) {
    const devicePixelRatio = window.devicePixelRatio || 1;
    if (devicePixelRatio === 2) {
      return { name: 'iPad (Retina)', ppi: 264, screenSize: '10-13"', category: 'iPad' };
    }
  }
  
  // Android 通用匹配
  if (/Android/.test(userAgent)) {
    const devicePixelRatio = window.devicePixelRatio || 1;
    
    // 高端 Android 设备
    if (devicePixelRatio >= 3.5) {
      return { name: 'Android (High-End)', ppi: 500, screenSize: '6-7"', category: 'Android' };
    }
    // 中端 Android 设备
    if (devicePixelRatio >= 2.5) {
      return { name: 'Android (Mid-Range)', ppi: 420, screenSize: '6-7"', category: 'Android' };
    }
    // 入门级 Android 设备
    if (devicePixelRatio >= 2) {
      return { name: 'Android (Standard)', ppi: 320, screenSize: '6-7"', category: 'Android' };
    }
  }
  
  return null;
}

// 获取设备显示名称（用于UI显示）
export function getDeviceDisplayName(device: DeviceInfo): string {
  return `${device.name} (${device.screenSize}, ${device.ppi} PPI)`;
}
