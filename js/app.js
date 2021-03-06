////////////////////
//Start Menu Elements
////////////////////

function newDiv(idName, addTo) {
    let makeDiv = document.createElement("div");
    makeDiv.id = idName;
    addTo.appendChild(makeDiv);
}

//Making Title Div
newDiv("titleDiv", document.body);
const titleDiv = document.getElementById("titleDiv");
titleDiv.innerHTML = "LOGIC <br> SQUARES";

//Making Rules Window Div
newDiv("rulesWindowDiv", document.body);
const rulesWindowDiv = document.getElementById("rulesWindowDiv");
rulesWindowDiv.style.display = "none";

//Making Start Game Div
newDiv("startGameDiv", document.body);
const startGameDiv = document.getElementById("startGameDiv");

//Making Game Options Div
newDiv("startGameOptions", startGameDiv);
const startGameOptions = document.getElementById("startGameOptions");

//Making Play Button
newDiv("playButton", startGameOptions);
const playButton = document.getElementById("playButton");
playButton.innerHTML = "PLAY";
playButton.addEventListener("click", goToLevelSelect);

//Go to Level Selection Function
function goToLevelSelect() {
    titleDiv.style.display = "none";
    startGameDiv.style.display = "none";
    levelSelectTopDiv.style.display = "flex";levelSelectDiv.style.display = "flex";
}

//Making Start Menu Image Div
newDiv("startImageDiv", startGameDiv);
const startImageDiv = document.getElementById("startImageDiv");

//Making Start Menu Image
const startImage = document.createElement("img");
startImage.id = "startImage";
startImage.src = "assets/startGameImg.png";
startImageDiv.appendChild(startImage);

//Making Rules Button
newDiv("rulesButton", startGameOptions);
const rulesButton = document.getElementById("rulesButton");
rulesButton.innerHTML = "RULES";
rulesButton.addEventListener("click", openRules);

//Open Rules Window Function
function openRules() {
    rulesWindowDiv.style.display = "flex";
}

////////////////////
//Rules Menu Elements
////////////////////

//Making Rules Description Div
newDiv("rulesDiv", rulesWindowDiv);
const rulesDiv = document.getElementById("rulesDiv");
rulesDiv.innerHTML = "Rules: <br> Each number tells you that there is group of consecutive black squares somewhere in that row or column. For example, a 5 above a column means that somewhere in that column, there is a group of five black squares with no spaces between them. <br> If there is more than one number for a row or column, it means that there are multiple groups of black squares, separated by at least one white square. <br> You must use logic to figure out which squares should be filled in, and which should stay blank. When you solve the puzzle, the grid will have a picture in it. This tutorial will teach you some Picross puzzle solving techniques."

//Making Rules Visuals Div
newDiv("rulesVisuals", rulesWindowDiv);
const rulesVisuals = document.getElementById("rulesVisuals");

//Making Rules Image Div
const rulesImageArr = ['url("assets/rulesImg1.png")', 'url("assets/rulesImg2.png")', 'url("assets/rulesImg3.png")', 'url("assets/rulesImg4.png")'];

//Inserting Rules Images
newDiv("rulesImage", rulesVisuals);
const rulesImage = document.getElementById("rulesImage");
rulesImage.style.backgroundImage = rulesImageArr[0];

//Making Toggle Div
newDiv("toggleBar", rulesVisuals);
const toggleBar = document.getElementById("toggleBar");

//Making Toggle Left Image Button
newDiv("toggleLeft", toggleBar);
const toggleLeft = document.getElementById("toggleLeft");
toggleLeft.addEventListener("click", prevImg);

//Prev Image Function
function prevImg() {
    if (rulesImage.style.backgroundImage === rulesImageArr[0]) {
        console.log("NO PREV PHOTO");
    } else {
        rulesImage.style.backgroundImage = rulesImageArr[rulesImageArr.indexOf(rulesImage.style.backgroundImage)-1];
    }
}

//Making Toggle Right Image Button
newDiv("toggleRight", toggleBar);
const toggleRight = document.getElementById("toggleRight");
toggleRight.addEventListener("click", nextImg);

//Next Image Function
function nextImg() {
    if (rulesImage.style.backgroundImage === rulesImageArr[rulesImageArr.length-1]) {
        console.log("NO NEXT PHOTO");
    } else {
        rulesImage.style.backgroundImage = rulesImageArr[rulesImageArr.indexOf(rulesImage.style.backgroundImage)+1];
    }
}

//Making Close Rules Window Button
newDiv("closeRulesButton", rulesVisuals);
const closeRulesButton = document.getElementById("closeRulesButton");
closeRulesButton.innerHTML = "CLOSE";
closeRulesButton.addEventListener("click", closeRules);

