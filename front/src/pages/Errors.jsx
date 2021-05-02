import React, { useEffect, useState } from 'react';
import axios from '../api/index';

const Errors = () => {
  const [errorsList, setErrorsList] = useState(null);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('/errors/all');
        console.log(response.data);
        setErrorsList(response.data);
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
      {errorsList && !errors ? (
        errorsList.map(({ type, status }, i) => (
          <div key={i}>
            {type}
            <br /> {status}
          </div>
        ))
      ) : (
        <span>Loading Errors...</span>
      )}
    </div>
  );
};

export default Errors;
