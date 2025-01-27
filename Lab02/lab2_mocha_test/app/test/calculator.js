import { expect } from 'chai';
import * as calculator from '../calculator.js';


describe('Calculator Tests', () => {
  // Test for addition
  it('should return 7 for add(5, 2)', () => {
    expect(calculator.add(5, 2)).to.equal(7);
  });

  it('should fail for add(5, 2) expecting 8', () => {
    expect(calculator.add(5, 2)).to.not.equal(8);
  });

  // Test for subtraction
  it('should return 3 for sub(5, 2)', () => {
    expect(calculator.sub(5, 2)).to.equal(3);
  });

  it('should fail for sub(5, 2) expecting 5', () => {
    expect(calculator.sub(5, 2)).to.not.equal(5);
  });

  // Test for multiplication
  it('should return 10 for mul(5, 2)', () => {
    expect(calculator.mul(5, 2)).to.equal(10);
  });

  it('should fail for mul(5, 2) expecting 12', () => {
    expect(calculator.mul(5, 2)).to.not.equal(12);
  });

  // Test for division
  it('should return 5 for div(10, 2)', () => {
    expect(calculator.div(10, 2)).to.equal(5);
  });

  it('should fail for div(10, 2) expecting 2', () => {
    expect(calculator.div(10, 2)).to.not.equal(2);
  });
});
