const getUser = async (id) => {
  const res = await fetch(
    `${`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users`}/${id}`
  );
  const data = await res.json();
  return data;
};

export default getUser;
