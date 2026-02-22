/**
 * 格式化工具
 */

export function formatDate(date: Date): string {
  return date.toISOString().split('T')[0] ?? '';
}
