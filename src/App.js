import './App.css';
import DataHolder from './components/DataHolder';
import Listing from './components/Listing';

function App() {
  return (
    <div className="container">
      <DataHolder render={(items) => <Listing items={items} />} />
    </div>
  );
}

export default App;
