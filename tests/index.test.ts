import * as kaokun from '../src/index';
import { getSeed, generateKaoPart, getKaoWithEmotion, checkKaoLength, getKao } from '../src/libs/libs';
import { kaoParts, kaoEmotions } from '../src/libs/kao';

describe('Testing max length checker', () => {
  it('length should be less than or equal to 3', () => {
    expect(kaokun.kaomoji({ maxLength: 3 }).length).toBeLessThanOrEqual(3);
  });
  it('length should be less than or equal to 5', () => {
    expect(kaokun.kaomoji({ maxLength: 5 }).length).toBeLessThanOrEqual(5);
  });
  it('length should be less than or equal to 10', () => {
    expect(kaokun.kaomoji({ maxLength: 10 }).length).toBeLessThanOrEqual(10);
  });
  it('length should be less than or equal to 15', () => {
    expect(kaokun.kaomoji({ maxLength: 15 }).length).toBeLessThanOrEqual(15);
  });
});

describe('Testing seed', () => {
  it('should be the same with seed', () => {
    expect(kaokun.kaomoji({ seed: 'test' })).toBe(kaokun.kaomoji({ seed: 'test' }));
  });
  it('should be different with different seed', () => {
    expect(kaokun.kaomoji({ seed: 'test' })).not.toBe(kaokun.kaomoji({ seed: 'test2' }));
  });
});

describe('Testing emotion', () => {
  it('should be the same with seed', () => {
    expect(kaokun.happy('test')).toBe(kaokun.kaomoji({ seed: 'test', emotion: 'happy' }));
  });
  it('should be different with different seed', () => {
    expect(kaokun.happy('test')).not.toBe(kaokun.kaomoji({ seed: 'test2', emotion: 'happy' }));
  });
  it('should be different with different emotion', () => {
    expect(kaokun.happy('test')).not.toBe(kaokun.kaomoji({ seed: 'test', emotion: 'sad' }));
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

describe('Testing getSeed', () => {
  it('should return consistent number for same string', () => {
    expect(getSeed('test')).toBe(getSeed('test'));
  });
  it('should return different numbers for different strings', () => {
    expect(getSeed('test')).not.toBe(getSeed('test2'));
  });
  it('should return sum of char codes', () => {
    // 'ab' = 97 + 98 = 195
    expect(getSeed('ab')).toBe(195);
  });
  it('should return random number when no seed provided', () => {
    const result = getSeed();
    expect(typeof result).toBe('number');
    expect(result).toBeGreaterThanOrEqual(0);
  });
});

describe('Testing generateKaoPart', () => {
  it('should return valid eye part', () => {
    const eye = generateKaoPart('eyes', 'test');
    expect(kaoParts.eyes).toContain(eye);
  });
  it('should return valid mouth part', () => {
    const mouth = generateKaoPart('mouth', 'test');
    expect(kaoParts.mouth).toContain(mouth);
  });
  it('should return valid leftSide part', () => {
    const left = generateKaoPart('leftSide', 'test');
    expect(kaoParts.leftSide).toContain(left);
  });
  it('should return valid rightSide part', () => {
    const right = generateKaoPart('rightSide', 'test');
    expect(kaoParts.rightSide).toContain(right);
  });
  it('should return consistent result with same seed', () => {
    expect(generateKaoPart('eyes', 'seed123')).toBe(generateKaoPart('eyes', 'seed123'));
  });
});

describe('Testing getKaoWithEmotion', () => {
  it('should return valid happy kaomoji', () => {
    const kao = getKaoWithEmotion('happy', 'test');
    expect(kaoEmotions.happy).toContain(kao);
  });
  it('should return valid sad kaomoji', () => {
    const kao = getKaoWithEmotion('sad', 'test');
    expect(kaoEmotions.sad).toContain(kao);
  });
  it('should return valid angry kaomoji', () => {
    const kao = getKaoWithEmotion('angry', 'test');
    expect(kaoEmotions.angry).toContain(kao);
  });
  it('should return consistent result with same seed', () => {
    expect(getKaoWithEmotion('happy', 'seed123')).toBe(getKaoWithEmotion('happy', 'seed123'));
  });
});

describe('Testing checkKaoLength', () => {
  it('should return original if no maxLength', () => {
    expect(checkKaoLength('(^_^)')).toBe('(^_^)');
  });
  it('should return original if under maxLength', () => {
    expect(checkKaoLength('(^_^)', 10)).toBe('(^_^)');
  });
  it('should truncate if over maxLength', () => {
    const result = checkKaoLength('(^_^)', 3);
    expect(result.length).toBe(3);
  });
  it('should slice from both sides evenly', () => {
    expect(checkKaoLength('abcdef', 4)).toBe('bcde');
  });
  it('should handle odd slice amounts', () => {
    expect(checkKaoLength('abcde', 3)).toBe('bcd');
  });
});

describe('Testing mouth-eye collision retry', () => {
  // Mouth and right eye both return 'o' with this seed and length will be 3 (no sides)
  const COLLISION_SEED = 'IK';

  it('should trigger retry when right/left eye equals mouth', () => {
    // Verify collision condition
    const mouth = generateKaoPart('mouth', COLLISION_SEED);
    const rightEye = generateKaoPart('eyes', COLLISION_SEED + '_right');
    expect(mouth).toBe('o');
    expect(rightEye).toBe('o');
    expect(mouth).toBe(rightEye);

    // After retry, eyes should differ from mouth
    const result = getKao({ seed: COLLISION_SEED, sides: false, matchingEyes: false });
    const parts = [...result];
    // Result format: leftEye + mouth + rightEye (no sides)
    expect(parts[1]).toBe('o'); // mouth stays 'o'
    expect(parts[2]).not.toBe('o'); // right eye should be different after retry
  });

  it('should produce valid kaomoji even after retry', () => {
    const result = getKao({ seed: COLLISION_SEED, sides: true, matchingEyes: false });
    // Should still be a valid kaomoji structure
    expect(result.length).toBeGreaterThan(3);
    expect(typeof result).toBe('string');
  });

  it('should call getKao with no arguments (default parameter)', () => {
    // Tests line 69: default {} parameter
    const result = getKao();
    expect(typeof result).toBe('string');
    expect(result.length).toBeGreaterThan(0);
  });
});
