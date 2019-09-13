import './App.scss';
import React from 'react';
import { useEffect, useState } from 'react';

import axios from 'axios';

import { Person } from './components/person/person.component';

import { Character } from './models/Character';
import { Characters } from './models/Characters';

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
    <div className='App'>
      <h1 className='Header'>React Wars</h1>
      {people.map(person => (
        <Person character={person} />
      ))}
    </div>
  );
};
