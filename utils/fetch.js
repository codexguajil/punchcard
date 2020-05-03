import {key, address, electionId} from '../key';

export const fetchMethod = async () => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/civicinfo/v2/voterinfo?key=${key}&address=${address}&electionId=${electionId}`
    );
    if(!response.ok) {
      throw Error(response.statusText);
    }
    // console.log(response.json())
    return response.json()
  } catch (error) {
    console.log(error);
  }
}