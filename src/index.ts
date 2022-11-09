import { kaoEmotions, kaoPortions } from './libs/kao';
import { getSeed } from './libs/libs';
import { KaoEmotions, KaoPortion } from './types';

const generateKaoPortion = (portion: KaoPortion, seed?: string): string => {
  const seedAsNumber = getSeed(seed);
  const portionIndex = seedAsNumber % kaoPortions[portion].length;
  return kaoPortions[portion][portionIndex];
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
}: {
  seed?: string;
  emotion?: KaoEmotions;
  maxLength?: number;
  sides?: boolean;
  matchingEyes?: boolean;
}): string => {
  const kaoLeftSide = sides ? generateKaoPortion('leftSide', seed) : '';
  const kaoRightSide = sides ? generateKaoPortion('rightSide', seed) : '';
  if (emotion) {
    const face = getKaoWithEmotion(emotion, seed);
    const kao = `${kaoLeftSide}${face}${kaoRightSide}`;
    return checkKaoLength(kao, maxLength);
  }
  const matchingEyeSeed = Math.random().toString();
  const kaoLeftEye = generateKaoPortion(
    'eyes',
    matchingEyes ? seed ?? matchingEyeSeed : seed + Math.random().toString(),
  );
  const kaoRightEye = generateKaoPortion(
    'eyes',
    matchingEyes ? seed ?? matchingEyeSeed : seed + Math.random().toString(),
  );
  const kaoMouth = generateKaoPortion('mouth', seed);
  const kao = `${kaoLeftSide}${kaoLeftEye}${kaoMouth}${kaoRightEye}${kaoRightSide}`;
  return checkKaoLength(kao, maxLength);
};

export const kaomoji = (
  seed?: string,
  emotion?: KaoEmotions,
  maxLength?: number,
  sides?: boolean,
  matchingEyes?: boolean,
): string => getKao({ seed, emotion, maxLength, sides, matchingEyes });
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
export const random = (maxLength?: number): string => getKao({ maxLength });
