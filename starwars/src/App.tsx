import React from 'react';
import { useEffect, useState } from 'react';

import axios from 'axios';
import styled from 'styled-components';

import { Person } from './components/person/person.component';

import { Character } from './models/Character';
import { Characters } from './models/Characters';

const Root = styled.div`
  text-align: center;
`;

const Header = styled.h1`
  color: #443e3e;
  text-shadow: 1px 1px 5px #fff;
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 10px;
`;

export const App = () => {
  const [people, setPeople] = useState<Character[]>([]);

  const getPeople = (url: string) => {
    axios.get<Characters>(url).then(response => {
      setPeople(people => [...people, ...response.data.results]);
      if (response.data.next) getPeople(response.data.next);
    });
  };

  // eslint-disable-next-line
  useEffect(() => getPeople('https://swapi.co/api/people/?page=1'), []);

  return (
    <Root>
      <Header>React Wars</Header>
      <Grid>
        {people.map(person => (
          <Person character={person} />
        ))}
      </Grid>
    </Root>
  );
};
