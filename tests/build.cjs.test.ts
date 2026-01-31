/**
 * Build verification tests - checks compiled output exists and exports work
 * Detailed functionality is tested in index.test.ts
 */

import * as fs from 'fs';
import * as path from 'path';

const LIB_CJS = path.resolve(__dirname, '../lib/cjs');
const LIB_ESM = path.resolve(__dirname, '../lib/esm');

const ALL_EMOTION_EXPORTS = [
  'greeting',
  'fun',
  'happy',
  'cute',
  'sad',
  'angry',
  'hurt',
  'surprised',
  'love',
  'bored',
  'silly',
] as const;

describe('Build output structure', () => {
  it('should have CJS build directory', () => {
    expect(fs.existsSync(LIB_CJS)).toBe(true);
  });

  it('should have ESM build directory', () => {
    expect(fs.existsSync(LIB_ESM)).toBe(true);
  });

  it('should have CJS index.js', () => {
    expect(fs.existsSync(path.join(LIB_CJS, 'index.js'))).toBe(true);
  });

  it('should have ESM index.js', () => {
    expect(fs.existsSync(path.join(LIB_ESM, 'index.js'))).toBe(true);
  });

  it('should have CJS type declarations', () => {
    expect(fs.existsSync(path.join(LIB_CJS, 'index.d.ts'))).toBe(true);
  });

  it('should have ESM type declarations', () => {
    expect(fs.existsSync(path.join(LIB_ESM, 'index.d.ts'))).toBe(true);
  });

  it('should have CJS libs directory', () => {
    expect(fs.existsSync(path.join(LIB_CJS, 'libs', 'kao.js'))).toBe(true);
    expect(fs.existsSync(path.join(LIB_CJS, 'libs', 'libs.js'))).toBe(true);
  });

  it('should have ESM libs directory', () => {
    expect(fs.existsSync(path.join(LIB_ESM, 'libs', 'kao.js'))).toBe(true);
    expect(fs.existsSync(path.join(LIB_ESM, 'libs', 'libs.js'))).toBe(true);
  });
});

describe('CJS exports', () => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const cjs = require('../lib/cjs/index');

  it('should export kaomoji function', () => {
    expect(typeof cjs.kaomoji).toBe('function');
  });

  it('should export random function', () => {
    expect(typeof cjs.random).toBe('function');
  });

  it('should export all emotion functions', () => {
    for (const emotion of ALL_EMOTION_EXPORTS) {
      expect(typeof cjs[emotion]).toBe('function');
    }
  });

  it('kaomoji should return a string (smoke test)', () => {
    const result = cjs.kaomoji();
    expect(typeof result).toBe('string');
    expect(result.length).toBeGreaterThan(0);
  });
});
