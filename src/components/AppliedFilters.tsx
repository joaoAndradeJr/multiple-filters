import { useContext } from 'react';
import { RickContext } from '../context/RickContext';
import styles from './AppliedFilters.module.css';

function AppliedFilters() {
  const { filterList } = useContext(RickContext);

  return (
    filterList.length > 0 ? (
      <div className={ styles.appliedFilters }>
        <h3>Filtros aplicados</h3>
        { filterList.map((filter) => (
          <div key={ filter.info }>
            <span>{`${filter.info}: ${filter.value}`}</span>
            {' '}
            <button
              type="button"
              onClick={ () => {} }
            >
              X
            </button>
          </div>
        )) }
      </div>
    ) : (
      <div className={ styles.appliedFilters }>
        <h3>Nenhum filtro aplicado</h3>
      </div>
    )
  );
}

export default AppliedFilters;
