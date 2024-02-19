import { useEffect, useState } from 'react';
import { CharacterType, FilterListType, RickProviderProps } from '../types';
import { RickContext } from './RickContext';

const infos = ['name', 'species', 'status', 'origin', 'location'];

function RickProvider({ children }: RickProviderProps) {
  const [data, setData] = useState([]);
  const [filterList, setFilterList] = useState<FilterListType[]>([]);
  const [columns, setColumns] = useState<string[]>(infos);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then(({ results }) => { 
        const characters = results.map((character: CharacterType) => ({
          id: character.id,
          name: character.name,
          image: character.image,
          species: character.species,
          status: character.status,
          origin: character.origin.name,
          location: character.location.name,
        }));
        setData(characters)});
  }, []);

  const addFilter = (filter) => {
    setFilterList((prevState) => [...prevState, filter])
  };

  const value = {
    data,
    columns,
    filterList,
    addFilter,
  };

  return (
    <RickContext.Provider value={ value }>
      {children}
    </RickContext.Provider>
  );
}

export default RickProvider;
