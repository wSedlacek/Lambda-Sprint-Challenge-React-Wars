import { Character } from './Character';

export interface Characters {
  count: number;
  next: string;
  previous?: string;
  results: Character[];
}
