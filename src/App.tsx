import style from './App.module.css';
import Table from './components/Table';
import Filter from './components/Filter';

function App() {
  return (
    <>
      <Filter />
      <div className={ style.container }>
        <Table />
      </div>
    </>
  );
}

export default App;
