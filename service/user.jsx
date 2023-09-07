import axios from 'axios';

export const getUsers = async () => {
  const res = await axios.get(`https://reqres.in/api/users`);
  return {
    data: res?.data,
  };
};

export const addUser = async (data) => {
  const payload = JSON.stringify(data);
  const res = await axios.post(
    `https://reqres.in/api/users`,
    payload,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    } ?? {}
  );
  return {
    data: res?.data,
  };
};
