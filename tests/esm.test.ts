/**
 * ESM build tests - runs with native Node (not Jest)
 * Compile with: tsc -p tsconfig.esm-test.json
 * Run with: node dist-tests/esm/esm.test.js
 */

import assert from 'node:assert';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

type EmotionFn = (seed?: string, maxLength?: number) => string;

interface KaoModule {
  kaomoji: (options?: { seed?: string; maxLength?: number }) => string;
  random: (maxLength?: number) => string;
  [key: string]:
    | EmotionFn
    | ((options?: { seed?: string; maxLength?: number }) => string)
    | ((maxLength?: number) => string);
}

async function runTests() {
  console.log('ESM Build Tests\n');

  // Load ESM module
  const esmPath = path.resolve(__dirname, '../lib/esm/index.js').replace(/\\/g, '/');
  const esm = (await import(`file://${esmPath}`)) as KaoModule;

  // Load CJS module for parity tests
  const cjsPath = path.resolve(__dirname, '../lib/cjs/index.js');
  const { createRequire } = await import('node:module');
  const require = createRequire(import.meta.url);
  const cjs = require(cjsPath) as KaoModule;

  let passed = 0;
  let failed = 0;

  function test(name: string, fn: () => void) {
    try {
      fn();
      console.log(`  ✓ ${name}`);
      passed++;
    } catch (err) {
      console.log(`  ✗ ${name}`);
      console.log(`    ${err instanceof Error ? err.message : err}`);
      failed++;
    }
  }

  // ESM Exports
  console.log('ESM exports:');

  test('should export kaomoji function', () => {
    assert.strictEqual(typeof esm.kaomoji, 'function');
  });

  test('should export random function', () => {
    assert.strictEqual(typeof esm.random, 'function');
  });

  test('should export all emotion functions', () => {
    for (const emotion of ALL_EMOTION_EXPORTS) {
      assert.strictEqual(typeof esm[emotion], 'function', `Missing: ${emotion}`);
    }
  });

  test('kaomoji should return a string (smoke test)', () => {
    const result = esm.kaomoji();
    assert.strictEqual(typeof result, 'string');
    assert.ok(result.length > 0, 'Result should not be empty');
  });

  // CJS/ESM Parity Tests
  console.log('\nCJS and ESM parity:');

  test('should produce same output with same seed', () => {
    const seed = 'parity-test';
    assert.strictEqual(cjs.kaomoji({ seed }), esm.kaomoji({ seed }));
  });

  test('emotion functions should produce same output', () => {
    const seed = 'emotion-parity';
    for (const emotion of ALL_EMOTION_EXPORTS) {
      const cjsFn = cjs[emotion] as EmotionFn;
      const esmFn = esm[emotion] as EmotionFn;
      assert.strictEqual(cjsFn(seed), esmFn(seed), `${emotion} parity failed`);
    }
  });

  test('should have same exports', () => {
    const cjsExports = Object.keys(cjs).sort();
    const esmExports = Object.keys(esm).sort();
    assert.deepStrictEqual(cjsExports, esmExports);
  });

  // Summary
  console.log(`\n${passed} passed, ${failed} failed`);

  if (failed > 0) {
    process.exit(1);
  }
}

runTests().catch((err) => {
  console.error('Test runner failed:', err);
  process.exit(1);
});
