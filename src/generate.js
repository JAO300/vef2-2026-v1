import fs from 'node:fs/promises';
import { parseLine } from './lib/parse.js';
import {
  generateIndexHtml,
  generateQuestionCategoryHtml,
  generateQuestionHtml,
} from './lib/html.js';

const MAX_QUESTIONS_PER_CATEGORY = 100;

async function main() {
  // Búa til dist möppu ef ekki til
  const distPath = './dist';
  await fs.mkdir(distPath);

  const content = await fs.readFile('./questions.csv', 'utf-8');

  const lines = content.split('\n');

  const questions = lines.map(parseLine);

  //Saga
  const qualityHistoryQuestions = questions
    .filter((q) => q && q.categoryNumber === '4' && q.quality === '3')
    .slice(0, MAX_QUESTIONS_PER_CATEGORY);
  const questionsHtml = qualityHistoryQuestions
    .map(generateQuestionHtml)
    .join('\n');
  const output = generateQuestionCategoryHtml('Saga', questionsHtml);
  const path = './dist/saga.html';
  await fs.writeFile(path, output, 'utf-8');

  // Almenn kunnátta
  const qualityGeneralQuestions = questions
    .filter((q) => q && q.categoryNumber === '1' && q.quality === '3')
    .slice(0, MAX_QUESTIONS_PER_CATEGORY);
  const generalQuestionsHtml = qualityGeneralQuestions
    .map(generateQuestionHtml)
    .join('\n');
  const generalOutput = generateQuestionCategoryHtml(
    'almenn kunnátta',
    generalQuestionsHtml
  );
  await fs.writeFile('./dist/almenn.html', generalOutput, 'utf-8');

  // Náttúra og vísindi
  const qualityScienceQuestions = questions
    .filter((q) => q && q.categoryNumber === '2' && q.quality === '3')
    .slice(0, MAX_QUESTIONS_PER_CATEGORY);
  const scienceQuestionsHtml = qualityScienceQuestions
    .map(generateQuestionHtml)
    .join('\n');
  const scienceOutput = generateQuestionCategoryHtml(
    'Náttúra og vísindi',
    scienceQuestionsHtml
  );
  await fs.writeFile('./dist/nattura.html', scienceOutput, 'utf-8');

  // Bókmenntir og listir
  const qualityLiteratureArtsQuestions = questions
    .filter((q) => q && q.categoryNumber === '3' && q.quality === '3')
    .slice(0, MAX_QUESTIONS_PER_CATEGORY);
  const literatureArtsQuestionsHtml = qualityLiteratureArtsQuestions
    .map(generateQuestionHtml)
    .join('\n');
  const literatureArtsOutput = generateQuestionCategoryHtml(
    'Bókmenntir og listir',
    literatureArtsQuestionsHtml
  );
  await fs.writeFile('./dist/bokmenntir.html', literatureArtsOutput, 'utf-8');

  //Landafræði
  const qualityGeoQuestions = questions
    .filter((q) => q && q.categoryNumber === '5' && q.quality === '3')
    .slice(0, MAX_QUESTIONS_PER_CATEGORY);
  const geoQuestionsHtml = qualityGeoQuestions
    .map(generateQuestionHtml)
    .join('\n');
  const geoOutput = generateQuestionCategoryHtml(
    'Landafræði',
    geoQuestionsHtml
  );
  await fs.writeFile('./dist/landafraedi.html', geoOutput, 'utf-8');

  // Skemmtun og afþreying
  const qualityEntertainmentQuestions = questions
    .filter((q) => q && q.categoryNumber === '6' && q.quality === '3')
    .slice(0, MAX_QUESTIONS_PER_CATEGORY);
  const entertainmentQuestionsHtml = qualityEntertainmentQuestions
    .map(generateQuestionHtml)
    .join('\n');
  const entertainmentOutput = generateQuestionCategoryHtml(
    'Skemmtun og afþreying',
    entertainmentQuestionsHtml
  );
  await fs.writeFile('./dist/skemmtun.html', entertainmentOutput, 'utf-8');

  // Íþróttir og tómstundir
  const qualitySportsQuestions = questions
    .filter((q) => q && q.categoryNumber === '7' && q.quality === '3')
    .slice(0, MAX_QUESTIONS_PER_CATEGORY);
  const sportsQuestionsHtml = qualitySportsQuestions
    .map(generateQuestionHtml)
    .join('\n');
  const sportsOutput = generateQuestionCategoryHtml(
    'Íþróttir og tómstundir',
    sportsQuestionsHtml
  );
  await fs.writeFile('./dist/ithrottir.html', sportsOutput, 'utf-8');

  // index
  const indexHtml = generateIndexHtml();
  await fs.writeFile('./dist/index.html', indexHtml, 'utf-8');
}

main().catch((error) => {
  console.error('error generating', error);
});
