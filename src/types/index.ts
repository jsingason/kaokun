export type KaoFace = {
  [key: string]: string[];
};

export type KaoPart = 'eyes' | 'mouth' | 'anySide' | 'leftSide' | 'rightSide' | 'tableThrowLeft' | 'tableThrowRight' | 'tableSetLeft' | 'tableSetRight';
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
  | 'bored'
  | 'silly';

export type KaomojiProps = {
  // seed for randomization
  seed?: string;
  // emotion to use
  emotion?: KaoEmotions;
  // max length of kaomoji
  maxLength?: number;
  // if false, no sides will be added
  sides?: boolean;
  // if false, eyes aren't forced to match
  matchingEyes?: boolean;
  // if set a table will be used
  table?: 'throw' | 'fix';
};

export interface IKaoParts {
  eyes: string[];
  mouth: string[];
  anySide: string[];
  leftSide: string[];
  rightSide: string[];
  tableThrowLeft: string[];
  tableThrowRight: string[];
  tableSetLeft: string[];
  tableSetRight: string[];
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
  silly: string[];
}
