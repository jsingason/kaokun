import { getKao } from './libs/libs';
import { KaomojiProps } from './types';

export const kaomoji = ({ seed, emotion, maxLength, sides, matchingEyes }: KaomojiProps = {}): string =>
  getKao({ seed, emotion, maxLength, sides, matchingEyes });
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
export const silly = (seed?: string, maxLength?: number): string => getKao({ seed, emotion: 'silly', maxLength });
export const random = (maxLength?: number): string => getKao({ maxLength });
