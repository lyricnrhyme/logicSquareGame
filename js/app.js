////////////////////
//Start Menu Elements
////////////////////

//Making Title Div
var titleDiv = document.createElement("div");
titleDiv.id = "titleDiv";
titleDiv.innerHTML = "LOGIC SQUARES";
document.body.appendChild(titleDiv);

//Making Rules Window Div
var rulesWindowDiv = document.createElement("div");
rulesWindowDiv.id = "rulesWindowDiv";
rulesWindowDiv.style.display = "none";
document.body.appendChild(rulesWindowDiv);

//Making Game Area
var startGameDiv = document.createElement("div");
startGameDiv.id = "startGameDiv";
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

//Making Rules Description Div
var rulesDiv = document.createElement("div");
rulesDiv.id = "rulesDiv";
rulesDiv.innerHTML = "Rules: <br> Each number tells you that there is group of consecutive black squares somewhere in that row or column. For example, a 5 above a column means that somewhere in that column, there is a group of five black squares with no spaces between them. <br> If there is more than one number for a row or column, it means that there are multiple groups of black squares, separated by at least one white square. <br> You must use logic to figure out which squares should be filled in, and which should stay blank. When you solve the puzzle, the grid will have a picture in it. This tutorial will teach you some Picross puzzle solving techniques."
rulesWindowDiv.appendChild(rulesDiv);

//Making Rules Visual Div
var rulesVisuals = document.createElement("div");
rulesVisuals.id = "rulesVisual";
rulesWindowDiv.appendChild(rulesVisuals);

//Making Rules Image Div
var rulesImageArr = ['url("assets/rulesImg1.png")', 'url("assets/rulesImg2.png")', 'url("assets/rulesImg3.png")', 'url("assets/rulesImg4.png")'];

//Inserting Rules Images
var rulesImage = document.createElement("div");
rulesImage.id = "rulesImage";
rulesImage.style.backgroundImage = rulesImageArr[0];
rulesVisuals.appendChild(rulesImage);

//Making Toggle Div
var toggleBar = document.createElement("div");
toggleBar.id = "toggleBar";
rulesVisuals.appendChild(toggleBar);

//Making Toggle Left Image Button
var toggleLeft = document.createElement("div");
toggleLeft.id = "toggleLeft";
toggleLeft.addEventListener("click", prevImg);
toggleBar.appendChild(toggleLeft);

//Prev Image Function
function prevImg() {
    if (rulesImage.style.backgroundImage === rulesImageArr[0]) {
        console.log("NO PREV PHOTO");
    } else {
        rulesImage.style.backgroundImage = rulesImageArr[rulesImageArr.indexOf(rulesImage.style.backgroundImage)-1];
    }
}

//Making Toggle Right Image Button
var toggleRight = document.createElement("div");
toggleRight.id = "toggleRight";
toggleRight.addEventListener("click", nextImg);
toggleBar.appendChild(toggleRight);

//Next Image Function
function nextImg() {
    if (rulesImage.style.backgroundImage === rulesImageArr[rulesImageArr.length-1]) {
        console.log("NO NEXT PHOTO");
    } else {
        rulesImage.style.backgroundImage = rulesImageArr[rulesImageArr.indexOf(rulesImage.style.backgroundImage)+1];
    }
}

//Making Close Rules Window Button
var closeRulesButton = document.createElement("div");
closeRulesButton.id = "closeRulesButton";
closeRulesButton.innerHTML = "CLOSE";
closeRulesButton.addEventListener("click", closeRules);
rulesVisuals.appendChild(closeRulesButton);

//Close Rules Function
function closeRules() {
    rulesWindowDiv.style.display = "none";
    rulesImage.style.backgroundImage = rulesImageArr[0];
}

//Direct to Level Selection Function
function goToLevelSelect() {
    titleDiv.style.display = "none";
    startGameDiv.style.display = "none";
    levelSelectTopDiv.style.display = "flex";levelSelectDiv.style.display = "flex";
}