//Close Rules Function
function closeRules() {
    rulesWindowDiv.style.display = "none";
    rulesImage.style.backgroundImage = rulesImageArr[0];
}

////////////////////
//Level Selection Elements
////////////////////

//Making Top Level Select Div
newDiv("levelSelectTopDiv", document.body);
const levelSelectTopDiv = document.getElementById("levelSelectTopDiv");
levelSelectTopDiv.style.display = "none";

//Making Return to Start Button
newDiv("returnToStart", levelSelectTopDiv);
const returnToStart = document.getElementById("returnToStart");
returnToStart.style.backgroundImage = 'url("assets/returnArrow.png")'
returnToStart.addEventListener("click", goToStart);

//Return to Start Menu Function
function goToStart() {
    titleDiv.style.display = "block";
    startGameDiv.style.display = "flex";
    levelSelectTopDiv.style.display = "none";
    levelSelectDiv.style.display = "none";
}

//Making Level Select Title
newDiv("levelSelectTitle", levelSelectTopDiv);
const levelSelectTitle = document.getElementById("levelSelectTitle");
levelSelectTitle.innerHTML = "CHOOSE <br> LEVEL";

//Making Level Selection Div
newDiv("levelSelectDiv", document.body);
const levelSelectDiv = document.getElementById("levelSelectDiv");
levelSelectDiv.style.display = "none";

const levelSizeArr = ["5x5", "5x5", "10x10", "10x10", "15x15", "15x15"];

const levelImageArr = ["assets/level1Img.png", "assets/level2Img.png", "assets/level3Img.png", "assets/level4Img.png", "assets/level5Img.png", "assets/level6Img.png"]

//Making Level Divs
for (let i=0; i<6; i++) {
    let makeLevelDivs = document.createElement("div");
    makeLevelDivs.className = "levelDiv";
    makeLevelDivs.addEventListener("click", (goToLevel));
    levelSelectDiv.appendChild(makeLevelDivs);

    let makeLevelInfo = document.createElement("div");
    makeLevelInfo.className = "levelInfo";
    makeLevelDivs.appendChild(makeLevelInfo)

    let makeLevelImg = document.createElement("img");
    makeLevelImg.className = "levelImg";
    makeLevelImg.src = "assets/notCompleteImg.png"
    makeLevelInfo.appendChild(makeLevelImg);

    let makeLevelSize = document.createElement("div");
    makeLevelSize.className = "levelSize";
    makeLevelSize.innerHTML = levelSizeArr[i];
    makeLevelInfo.appendChild(makeLevelSize);

    let makeCompleteInfo = document.createElement("div");
    makeCompleteInfo.className = "completeInfo";
    makeLevelDivs.appendChild(makeCompleteInfo);

    let makeLevelNum = document.createElement("div");
    makeLevelNum.className = "levelNum";
    makeLevelNum.innerHTML = "Level " + (i+1);
    makeCompleteInfo.appendChild(makeLevelNum);

    let makeScoreDiv = document.createElement("div");
    makeScoreDiv.className = "scoreDiv";
    makeScoreDiv.innerHTML = "Score:"
    makeCompleteInfo.appendChild(makeScoreDiv);

    let makeStarScore = document.createElement("div");
    makeStarScore.className = "starScore";
    makeScoreDiv.appendChild(makeStarScore);

    for (let j=0; j<3; j++) {
        let makeStars = document.createElement("img");
        makeStars.className = "stars" + i;
        makeStars.src = "assets/emptyStar.png";
        makeStarScore.appendChild(makeStars);
    }

    let makeBestTimeDiv = document.createElement("div");
    makeBestTimeDiv.className = "bestTimeDiv";
    makeBestTimeDiv.innerHTML = "Best Time:";
    makeCompleteInfo.appendChild(makeBestTimeDiv);

    let makeBestTime = document.createElement("div");
    makeBestTime.className = "bestTime";
    makeBestTimeDiv.appendChild(makeBestTime);
}

let levelDiv = document.getElementsByClassName("levelDiv");
let levelNum = document.getElementsByClassName("levelNum");
let levelImg = document.getElementsByClassName("levelImg");
let levelSize = document.getElementsByClassName("levelSize");
let levelInfo = document.getElementsByClassName("levelInfo")
let starScore = document.getElementsByClassName("starScore");
let stars = document.getElementsByClassName("stars");
let bestTime = document.getElementsByClassName("bestTime")
let highlight = "1px solid yellow";
let currentAnswers = [];
let currentHints = [];
let currentGrid;
let currentPicSquares;
let currentDirection;
let selected;
let mistakes = 0;
let time = 0;
let timer;
let saved1 = [];
let saved2 = [];
let saved3 = [];
let saved4 = [];
let saved5 = [];
let saved6 = [];

