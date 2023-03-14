export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("plus")) {
    query = query.toLowerCase();
    let splitted: string[] = query.split("", 5);
    let answer = parseInt(splitted[2]) + parseInt(splitted[4]);
    return answer.toString();
  }
  if (query.toLowerCase().includes("largest")) {
    query = query.toLowerCase();
    let splitted: string[] = query.split("", 5);
    parseInt(splitted[4].substring(0, -1))
    let answer = parseInt(splitted[2]) + parseInt(splitted[4]);
    return answer.toString();
  }
  return "";
}
