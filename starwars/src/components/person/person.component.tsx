import React from 'react';

import styled from 'styled-components';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { Character } from '../../models/Character';

const Animate = styled.div`
  animation: fadein 0.5s forwards;
`;

export const Person = ({ character }: { character: Character }) => {
  return (
    <Animate>
      <Card>
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {character.name}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            Height: {character.height} cm
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            Mass: {character.mass} kg
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            Eye Color: {character.eye_color}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            Hair Color: {character.hair_color}
          </Typography>
        </CardContent>
      </Card>
    </Animate>
  );
};
