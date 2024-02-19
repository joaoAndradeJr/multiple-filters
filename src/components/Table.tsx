import { useContext } from 'react';
import { RickContext } from '../context/RickContext';
import styles from './Table.module.css';

function Table() {
  const { data } = useContext(RickContext);

  const applyFilters = () => data;

  return (
    <div className={ styles.listBox }>
      <h3>Personagens</h3>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Specie</th>
            <th>Status</th>
            <th>Origin</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          { applyFilters().map((character) => (
            <tr
              key={ character.id }
            >
              <td>
                <img src={ character.image } alt={ character.name } />
              </td>
              <td>{character.name}</td>
              <td>{character.species}</td>
              <td>{character.status}</td>
              <td>{character.origin}</td>
              <td>{character.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
