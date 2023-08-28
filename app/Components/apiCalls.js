export const getUserWalls = async () => {
  const response = await fetch('https://23065c27-5c81-4a37-9fb7-59f7742c76cb.mock.pstmn.io/api/v0/users/1/walls');
  const data = await handleErrors(response);
  return data;
};

const handleErrors = (response) => {
  if(response.ok) {
    return response.json();
  } else {
    throw new Error(`HTTP Error: ${response.status} ${response.message}`)
  }
}