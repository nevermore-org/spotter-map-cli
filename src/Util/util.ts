export function chunkify <T>(items: T[], chunkSize: number) {
    var chunks = [],
        index = 0,
        originLen = items.length;
  
    while (index < originLen) {
      chunks.push(items.slice(index, index += chunkSize));
    }
  
    return chunks;
}