import React from 'react';

import { Character } from '../../models/Character';

export const Person = ({ character }: { character: Character }) => {
  return <div>{character.name}</div>;
};
