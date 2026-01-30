export function generateIndexHtml() {
  const html = /* HTML */ `
  <html>
      <head>
      <link rel="stylesheet" href="styles.css">
      </head>
      <body>
      <main class="container">
        <h1>Spurningaleikur!</h1>
        <p> Velkomin!</p>
        <ul class="category-list">
          <li><a class ="category-button" href="saga.html">Saga</a></li>
          <li><a class ="category-button" href="almenn.html">Almenn kunnátta</a></li>
          <li><a class ="category-button" href="nattura.html">Náttúra og vísindi</a></li>
          <li><a class ="category-button" href="bokmenntir.html">Bókmenntir og listir</a></li>
          <li><a class ="category-button" href="landafraedi.html">Landafræði</a></li>
          <li><a class ="category-button" href="skemmtun.html">Skemmtun og afþreying</a></li>
          <li><a class ="category-button" href="ithrottir.html">Íþróttir og tómstundir</a></li>
</main>
      </body>
    </html>
  `;

  return html;
}

export function generateQuestionHtml(q) {
  const html = /* HTML */ ` <section class="question" data-answered="false">
    <h3>${q.question}</h3>
    <p>${q.answer}</p>
    <button type="button" class="button button-correct">Rétt</button>
    <button type="button" class="button button-incorrect">Rangt</button>
  </section>`;

  return html;
}

export function generateQuestionCategoryHtml(title, questionsHtml) {
  const html = /* HTML */ `
    <html>
      <head>
        <script src="scripts.js" type="module"></script>
      </head>
      <body>
        <h1>Spurningaleikur!</h1>
        <p><a href="index.html">Til baka</a></p>
        <div class="counter">
          <div class="correct">0</div>
          <div class="incorrect">0</div>
        </div>
        <div class="questions">
          <h2>${title}</h2>
          ${questionsHtml}
        </div>
      </body>
    </html>
  `;

  return html;
}
