import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Cards from '../card/Card';

function NewCarsSearchResults() {
  const { keyword } = useParams();
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/newcars/search?keyword=${encodeURIComponent(keyword)}`);
        setSearchResults(response.data);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    fetchSearchResults();
  }, [keyword]);

  return (
    <div>
      <h2>Search Results</h2>
      {searchResults.length !== 0 ? (
         <div className="card-columns">

         {searchResults.map((car) => (
             <Cards
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
      ) : (
        <p>No results found.</p>
      )}
   
    </div>
  );
}

export default NewCarsSearchResults;