//Open Rules Window Function
function openRules() {
    rulesWindowDiv.style.display = "flex";
}

//Making Start Menu Image Div
var startImageDiv = document.createElement("div");
startImageDiv.id = "startImageDiv";
startGameDiv.appendChild(startImageDiv);

//Making Start Menu Image
var startImage = document.createElement("img");
startImage.id = "startImage";
startImage.src = "assets/startGameImg.png";
startImageDiv.appendChild(startImage);

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

var levelSizeArr = ["5x5", "5x5", "10x10", "10x10", "15x15", "15x15"];

var levelImageArr = ["assets/level1Img.png", "assets/level2Img.png", "assets/level3Img.png", "assets/level4Img.png", "assets/level5Img.png", "assets/level6Img.png"]

//Making Level Divs
for (var i=0; i<6; i++) {
    var makeLevelDivs = document.createElement("div");
    makeLevelDivs.id = "levelDiv" + (i+1);
    makeLevelDivs.className = "levelDiv";
    makeLevelDivs.addEventListener("click", (goToLevel));
    levelSelectDiv.appendChild(makeLevelDivs);

    var makeLevelNum = document.createElement("div");
    // makeLevelNum.id = "levelNum" + (i+1);
    makeLevelNum.className = "levelNum";
    makeLevelNum.innerHTML = "Level " + (i+1);
    makeLevelDivs.appendChild(makeLevelNum);

    var makeLevelImg = document.createElement("img");
    // makeLevelImg.id = "levelImg" + (i+1);
    makeLevelImg.className = "levelImg";
    makeLevelImg.src = "assets/notCompleteImg.png"
    makeLevelDivs.appendChild(makeLevelImg);
    //add makeLevelImg.style.backgroundImage when array is made

    var makeLevelSize = document.createElement("div");
    makeLevelSize.className = "levelSize";
    makeLevelSize.innerHTML = levelSizeArr[i];
    makeLevelDivs.appendChild(makeLevelSize);
}

var levelDiv = document.getElementsByClassName("levelDiv");
var levelNum = document.getElementsByClassName("levelNum");
var levelImg = document.getElementsByClassName("levelImg");
var levelSize = document.getElementsByClassName("levelSize");
var currentAnswers = [];

//Solution Arrays
level1Answers = [0,1,2,3,4,5,6,8,9,10,14,15,16,18,19,20,21,22,23,24]; //25 squares

level2Answers = [2,7,8,12,14,15,16,17,20,21,22]; //25 squares

level3Answers = [1,3,10,12,14,22,41,42,43,44,47,49,50,51,52,53,54,55,57,58,59,60,62,63,64,65,66,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,91,92,93,94,95,96,97]; //100 squares

level4Answers = [2,3,6,7,11,12,13,14,15,16,17,18,20,21,22,23,25,27,28,29,30,31,32,38,39,40,41,42,48,49,50,51,52,53,57,58,59,61,62,63,64,66,67,68,72,73,74,75,76,77,83,84,85,86,94,95]; //100 squares

level5Answers = [0,1,2,3,6,7,8,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,48,49,50,51,53,54,55,56,59,61,73,76,77,87,88,90,91,92,94,95,96,98,99,100,102,103,104,105,106,107,110,114,117,118,119,120,121,122,132,133,134,136,137,138,146,147,148,151,152,153,157,161,162,163,165,166,167,168,171,173,176,177,178,179,180,181,182,183,184,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,216,217,218,221,222,223,224]; //225 squares

level6Answers = [0,1,2,3,11,12,13,14,15,16,17,18,20,21,22,23,24,26,27,28,29,30,31,32,33,34,40,41,42,43,44,45,46,47,48,56,57,58,59,60,61,73,74,75,89,90,93,94,95,99,100,101,104,105,106,107,108,110,114,116,117,118,119,120,121,122,123,124,125,129,130,131,132,133,134,135,136,137,138,139,145,146,147,148,149,150,164,165,171,172,173,179,180,181,187,193,194,196,201,203,208,212,213,214,215,216,217,218,219,220,221,222]; //225 squares

