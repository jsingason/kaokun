import kaoList from './kao.json';

type IKaoCategory = 'happy' | 'sad' | 'angry' | 'neutral' | 'surprised';

const getKao = (seed?: string, category?: IKaoCategory, maxLength?: number): string => {
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

export const happy = (seed?: string, maxLength?: number): string => getKao(seed, 'happy', maxLength);
export const sad = (seed?: string, maxLength?: number): string => getKao(seed, 'sad', maxLength);
export const angry = (seed?: string, maxLength?: number): string => getKao(seed, 'angry', maxLength);
export const neutral = (seed?: string, maxLength?: number): string => getKao(seed, 'neutral', maxLength);
export const surprised = (seed?: string, maxLength?: number): string => getKao(seed, 'surprised', maxLength);
export const random = (maxLength?: number): string => getKao(undefined, undefined, maxLength);

const getKaoCategory = (category?: IKaoCategory): IKaoCategory => {
  if (category) return category;
  const categories = Object.keys(kaoList) as IKaoCategory[];
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
