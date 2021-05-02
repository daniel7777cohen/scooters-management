import React, { useEffect, useState } from 'react';
import axios from '../api/index';

const Scooters = () => {
  const [scootersList, setScootersList] = useState(null);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('/scooters/all');
        console.log(response.data);
        setScootersList(response.data);
      } catch (error) {
        //depends how error is returned, usually I use  a redux error reducer which holds an array of errors
        setErrors(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      {errors && errors}
      {scootersList && !errors? (
        scootersList.map((scooter, i) => <div key={i}>{scooter._id}</div>)
      ) : (
        <span>Loading Scooters...</span>
      )}
    </div>
  );
};

export default Scooters;
