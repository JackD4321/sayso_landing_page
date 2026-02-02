export function splitWords(text: string): string[] {
  return text.split(' ').filter((word) => word.length > 0);
}
