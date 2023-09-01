export function getRandomColor() {
  // 生成随机的 RGB 值
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  // 将 RGB 值转换为十六进制颜色码
  const hex =
    '#' + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);

  return hex;
}