//Hint Arrays
level1Hints = ["",2,1,2,"",5,2,1,2,5,"",5,2,2,1,1,2,2,"",5]; //20 squares

level2Hints = ["","","","","",2,2,5,1,1,"",1,"",2,1,1,"",3,"",3]; //20 squares

level3Hints = ["",1,"","","","","","","","",1,2,2,1,1,"","",2,"","",4,3,6,6,6,5,4,3,4,4,"",1,1,1,1,1,"","",1,"","",0,4,1,1,"",6,3,1,5,2,"","",10,"","",9,"","",7]; //60 squares

level4Hints = ["","","","","","","","","","","","","",3,1,2,2,3,"","",4,6,8,4,4,3,3,3,6,4,"",2,2,"","",8,4,1,3,"",3,2,"",3,2,"",4,3,"",4,3,"","",6,"","",4,"","",2]; //60 squares

level5Hints = ["","","","","","",4,"",4,"","","","","","",4,"","","",3,3,1,4,1,3,3,"","","",4,3,3,3,4,1,2,1,2,1,2,1,4,3,3,3,4,11,10,6,2,1,2,2,2,1,2,6,10,11,4,"",4,3,4,"","","",15,"","","",15,"",1,9,1,"","",1,1,"","",2,2,3,3,3,3,3,1,1,3,"","",3,3,"",3,1,3,"",3,1,3,4,1,1,4,"","",5,5,"","","",15,"",4,3,4]; //120 squares

level6Hints = ["","","","",1,"","","","","",1,"","","","","",5,4,4,1,1,1,1,1,1,1,4,4,5,"","",3,3,4,2,3,1,2,1,3,2,4,3,3,"",13,2,1,1,1,1,2,1,2,1,1,1,1,2,13,"","",4,4,"",4,5,4,"","",5,5,"","",4,4,"","",1,2,"","",1,1,1,3,3,1,4,1,1,4,"","",6,6,"","",5,5,"","",1,1,"",1,3,1,"","",2,2,1,1,1,1,"","","",11]; //120 squares

//Go To Level Function
function goToLevel() {
    levelSelectTopDiv.style.display = "none";
    levelSelectDiv.style.display = "none";
    gameDiv.style.display = "flex";
    if (this.id.includes(1)) {
        grid5Div.style.display = "flex";
        console.log(1);
    } else if (this.id.includes(2)) {
        grid5Div.style.display = "flex";
        console.log(2);
    } else if (this.id.includes(3)) {
        grid10Div.style.display = "flex";
        console.log(3);
    } else if (this.id.includes(4)) {
        grid10Div.style.display = "flex";
        console.log(4);
    } else if (this.id.includes(5)) {
        grid15Div.style.display = "flex";
        console.log(5);
    } else if (this.id.includes(6)) {
        grid15Div.style.display = "flex";
        console.log(6);
    }
}

//Making Game Div
var gameDiv = document.createElement("div");
gameDiv.id = "gameDiv";
gameDiv.style.display = "none";
document.body.appendChild(gameDiv);

//Making Game Controls Div
var gameControlsDiv = document.createElement("div");
gameControlsDiv.id = "gameControlsDiv";
gameDiv.appendChild(gameControlsDiv);

//Making Game Menu Button
var menuButton = document.createElement("div");
menuButton.id = "menuButton";
menuButton.innerHTML = "MENU";
menuButton.addEventListener("click", openMenu);
gameControlsDiv.appendChild(menuButton);

//Open Menu Function
function openMenu() {
    optionsMenu.style.display = "flex";
}

//Making Options Menu
var optionsMenu = document.createElement("div");
optionsMenu.id = "optionsMenu";
optionsMenu.style.display = "none";
gameDiv.appendChild(optionsMenu);

