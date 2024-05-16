export const listVehiculos = async (token) => {
  const url = "http://localhost:8080/vehiculos/v1/vehiculos";
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    mode: "cors",
  };
  const response = await fetch(url, options);

  return await response.json();
};

export const createVehiculo = async () => {
  //   const url = "http://localhost:8080/security/auth/signin";
  //   const options = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(object),
  //     mode: "cors",
  //   };

  //   console.log(options);
  //   const response = await fetch(url, options);

  //   return await response.json();
  return "true";
};
