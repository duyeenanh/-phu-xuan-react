feature/studio2
export function formatDate(date: Date): string {
  return date.toLocaleDateString('vi-VN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
}

export function truncate(str: string, maxLength = 50): string {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength - 3) + '...';
export function formatDate(date: string | Date): string {
  return new Date(date).toLocaleDateString('vi-VN');
}

export function truncate(str: string, maxLength: number = 50): string {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength) + '...';
 main
}

export function toSlug(title: string): string {
  return title
    .toLowerCase()
feature/studio2
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '');
}

const StringUtils = { formatDate, truncate, toSlug };
export default StringUtils;
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-');
}
 main
