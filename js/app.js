////////////////////
//Start Menu Elements
////////////////////

//Making Title Div
var titleDiv = document.createElement("div");
titleDiv.id = "titleDiv";
titleDiv.innerHTML = "LOGIC SQUARES";
document.body.appendChild(titleDiv);

//Making Game Area
var startGameDiv = document.createElement("div");
startGameDiv.id = "gameDiv";
document.body.appendChild(startGameDiv);

//Making Game Options Div
var startGameOptions = document.createElement("div");
startGameOptions.id = "startGameOptions";
startGameDiv.appendChild(startGameOptions);

//Making Play Button
var playButton = document.createElement("div");
playButton.id = "playButton";
playButton.innerHTML = "PLAY";
playButton.addEventListener("click", goToLevelSelect);
startGameOptions.appendChild(playButton);

//Making Rules Button
var rulesButton = document.createElement("div");
rulesButton.id = "rulesButton";
rulesButton.innerHTML = "RULES";
rulesButton.addEventListener("click", openRules);
startGameOptions.appendChild(rulesButton);

//Making Rules Window Div
//TBD

//Making Close Rules Window Button
//TBD

//Making Rules Description Div
//TBD

//Making Rules Image Div
//TBD

//Making Toggle Right Image Button
//TBD

//Making Toggle Left Image Button
//TBD

//Direct to Level Selection Function
function goToLevelSelect() {
    //Go to Level Select
    titleDiv.style.display = "none";
    startGameDiv.style.display = "none";
    levelSelectTopDiv.style.display = "flex";levelSelectDiv.style.display = "block";
}

//Open Rules Window Function
function openRules() {
    //Go to Rules Window
}

//Making Start Menu Image Div
var startImageDiv = document.createElement("div");
startImageDiv.id = "startImageDiv";
startGameDiv.appendChild(startImageDiv);

//Making Start Menu Image
//TBD

////////////////////
//Level Selection Elements
////////////////////

//Making Top Level Select Div
var levelSelectTopDiv = document.createElement("div");
levelSelectTopDiv.id = "levelSelectTopDiv";
levelSelectTopDiv.style.display = "none";
document.body.appendChild(levelSelectTopDiv);

//Making Return to Start Button
var returnToStart = document.createElement("div");
returnToStart.id = "returnToStart";
returnToStart.innerHTML = "RETURN";
returnToStart.addEventListener("click", goToStart);
levelSelectTopDiv.appendChild(returnToStart);

//Return to Start Menu Function
function goToStart() {
    titleDiv.style.display = "block";
    startGameDiv.style.display = "flex";
    levelSelectTopDiv.style.display = "none";
    levelSelectDiv.style.display = "none";
}

//Making Level Select Title
var levelSelectTitle = document.createElement("div");
levelSelectTitle.id = "levelSelectTitle";
levelSelectTitle.innerHTML = "CHOOSE LEVEL";
levelSelectTopDiv.appendChild(levelSelectTitle);

//Making Level Selection Div
var levelSelectDiv = document.createElement("div");
levelSelectDiv.id = "levelSelectDiv";
levelSelectDiv.style.display = "none";
document.body.appendChild(levelSelectDiv);

//Making Level Options
for (var i=0; i<2; i++) {
    var makeLevelRows = document.createElement("div");
    makeLevelRows.className = "levelRows";
    levelSelectDiv.appendChild(makeLevelRows);
}

var levelRows = document.getElementsByClassName("levelRows");
