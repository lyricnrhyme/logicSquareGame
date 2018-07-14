var titleDiv = document.createElement("div");
titleDiv.id = "titleDiv";
titleDiv.innerHTML = "LOGIC SQUARES";
document.body.appendChild(titleDiv);

var startGameDiv = document.createElement("div");
startGameDiv.id = "gameDiv";
document.body.appendChild(startGameDiv);

var startGameOptions = document.createElement("div");
startGameOptions.id = "startGameOptions";
startGameDiv.appendChild(startGameOptions);

var playButton = document.createElement("div");
playButton.id = "playButton";
playButton.innerHTML = "PLAY";
playButton.addEventListener("click", goToLevelSelect);
startGameOptions.appendChild(playButton);

var rulesButton = document.createElement("div");
rulesButton.id = "rulesButton";
rulesButton.innerHTML = "RULES";
rulesButton.addEventListener("click", openRules);
startGameOptions.appendChild(rulesButton);

function goToLevelSelect() {
    //Go to Level Select
}

function openRules() {
    //Go to Rules Window
}

var startImageDiv = document.createElement("div");
startImageDiv.id = "startImageDiv";
startGameDiv.appendChild(startImageDiv);