//Go To Level Function
function goToLevel() {
    levelSelectTopDiv.style.display = "none";
    levelSelectDiv.style.display = "none";
    gameDiv.style.display = "flex";
    for (let i=0; i<levelDiv.length; i++) {
        if (levelDiv[i] === this) {
            console.log(i+1);
            if (levelList[i].id === (i+1)) {
                console.log(levelList[i]);
                currentAnswers = levelList[i].answers;
                currentHints = levelList[i].hints;
                currentGrid = levelList[i].grid;
                currentHintSquares = levelList[i].hintSquare;
                currentPicSquares = levelList[i].picSquare;
                currentDirection = levelList[i].direction;
                currentSaved = levelList[i].saveFile;
            }
        }
    }
    mistakesCounter.innerHTML = 0;
    currentPicSquares[0].style.border = highlight;
    selected = 0;
    currentGrid.style.display = "flex";
    document.body.addEventListener("keydown", typeActions);
    for (let i=0; i<currentHintSquares.length; i++) {
        currentHintSquares[i].innerHTML = currentHints[i];
    }
    startTimer();

    //For Save Files
    if (currentSaved) {
        for (let i=0; i<currentPicSquares.length; i++) {
            if (currentSaved[i][0] === "color") {
                currentPicSquares[i].style.backgroundColor = currentSaved[i][1];
            } else if (currentSaved[i][0] === "cross") {
                currentPicSquares[i].innerHTML = "X";
            }
            mistakesCounter.innerHTML = currentSaved[currentSaved.length-2];
            mistakes = currentSaved[currentSaved.length-2];
            time = currentSaved[currentSaved.length-1];
            timerCounter.innerHTML = currentSaved[currentSaved.length-1];
        }
        stopTimer();
        startTimer();
        return;
    }
}


////////////////////
//Game Grid Elements
////////////////////

//Making Game Div
newDiv("gameDiv", document.body);
const gameDiv = document.getElementById("gameDiv");
gameDiv.style.display = "none";

//Making Game Controls Div
newDiv("gameControlsDiv", gameDiv);
const gameControlsDiv = document.getElementById("gameControlsDiv");

//Open Menu Function
function openMenu() {
    optionsMenu.style.display = "flex";
    disable();
    stopTimer();
}

//Making Options Menu
newDiv("optionsMenu", gameDiv);
const optionsMenu = document.getElementById("optionsMenu");
optionsMenu.style.display = "none";

//Making Return To Game Button
newDiv("returnButton", optionsMenu);
const returnButton = document.getElementById("returnButton");
returnButton.innerHTML = "RETURN";
returnButton.addEventListener("click", returnToGame);

//Return To Game Function
function returnToGame() {
    optionsMenu.style.display = "none";
    enable();
    startTimer();
}

//Making Rules Option Button
newDiv("rulesOptButton", optionsMenu);
const rulesOptButton = document.getElementById("rulesOptButton");
rulesOptButton.innerHTML = "RULES";
rulesOptButton.addEventListener("click", openRules);

//Making Restart Button
newDiv("restartButton", optionsMenu);
const restartButton = document.getElementById("restartButton");
restartButton.innerHTML = "RESTART";
restartButton.addEventListener("click", restartGame);

//Restart Game Function
function restartGame() {
    for (let i=0; i<currentPicSquares.length; i++) {
        currentPicSquares[i].style.backgroundColor = null;
        currentPicSquares[i].innerHTML = "";
    }
    mistakes = 0;
    mistakesCounter.innerHTML = mistakes;
    time = 0;
    timerCounter.innerHTML = time;
    startTimer();
    optionsMenu.style.display = "none";
    enable();
}

//Making Save & Quit Button
newDiv("saveQuitButton", optionsMenu);
const saveQuitButton = document.getElementById("saveQuitButton");
saveQuitButton.innerHTML = "SAVE & QUIT";
saveQuitButton.addEventListener("click", saveQuitGame);

