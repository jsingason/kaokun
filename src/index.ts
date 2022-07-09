import kaoList from './kao_kaomojiya.json';

// TODO: Add more sources and categorize based on the source

export type KaoCategory = 'greeting' | 'fun' | 'sad' | 'hurt' | 'angry' | 'love';

const getKao = (seed?: string, category?: KaoCategory, maxLength?: number): string => {
  const seedAsNumber = getSeed(seed);
  const selectedCategory = getKaoCategory(category);
  if (maxLength) {
    const kaoListFiltered = kaoList[selectedCategory].filter((kao) => kao.length <= maxLength);
    const KaoIndexFiltered = seedAsNumber % kaoListFiltered.length;
    return kaoListFiltered[KaoIndexFiltered];
  }
  const kaoIndex = seedAsNumber % kaoList[selectedCategory].length;
  return kaoList[selectedCategory][kaoIndex];
};

export const greeting = (seed?: string, maxLength?: number): string => getKao(seed, 'greeting', maxLength);
export const fun = (seed?: string, maxLength?: number): string => getKao(seed, 'fun', maxLength);
export const sad = (seed?: string, maxLength?: number): string => getKao(seed, 'sad', maxLength);
export const hurt = (seed?: string, maxLength?: number): string => getKao(seed, 'hurt', maxLength);
export const angry = (seed?: string, maxLength?: number): string => getKao(seed, 'angry', maxLength);
export const love = (seed?: string, maxLength?: number): string => getKao(seed, 'love', maxLength);
export const random = (maxLength?: number): string => getKao(undefined, undefined, maxLength);

const getKaoCategory = (category?: KaoCategory): KaoCategory => {
  if (category) return category;
  const categories = Object.keys(kaoList) as KaoCategory[];
  return categories[Math.floor(Math.random() * categories.length)];
};

const getSeed = (seed?: string): number => {
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
