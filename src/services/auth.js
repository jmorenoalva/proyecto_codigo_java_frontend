export const login = async ({usuario, password})=>{
  const url = "http://localhost:8080/security/auth/signin";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      usuario,
      password
    })
  };

  console.log(options)
  const response = await fetch(url, options)

  return await response.json()

}
