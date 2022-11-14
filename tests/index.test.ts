import * as kaokun from '../lib/index';

describe('Testing max length checker', () => {
  it('length should be less than or equal to 3', () => {
    expect(kaokun.kaomoji({maxLength: 3}).length).toBeLessThanOrEqual(3);
  });
  it('length should be less than or equal to 5', () => {
    expect(kaokun.kaomoji({maxLength: 5}).length).toBeLessThanOrEqual(5);
  });
  it('length should be less than or equal to 10', () => {
    expect(kaokun.kaomoji({maxLength: 10}).length).toBeLessThanOrEqual(10);
  });
  it('length should be less than or equal to 15', () => {
    expect(kaokun.kaomoji({maxLength: 15}).length).toBeLessThanOrEqual(15);
  });
});

describe('Testing seed', () => {
  it('should be the same with seed', () => {
    expect(kaokun.kaomoji({seed: 'test'})).toBe(kaokun.kaomoji({seed: 'test'}));
  });
  it('should be different with different seed', () => {
    expect(kaokun.kaomoji({seed: 'test'})).not.toBe(kaokun.kaomoji({seed: 'test2'}));
  });
});

describe('Testing emotion', () => {
  it('should be the same with seed', () => {
    expect(kaokun.happy('test')).toBe(kaokun.kaomoji({seed: 'test', emotion: 'happy'}));
  });
  it('should be different with different seed', () => {
    expect(kaokun.happy('test')).not.toBe(kaokun.kaomoji({seed: 'test2', emotion: 'happy'}));
  });
  it('should be different with different emotion', () => {
    expect(kaokun.happy('test')).not.toBe(kaokun.kaomoji({seed: 'test', emotion: 'sad'}));
  });
});

describe('Testing random', () => {
  it('length should not be less than 3', () => {
    expect(kaokun.random().length).toBeGreaterThanOrEqual(3);
  });
  it('length should be less than or equal to 3', () => {
    expect(kaokun.random(3).length).toBeLessThanOrEqual(3);
  });
  it('length should be less than or equal to 5', () => {
    expect(kaokun.random(5).length).toBeLessThanOrEqual(5);
  });
  it('length should be less than or equal to 10', () => {
    expect(kaokun.random(10).length).toBeLessThanOrEqual(10);
  });
  it('length should be less than or equal to 15', () => {
    expect(kaokun.random(15).length).toBeLessThanOrEqual(15);
  });
});