//Save & Quit Function
function saveQuitGame() {
    stopTimer();
    gameDiv.style.display = "none";
    optionsMenu.style.display = "none";
    levelSelectTopDiv.style.display = "flex";levelSelectDiv.style.display = "flex";
    
    //Saves Current Squares and erases Grid
    currentSaved
    for (let i=0; i<currentPicSquares.length; i++) {
        if (currentPicSquares[i].style.backgroundColor) {
            currentSaved[i] = ["color"];
            currentSaved[i][1] = currentPicSquares[i].style.backgroundColor;
        } else if (currentPicSquares[i].innerHTML === "X") {
            currentSaved[i] = ["cross"];
            currentSaved[i][1] = currentPicSquares[i].innerHTML;
        } else {
            currentSaved[i] = [];
        }
        currentPicSquares[i].style.backgroundColor = null;
        currentPicSquares[i].innerHTML = "";
    }
    if (currentSaved.length > currentPicSquares.length) {
        console.log("hello?")
        currentSaved.pop();
        currentSaved.pop();
    }
    currentSaved[currentSaved.length] = mistakes;
    currentSaved[currentSaved.length] = time;
    currentPicSquares[selected].style.border = "1px solid black";
    currentGrid.style.display = "none";
    mistakesCounter.innerHTML = 0;
    mistakes = 0;
    time = 0;
    timerCounter.innerHTML = 0;
    enable();
    document.body.removeEventListener("keydown", typeActions);
}

//Disable Function
function disable() {
    menuButton.removeEventListener("click", openMenu);
    colorButton.removeEventListener("click", color);
    crossButton.removeEventListener("click", cross);
    direction[1].removeEventListener("click", moveUp);
    direction[3].removeEventListener("click", moveLeft);
    direction[5].removeEventListener("click", moveRight);
    direction[7].removeEventListener("click", moveDown);
    document.body.removeEventListener("keydown", typeActions);
    for (let i=0; i<currentPicSquares.length; i++) {
        currentPicSquares[i].removeEventListener("click", selectSquare);
    }
}

//Enable Function
function enable() {
    menuButton.addEventListener("click", openMenu);
    colorButton.addEventListener("click", color);
    crossButton.addEventListener("click", cross);
    direction[1].addEventListener("click", moveUp);
    direction[3].addEventListener("click", moveLeft);
    direction[5].addEventListener("click", moveRight);
    direction[7].addEventListener("click", moveDown);
    document.body.addEventListener("keydown", typeActions);
    for (let i=0; i<currentPicSquares.length; i++) {
        currentPicSquares[i].addEventListener("click", selectSquare);
    }
}

////////////////////
//Puzzle Edit Elements
////////////////////

//Making Color Button
newDiv("colorButton", gameControlsDiv);
const colorButton = document.getElementById("colorButton");
colorButton.innerHTML = "COLOR";
colorButton.addEventListener("click", color);

//Color Function
function color() {
    for (let i=0; i<currentAnswers.length; i++) {
        if (selected === currentAnswers[i]) {
            currentPicSquares[selected].style.backgroundColor = "cornflowerblue";
            currentPicSquares[selected].innerHTML = "";
            captionDiv.innerHTML = "";
            console.log("COLOR");
            for (let j=0; j<currentAnswers.length; j++) {
                if (!currentPicSquares[currentAnswers[j]].style.backgroundColor) {
                    console.log("NOT COMPLETE");
                    return;
                }
            }
            stopTimer();
            captionDiv.innerHTML = "YOU WIN!";
            menuButton.innerHTML = "Finish & Return to Level Select"
            menuButton.removeEventListener("click", openMenu);
            menuButton.addEventListener("click", finish);
            disable();
            return;
        }
    }
    mistakes += 1;
    mistakesCounter.innerHTML = mistakes;
    captionDiv.innerHTML = "WRONG MOVE :0";
    console.log("WRONG ", mistakes);
    cross();
}

//Making Cross Button
newDiv("crossButton", gameControlsDiv);
const crossButton = document.getElementById("crossButton");
crossButton.innerHTML = "CROSS";
crossButton.addEventListener("click", cross);

//Cross Function
function cross() {
    for (let i=0; i<currentAnswers.length; i++) {
        if (selected === currentAnswers[i]) {
            currentPicSquares[selected].style.backgroundColor = null;
        }
    }
    if (currentPicSquares[selected].innerHTML === "") {
        currentPicSquares[selected].innerHTML = "X";
    } else {
        currentPicSquares[selected].innerHTML = "";
    }
    console.log("CROSS");
}

////////////////////
//Direction Elements
////////////////////

//Making Direction Pad Div
newDiv("dpadDiv", gameControlsDiv);
const dpadDiv = document.getElementById("dpadDiv");
dpadDiv.style.backgroundImage = 'url("assets/dpad.png")'

for (let i=0; i<9; i++) {
    let makeDirection = document.createElement("div");
    makeDirection.className = "direction";
    dpadDiv.appendChild(makeDirection);
}

