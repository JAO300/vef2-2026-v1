import assert from 'node:assert';
import { describe, it } from 'node:test';
import {
  generateIndexHtml,
  generateQuestionCategoryHtml,
  generateQuestionHtml,
} from './html.js';

describe('html', () => {
  describe('generateQuestionCategoryHtml', () => {
    it('should generate category html containing title and questions', () => {
      // Arrange
      const qHtml = generateQuestionHtml({
        question: 'Spurning?',
        answer: 'Svar',
      });

      // Act
      const page = generateQuestionCategoryHtml('Saga', qHtml);

      // Assert
      assert.ok(page.includes('Saga'));
      assert.ok(page.includes('Spurning?'));
      assert.ok(page.includes('Svar'));
    });
  });

  describe('generateIndexHtml', () => {
    it('should generate index html', () => {
      // Act
      const index = generateIndexHtml();
  
      // Assert
      assert.ok(index.includes('<h1>Spurningaleikur!</h1>'));
      assert.ok(index.includes('saga.html'));
      assert.ok(index.includes('almenn.html'));
      assert.ok(index.includes('nattura.html'));
      assert.ok(index.includes('bokmenntir.html'));
      assert.ok(index.includes('landafraedi.html'));
      assert.ok(index.includes('skemmtun.html'));
      assert.ok(index.includes('ithrottir.html'));
    });
  });

});
