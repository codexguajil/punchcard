export function reducer(state, action) {
  switch (action.type) {
    case "toggleVote":
      state.elections[action.name].forEach((election) => {
        if (election.id == action.id) {
          election.voted = !election.voted;
          console.log(election.voted);
          console.log(election.office);
        }
      });
      return { elections: state.elections };
    case "setElections":
      const cityContests = [];
      const countyContests = [];
      const stateContests = [];
      const countryContests = [];

      action.data.forEach((election) => {
        if (
          (election.office != "U. S. Senator" &&
            election.district.scope === "statewide") ||
          election.district.scope === "stateUpper" ||
          election.district.scope === "stateLower"
        ) {
          stateContests.push(election);
        }
        if (
          election.district.scope === "countywide" ||
          election.district.scope === "countyCouncil"
        ) {
          countyContests.push(election);
        }
        if (
          election.district.scope === "congressional" ||
          election.office === "U. S. Senator"
        ) {
          countryContests.push(election);
        }
      });
      initialState = {
        elections: {
          countywide: countyContests,
          statewide: stateContests,
          nationwide: countryContests,
        },
      };
      return {
        elections: {
          countywide: countyContests,
          statewide: stateContests,
          nationwide: countryContests,
        },
      };
    case "returnState":
      return { elections: state.elections };
    default:
      throw new Error();
  }
}

export let initialState = { elections: [] }; 