let direction = document.getElementsByClassName("direction");
direction[1].addEventListener("click", moveUp);
direction[3].addEventListener("click", moveLeft);
direction[5].addEventListener("click", moveRight);
direction[7].addEventListener("click", moveDown);

//Move Up Function
function moveUp() {
    for (let i=currentDirection.up.startIndex; i<currentDirection.up.endIndex; i) {
        if (selected === i) {
            currentPicSquares[selected].style.border = "1px solid black";
            selected += currentDirection.up.edgeMove;
            currentPicSquares[selected].style.border = highlight;
            return;
        } else {
            i += currentDirection.up.increment;
        }
    }
    currentPicSquares[selected].style.border = "1px solid black";
    selected += currentDirection.up.regMove;
    currentPicSquares[selected].style.border = highlight;
}

//Move Left Function
function moveLeft() {
    for (let i=currentDirection.left.startIndex; i<currentDirection.left.endIndex; i) {
        if (selected === i) {
            currentPicSquares[selected].style.border = "1px solid black";
            selected += currentDirection.left.edgeMove;
            currentPicSquares[selected].style.border = highlight;
            return;
        } else {
            i += currentDirection.left.increment;
        }
    }
    currentPicSquares[selected].style.border = "1px solid black";
    selected += currentDirection.left.regMove;
    currentPicSquares[selected].style.border = highlight;
}
    
//Move Right Function
function moveRight() {
    for (let i=currentDirection.right.startIndex; i<currentDirection.right.endIndex; i) {
        if (selected === i) {
            currentPicSquares[selected].style.border = "1px solid black";
            selected += currentDirection.right.edgeMove;
            currentPicSquares[selected].style.border = highlight;
            return;
        } else {
            i += currentDirection.right.increment;
        }
    }
    currentPicSquares[selected].style.border = "1px solid black";
    selected += currentDirection.right.regMove;
    currentPicSquares[selected].style.border = highlight;
}
        
//Move Down Function
function moveDown() {
    for (let i=currentDirection.down.startIndex; i<currentDirection.down.endIndex; i) {
        if (selected === i) {
            currentPicSquares[selected].style.border = "1px solid black";
            selected += currentDirection.down.edgeMove;
            currentPicSquares[selected].style.border = highlight;
            return;
        } else {
            i += currentDirection.down.increment;
        }
    }
    currentPicSquares[selected].style.border = "1px solid black";
    selected += currentDirection.down.regMove;
    currentPicSquares[selected].style.border = highlight;
}

//Keyboard Actions Function
function typeActions(event) {
    var key = event.keyCode;
    console.log(key);
    if (key === 37) {moveLeft()} 
    else if (key === 38) {moveUp();} 
    else if (key === 39) {moveRight();} 
    else if (key === 40) {moveDown();} 
    else if (key === 70) {color();} 
    else if (key === 65) {cross();}
}

////////////////////
//Creating Types of Grids
////////////////////

//Making Game Display Div
newDiv("gameDisplayDiv", gameDiv);
const gameDisplayDiv = document.getElementById("gameDisplayDiv")

//Making Game Grid Div
newDiv("gameGridDiv", gameDisplayDiv);
const gameGridDiv = document.getElementById("gameGridDiv");

//Make Grid Function
function makeGrid(rows, columns, rowName, squareName, append) {
    for (var i=0; i<rows; i++) {
        var makeRows = document.createElement("div");
        makeRows.className = rowName;
        append.appendChild(makeRows);
        for (var j=0; j<columns; j++) {
            makeSquares = document.createElement("div");
            makeSquares.className = squareName;
            makeRows.appendChild(makeSquares);
        }
    }
}

//Select Square Function
function selectSquare() {
    for (let i=0; i<currentPicSquares.length; i++) {
        if (currentPicSquares[i].style.border === highlight) {
            console.log("change from ", i);
            currentPicSquares[i].style.border = "1px solid black";
        }
    }
    this.style.border = "1px solid yellow";
    for (let i=0; i<currentPicSquares.length; i++) {
        if (currentPicSquares[i].style.border === highlight) {
            console.log("change to ", i);
            selected = i;
        }
    }
    console.log("selected ", selected);
    console.log("************");
}

////////////////////
//5x5 Grid Elements
////////////////////

//Making 5x5 Grid
newDiv("grid5", gameGridDiv);
const grid5 = document.getElementById("grid5");
grid5.style.display = "none";

//Making 5x5 Top Hints
newDiv("topHints5", grid5);
const topHints5 = document.getElementById("topHints5");
makeGrid(2,5,"topRow5","hintSquares5",topHints5);
const topRow5 = document.getElementsByClassName("topRow5");

