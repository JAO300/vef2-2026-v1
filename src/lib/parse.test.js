import assert from 'node:assert';
import { describe, it } from 'node:test';
import { parseLine, parseQuestions } from './parse.js';

describe('parse', () => {
  describe('parseQuestions', () => {
    it('should test', () => {
      const result = parseQuestions();
      assert.strictEqual(result, 'test');
    });
  });

  describe('parseLine', () =>{
    it('should parse the empty string and return null', () => {
      // Arrange
      const input = "4,,3,2,q,a";
      // Act
      const output = parseLine(input);
      // Assert
      assert.strictEqual(output?.answer, 'a');
      assert.strictEqual(output?.question, 'q');
      assert.strictEqual(output?.categoryNumber, '4');
    })

  })
  describe('parseLine', () =>{
    it('should normalize double quotes in quoted question', () => {
      // Arrange
      const input = '6,Tónlist,2,,"Hvaða lag er ""Rangur maður""?",Svar';
      // Act
      const output = parseLine(input);
      // Assert
      assert.strictEqual(
        output?.question,
        'Hvaða lag er "Rangur maður"?'
      );
    });    
})
})
