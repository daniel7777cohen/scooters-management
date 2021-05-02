import React, { useEffect, useState } from 'react';
import axios from '../api/index';

const Users = () => {
  const [users, setUsers] = useState(null);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('/users/all');
        console.log(response.data);
        setUsers(response.data);
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
      {users && !errors ? (
        users.map(({firstName}, i) => <div key={i}>{firstName}</div>)
      ) : (
        <span>Loading Users...</span>
      )}
    </div>
  );
};

export default Users;