//Making 5x5 Bottom Div
newDiv("bottomDiv5", grid5);
const bottomDiv5 = document.getElementById("bottomDiv5");

//Making 5x5 Left Hints
newDiv("leftHints5", bottomDiv5);
const leftHints5 = document.getElementById("leftHints5");
makeGrid(5,2,"leftRow5", "hintSquares5", leftHints5);
const leftRow5 = document.getElementsByClassName("leftRow5");

//Making 5x5 Pic Grid
newDiv("picGrid5", bottomDiv5);
const picGrid5 = document.getElementById("picGrid5");
makeGrid(5, 5, "picRow5", "picSquares5", picGrid5);
const picRow5 = document.getElementsByClassName("picRow5");

let hintSquares5 = document.getElementsByClassName("hintSquares5");
let picSquares5 = document.getElementsByClassName("picSquares5");
for (let i=0; i<picSquares5.length; i++) {
    picSquares5[i].addEventListener("click", selectSquare);
}

////////////////////
//10x10 Grid Elements
////////////////////

//Making 10x10 Grid
newDiv("grid10", gameGridDiv);
const grid10 = document.getElementById("grid10");
grid10.style.display = "none";

//Making 10x10 Top Hints
newDiv("topHints10", grid10);
const topHints10 = document.getElementById("topHints10");
makeGrid(3,10,"topRow10","hintSquares10",topHints10);
const topRow10 = document.getElementsByClassName("topRow10");

//Making 10x10 Bottom Div
newDiv("bottomDiv10", grid10);
const bottomDiv10 = document.getElementById("bottomDiv10");

//Making 10x10 Left Hints
newDiv("leftHints10", bottomDiv10);
const leftHints10 = document.getElementById("leftHints10");
makeGrid(10,3,"leftRow10", "hintSquares10", leftHints10);
const leftRow10 = document.getElementsByClassName("leftRow10");

//Making 10x10 Pic Grid
newDiv("picGrid10", bottomDiv10);
const picGrid10 = document.getElementById("picGrid10");
makeGrid(10, 10, "picRow10", "picSquares10", picGrid10);
const picRow10 = document.getElementsByClassName("picRow10");

let hintSquares10 = document.getElementsByClassName("hintSquares10");
let picSquares10 = document.getElementsByClassName("picSquares10");
for (let i=0; i<picSquares10.length; i++) {
    picSquares10[i].addEventListener("click", selectSquare);
}

////////////////////
//15x15 Grid Elements
////////////////////

//Making 15x15 Grid
newDiv("grid15", gameGridDiv);
const grid15 = document.getElementById("grid15");
grid15.style.display = "none";

//Making 15x15 Top Hints
newDiv("topHints15", grid15);
const topHints15 = document.getElementById("topHints15");
makeGrid(4,15,"topRow15","hintSquares15",topHints15);
const topRow15 = document.getElementsByClassName("topRow15");

//Making 15x15 Bottom Div
newDiv("bottomDiv15", grid15);
const bottomDiv15 = document.getElementById("bottomDiv15");

//Making 15x15 Left Hints
newDiv("leftHints15", bottomDiv15);
const leftHints15 = document.getElementById("leftHints15");
makeGrid(15,4,"leftRow15", "hintSquares15", leftHints15);
const leftRow15 = document.getElementsByClassName("leftRow15");

//Making 15x15 Pic Grid
newDiv("picGrid15", bottomDiv15);
const picGrid15 = document.getElementById("picGrid15");
makeGrid(15, 15, "picRow15", "picSquares15", picGrid15);
const picRow15 = document.getElementsByClassName("picRow15");

let hintSquares15 = document.getElementsByClassName("hintSquares15");
let picSquares15 = document.getElementsByClassName("picSquares15");
for (let i=0; i<picSquares15.length; i++) {
    picSquares15[i].addEventListener("click", selectSquare);
}

////////////////////
//Additional Game Info Elements
////////////////////

//Making Game Info Div
newDiv("gameInfoDiv", gameDisplayDiv);
const gameInfoDiv = document.getElementById("gameInfoDiv");

//Making Mistakes Div
newDiv("mistakesDiv", gameInfoDiv);
const mistakesDiv = document.getElementById("mistakesDiv");
mistakesDiv.innerHTML = "Mistakes:";

//Making Mistakes Counter
newDiv("mistakesCounter", mistakesDiv);
let mistakesCounter = document.getElementById("mistakesCounter");
mistakesCounter.innerHTML = 0;

//Making Timer Div
newDiv("timerDiv", gameInfoDiv);
const timerDiv = document.getElementById("timerDiv");
timerDiv.innerHTML = "Timer:";

