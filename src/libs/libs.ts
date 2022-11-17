import { kaoEmotions, kaoParts } from './kao';
import { KaoEmotions, KaomojiProps, KaoPart } from '../types';

const generateKaoPart = (part: KaoPart, seed?: string): string => {
  const seedAsNumber = getSeed(seed);
  const partIndex = seedAsNumber % kaoParts[part].length;
  return kaoParts[part][partIndex];
};

const getKaoWithEmotion = (emotion: KaoEmotions, seed?: string): string => {
  const seedAsNumber = getSeed(seed);
  const emotionIndex = seedAsNumber % kaoEmotions[emotion].length;
  return kaoEmotions[emotion][emotionIndex];
};

const checkKaoLength = (kao: string, maxLength: number | undefined): string => {
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
    kaoLeftEye = generateKaoPart(
      'eyes',
      matchingEyes ? seed ?? Math.random().toString() : seed + Math.random().toString(),
    );
  }
  const generatedKao = `${kaoLeftSide}${kaoLeftEye}${kaoMouth}${kaoRightEye}${kaoRightSide}`;
  return checkKaoLength(generatedKao, maxLength);
};

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
