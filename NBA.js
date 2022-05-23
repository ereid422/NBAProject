const teams = document.getElementById("teamsInfo");
const teamStats = document.getElementById("teamsStats");
const first = document.createDocumentFragment();
const games = 
    "https://ancient-tundra-67254.herokuapp.com/https://balldontlie.io/api/v1/games?seasons[]=2021&postseason=true&start_date=2022-04-16&team_ids[]=15";

    function getTeams() {
    let headers = new Headers();

  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");
    
  fetch(games, {
    method: "GET",
    headers: headers,
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (teamInfo) {
        console.log(teamInfo);

        teamInfo.data.map(function (teams) {
            console.log(`${teams.home_team.full_name} ${teams.home_team_score} vs ${teams.visitor_team.full_name} ${teams.visitor_team_score}`);
            
            let tr = document.createElement("tr");
            let homeTeam = document.createElement('td');
            let homeScore = document.createElement('td');
            let visitorTeam = document.createElement('td');
            let visitorScore = document.createElement('td');

            homeTeam.innerHTML = teams.home_team.full_name;
            homeScore.innerHTML = teams.home_team_score;
            visitorTeam.innerHTML = teams.visitor_team.full_name;
            visitorScore.innerHTML = teams.visitor_team_score;

            tr.appendChild(homeTeam);
            tr.appendChild(homeScore);
            tr.appendChild(visitorTeam);
            tr.appendChild(visitorScore);

            first.appendChild(tr);
        });
        teamsInfo.appendChild(first);
    });
}
getTeams();