//Making Timer Counter
newDiv("timerCounter", timerDiv);
let timerCounter = document.getElementById("timerCounter");
timerCounter.innerHTML = 0;

//Start Timer Function
function startTimer() {
    timer = setInterval(addToTimer, 1000);
}

//Game Timer Function
function addToTimer() {
    time += 1;
    timerCounter.innerHTML = time;
}

//Stop Timer Function
function stopTimer() {
    clearInterval(timer);
}

//Making Caption Div
newDiv("captionDiv", gameInfoDiv);
const captionDiv = document.getElementById("captionDiv");
captionDiv.innerHTML = "";

//Making Menu/Finish Button
newDiv("menuButton", gameInfoDiv);
const menuButton = document.getElementById("menuButton");
menuButton.addEventListener("click", openMenu);
menuButton.innerHTML = "MENU";

//Finish Function
function finish() {
    gameDiv.style.display = "none";
    levelSelectTopDiv.style.display = "flex";
    levelSelectDiv.style.display = "flex";
    for (let i=0; i<levelList.length; i++) {
        if (currentAnswers === levelList[i].answers) {
            levelImg[i].src = levelImageArr[i];
            if (bestTime[i].innerHTML === "") {
                bestTime[i].innerHTML = time;
            } else if (time < bestTime[i].innerHTML) {
                bestTime[i].innerHTML = time;
            }
            document.getElementsByClassName("stars"+i)[0].src = "assets/filledStar.png";
            if (time <= levelList[i].time && mistakes === 0) {
                document.getElementsByClassName("stars"+i)[1].src = "assets/filledStar.png";
                document.getElementsByClassName("stars"+i)[2].src = "assets/filledStar.png";
            } else if (time <= levelList[i].time) {
                document.getElementsByClassName("stars"+i)[1].src = "assets/filledStar.png";
            } else if (mistakes === 0) {
                document.getElementsByClassName("stars"+i)[1].src = "assets/filledStar.png";

            }
        }
    }

    for (let i=0; i<currentPicSquares.length; i++) {
        currentPicSquares[i].style.backgroundColor = null;
        currentPicSquares[i].innerHTML = "";
    }
    currentSaved = [];
    currentPicSquares[selected].style.border = "1px solid black";
    currentGrid.style.display = "none";
    mistakesCounter.innerHTML = 0;
    mistakes = 0;
    time = 0;
    timerCounter.innerHTML = 0;
    captionDiv.innerHTML = "";
    menuButton.removeEventListener("click", finish);
    menuButton.addEventListener("click", openMenu);
    menuButton.innerHTML = "Menu";
    enable();
    document.body.removeEventListener("keydown", typeActions);

    //possibly save best time
    //possibly save perfect score
}

////////////////////
//Solution & Hints Elements
////////////////////

//Solution Arrays
const level1Answers = [0,1,2,3,4,5,6,8,9,10,14,15,16,18,19,20,21,22,23,24]; //25 squares

const level2Answers = [2,7,8,12,14,15,16,17,20,21,22]; //25 squares

const level3Answers = [1,3,10,12,14,22,41,42,43,44,47,49,50,51,52,53,54,55,57,58,59,60,62,63,64,65,66,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,91,92,93,94,95,96,97]; //100 squares

const level4Answers = [2,3,6,7,11,12,13,14,15,16,17,18,20,21,22,23,25,27,28,29,30,31,32,38,39,40,41,42,48,49,50,51,52,53,57,58,59,61,62,63,64,66,67,68,72,73,74,75,76,77,83,84,85,86,94,95]; //100 squares

const level5Answers = [0,1,2,3,6,7,8,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,48,49,50,51,52,53,54,55,56,59,61,73,76,77,87,88,90,91,92,94,95,96,98,99,100,102,103,104,105,106,107,110,114,117,118,119,120,121,122,132,133,134,136,137,138,146,147,148,151,152,153,157,161,162,163,165,166,167,168,171,173,176,177,178,179,180,181,182,183,184,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,216,217,218,221,222,223,224]; //225 squares

const level6Answers = [0,1,2,3,11,12,13,14,15,16,17,18,20,21,22,23,24,26,27,28,29,30,31,32,33,34,40,41,42,43,44,45,46,47,48,56,57,58,59,60,61,73,74,75,89,90,93,94,95,99,100,101,104,105,106,107,108,110,114,116,117,118,119,120,121,122,123,124,125,129,130,131,132,133,134,135,136,137,138,139,145,146,147,148,149,150,164,165,171,172,173,179,180,181,187,193,194,196,201,203,208,212,213,214,215,216,217,218,219,220,221,222]; //225 squares

