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
              id: "0"
            },
            {
              name: "Deborah Peoples",
              party: "nonpartisan",
              id: "1"
            },
            {
              name: "James McBride",
              party: "nonpartisan",
              id: "2"
            },
            {
              name: "Mike Haynes",
              party: "nonpartisan (write-in)",
              id: "3"
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
              party: "nonpartisan",
              id: "0"
            },
            {
              name: "Jennifer Trevino",
              party: "nonpartisan",
              id: "1"
            }
          ],
          voted: false
        }
      ];
      const cityRaces = [];
      const countyContests = [];
      const stateContests = [];
      const countryContests = [];

      action.data.forEach((election, i) => {
        election.id = i.toString();
        election.candidates.forEach((candidate, i) => {
          candidate.id = i.toString();
        })
        if (
          (election.office != "U. S. Senator" &&
            election.district.scope === "statewide") ||
          election.district.scope === "stateUpper" ||
          election.district.scope === "stateLower" ||
          election.district.scope === "judicial"

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
        if (
          election.district.scope.includes("city")) {
            cityRaces.push(election)
          }
      });
      initialState = {
        elections: {
          citywide: cityRaces.length ? cityRaces : cityContests,
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