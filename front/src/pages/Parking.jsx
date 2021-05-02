import React, { useEffect, useState } from 'react';
import axios from '../api/index';

const Parking = () => {
  const [parkingList, setParkingList] = useState(null);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('/parkings/all');
        console.log(response.data);
        setParkingList(response.data);
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
      {parkingList && !errors? (
        parkingList.map((parking, i) => <div key={i}>{parking.address}</div>)
      ) : (
        <span>Loading Parking...</span>
      )}
    </div>
  );
};

export default Parking;
