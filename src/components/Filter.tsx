import { useContext, useState } from 'react';
import { FilterListType, InfoType } from '../types';
import { RickContext } from '../context/RickContext';
import styles from './Filter.module.css';

function Filter() {
  const { columns } = useContext(RickContext);
  const [formData, setFormData] = useState<FilterListType>({
    info: columns[0] as InfoType,
    value: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className={ styles.filtersContainer }>
      <form onSubmit={ handleSubmit }>
        <label htmlFor="info">
          <select
            name="info"
            id="info"
            value={ formData.info }
            onChange={ handleChange }
          >
            { columns.map((column) => (
              <option key={ column } value={ column }>{column}</option>
            ))}
          </select>
        </label>

        <label htmlFor="value">
          <input
            type="text"
            name="value"
            id="value"
            value={ formData.value }
            onChange={ handleChange }
          />
        </label>

        <button
          disabled={ columns.length === 0 }
        >
          Filter
        </button>
        <button
          type="button"
          disabled={ columns.length > 4 }
          onClick={ () => {} }
        >
          Remove All
        </button>
      </form>
    </div>
  );
}

export default Filter;
