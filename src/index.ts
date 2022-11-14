import { kaoEmotions, kaoParts } from './libs/kao';
import { getSeed } from './libs/libs';
import { KaoEmotions, KaomojiProps, KaoPart } from './types';

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

const getKao = ({
  seed,
  emotion,
  maxLength,
  sides = true,
  matchingEyes = true,
}: KaomojiProps = {}): string => {
  const kaoLeftSide = sides ? generateKaoPart('leftSide', seed) : '';
  const kaoRightSide = sides ? generateKaoPart('rightSide', seed) : '';
  if (emotion) {
    const face = getKaoWithEmotion(emotion, seed);
    const kaoWithEmotion = `${kaoLeftSide}${face}${kaoRightSide}`;
    return checkKaoLength(kaoWithEmotion, maxLength);
  }
  const matchingEyeSeed = Math.random().toString();
  const kaoLeftEye = generateKaoPart('eyes', matchingEyes ? seed ?? matchingEyeSeed : seed + Math.random().toString());
  const kaoRightEye = generateKaoPart('eyes', matchingEyes ? seed ?? matchingEyeSeed : seed + Math.random().toString());
  const kaoMouth = generateKaoPart('mouth', seed);
  const generatedKao = `${kaoLeftSide}${kaoLeftEye}${kaoMouth}${kaoRightEye}${kaoRightSide}`;
  return checkKaoLength(generatedKao, maxLength);
};

export const kaomoji = ({
  seed,
  emotion,
  maxLength,
  sides,
  matchingEyes,
}: KaomojiProps = {}): string => getKao({ seed, emotion, maxLength, sides, matchingEyes });
export const greeting = (seed?: string, maxLength?: number): string => getKao({ seed, emotion: 'greeting', maxLength });
export const fun = (seed?: string, maxLength?: number): string => getKao({ seed, emotion: 'fun', maxLength });
export const sad = (seed?: string, maxLength?: number): string => getKao({ seed, emotion: 'sad', maxLength });
export const hurt = (seed?: string, maxLength?: number): string => getKao({ seed, emotion: 'hurt', maxLength });
export const angry = (seed?: string, maxLength?: number): string => getKao({ seed, emotion: 'angry', maxLength });
export const love = (seed?: string, maxLength?: number): string => getKao({ seed, emotion: 'love', maxLength });
export const surprised = (seed?: string, maxLength?: number): string =>
  getKao({ seed, emotion: 'surprised', maxLength });
export const happy = (seed?: string, maxLength?: number): string => getKao({ seed, emotion: 'happy', maxLength });
export const cute = (seed?: string, maxLength?: number): string => getKao({ seed, emotion: 'cute', maxLength });
export const bored = (seed?: string, maxLength?: number): string => getKao({ seed, emotion: 'bored', maxLength });
export const random = (maxLength?: number): string => getKao({ maxLength });