//Making Return To Game Button
var returnButton = document.createElement("div");
returnButton.id = "returnButton";
returnButton.innerHTML = "RETURN";
returnButton.addEventListener("click", returnToGame);
optionsMenu.appendChild(returnButton);

//Return To Game Function
function returnToGame() {
    optionsMenu.style.display = "none";
}

//Making Rules Option Button
var rulesOptButton = document.createElement("div");
rulesOptButton.id = "rulesOptButton";
rulesOptButton.innerHTML = "RULES";
rulesOptButton.addEventListener("click", openRules);
optionsMenu.appendChild(rulesOptButton);

//Making Restart Button
var restartButton = document.createElement("div");
restartButton.id = "restartButton";
restartButton.innerHTML = "RESTART";
restartButton.addEventListener("click", restartGame);
optionsMenu.appendChild(restartButton);

//Restart Game Function
function restartGame() {
}

//Making Save & Quit Button
var saveQuitButton = document.createElement("div");
saveQuitButton.id = "saveQuitButton";
saveQuitButton.innerHTML = "SAVE & QUIT";
saveQuitButton.addEventListener("click", saveQuitGame);
optionsMenu.appendChild(saveQuitButton);

//Save & Quit Function
function saveQuitGame() {
    gameDiv.style.display = "none";
    optionsMenu.style.display = "none";
    levelSelectTopDiv.style.display = "flex";levelSelectDiv.style.display = "flex";
}

//Making Color Button
var colorButton = document.createElement("div");
colorButton.id = "colorButton";
colorButton.addEventListener("click", color);
gameControlsDiv.appendChild(colorButton);

//Color Function
function color() {
}

//Making Cross Button
var crossButton = document.createElement("div");
crossButton.id = "crossButton";
crossButton.addEventListener("click", cross);
gameControlsDiv.appendChild(crossButton);

//Cross Function
function cross() {
}

//Making Direction Pad Div
var dpadDiv = document.createElement("div");
dpadDiv.id = "dpadDiv";
dpadDiv.style.backgroundImage = 'url("assets/dpad.png")'
gameControlsDiv.appendChild(dpadDiv);

for (var i=0; i<9; i++) {
    var makeDirection = document.createElement("div");
    makeDirection.className = "direction";
    dpadDiv.appendChild(makeDirection);
}

var direction = document.getElementsByClassName("direction");
direction[1].addEventListener("click", moveUp);
direction[3].addEventListener("click", moveLeft);
direction[5].addEventListener("click", moveRight);
direction[7].addEventListener("click", moveDown);

//Move Up Function
function moveUp() {
    console.log("UP");
}

//Move Left Function
function moveLeft() {
    console.log("LEFT");
}

//Move Right Function
function moveRight() {
    console.log("RIGHT");
}

//Move Down Function
function moveDown() {
    console.log("DOWN");
}

//Making Game Display Div
var gameDisplayDiv = document.createElement("div");
gameDisplayDiv.id = "gameDisplayDiv";
gameDiv.appendChild(gameDisplayDiv);

//Making Game Grid Div
var gameGridDiv = document.createElement("div");
gameGridDiv.id = "gameGridDiv";
gameDisplayDiv.appendChild(gameGridDiv);

//Making 5x5 Grid
var grid5Div = document.createElement("div");
grid5Div.id = "grid5";
grid5Div.style.display = "none";
gameGridDiv.appendChild(grid5Div);

//Making 5x5 Top Hints
var top5Hints = document.createElement("div");
top5Hints.id = "top5Hints";
grid5Div.appendChild(top5Hints);

for (var i=0; i<2; i++) {
    var makeHintRow5 = document.createElement("div");
    makeHintRow5.className = "topRow5";
    top5Hints.appendChild(makeHintRow5);

    for (j=0; j<5; j++) {
        makeHintSquare5 = document.createElement("div");
        makeHintSquare5.className = "square5";
        makeHintRow5.appendChild(makeHintSquare5)
    }
}

