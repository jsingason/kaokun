export type KaoFace = {
  [key: string]: string[];
};

export type KaoPart = 'eyes' | 'mouth' | 'anySide' | 'leftSide' | 'rightSide';
export type KaoEmotions =
  | 'greeting'
  | 'happy'
  | 'fun'
  | 'sad'
  | 'cute'
  | 'hurt'
  | 'angry'
  | 'surprised'
  | 'love'
  | 'bored';

export type KaomojiProps = {
  seed?: string;
  emotion?: KaoEmotions;
  maxLength?: number;
  sides?: boolean;
  matchingEyes?: boolean;
};

export interface IKaoParts {
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
  bored: string[];
}
