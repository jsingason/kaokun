import { kaoEmotions, kaoParts } from './kao';
import { KaoEmotions, KaomojiProps, KaoPart } from '../types';

/**
 * generateKaoPart() returns a random part of the kaomoji based on the part and seed string.
 * @param part KaoPart ('eyes' | 'mouth' | 'anySide' | 'leftSide' | 'rightSide')
 * @param seed string (optional)
 * @returns string
 * @example
 * generateKaoPart('leftSide', '123') // returns '～～'
 * generateKaoPart('rightSide', '123') // returns ')ヘ┳━┳'
 * generateKaoPart('eyes', '123') // returns '✿'
 * generateKaoPart('mouth', '123') // returns 'u'
 */
const generateKaoPart = (part: KaoPart, seed?: string): string => {
  const seedAsNumber = getSeed(seed);
  const partIndex = seedAsNumber % kaoParts[part].length;
  return kaoParts[part][partIndex];
};

/**
 * getKaoWithEmotion() returns a kaomoji based on the emotion and seed string.
 * @param emotion KaoEmotions
 * @param seed string (optional)
 * @returns string
 * @example
 * getKaoWithEmotion('happy', '123') // returns '(〃￣︶￣)'
 * getKaoWithEmotion('sad', '123') // returns '(´ω｀。)'
 * getKaoWithEmotion('angry', '123') // returns '(# ﾟДﾟ)'
 */
const getKaoWithEmotion = (emotion: KaoEmotions, seed?: string): string => {
  const seedAsNumber = getSeed(seed);
  const emotionIndex = seedAsNumber % kaoEmotions[emotion].length;
  return kaoEmotions[emotion][emotionIndex];
};

/**
 * checkKaoLength() checks if the kaomoji is longer than the maxLength.
 * If it is, it slices the kaomoji from both sides to match the maxLength.
 * @param kao string
 * @param maxLength number (optional)
 * @returns string
 * @example
 * checkKaoLength('ε=(○(￣￣o￣￣)○w', 3) // returns '￣o￣'
 * checkKaoLength('ε=(○(￣￣o￣￣)○w', 5) // returns '￣￣o￣￣'
 * checkKaoLength('ε=(○(￣￣o￣￣)○w', 6) // returns '(￣￣o￣￣'
 * checkKaoLength('ε=(○(￣￣o￣￣)○w') // returns 'ε=(○(￣￣o￣￣)○w'
 */
const checkKaoLength = (kao: string, maxLength?: number): string => {
  if (maxLength) {
    if (kao.length > maxLength) {
      const slice = kao.length - maxLength;
      // slice from both sides
      const sliceFromLeft = Math.floor(slice / 2);
      const sliceFromRight = Math.ceil(slice / 2);
      return kao.slice(sliceFromLeft, kao.length - sliceFromRight);
    }
  }
  return kao;
};

/**
 * getKao() returns a kaomoji based on the seed string.
 * Before returning the kaomoji, it checks if the kaomoji is longer than the maxLength.
 * If it is, it slices the kaomoji from both sides to match the maxLength.
 * @param KaomojiProps { seed?: string, emotion?: KaoEmotions, maxLength?: number, sides?: boolean, matchingEyes?: boolean }
 * @returns string
 */
export const getKao = ({ seed, emotion, maxLength, sides = true, matchingEyes = true }: KaomojiProps = {}): string => {
  const kaoLeftSide = sides ? generateKaoPart('leftSide', seed) : '';
  const kaoRightSide = sides ? generateKaoPart('rightSide', seed) : '';
  if (emotion) {
    const face = getKaoWithEmotion(emotion, seed);
    const kaoWithEmotion = `${kaoLeftSide}${face}${kaoRightSide}`;
    return checkKaoLength(kaoWithEmotion, maxLength);
  }
  const matchingEyeSeed = Math.random().toString();
  const kaoMouth = generateKaoPart('mouth', seed);
  let kaoLeftEye = generateKaoPart('eyes', matchingEyes ? seed ?? matchingEyeSeed : seed + Math.random().toString());
  let kaoRightEye = generateKaoPart('eyes', matchingEyes ? seed ?? matchingEyeSeed : seed + Math.random().toString());
  if (kaoMouth === kaoLeftEye || kaoMouth === kaoRightEye) {
    // if mouth is the same as eyes, generate new eyes, chance of this not producing new eyes is very low
    const newMatchingEyeSeed = Math.random().toString();
    kaoLeftEye = generateKaoPart('eyes', matchingEyes ? seed ?? newMatchingEyeSeed : seed + Math.random().toString());
    kaoRightEye = generateKaoPart('eyes', matchingEyes ? seed ?? newMatchingEyeSeed : seed + Math.random().toString());
  }
  const generatedKao = `${kaoLeftSide}${kaoLeftEye}${kaoMouth}${kaoRightEye}${kaoRightSide}`;
  return checkKaoLength(generatedKao, maxLength);
};

/**
 * getSeed() returns a number based on the seed string.
 * @param seed string (optional)
 * @returns number
 */
export const getSeed = (seed?: string): number => {
  let result = 0;
  if (!seed) {
    result = Math.floor(Math.random() * 10 ** 10);
    return result;
  }
  for (let i = 0; i < seed.length; i++) {
    result += seed.charCodeAt(i);
  }
  return result;
};
