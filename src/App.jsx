import './App.css';
import { useState } from 'react';

function App() {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState('');
  const [carModel, setCarModel] = useState('');

  function handleAddCar() {
    const newCar = {
      year: carYear,
      make: carMake,
      model: carModel,
    };
    // adds the previous
    setCars((prevCars) => [...prevCars, newCar]);
    // reset the input fields
    setCarYear(new Date().getFullYear());
    setCarMake('');
    setCarModel('');
  }

  function handleRemoveCar(index) {
    setCars(prevCars => prevCars.filter((element, i) => i !== index));
  }

  function handleYearChange(event) {
    setCarYear(event.target.value);
  }

  function handleMakeChange(event) {
    setCarMake(event.target.value);
  }
  function handleModelChange(event) {
    setCarModel(event.target.value);
  }
  return (
    <div>
      <h2> List of Car Objects</h2>
      <ul>
        <input type="number" value={carYear} onChange={handleYearChange} />
        <input type="text" value={carMake} onChange={handleMakeChange} placeholder="Enter car Make" required />
        <input type="text" value={carModel} onChange={handleModelChange} placeholder="Enter car Model" required />
        <button onClick={handleAddCar}> Add Car </button>
      </ul>
      <div>
        <ul>
          {cars.map((car, index) => (
            <li key={index} onClick={() => handleRemoveCar(index)}>
              {car.year}
              {' '}
              {car.make}
              {' '}
              {car.model}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
