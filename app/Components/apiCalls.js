const domain = 'klime-be.onrender.com';

export const getUserWalls = async () => {
  const response = await fetch(`https://${domain}/api/v0/users/1/walls/`);
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

export const getAllProblems = async (id) => {
  const response = await fetch(`https://${domain}/api/v0/users/1/walls/${id}/problems/`);
  const data = await handleErrors(response);
  return data;
};

export const postProblem = async (newProblem, wallId) => {
  const response = await fetch(`https://${domain}/api/v0/users/1/walls/${wallId}/problems/`, {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(newProblem)
  })
  const data = await handleErrors(response);
  return data;
};
