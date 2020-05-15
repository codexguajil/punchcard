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
      const cityContests = [
        {
          office: "Mayor",
          district: {
            scope: "citywide",
          },
          id: "50",
          candidates: [
            {
              name: "Betsy Price",
              party: "nonpartisan",
            },
            {
              name: "Deborah Peoples",
              party: "nonpartisan",
            },
            {
              name: "James McBride",
              party: "nonpartisan",
            },
            {
              name: "Mike Haynes",
              party: "nonpartisan (write-in)",
            },
          ],
          voted: false
        },
        {
          office: "City Council District 2",
          district: {
            scope: "citywide"
          },
          id: "51",
          candidates: [
            {
              name: "Carlos E. Flores",
              party: "nonpartisan"
            },
            {
              name: "Jennifer Trevino",
              party: "nonpartisan"
            }
          ],
          voted: false
        }
      ];
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
          citywide: cityContests,
          countywide: countyContests,
          statewide: stateContests,
          nationwide: countryContests,
        }
      };
      return {
        elections: {
          citywide: cityContests,
          countywide: countyContests,
          statewide: stateContests,
          nationwide: countryContests,
        }
      };
    default:
      return state;
  }
}

export let initialState = { elections: [] }; 