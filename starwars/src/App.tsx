import React from 'react';
import { useEffect, useState } from 'react';

import axios from 'axios';
import styled from 'styled-components';
import * as uuid from 'uuid';

import Button from '@material-ui/core/Button';

import { Person } from './components/person/person.component';

import { Characters } from './models/Characters';

const Root = styled.div`
  text-align: center;
`;

const Header = styled.h1`
  color: #443e3e;
  text-shadow: 1px 1px 5px #fff;
`;

const Pages = styled.div`
  display: flex;
  justify-content: center;

  button {
    margin: 10px;
  }
`;

const Loading = styled.h3`
  position: absolute;
  top: calc(50% - 1rem);
  width: 100%;
  margin: 0;
  padding: 0;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr;
  margin: 10px;
`;

export const App = () => {
  const [people, setPeople] = useState<Characters | null>(null);
  const [page, setPage] = useState<number>(1);

  const getPeople = (url: string) => {
    axios.get<Characters>(url).then(response => {
      setPeople(response.data);
    });
  };

  // eslint-disable-next-line
  useEffect(() => getPeople(`https://swapi.co/api/people/?page=${page}`), [page]);

  if (!people) return <Loading>Loading...</Loading>;

  return (
    <Root>
      <Header>React Wars</Header>
      <Pages>
        {people.previous && (
          <Button variant='contained' color='primary' onClick={() => setPage(page => page - 1)}>
            Previous Page
          </Button>
        )}
        {people.next && (
          <Button variant='contained' color='primary' onClick={() => setPage(page => page + 1)}>
            Next Page
          </Button>
        )}
      </Pages>

      <Grid>
        {people.results.map(person => (
          <Person character={person} key={uuid.v1()} />
        ))}
      </Grid>
    </Root>
  );
};
