export type DeviceCategory = 'iPhone' | 'iPad' | 'Android' | 'Other';

export interface Device {
  name: string;
  category: DeviceCategory;
  screenSize: number;
  ppi: number;
  pixelsPerMm: number;
}

// PPI to pixels per mm conversion: pixelsPerMm = PPI / 25.4
export const devices: Device[] = [
  // iPhone (最新到最旧)
  { name: 'iPhone 16 Pro Max', category: 'iPhone', screenSize: 6.9, ppi: 460, pixelsPerMm: 18.11 },
  { name: 'iPhone 16 Pro', category: 'iPhone', screenSize: 6.3, ppi: 460, pixelsPerMm: 18.11 },
  { name: 'iPhone 16 Plus', category: 'iPhone', screenSize: 6.7, ppi: 460, pixelsPerMm: 18.11 },
  { name: 'iPhone 16', category: 'iPhone', screenSize: 6.1, ppi: 460, pixelsPerMm: 18.11 },
  { name: 'iPhone 15 Pro Max', category: 'iPhone', screenSize: 6.7, ppi: 460, pixelsPerMm: 18.11 },
  { name: 'iPhone 15 Pro', category: 'iPhone', screenSize: 6.1, ppi: 460, pixelsPerMm: 18.11 },
  { name: 'iPhone 15 Plus', category: 'iPhone', screenSize: 6.7, ppi: 460, pixelsPerMm: 18.11 },
  { name: 'iPhone 15', category: 'iPhone', screenSize: 6.1, ppi: 460, pixelsPerMm: 18.11 },
  { name: 'iPhone 14 Pro Max', category: 'iPhone', screenSize: 6.7, ppi: 460, pixelsPerMm: 18.11 },
  { name: 'iPhone 14 Pro', category: 'iPhone', screenSize: 6.1, ppi: 460, pixelsPerMm: 18.11 },
  { name: 'iPhone 14 Plus', category: 'iPhone', screenSize: 6.7, ppi: 460, pixelsPerMm: 18.11 },
  { name: 'iPhone 14', category: 'iPhone', screenSize: 6.1, ppi: 460, pixelsPerMm: 18.11 },
  { name: 'iPhone 13 Pro Max', category: 'iPhone', screenSize: 6.7, ppi: 458, pixelsPerMm: 18.03 },
  { name: 'iPhone 13 Pro', category: 'iPhone', screenSize: 6.1, ppi: 460, pixelsPerMm: 18.11 },
  { name: 'iPhone 13', category: 'iPhone', screenSize: 6.1, ppi: 460, pixelsPerMm: 18.11 },
  { name: 'iPhone 13 mini', category: 'iPhone', screenSize: 5.4, ppi: 476, pixelsPerMm: 18.74 },
  { name: 'iPhone 12 Pro Max', category: 'iPhone', screenSize: 6.7, ppi: 458, pixelsPerMm: 18.03 },
  { name: 'iPhone 12 Pro', category: 'iPhone', screenSize: 6.1, ppi: 460, pixelsPerMm: 18.11 },
  { name: 'iPhone 12', category: 'iPhone', screenSize: 6.1, ppi: 460, pixelsPerMm: 18.11 },
  { name: 'iPhone 12 mini', category: 'iPhone', screenSize: 5.4, ppi: 476, pixelsPerMm: 18.74 },
  { name: 'iPhone SE (2022)', category: 'iPhone', screenSize: 4.7, ppi: 326, pixelsPerMm: 12.83 },
  { name: 'iPhone 11 Pro Max', category: 'iPhone', screenSize: 6.5, ppi: 458, pixelsPerMm: 18.03 },
  { name: 'iPhone 11 Pro', category: 'iPhone', screenSize: 5.8, ppi: 458, pixelsPerMm: 18.03 },
  { name: 'iPhone 11', category: 'iPhone', screenSize: 6.1, ppi: 326, pixelsPerMm: 12.83 },
  { name: 'iPhone XS Max', category: 'iPhone', screenSize: 6.5, ppi: 458, pixelsPerMm: 18.03 },
  { name: 'iPhone XS', category: 'iPhone', screenSize: 5.8, ppi: 458, pixelsPerMm: 18.03 },
  { name: 'iPhone XR', category: 'iPhone', screenSize: 6.1, ppi: 326, pixelsPerMm: 12.83 },
  { name: 'iPhone X', category: 'iPhone', screenSize: 5.8, ppi: 458, pixelsPerMm: 18.03 },
  { name: 'iPhone 8 Plus', category: 'iPhone', screenSize: 5.5, ppi: 401, pixelsPerMm: 15.79 },
  { name: 'iPhone 8', category: 'iPhone', screenSize: 4.7, ppi: 326, pixelsPerMm: 12.83 },

  // iPad
  { name: 'iPad Pro 12.9" (2024)', category: 'iPad', screenSize: 12.9, ppi: 264, pixelsPerMm: 10.39 },
  { name: 'iPad Pro 11" (2024)', category: 'iPad', screenSize: 11, ppi: 264, pixelsPerMm: 10.39 },
  { name: 'iPad Air (2024)', category: 'iPad', screenSize: 11, ppi: 264, pixelsPerMm: 10.39 },
  { name: 'iPad (2024)', category: 'iPad', screenSize: 10.9, ppi: 264, pixelsPerMm: 10.39 },
  { name: 'iPad mini (2024)', category: 'iPad', screenSize: 8.3, ppi: 326, pixelsPerMm: 12.83 },

  // Android 主流设备
  { name: 'Samsung Galaxy S24 Ultra', category: 'Android', screenSize: 6.8, ppi: 505, pixelsPerMm: 19.88 },
  { name: 'Samsung Galaxy S24+', category: 'Android', screenSize: 6.7, ppi: 513, pixelsPerMm: 20.20 },
  { name: 'Samsung Galaxy S24', category: 'Android', screenSize: 6.2, ppi: 416, pixelsPerMm: 16.38 },
  { name: 'Samsung Galaxy S23 Ultra', category: 'Android', screenSize: 6.8, ppi: 501, pixelsPerMm: 19.72 },
  { name: 'Samsung Galaxy S23+', category: 'Android', screenSize: 6.6, ppi: 393, pixelsPerMm: 15.47 },
  { name: 'Samsung Galaxy S23', category: 'Android', screenSize: 6.1, ppi: 425, pixelsPerMm: 16.73 },
  { name: 'Google Pixel 9 Pro XL', category: 'Android', screenSize: 6.8, ppi: 486, pixelsPerMm: 19.13 },
  { name: 'Google Pixel 9 Pro', category: 'Android', screenSize: 6.3, ppi: 495, pixelsPerMm: 19.49 },
  { name: 'Google Pixel 9', category: 'Android', screenSize: 6.3, ppi: 422, pixelsPerMm: 16.61 },
  { name: 'Google Pixel 8 Pro', category: 'Android', screenSize: 6.7, ppi: 489, pixelsPerMm: 19.25 },
  { name: 'Google Pixel 8', category: 'Android', screenSize: 6.2, ppi: 428, pixelsPerMm: 16.85 },
  { name: 'OnePlus 12', category: 'Android', screenSize: 6.82, ppi: 510, pixelsPerMm: 20.08 },
  { name: 'Xiaomi 14 Pro', category: 'Android', screenSize: 6.73, ppi: 522, pixelsPerMm: 20.55 },
  { name: 'Xiaomi 14', category: 'Android', screenSize: 6.36, ppi: 460, pixelsPerMm: 18.11 },
  { name: 'OPPO Find X7 Ultra', category: 'Android', screenSize: 6.82, ppi: 510, pixelsPerMm: 20.08 },
  { name: 'Vivo X100 Pro', category: 'Android', screenSize: 6.78, ppi: 517, pixelsPerMm: 20.35 },
  { name: 'Honor Magic 6 Pro', category: 'Android', screenSize: 6.8, ppi: 453, pixelsPerMm: 17.83 },

  // Other (通用设备)
  { name: 'MacBook Pro 14"', category: 'Other', screenSize: 14, ppi: 254, pixelsPerMm: 10.0 },
  { name: 'MacBook Pro 16"', category: 'Other', screenSize: 16, ppi: 254, pixelsPerMm: 10.0 },
  { name: 'MacBook Air 13"', category: 'Other', screenSize: 13, ppi: 224, pixelsPerMm: 8.82 },
  { name: 'MacBook Air 15"', category: 'Other', screenSize: 15, ppi: 224, pixelsPerMm: 8.82 },
  { name: 'Surface Pro 9', category: 'Other', screenSize: 13, ppi: 267, pixelsPerMm: 10.51 },
  { name: '标准笔记本 (1080p 15.6")', category: 'Other', screenSize: 15.6, ppi: 141, pixelsPerMm: 5.55 },
  { name: '标准显示器 (1080p 24")', category: 'Other', screenSize: 24, ppi: 92, pixelsPerMm: 3.62 },
  { name: '标准显示器 (1440p 27")', category: 'Other', screenSize: 27, ppi: 109, pixelsPerMm: 4.29 },
];
