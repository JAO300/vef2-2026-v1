import fs from 'node:fs/promises';

const MAX_QUESTIONS_PER_CATEGORY = 100;

/**
 *
 * @param {number} line
 * @returns
 */
function parseLine(line) {
  const split = line.split(',');

  // TODO mappa categoryNumber yfir í streng skv skjölun
  /*
    1 	Almenn kunnátta
    2 	Náttúra og vísindi
    3 	Bókmenntir og listir
    4 	Saga
    5 	Landafræði
    6 	Skemmtun og afþreying
    7 	Íþróttir og tómstundir
    */

  /*
1 	Nei 	Flokkanúmer
2 	Já 	Undirflokkur ef til staðar
3 	Nei 	Erfiðleikastig: 1: Létt, 2: Meðal, 3: Erfið
4 	Já 	Gæðastig: 1: Slöpp, 2: Góð, 3: Ágæt
5 	Nei 	Spurningin
6 	Nei 	Svarið
*/
  const categoryNumber = split[0];
  const subCategory = split[1];
  const difficulty = split[2];
  const quality = split[3];
  const question = split[4];
  const answer = split[5];

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

function generateQuestionHtml(q) {
  const html = `
    <section>
      <h3>${q.question}</h3>
      <p>${q.answer}</p>
    </section>`;

  return html;
}

async function main() {
  const content = await fs.readFile('./questions.csv', 'utf-8');

  const lines = content.split('\n');

  const questions = lines.map(parseLine);

  const qualityHistoryQuestions = questions
    .filter((q) => q.categoryNumber === '4' && q.quality === '3')
    .slice(0, MAX_QUESTIONS_PER_CATEGORY);

  console.log(qualityHistoryQuestions);

  //const output = generateQuestionHtml(qualityHistoryQuestions[0]);
  const output = qualityHistoryQuestions.map(generateQuestionHtml).join('\n');

  const path = './dist/saga.html';

  fs.writeFile(path, output, 'utf-8');
}

main().catch((error) => {
  console.error('error generating', error);
});