//Hint Arrays
const level1Hints = ["",2,1,2,"",5,2,1,2,5,"",5,2,2,1,1,2,2,"",5]; //20 squares

const level2Hints = ["","","","","",2,2,5,1,1,"",1,"",2,1,1,"",3,"",3]; //20 squares

const level3Hints = ["",1,"","","","","","","","",1,2,2,1,1,"","",2,"","",4,3,6,6,6,5,4,3,4,4,"",1,1,1,1,1,"","",1,"","",0,4,1,1,"",6,3,1,5,2,"","",10,"","",9,"","",7]; //60 squares

const level4Hints = ["","","","","","","","","","","","","",3,1,2,2,3,"","",4,6,8,4,4,3,3,3,6,4,"",2,2,"","",8,4,1,3,"",3,2,"",3,2,"",4,3,"",4,3,"","",6,"","",4,"","",2]; //60 squares

const level5Hints = ["","","","","","",4,"",4,"","","","","","",4,"","","",3,3,1,4,1,3,3,"","","",4,3,3,3,4,1,2,1,2,1,2,1,4,3,3,3,4,11,10,6,2,1,2,2,2,1,2,6,10,11,4,"",4,3,4,"","","",15,"","","",15,"",1,9,1,"","",1,1,"","",2,2,3,3,3,3,3,1,1,3,"","",3,3,"","",3,3,"",3,1,3,4,1,1,4,"","",5,5,"","","",15,"",4,3,4]; //120 squares

const level6Hints = ["","","","",1,"","","","","",1,"","","","","",5,4,4,1,1,1,1,1,1,1,4,4,5,"","",3,3,4,2,3,1,2,1,3,2,4,3,3,"",13,2,1,1,1,1,2,1,2,1,1,1,1,2,13,"","",4,4,"",4,5,4,"","",5,5,"","",4,4,"","",1,2,"","",1,1,1,3,3,1,4,1,1,4,"","",6,6,"","",5,5,"","",1,1,"",1,3,1,"","",2,2,1,1,1,1,"","","",11]; //120 squares

//Direction Objects
const directions5 = {up:{startIndex:0, endIndex:5, increment:1, edgeMove:20, regMove:-5}, 
left:{startIndex:0, endIndex:21, increment:5, edgeMove:4, regMove:-1}, 
right:{startIndex:4, endIndex:25, increment:5, edgeMove:-4, regMove:1}, 
down:{startIndex:20, endIndex:25, increment:1, edgeMove:-20, regMove:5}}

const directions10 = {up:{startIndex:0, endIndex:10, increment:1, edgeMove:90, regMove:-10}, 
left:{startIndex:0, endIndex:91, increment:10, edgeMove:9, regMove:-1}, 
right:{startIndex:9, endIndex:100, increment:10, edgeMove:-9, regMove:1}, 
down:{startIndex:90, endIndex:100, increment:1, edgeMove:-90, regMove:10}}

const directions15 = {up:{startIndex:0, endIndex:15, increment:1, edgeMove:210, regMove:-15}, 
left:{startIndex:0, endIndex:211, increment:15, edgeMove:14, regMove:-1}, 
right:{startIndex:14, endIndex:225, increment:15, edgeMove:-14, regMove:1}, 
down:{startIndex:210, endIndex:225, increment:1, edgeMove:-210, regMove:15}}

//LevelLists
const levelList = 
[{id: 1, answers: level1Answers, hints: level1Hints, hintSquare: hintSquares5, grid: grid5, picSquare: picSquares5, direction: directions5, time: 120, saveFile: saved1},
{id: 2, answers: level2Answers, hints: level2Hints, hintSquare: hintSquares5, grid: grid5, picSquare: picSquares5, direction: directions5, time: 120, saveFile: saved2},
{id: 3, answers: level3Answers, hints: level3Hints, hintSquare: hintSquares10, grid: grid10, picSquare: picSquares10, direction: directions10, time: 600, saveFile: saved3},
{id: 4, answers: level4Answers, hints: level4Hints, hintSquare: hintSquares10, grid: grid10, picSquare: picSquares10, direction: directions10, time: 600, saveFile: saved4},
{id: 5, answers: level5Answers, hints: level5Hints, hintSquare: hintSquares15, grid: grid15, picSquare: picSquares15, direction: directions15, time: 9000, saveFile: saved5},
{id: 6, answers: level6Answers, hints: level6Hints, hintSquare: hintSquares15, grid: grid15, picSquare: picSquares15, direction: directions15, time: 9000, saveFile: saved6}];