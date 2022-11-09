
export type KaoFace = {
  [key: string]: string[];
};

export type KaoPortion = 'eyes' | 'mouth' | 'anySide' | 'leftSide' | 'rightSide';
export type KaoEmotions = 'greeting' | 'happy' | 'fun' | 'sad' | 'cute' | 'hurt' | 'angry' | 'surprised' | 'love';

export type KaoOptions = {
  seed?: string;
  emotion?: KaoEmotions;
  maxLength?: number;
};

export interface IKaoPortions {
  eyes: string[];
  mouth: string[];
  anySide: string[];
  leftSide: string[];
  rightSide: string[];
}

export interface IKaoEmotions {
  greeting: string[];
  happy: string[];
  fun: string[];
  sad: string[];
  cute: string[];
  hurt: string[];
  angry: string[];
  surprised: string[];
  love: string[];
}