//Making 5x5 Bottom Grid Div
var bottomGrid5 = document.createElement("div");
bottomGrid5.id = "bottomGrid5";
grid5Div.appendChild(bottomGrid5);

//Making 5x5 Left Hints
var left5Hints = document.createElement("div");
left5Hints.id = "left5Hints";
bottomGrid5.appendChild(left5Hints);

for (var i=0; i<5; i++) {
    var makeHintRow5 = document.createElement("div");
    makeHintRow5.className = "leftRow5";
    left5Hints.appendChild(makeHintRow5);

    for (j=0; j<2; j++) {
        makeHintSquare5 = document.createElement("div");
        makeHintSquare5.className = "square5";
        makeHintRow5.appendChild(makeHintSquare5)
    }
}

var topRow5 = document.getElementsByClassName("topRow5");
var leftRow5 = document.getElementsByClassName("leftRow5");
var square5 = document.getElementsByClassName("square5");

//Making 10x10 Grid
var grid10Div = document.createElement("div");
grid10Div.id = "grid10";
grid10Div.style.display = "none";
gameGridDiv.appendChild(grid10Div);

//Making 10x10 Top Hints
var top10Hints = document.createElement("div");
top10Hints.id = "top10Hints";
grid10Div.appendChild(top10Hints);

for (var i=0; i<3; i++) {
    var makeHintRow10 = document.createElement("div");
    makeHintRow10.className = "topRow10";
    top10Hints.appendChild(makeHintRow10);

    for (j=0; j<10; j++) {
        makeHintSquare10 = document.createElement("div");
        makeHintSquare10.className = "square10";
        makeHintRow10.appendChild(makeHintSquare10)
    }
}

//Making 10x10 Bottom Grid Div
var bottomGrid10 = document.createElement("div");
bottomGrid10.id = "bottomGrid10";
grid10Div.appendChild(bottomGrid10);

//Making 10x10 Left Hints
var left10Hints = document.createElement("div");
left10Hints.id = "left10Hints";
bottomGrid10.appendChild(left10Hints);

for (var i=0; i<10; i++) {
    var makeHintRow10 = document.createElement("div");
    makeHintRow10.className = "leftRow10";
    left10Hints.appendChild(makeHintRow10);

    for (j=0; j<3; j++) {
        makeHintSquare10 = document.createElement("div");
        makeHintSquare10.className = "square10";
        makeHintRow10.appendChild(makeHintSquare10)
    }
}

var topRow10 = document.getElementsByClassName("topRow10");
var leftRow10 = document.getElementsByClassName("leftRow10");
var sqaure10 = document.getElementsByClassName("square10");

//Making 15x15 Grid
var grid15Div = document.createElement("div");
grid15Div.id = "grid15";
grid15Div.style.display = "none";
gameGridDiv.appendChild(grid15Div);

//Making 15x15 Top Hints
var top15Hints = document.createElement("div");
top15Hints.id = "top15Hints";
grid15Div.appendChild(top15Hints);

for (var i=0; i<4; i++) {
    var makeHintRow15 = document.createElement("div");
    makeHintRow15.className = "topRow15";
    top15Hints.appendChild(makeHintRow15);

    for (j=0; j<15; j++) {
        makeHintSquare15 = document.createElement("div");
        makeHintSquare15.className = "square15";
        makeHintRow15.appendChild(makeHintSquare15)
    }
}

var topRow15 = document.getElementsByClassName("topRow15");
var sqaure15 = document.getElementsByClassName("square15");

//Making 15x15 Bottom Grid Div
var bottomGrid15 = document.createElement("div");
bottomGrid15.id = "bottomGrid15";
grid15Div.appendChild(bottomGrid15);

//5x5 60px

//10x10 30px

//15x15 20px