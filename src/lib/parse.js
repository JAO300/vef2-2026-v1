export function parseQuestions() {
  return 'test';
}

/**
 *
 * @param {string} line
 * @returns
 */
export function parseLine(line) {
  const split = line.split(',');

  if(split.length !== 6){
    return null
  }

  const categoryNumber = split[0];
  const subCategory = split[1];
  const difficulty = split[2];
  const quality = split[3];
  const question = normalizeDoubleQuotes(split[4]);
  const answer = normalizeDoubleQuotes(split[5]);
  
  const q = {
    categoryNumber,
    subCategory,
    difficulty,
    quality,
    question,
    answer,
  };

  return q;
}

function normalizeDoubleQuotes(str) {
  if (!str) return str;

  if (str.startsWith('"') && str.endsWith('"')) {
    str = str.slice(1, -1);
  }

  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '"' && str[i + 1] === '"') {
      result += '"';
      i++;
    } else {
      result += str[i];
    }
  }

  return result;
}

