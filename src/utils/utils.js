export function getFileName(originalName) {
  const re = /(?:\.([^.]+))?$/;
  return 'IMG-' + getFormattedTime() + '.' + re.exec(originalName)[1];
}

export function getFormattedTime() {
  const today = new Date();
  const y = today.getFullYear();
  // JavaScript months are 0-based.
  const m = today.getMonth() + 1;
  const d = today.getDate();
  const h = today.getHours();
  const mi = today.getMinutes();
  const s = today.getSeconds();
  return y + '-' + m + '-' + d + '-' + h + '-' + mi + '-' + s;
}
