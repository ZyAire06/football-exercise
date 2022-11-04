//add the event listener for the onload event
window.onload = function(){
    //create an array of football teams 

    let teams = [{code: "DAL", name: "Dallas Cowboy's", plays: "Arlington, Tx"},
                 {code: "DEN", name: "Denver Broncos", plays: "Devener, CO"},
                 {code: "HOU", name: "Houston Texans", plays: "Houston,Tx"},
                 {code: "KAN", name: "Kansas City Chiefs ", plays: "Kansas City, MO"}
                ];
    // declare the html element that we need
    let selectMenu = document.getElementById("teams");
    console.log(`the select menu is ${selectMenu}`);
    let moreInfoBtn = document.getElementById("moreInfo");
    console.log(moreInfoBtn);

    let numsOfTeams = teams.length;
    console.log(` this is the numbers of the teams ${numsOfTeams}`);
    console.log(numsOfTeams)


    for( let i=0; i < numsOfTeams; i++){
        let theOption = new Option (teams[i].name, teams[i].code);
        selectMenu.appendChild(theOption);
    }


    moreInfoBtn.addEventListener("click", getTeamsName);

    function getTeamsName(){
        console.log('hey the button works');
    }
}