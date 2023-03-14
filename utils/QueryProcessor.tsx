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
    let splitted: string[] = query.split(" ");
    let answer = parseInt(splitted[2]) + parseInt(splitted[4]);
    return answer.toString();
  }
  if (query.toLowerCase().includes("largest")) {
    query = query.toLowerCase();
    // Which of the following numbers is the largest: 56, 93, 17?
    let splitted: string[] = query.split(" ");
    let one = parseInt(splitted[8]);
    let two = parseInt(splitted[9]);
    let three = parseInt(splitted[9]);
    return Math.max(one, two, three).toString()
  }

  if (query.toLowerCase().includes("multiplied")) {
    query = query.toLowerCase();
    let splitted: string[] = query.split(" ");
    let answer = parseInt(splitted[2]) * parseInt(splitted[5]);
    return answer.toString();
  }
  if (query.toLowerCase().includes("square")) {
    query = query.toLowerCase();
    let splitted: string[] = query.split(new RegExp("[,:]"));
    return splitted[0]
    splitted[0] = splitted[0].substring(-1)
    let answer = parseInt(splitted[2]) * parseInt(splitted[0]);
    return answer.toString();
  }

  if (query.toLowerCase().includes("minus")) {
    query = query.toLowerCase();
    let splitted: string[] = query.split(" ");
    let answer = parseInt(splitted[2]) - parseInt(splitted[4]);
    return answer.toString();
  }
  return "";
}
