import { fetchData } from './fetchData';

export async function createNewStateWithData(url, type) {
  const newState = {
    type: type,
  };

  try {
    const payload = await fetchData(url);
    Object.assign(newState, { payload });
  } catch (err) {
    Object.assign(newState, { payload: [] });
    throw new Error(err);
  }

  return newState;
}