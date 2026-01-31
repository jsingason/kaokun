// ES Module Example for kaokun
// When installed via npm, use: import { greeting } from 'kaokun';
import { greeting, happy, random, kaomoji } from '../../lib/esm/index.js';

console.log('=== Kaokun ESM Example ===\n');

// Seeded output (deterministic - same seed = same result)
console.log('Seeded greeting:', greeting('my-seed'));
console.log('Same seed again:', greeting('my-seed'));

// Emotion-specific calls
console.log('\n--- Emotions ---');
console.log('Happy:', happy('demo'));
console.log('Greeting:', greeting('demo'));

// Random output (different each time)
console.log('\n--- Random ---');
console.log('Random 1:', random());
console.log('Random 2:', random());

// Full kaomoji function with options
console.log('\n--- Advanced Usage ---');
console.log('With emotion:', kaomoji({ seed: 'test', emotion: 'love' }));
console.log('With maxLength:', kaomoji({ seed: 'test', maxLength: 10 }));
