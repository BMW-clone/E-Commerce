import  React , {useEffect ,useState}from 'react'
import axios from "axios"
import Card from '../../card/Card.jsx';

const UsedCarsList = () => {
  const [usedcars, setUsedCars] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [transmition, setTransmission] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
      setIsDropdownOpen((prevState) => !prevState);
  };
  const getCars = () => {
    axios.get('http://localhost:3000/usedcars/getall')
        .then((res) => {
            setUsedCars(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
};
  useEffect(() => {
      
      getCars();
  }, []);

  const handleCategoryFilterChange = (event) => {
      const filterValue = event.target.value;
      setCategoryFilter(filterValue);

      if (filterValue === "") {
          getCars();
      } else {
          applyCategoryFilter(filterValue);
      }
  };
  const handlePriceFilterChange = (event) => {
      const filterValue = event.target.value;
      setPriceFilter(filterValue);
      if (filterValue === "") {
        getCars();
    } else {
        
        applyPriceFilter(filterValue);
    }
     
  };
  const handleTransmissionFilterChange = (event) => {
      const filterValue = event.target.value;
      setTransmission(filterValue);
      if (filterValue === "") {
        getCars();
    } else {
      applyTransmitionFilter(filterValue);
    }
      
  };

  const applyCategoryFilter = (filterValue) => {
      axios.post("http://localhost:3000/usedcars/filterCarsByCategory", { category: filterValue })
          .then((res) => {
              setUsedCars(res.data);
          })
          .catch((err) => {
              console.log(err);
          });
  };
  const applyPriceFilter = (price) => {
      axios.post("http://localhost:3000/usedcars/filterCarsByPrice", { price })
          .then((res) => {
              setUsedCars(res.data);
          })
          .catch((err) => {
              console.log(err);
          });
  };
  const applyTransmitionFilter = (searchValue) => {
      axios.post("http://localhost:3000/usedcars/filterCarsByTransmition", { transmition:searchValue })
          .then((res) => {
              setUsedCars(res.data);
          })
          .catch((err) => {
              console.log(err);
          });
  };
  return (
      <div className='allProduct-wrap'>
          <div className='sideBar'>
              <div className='sideBar-list'>
                  <div className={`select-wrapper ${isDropdownOpen ? 'open' : ''}`}>
                      <li className="sideBar-list-item" onClick={toggleDropdown}>
                          Categories
                      </li>
                      <div className="select-dropdown">
                          <select value={categoryFilter} onChange={handleCategoryFilterChange}>
                              <option value="">All</option>
                              <option value="SUV">SUV</option>
                              <option value="COUPE">Coupe</option>
                              <option value="SEDAN">Sedan</option>
                              <option value="CABRIOLET">Cabriolet</option>
                          </select>
                      </div>

                  </div>


                  <div>
                      <li className="sideBar-list-item">Price</li>
                      <select value={priceFilter} onChange={handlePriceFilterChange}>
                          <option value="">All</option>
                          <option value="lessThan50000">Less than 50,000</option>
                          <option value="greaterThan50000">Greater than 50,000</option>
                      </select>
                  </div>
                  <div>
                      <li className='sideBar-list-item'>Transmition</li>
                      <select value={transmition} onChange={handleTransmissionFilterChange}>
                          <option value="">All</option>
                          <option value="MANUAL">Manual</option>
                          <option value="AUTOMATIC">Automatic</option>
                      </select>
                  </div>
                  <div>
                      <li className='sideBar-list-item'>chains</li>
                  </div>
                  <div>
                      <li className='sideBar-list-item'>categories</li>
                  </div>
                  <div>
                      <li className='sideBar-list-item'>on Sale in</li>
                  </div>
              </div>

          </div>
          <div className="card-columns">

              {usedcars.map((car) => (
                  <Card
                      key={car.id}
                      brand={car.brand}
                      price={car.price}
                      category={car.category}
                      color={car.color}
                      year={car.year}
                      image={car.image}
                      mileage={car.mileage}
                      model={car.model}
                      transmission={car.transmission}
                      hp={car.hp}
                      carburant={car.carburant}
                      rate={car.rate}
                  />
              ))}
          </div>
      </div>

  );
};

export default UsedCarsList;