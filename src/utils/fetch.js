import {key, address, electionId} from '../../key';

export const fetchMethod = async () => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/civicinfo/v2/voterinfo?key=${key}&address=${address}&electionId=${electionId}`
    );
    if(!response.ok) {
      throw Error(response.statusText);
    }
    return response.json()
  } catch (error) {
    console.log(error);
  }
}

export const addVoted = (contests) => {
  contests.forEach(contest => {
    if(contest.referendumTitle) {
      contest.office = "Referendum";
      contest.candidates = [];
    }
    contest.voted = false;
  })
  return contests;
}