export async function fetchData(endpoint) {
  const config = {
    headers: {
      'Accept': 'application/vnd.api+json',
      'Content-Type': 'application/vnd.api+json',
    }
  };

  const response = await fetch(endpoint, config);
  const { data } = await response.json();

  return data;
}