//get function for getElementByID - x is a parameter for arguments
function get(x){
  return document.getElementById(x);
}


	var startButton = get("startButton");
    var answerOne = get("answerOne");
    var answerTwo = get("answerTwo");
    var answeThree = get("answerThree");
    var answerFour = get("answerFour");
    var responseButton = get("responseButton");
    var responseNext = get("responseNext");

  //CHANGE THE NAMES OF THE GAMES HERE
    var game1Title = get("answerOne").innerHTML = "That and Those!";
    var game2Title = get("answerTwo").innerHTML = "";
    var game3Title = get("answerThree").innerHTML = "";
    var game4Title = get("answerFour").innerHTML = "";


//This sets up the name of the app and four seoparate games
function appName() {get("boxTwo").innerHTML = "sillyIlle";}

function gameTitle() {get("startButton").innerHTML = "Let's Demonstrate with ILLE";}

function gameOneTitle() {return game1Title;}

function gameTwoTitle() {return game2Title;}

function gameThreeTitle(){return game3Title;}

function gameFourTitle(){return game4Title;}

//This loads the names of the games

    appName();
    gameTitle();
    gameOneTitle();
    gameTwoTitle();
    gameThreeTitle();
    gameFourTitle();



    //Here specific data are loaded

    var nounsFirst = [["puell", "girl"], ["ancill", "maid servant"], ["vi", "road"], ["vill", "house"], ["mens", "table"],["fam", "rumor"], ["fortun", "fortune"],  ["pecuni", "money"], ["sententi", "opinion"], ["form", "form"],["ir", "anger"], ["patri", "country"], ["port", "gate"],["ros", "rose"], ["vit", "life"]];

    var nounsFirstPlural = [["puell", "girls"], ["ancill", "maid servants"], ["vi", "roads"], ["vill", "houses"], ["mens", "tables"], ["fam", "rumors"], ["fortun", "fortunes"],  ["pecuni", "monies"], ["sententi", "opinions"], ["form", "forms"],["ir", "angers"], ["patri", "countries"], ["port", "gates"],["ros", "roses"], ["vit", "lives"]];

    //var verbsFirstPer = [["Amav", "loved"], ["laborav", "worked"], ["habitav", "lived"], ["cogitav", "thought"], ["cantav", "sang"], ["ded", "gave"]];

    var perEndingsFirst = ["a", "ae", "ae", "am", "ā", "a", "ae", "ae", "am", "ā"];
    var perEndingsFirstPlural = ["ae", "ārum", "īs", "ās", "īs", "ae", "ārum", "īs", "ās", "īs"];

    var femIlla = [["illa ", "that (Subject) "], ["illius ","of that "], ["illī ", "to/for that "], ["illam ", "that (Direct Object) "], ["illā ", "from/with/by/in that "], ["illa ", "that (Subject) "], ["illius ","of that "], ["illī ", "to/for that "], ["illam ", "that (Direct Object) "], ["illā ", "from/with/by/in that "]];
    var femIllaPlural = [["illae ", "those (Subject) "], ["illārum ","of those "], ["illīs (Dative) ", "to/for those "], ["illās ", "those (Direct Object) "], ["illīs (Ablative) ", "from/with/by/in those "], ["illae ", "those (Subject) "], ["illārum ","of those "], ["illīs (Dative) ", "to/for those "], ["illās ", "those (Direct Object) "], ["illīs (Ablative) ", "from/with/by/in those "]];

    var nounsSecond = [["serv", "servant"], ["hort", "garden"], ["lect", "couch"], ["coqu", "cook"], ["cerv", "deer"],["cib", "food"], ["anul", "ring"], ["domin", "master"], ["candidat", "candidate"],["lup", "wolf"]];
    var perEndingsSecond = ["us", "ī", "ō", "um", "ō", "us", "ī", "ō", "um", "ō"];
    var mascIlle = [["ille ", "that (Subject) "], ["illius ","of that "], ["illī ", "to/for that "], ["illum ", "that (Direct Object) "], ["illō ", "from/with/by/in that "], ["ille ", "that (Subject) "], ["illius ","of that "], ["illī ", "to/for that "], ["illum ", "that (Direct Object) "], ["illō ", "from/with/by/in that "]];

    var nounsSecondPlural = [["serv", "servants"], ["hort", "gardens"], ["lect", "couches"], ["argentari", "bankers"], ["coqu", "cooks"], ["cerv", "deer"],["cib", "food"], ["anul", "rings"], ["nunti", "messengers"], ["fili", "sons"],["domin", "masters"], ["venalici", "slave dealers"], ["candidat", "candidates"],["lup", "wolves"]];
    var perEndingsSecondPlural = ["ī", "ōrum", "īs", "ōs", "īs", "ī", "ōrum", "īs", "ōs", "īs"];
    var mascIllePlural = [["illī ", "those (Subject) "], ["illōrum ","of those "], ["illīs (Dative) ", "to/for those "], ["illōs ", "those (Direct Object) "], ["illīs (Ablative) ", "from/with/by/in those "], ["illī ", "those (Subject) "], ["illōrum ","of those "], ["illīs (Dative) ", "to/for those "], ["illōs ", "those (Direct Object) "], ["illīs (Ablative) ", "from/with/by/in those "]];

    var nounsSecondNeuter = [["don", "gift"], ["pericul", "danger"], ["plaustr", "cart"], ["cubicul", "bedroom"], ["triclini", "dining room"]];
    var perEndingsSecondNeuter = ["um", "ī", "ō", "um", "ō", "um", "ī", "ō", "um", "ō"];
    var neutIllud = [["illud (Subject) ", "that (Subject) "], ["illius ","of that "], ["illī ", "to/for that "], ["illud ", "that (Direct Object) "], ["illō ", "from/with/by/in that "], ["illud ", "that (Subject) "], ["illius ","of that "], ["illī ", "to/for that "], ["illud ", "that (Direct Object) "], ["illō ", "from/with/by/in that "]];

    var nounsSecondNeuterPlural = [["don", "gifts"], ["pericul", "dangers"], ["plaustr", "carts"], ["cubicul", "bedrooms"], ["triclini", "dining rooms"]];
    var perEndingsSecondNeuterPlural = ["a", "ōrum", "īs", "a", "īs", "a", "ōrum", "īs", "a", "īs"];
    var neutIlludPlural = [["illa (Subject) ", "those (Subject) "], ["illōrum ","of those "], ["illīs (Dative) ", "to/for those "], ["illa ", "those (Direct Object) "], ["illīs (Ablative) ", "from/with/by/in those "], ["illa (Subject) ", "those (Subject) "], ["illōrum ","of those "], ["illīs (Dative) ", "to/for those "], ["illa ", "those (Direct Object) "], ["illīs (Ablative) ", "from/with/by/in those "]];

    var nounsThirdMasc = [["rex", "reg", "king"], ["labor", "labor", "work"], ["homo", "homin", "man"], ["canis", "can", "dog"], ["mercator", "mercator", "merchant"], ["pater", "patr", "father"]];
    var nounsThirdFem = [["pax", "pac", "peace"], ["virtus","virtut", "virtue"], ["civitas","civitat", "state"], ["canis", "can", "dog"], ["mater", "matr", "mother"]];
    var nounsThirdNeut = [["corpus", "corpor", "body"], ["tempus", "tempor", "time"],["nomen", "nomin", "name"], ["agmen", "agmin", "marching column"], ["vulnus","vulner", "wound"]];

    var perEndingsThird = [["is", "of the "], ["ī ", "to/for the "], ["em", "the "], ["e", "by/with/in/from the "]];
    var perEndingsThirdPlural = [["ēs", "the "], ["um", "of the "], ["ibus ", "to/for the (Dative) "], ["ēs", "the "], ["ibus", "by/with/in/from the (Ablative) "]];


    //var perEndingsSecond = [["us", "the (Subject) "], ["ī (genitive)", "of the "], ["ō (dative)", "to/for the "], ["um", "the (Direct Object) "], ["ō (ablative)", "by/with/in/from the "], ["e!", "Oh, "]];



    //var perEndingsFirstPlural = [["ae", "the (Subject) "], ["ārum", "of the "], ["īs (Dative)", "to/for the "], ["ās", "the (Direct Object) "], ["īs (Ablative)", "by/with/in/from the "], ["ae!", "Oh, "]];

    //var perEndingsFirstImp = [["ābam", "I was "], ["ābas", "You were "], ["ābat", "She/he/it was "], ["ābamus", "We were "], ["ābatis", "Ya'll were "], ["ābant", "They were "]];

    //var perEndingsFirstPerfect = [["ī", "I "], ["isti", "You "], ["it", "She/he/it "], ["imus", "We "], ["istis", "Ya'll "], ["ērunt", "They "]];
    //var nounsSecond = [["serv", "servant"], ["hort", "garden"], ["lect", "couch"], ["coqu", "cook"], ["cerv", "deer"],["cib", "food"], ["anul", "ring"], ["domin", "master"], ["candidat", "candidate"],["lup", "wolf"]];

    //var perEndingsSecond = [["us", "the (Subject) "], ["ī (genitive)", "of the "], ["ō (dative)", "to/for the "], ["um", "the (Direct Object) "], ["ō (ablative)", "by/with/in/from the "], ["e!", "Oh, "]];

    var nounsSecondIus = [["argentari", "banker"], ["nunti", "messenger"], ["fili", "son"],["venalici", "slave dealer"]];
    var nounsSecondEr = [["puer", "puer", "boy"], ["liber", "libr", "book"], ["magister", "magistr", "teacher"],["vir", "vir","man"]];
    var perEndingsSecondIusEr = [["us", "the (Subject) "], ["i (genitive)", "of the "], ["ō (dative)", "to/for the "], ["um", "the (Direct Object) "], ["ō (ablative)", "by/with/in/from the "], ["!", "Oh, "]];

    var perEndingsSecondPlural = [["ī", "the (Subject) "], ["ōrum ", "of the "], ["īs (dative)", "to/for the "], ["ōs", "the (Direct Object) "], ["īs (ablative)", "by/with/in/from the "], ["ī!", "Oh, "]];

    var nounsThird = [["reg", "king"], ["pac", "peace"],["labor", "work"], ["homin", "man"], ["virtut", "virtue"], ["civitat", "state"],, ["can", "dog"], ["mercator", "merchant"], ["patr", "father"], ["matr", "mother"]];
    var perEndingsThird = [["is", "of the "], ["ī ", "to/for the "], ["em", "the "], ["e", "by/with/in/from the "]];
    var perEndingsThirdPlural = [["ēs", "the "], ["um", "of the "], ["ibus ", "to/for the (Dative) "], ["ēs", "the "], ["ibus", "by/with/in/from the (Ablative) "]];



    var answers = ["answerOne", "answerTwo", "answerThree", "answerFour"];

    //Random index for thatGirl
    var randIndex = Math.floor(Math.random() * 5);


    //Random index for Shuffle
    	 var randomIndex = 0;

    function resetQuestions(){

    randIndex = Math.floor(Math.random() * 5);

    nounsFirst = [["puell", "girl"], ["ancill", "maid servant"], ["vi", "road"], ["vill", "house"], ["mens", "table"], ["fam", "rumor"], ["fortun", "fortune"],  ["pecuni", "money"], ["sententi", "opinion"], ["form", "form"],["ir", "anger"], ["patri", "country"], ["port", "gate"],["ros", "rose"], ["vit", "life"]];

    nounsFirstPlural = [["puell", "girls"], ["ancill", "maid servants"], ["vi", "roads"], ["vill", "houses"], ["mens", "tables"], ["fam", "rumors"], ["fortun", "fortunes"],  ["pecuni", "monies"], ["sententi", "opinions"], ["form", "forms"],["ir", "angers"], ["patri", "countries"], ["port", "gates"],["ros", "roses"], ["vit", "lives"]];

    nounsSecond = [["serv", "servant"], ["hort", "garden"], ["lect", "couch"], ["coqu", "cook"], ["cerv", "deer"],["cib", "food"], ["anul", "ring"], ["domin", "master"], ["candidat", "candidate"],["lup", "wolf"]];

      //var verbsFirstPer = [["Amav", "loved"], ["laborav", "worked"], ["habitav", "lived"], ["cogitav", "thought"], ["cantav", "sang"], ["ded", "gave"]];

    perEndingsFirst = ["a", "ae", "ae", "am", "ā", "a", "ae", "ae", "am", "ā"];
    perEndingsFirstPlural = ["ae", "ārum", "īs", "ās", "īs", "ae", "ārum", "īs", "ās", "īs"];
    perEndingsSecond = ["us", "ī", "ō", "um", "ō", "us", "ī", "ō", "um", "ō"];

    femIlla = [["illa ", "that (Subject) "], ["illius ","of that "], ["illī ", "to/for that "], ["illam ", "that (Direct Object) "], ["illā ", "from/with/by/in that "], ["illa ", "that (Subject) "], ["illius ","of that "], ["illī ", "to/for that "], ["illam ", "that (Direct Object) "], ["illā ", "from/with/by/in that "]];
    femIllaPlural = [["illae ", "those (Subject) "], ["illārum ","of those "], ["illīs (Dative) ", "to/for those "], ["illās ", "those (Direct Object) "], ["illīs (Ablative) ", "from/with/by/in those "], ["illae ", "those (Subject) "], ["illārum ","of those "], ["illīs (Dative) ", "to/for those "], ["illās ", "those (Direct Object) "], ["illīs (Ablative) ", "from/with/by/in those "]];

    mascIlle = [["ille ", "that (Subject) "], ["illius ","of that "], ["illī ", "to/for that "], ["illum ", "that (Direct Object) "], ["illō ", "from/with/by/in that "], ["ille ", "that (Subject) "], ["illius ","of that "], ["illī ", "to/for that "], ["illum ", "that (Direct Object) "], ["illō ", "from/with/by/in that "]];

    nounsSecondPlural = [["serv", "servants"], ["hort", "gardens"], ["lect", "couches"], ["argentari", "bankers"], ["coqu", "cooks"], ["cerv", "deer"],["cib", "food"], ["anul", "rings"], ["nunti", "messengers"], ["fili", "sons"],["domin", "masters"], ["venalici", "slave dealers"], ["candidat", "candidates"],["lup", "wolves"]];
    perEndingsSecondPlural = ["ī", "ōrum", "īs", "ōs", "īs", "ī", "ōrum", "īs", "ōs", "īs"];
    mascIllePlural = [["illī ", "those (Subject) "], ["illōrum ","of those "], ["illīs (Dative) ", "to/for those "], ["illōs ", "those (Direct Object) "], ["illīs (Ablative) ", "from/with/by/in those "], ["illī ", "those (Subject) "], ["illōrum ","of those "], ["illīs (Dative) ", "to/for those "], ["illōs ", "those (Direct Object) "], ["illīs (Ablative) ", "from/with/by/in those "]];

    nounsSecondNeuter = [["don", "gift"], ["pericul", "danger"], ["plaustr", "cart"], ["cubicul", "bedroom"], ["triclini", "dining room"]];
    perEndingsSecondNeuter = ["um", "ī", "ō", "um", "ō", "um", "ī", "ō", "um", "ō"];
    neutIllud = [["illud (Subject) ", "that (Subject) "], ["illius ","of that "], ["illī ", "to/for that "], ["illud ", "that (Direct Object) "], ["illō ", "from/with/by/in that "], ["illud (Subject)", "that (Subject) "], ["illius ","of that "], ["illī ", "to/for that "], ["illud ", "that (Direct Object) "], ["illō ", "from/with/by/in that "]];

    nounsSecondNeuterPlural = [["don", "gifts"], ["pericul", "dangers"], ["plaustr", "carts"], ["cubicul", "bedrooms"], ["triclini", "dining rooms"]];
    perEndingsSecondNeuterPlural = ["a", "ōrum", "īs", "a", "īs", "a", "ōrum", "īs", "a", "īs"];
    neutIlludPlural = [["illa (Subject) ", "those (Subject) "], ["illōrum ","of those "], ["illīs (Dative) ", "to/for those "], ["illa ", "those (Direct Object) "], ["illīs (Ablative) ", "from/with/by/in those "], ["illa (Subject) ", "those (Subject) "], ["illōrum ","of those "], ["illīs (Dative) ", "to/for those "], ["illa ", "those (Direct Object) "], ["illīs (Ablative) ", "from/with/by/in those "]];


    }

//This declares a function for the audio files which are embodied in the Body
function gameOverAudio(){
       var gameOverAudio = document.getElementById("gameOverAudio");
       gameOverAudio.play();
                 }

  function correctAnswerAudio(){
       var correctAnswerAudio = document.getElementById("correctAnswerAudio");
       correctAnswerAudio.play();
                 }

function wrongAnswerAudio(){
       var wrongAnswerAudio = document.getElementById("wrongAnswerAudio");
       wrongAnswerAudio.play();
                 }



//Score Variables

	var correctAnswer = "";

    var points = 0;

    var pointsPerCorrectAnswer = 10;



//Function for adding and subtracting points based on correct or wrong answers

    function addPoints(){
    	points += pointsPerCorrectAnswer;
		document.getElementById("boxThree").innerHTML = points;

    }


    function subtractPoints(){
    	points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;

    }

//Counter variable for number of questions to be asked for each game

var num_questions = 5;
var count = 11;

function decrementCount(){
	count--;
}


//Timer variable set for 15 seconds
var timeleft = 15;
var countdown = setInterval(x,1000);


function countDownTimer(){

		document.getElementById("boxOne").innerHTML = timeleft;
  		timeleft -= 1;
  			if(timeleft <= 0)  {
    			clearInterval(countdown);
    			document.getElementById("boxOne").innerHTML = "Timer";
    			disableButtons();
    			startButton.disabled = false;
    			startButton.innerHTML = "Next Question!";
    			responseButton.innerHTML = "Tempus Fugit!"
    			resetAnswerColors();
    			answerOne.innerHTML = "";
				answerTwo.innerHTML = "";
				answerThree.innerHTML = "";
				answerFour.innerHTML = "";

  }

}





function stopTimer() {


	clearInterval(countdown);


}



//This randomizes an array. The parameter array takes as its argument the questions.


function shuffle(array){
	var currentIndex = array.length;
	var temporaryValue;
	//var randIndex;

	while (currentIndex > 0){
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex --;

		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
		return array;
}



function answerSetup(){
		answerOne.innerHTML = "";
		answerTwo.innerHTML = "";
		answerThree.innerHTML = "";
		answerFour.innerHTML = "";
		responseButton.innerHTML = "";
		answerOne.onclick = function(){clickedAnswerOne()};
		answerTwo.onclick = function(){clickedAnswerTwo()};
		answerThree.onclick = function(){clickedAnswerThree()};
		answerFour.onclick = function(){clickedAnswerFour()};
}



 function selectGame1(){

 	startButton.disabled = false;
 	startButton.onclick = function(){thatGirl()};
	startButton.innerHTML = "Click to Start " + game1Title;
    answerSetup();
    gameOverAudio();
 	return true;


}


function selectGame2(){

	startButton.disabled = false;
 	startButton.onclick = function(){firstDeclensionPluralNounShuffle()};
 	startButton.innerHTML = "Click to Start " + game2Title;
    answerSetup();
    gameOverAudio();
    return true;
}

function selectGame3(){

	startButton.disabled = false;
 	startButton.onclick = function(){allFirstDeclensionNounShuffle()};
 	startButton.innerHTML = "Click to Start " + game3Title;
    answerSetup();
    gameOverAudio();
    return true;
}

function selectGame4(){

	startButton.disabled = false;
 	startButton.onclick = function(){allSecondDeclensionNounShuffle()};
 	startButton.innerHTML = "Click to Start " + game4Title;
    answerSetup();
    gameOverAudio();
 }









function thatGirl(){

resetQuestions();

countDownTimer();
	timeleft = 15;
	countdown = setInterval(countDownTimer,1000);


startButton.disabled = true;


shuffle(nounsFirst);
shuffle(nounsFirstPlural);
shuffle(nounsSecond);
shuffle(nounsSecondPlural);
shuffle(nounsSecondNeuter);
shuffle(nounsSecondNeuterPlural);

//shuffle(verbsFirstPer);

//shuffle(femIlla);

//shuffle(perEndingsFirstImp);
//shuffle(perEndingsFirstPerfect);



shuffle(answers);


function shuffleMascIlle(){
document.getElementById("startButton").innerHTML =  mascIlle[randIndex][1] + nounsSecond[0][1];


document.getElementById(answers[0]).innerHTML = mascIlle[randIndex][0] + nounsSecond[0][0] + perEndingsSecond[randIndex];


document.getElementById(answers[1]).innerHTML = mascIlle[randIndex + 1][0] + nounsSecond[0][0] + perEndingsSecond[randIndex + 1];

document.getElementById(answers[2]).innerHTML = mascIlle[randIndex + 2][0] + nounsSecond[0][0] + perEndingsSecond[randIndex + 2];

document.getElementById(answers[3]).innerHTML = mascIlle[randIndex + 3][0] + nounsSecond[0][0] + perEndingsSecond[randIndex + 3];
}


function shuffleNeutIllud(){
document.getElementById("startButton").innerHTML =  neutIllud[randIndex][1] + nounsSecondNeuter[0][1];


document.getElementById(answers[0]).innerHTML = neutIllud[randIndex][0] + nounsSecondNeuter[0][0] + perEndingsSecondNeuter[randIndex];


document.getElementById(answers[1]).innerHTML = neutIllud[randIndex + 1][0] + nounsSecondNeuter[0][0] + perEndingsSecondNeuter[randIndex + 1];

document.getElementById(answers[2]).innerHTML = neutIllud[randIndex + 2][0] + nounsSecondNeuter[0][0] + perEndingsSecondNeuter[randIndex + 2];

document.getElementById(answers[3]).innerHTML = neutIllud[randIndex + 3][0] + nounsSecondNeuter[0][0] + perEndingsSecondNeuter[randIndex + 3];
}


function shuffleNeutIlludPlural(){
document.getElementById("startButton").innerHTML =  neutIlludPlural[randIndex][1] + nounsSecondNeuterPlural[0][1];


document.getElementById(answers[0]).innerHTML = neutIlludPlural[randIndex][0] + nounsSecondNeuterPlural[0][0] + perEndingsSecondNeuterPlural[randIndex];


document.getElementById(answers[1]).innerHTML = neutIlludPlural[randIndex + 1][0] + nounsSecondNeuterPlural[0][0] + perEndingsSecondNeuterPlural[randIndex + 1];

document.getElementById(answers[2]).innerHTML = neutIlludPlural[randIndex + 2][0] + nounsSecondNeuterPlural[0][0] + perEndingsSecondNeuterPlural[randIndex + 2];

document.getElementById(answers[3]).innerHTML = neutIlludPlural[randIndex + 3][0] + nounsSecondNeuterPlural[0][0] + perEndingsSecondNeuterPlural[randIndex + 3];
}


function shuffleFemIlla(){
document.getElementById("startButton").innerHTML =  femIlla[randIndex][1] + nounsFirst[0][1];


document.getElementById(answers[0]).innerHTML = femIlla[randIndex][0] + nounsFirst[0][0] + perEndingsFirst[randIndex];


document.getElementById(answers[1]).innerHTML = femIlla[randIndex + 1][0] + nounsFirst[0][0] + perEndingsFirst[randIndex + 1];

document.getElementById(answers[2]).innerHTML = femIlla[randIndex + 2][0] + nounsFirst[0][0] + perEndingsFirst[randIndex + 2];

document.getElementById(answers[3]).innerHTML = femIlla[randIndex + 3][0] + nounsFirst[0][0] + perEndingsFirst[randIndex + 3];
}





function shuffleFemIllaPlural(){
document.getElementById("startButton").innerHTML =  femIllaPlural[randIndex][1] + nounsFirstPlural[0][1];


document.getElementById(answers[0]).innerHTML = femIllaPlural[randIndex][0] + nounsFirstPlural[0][0] + perEndingsFirstPlural[randIndex];


document.getElementById(answers[1]).innerHTML = femIllaPlural[randIndex + 1][0] + nounsFirstPlural[0][0] + perEndingsFirstPlural[randIndex + 1];

document.getElementById(answers[2]).innerHTML = femIllaPlural[randIndex + 2][0] + nounsFirstPlural[0][0] + perEndingsFirstPlural[randIndex + 2];

document.getElementById(answers[3]).innerHTML = femIllaPlural[randIndex + 3][0] + nounsFirstPlural[0][0] + perEndingsFirstPlural[randIndex + 3];
}

function shuffleMascIllePlural(){
document.getElementById("startButton").innerHTML =  mascIllePlural[randIndex][1] + nounsSecondPlural[0][1];


document.getElementById(answers[0]).innerHTML = mascIllePlural[randIndex][0] + nounsSecondPlural[0][0] + perEndingsSecondPlural[randIndex];


document.getElementById(answers[1]).innerHTML = mascIllePlural[randIndex + 1][0] + nounsSecondPlural[0][0] + perEndingsSecondPlural[randIndex + 1];

document.getElementById(answers[2]).innerHTML = mascIllePlural[randIndex + 2][0] + nounsSecondPlural[0][0] + perEndingsSecondPlural[randIndex + 2];

document.getElementById(answers[3]).innerHTML = mascIllePlural[randIndex + 3][0] + nounsSecondPlural[0][0] + perEndingsSecondPlural[randIndex + 3];
}





var randomIllaIndex = Math.floor(Math.random() * 6);
var mixUp = [shuffleFemIlla, shuffleFemIllaPlural, shuffleMascIlle, shuffleMascIllePlural, shuffleNeutIllud, shuffleNeutIlludPlural];

mixUp[randomIllaIndex]();





	resetAnswerColors();

     enableButtons();



     //responseButton.innerHTML = "Hint!";

     //responseButton.disabled = false;


     //if (answerOne.value == "1") {document.getElementById("boxTwo").innerHTML = "HI!");}


     //var newArray = shuffle(questions);

 	decrementCount();






	if (count == 0){

		gameOverAudio();

		startButton.innerHTML = "Select a New Game!";




		answerOne.innerHTML = game1Title;
		answerTwo.innerHTML = game2Title;
		answerThree.innerHTML = game3Title;
		answerFour.innerHTML = game4Title;

		document.getElementById("boxThree").innerHTML = "Score";
		responseButton.innerHTML = "You earned " + points + " points!";
		points = 0;

		stopTimer();
		document.getElementById("boxOne").innerHTML = "Timer";

		answerOne.onclick = function(){selectGame1()};
		answerTwo.onclick = function(){selectGame2()};
		answerThree.onclick = function(){selectGame3()};
		answerFour.onclick = function(){selectGame4()};

		count = 11;


    }



}












function firstDeclensionPluralNounShuffle(){

countDownTimer();
	timeleft = 15;
	countdown = setInterval(countDownTimer,1000);


startButton.disabled = true;


shuffle(nounsFirstPlural);
//shuffle(verbsFirstPer);

shuffle(perEndingsFirstPlural);

//shuffle(perEndingsFirstImp);
//shuffle(perEndingsFirstPerfect);



shuffle(answers);






function shuffleFirstDeclensionPluralNouns(){
document.getElementById("startButton").innerHTML =  nounsFirstPlural[0][0]  + perEndingsFirstPlural[0][0] ;


document.getElementById(answers[0]).innerHTML = perEndingsFirstPlural[0][1] + nounsFirstPlural[0][1]  ;


document.getElementById(answers[1]).innerHTML = perEndingsFirstPlural[1][1] + nounsFirstPlural[0][1]  ;

document.getElementById(answers[2]).innerHTML = perEndingsFirstPlural[2][1] + nounsFirstPlural[0][1]  ;

document.getElementById(answers[3]).innerHTML = perEndingsFirstPlural[3][1] + nounsFirstPlural[0][1]  ;
}

shuffleFirstDeclensionPluralNouns();





	resetAnswerColors();

     enableButtons();



     //responseButton.innerHTML = "Hint!";

     //responseButton.disabled = false;




 	decrementCount();






	if (count == 0){


		gameOverAudio();

		startButton.innerHTML = "Select a New Game!";




		answerOne.innerHTML = game1Title;
		answerTwo.innerHTML = game2Title;
		answerThree.innerHTML = game3Title;
		answerFour.innerHTML = game4Title;

		document.getElementById("boxThree").innerHTML = "Score";
		responseButton.innerHTML = "You earned " + points + " points!";
		points = 0;

		stopTimer();
		document.getElementById("boxOne").innerHTML = "Timer";

		answerOne.onclick = function(){selectGame1()};
		answerTwo.onclick = function(){selectGame2()};
		answerThree.onclick = function(){selectGame3()};
		answerFour.onclick = function(){selectGame4()};

		count = 11;
    }



}





function allFirstDeclensionNounShuffle(){


countDownTimer();
	timeleft = 15;
	countdown = setInterval(countDownTimer,1000);


startButton.disabled = true;


shuffle(nounsFirst);
shuffle(perEndingsFirst);

shuffle(nounsFirstPlural);
shuffle(perEndingsFirstPlural);



shuffle(answers);





function shuffleFirstDeclensionNouns(){
document.getElementById("startButton").innerHTML =  nounsFirst[0][0]  + perEndingsFirst[0][0];


document.getElementById(answers[0]).innerHTML = perEndingsFirst[0][1] + nounsFirst[0][1];


document.getElementById(answers[1]).innerHTML = perEndingsFirst[1][1] + nounsFirst[0][1];

document.getElementById(answers[2]).innerHTML = perEndingsFirst[2][1] + nounsFirst[0][1];

document.getElementById(answers[3]).innerHTML = perEndingsFirst[3][1] + nounsFirst[0][1];
}



function shuffleFirstDeclensionPluralNouns(){
document.getElementById("startButton").innerHTML =  nounsFirstPlural[0][0]  + perEndingsFirstPlural[0][0] ;


document.getElementById(answers[0]).innerHTML = perEndingsFirstPlural[0][1] + nounsFirstPlural[0][1] + " ";


document.getElementById(answers[1]).innerHTML = perEndingsFirstPlural[1][1] + nounsFirstPlural[0][1] + " ";

document.getElementById(answers[2]).innerHTML = perEndingsFirstPlural[2][1] + nounsFirstPlural[0][1] + " ";

document.getElementById(answers[3]).innerHTML = perEndingsFirstPlural[3][1] + nounsFirstPlural[0][1] + " ";
}


var randomNounIndex = Math.floor(Math.random() * 2);
var mixUp = [shuffleFirstDeclensionNouns, shuffleFirstDeclensionPluralNouns];

mixUp[randomNounIndex]();








	resetAnswerColors();

     enableButtons();



     //responseButton.innerHTML = "Hint!";

     //responseButton.disabled = false;


     //if (answerOne.value == "1") {document.getElementById("boxTwo").innerHTML = "HI!");}


     //var newArray = shuffle(questions);

 	decrementCount();






	if (count == 0){

		gameOverAudio();

		startButton.innerHTML = "Select a New Game!";




		answerOne.innerHTML = game1Title;
		answerTwo.innerHTML = game2Title;
		answerThree.innerHTML = game3Title;
		answerFour.innerHTML = game4Title;

		document.getElementById("boxThree").innerHTML = "Score";
		responseButton.innerHTML = "You earned " + points + " points!";
		points = 0;

		stopTimer();
		document.getElementById("boxOne").innerHTML = "Timer";

		answerOne.onclick = function(){selectGame1()};
		answerTwo.onclick = function(){selectGame2()};
		answerThree.onclick = function(){selectGame3()};
		answerFour.onclick = function(){selectGame4()};

		count = 11;


    }



}




function allSecondDeclensionNounShuffle(){


countDownTimer();
	timeleft = 15;
	countdown = setInterval(countDownTimer,1000);


startButton.disabled = true;

shuffle(nounsSecondIus);
shuffle(perEndingsSecondIusEr);

shuffle(nounsSecond);
shuffle(perEndingsSecond);
//shuffle(nounsFirst);
//shuffle(perEndingsFirst);

shuffle(nounsFirstPlural);
shuffle(perEndingsFirstPlural);

shuffle(nounsThird);
shuffle(perEndingsThird);

shuffle(answers);





function shuffleSecondDeclensionNouns(){
document.getElementById("startButton").innerHTML =  nounsSecond[0][0]  + perEndingsSecond[0][0];


document.getElementById(answers[0]).innerHTML = perEndingsSecond[0][1] + nounsSecond[0][1];


document.getElementById(answers[1]).innerHTML = perEndingsSecond[1][1] + nounsSecond[0][1];

document.getElementById(answers[2]).innerHTML = perEndingsSecond[2][1] + nounsSecond[0][1];

document.getElementById(answers[3]).innerHTML = perEndingsSecond[3][1] + nounsSecond[0][1];
}



function shuffleSecondDeclensionPluralNouns(){
document.getElementById("startButton").innerHTML =  nounsSecondPlural[0][0]  + perEndingsSecondPlural[0][0];


document.getElementById(answers[0]).innerHTML = perEndingsSecondPlural[0][1] + nounsSecondPlural[0][1];


document.getElementById(answers[1]).innerHTML = perEndingsSecondPlural[1][1] + nounsSecondPlural[0][1];

document.getElementById(answers[2]).innerHTML = perEndingsSecondPlural[2][1] + nounsSecondPlural[0][1];

document.getElementById(answers[3]).innerHTML = perEndingsSecondPlural[3][1] + nounsSecondPlural[0][1];
}


function shuffleSecondDeclensionNounsIus(){
document.getElementById("startButton").innerHTML =  nounsSecondIus[0][0]  + perEndingsSecondIusEr[0][0];


document.getElementById(answers[0]).innerHTML = perEndingsSecondIusEr[0][1] + nounsSecondIus[0][1];


document.getElementById(answers[1]).innerHTML = perEndingsSecondIusEr[1][1] + nounsSecondIus[0][1];

document.getElementById(answers[2]).innerHTML = perEndingsSecondIusEr[2][1] + nounsSecondIus[0][1];

document.getElementById(answers[3]).innerHTML = perEndingsSecondIusEr[3][1] + nounsSecondIus[0][1];
}

function shuffleThirdDeclensionNouns(){
document.getElementById("startButton").innerHTML =  nounsThird[0][0]  + perEndingsThird[0][0];


document.getElementById(answers[0]).innerHTML = perEndingsThird[0][1] + nounsThird[0][1];


document.getElementById(answers[1]).innerHTML = perEndingsThird[1][1] + nounsThird[0][1];

document.getElementById(answers[2]).innerHTML = perEndingsThird[2][1] + nounsThird[0][1];

document.getElementById(answers[3]).innerHTML = perEndingsThird[3][1] + nounsThird[0][1];
}


var randomNounIndex = Math.floor(Math.random() * 4);
var mixUp = [shuffleSecondDeclensionNouns,shuffleSecondDeclensionPluralNouns,shuffleSecondDeclensionNounsIus,shuffleThirdDeclensionNouns];

mixUp[randomNounIndex]();








	resetAnswerColors();

     enableButtons();



     //responseButton.innerHTML = "Hint!";

     //responseButton.disabled = false;


     //if (answerOne.value == "1") {document.getElementById("boxTwo").innerHTML = "HI!");}


     //var newArray = shuffle(questions);

 	decrementCount();






	if (count == 0){

		gameOverAudio();

		startButton.innerHTML = "Select a New Game!";




		answerOne.innerHTML = game1Title;
		answerTwo.innerHTML = game2Title;
		answerThree.innerHTML = game3Title;
		answerFour.innerHTML = game4Title;

		document.getElementById("boxThree").innerHTML = "Score";
		responseButton.innerHTML = "You earned " + points + " points!";
		points = 0;

		stopTimer();
		document.getElementById("boxOne").innerHTML = "Timer";

		answerOne.onclick = function(){selectGame1()};
		answerTwo.onclick = function(){selectGame2()};
		answerThree.onclick = function(){selectGame3()};
		answerFour.onclick = function(){selectGame4()};

		count = 11;


    }



}









   function resetAnswerColors(){

	A1.style.backgroundColor = "white";
	A2.style.backgroundColor = "white";
	A3.style.backgroundColor = "white";
	A4.style.backgroundColor = "white";

	answerOne.style.backgroundColor = "white";
	answerTwo.style.backgroundColor = "white";
	answerThree.style.backgroundColor = "white";
	answerFour.style.backgroundColor = "white";

	answerOne.style.color = "black";
	answerTwo.style.color = "black";
	answerThree.style.color = "black";
	answerFour.style.color = "black";

}




function enableButtons(){

	answerOne.disabled = false;
	answerTwo.disabled = false;
	answerThree.disabled = false;
	answerFour.disabled = false;

}

function disableButtons(){
		answerOne.disabled = true;
		answerTwo.disabled = true;
		answerThree.disabled = true;
		answerFour.disabled = true;
}







function clickedAnswerOne(){




	if (document.getElementById("answerOne").innerHTML == femIlla[randIndex][0] + nounsFirst[0][0] + perEndingsFirst[randIndex]||
    document.getElementById("answerOne").innerHTML == femIllaPlural[randIndex][0] + nounsFirstPlural[0][0] + perEndingsFirstPlural[randIndex]||
		document.getElementById("answerOne").innerHTML == mascIlle[randIndex][0] + nounsSecond[0][0] + perEndingsSecond[randIndex]||
    document.getElementById("answerOne").innerHTML == mascIllePlural[randIndex][0] + nounsSecondPlural[0][0] + perEndingsSecondPlural[randIndex]||
    document.getElementById("answerOne").innerHTML == neutIllud[randIndex][0] + nounsSecondNeuter[0][0] + perEndingsSecondNeuter[randIndex]|
    document.getElementById("answerOne").innerHTML == neutIlludPlural[randIndex][0] + nounsSecondNeuterPlural[0][0] + perEndingsSecondNeuterPlural[randIndex]
    ){

		correctAnswerAudio();
		//clickedCorrectAnswerOneAudio ();
		points += pointsPerCorrectAnswer;
		document.getElementById("boxThree").innerHTML = points;
		stopTimer();
		disableButtons();
		responseButton.disabled = true;
		timeleft = 15;
		answerOne.style.backgroundColor = "yellow";
		answerOne.style.border = "yellow";
		document.getElementById("A1").style.backgroundColor = "yellow";

		responseButton.innerHTML = "Optime!";
		responseButton.style.color = "yellow";
		startButton.innerHTML = "Next Question!";
		startButton.disabled = false;


		unHideResponseNext();



	} else {

		wrongAnswerAudio();
		//clickedWrongAnswerOneAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;
		answerOne.style.color = "red";
		answerOne.style.backgroundColor = "black";
		answerOne.style.border = "black";
		answerOne.disabled = true;
		document.getElementById("A1").style.backgroundColor = "black";
		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";

	}

}


function clickedAnswerTwo(){



	if (document.getElementById("answerTwo").innerHTML == femIlla[randIndex][0] + nounsFirst[0][0] + perEndingsFirst[randIndex]||
    document.getElementById("answerTwo").innerHTML == femIllaPlural[randIndex][0] + nounsFirstPlural[0][0] + perEndingsFirstPlural[randIndex]||
		document.getElementById("answerTwo").innerHTML == mascIlle[randIndex][0] + nounsSecond[0][0] + perEndingsSecond[randIndex]||
    document.getElementById("answerTwo").innerHTML == mascIllePlural[randIndex][0] + nounsSecondPlural[0][0] + perEndingsSecondPlural[randIndex]||
    document.getElementById("answerTwo").innerHTML == neutIllud[randIndex][0] + nounsSecondNeuter[0][0] + perEndingsSecondNeuter[randIndex]|
    document.getElementById("answerTwo").innerHTML == neutIlludPlural[randIndex][0] + nounsSecondNeuterPlural[0][0] + perEndingsSecondNeuterPlural[randIndex]
    ){

		correctAnswerAudio();
		//clickedCorrectAnswerTwoAudio();
		points += pointsPerCorrectAnswer;
		document.getElementById("boxThree").innerHTML = points;
		stopTimer();
		disableButtons();
		responseButton.disabled = true;
		timeleft = 15;
		answerTwo.style.backgroundColor = "yellow";
		answerTwo.style.border = "yellow";
		document.getElementById("A2").style.backgroundColor = "yellow";

		responseButton.innerHTML = "Optime!";
		responseButton.style.color = "yellow";
		startButton.innerHTML = "Next Question!";
		startButton.disabled = false;


		unHideResponseNext();


	} else {

		wrongAnswerAudio();
		//clickedWrongAnswerTwoAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;
		answerTwo.style.color = "red";
		answerTwo.style.backgroundColor = "black";
		answerTwo.style.border = "black";
		answerTwo.disabled = true;
		document.getElementById("A2").style.backgroundColor = "black";
		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";

	}
}

function clickedAnswerThree(){



	if (document.getElementById("answerThree").innerHTML == femIlla[randIndex][0] + nounsFirst[0][0] + perEndingsFirst[randIndex]||
    document.getElementById("answerThree").innerHTML == femIllaPlural[randIndex][0] + nounsFirstPlural[0][0] + perEndingsFirstPlural[randIndex]||
		document.getElementById("answerThree").innerHTML == mascIlle[randIndex][0] + nounsSecond[0][0] + perEndingsSecond[randIndex]||
    document.getElementById("answerThree").innerHTML == mascIllePlural[randIndex][0] + nounsSecondPlural[0][0] + perEndingsSecondPlural[randIndex]||
    document.getElementById("answerThree").innerHTML == neutIllud[randIndex][0] + nounsSecondNeuter[0][0] + perEndingsSecondNeuter[randIndex]|
    document.getElementById("answerThree").innerHTML == neutIlludPlural[randIndex][0] + nounsSecondNeuterPlural[0][0] + perEndingsSecondNeuterPlural[randIndex]
    ){

		correctAnswerAudio();
		//clickedCorrectAnswerThreeAudio();
		points += pointsPerCorrectAnswer;
		document.getElementById("boxThree").innerHTML = points;
		stopTimer();
		disableButtons();
		responseButton.disabled = true;
		timeleft = 15;
		answerThree.style.backgroundColor = "yellow";
		answerThree.style.border = "yellow";
		document.getElementById("A3").style.backgroundColor = "yellow";
		responseButton.innerHTML = "Optime!";

		responseButton.style.color = "yellow";
		startButton.innerHTML = "Next Question!";
		startButton.disabled = false;


		unHideResponseNext();


	} else {

		wrongAnswerAudio();
		//clickedWrongAnswerThreeAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;
		answerThree.style.color = "red";
		answerThree.style.backgroundColor = "black";
		answerThree.style.border = "black";
		answerThree.disabled = true;
		document.getElementById("A3").style.backgroundColor = "black";
		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";

	}

}

function clickedAnswerFour(){



	if (document.getElementById("answerFour").innerHTML == femIlla[randIndex][0] + nounsFirst[0][0] + perEndingsFirst[randIndex]||
    document.getElementById("answerFour").innerHTML == femIllaPlural[randIndex][0] + nounsFirstPlural[0][0] + perEndingsFirstPlural[randIndex]||
		document.getElementById("answerFour").innerHTML == mascIlle[randIndex][0] + nounsSecond[0][0] + perEndingsSecond[randIndex]||
    document.getElementById("answerFour").innerHTML == mascIllePlural[randIndex][0] + nounsSecondPlural[0][0] + perEndingsSecondPlural[randIndex]||
    document.getElementById("answerFour").innerHTML == neutIllud[randIndex][0] + nounsSecondNeuter[0][0] + perEndingsSecondNeuter[randIndex]||
    document.getElementById("answerFour").innerHTML == neutIlludPlural[randIndex][0] + nounsSecondNeuterPlural[0][0] + perEndingsSecondNeuterPlural[randIndex]
    ){

		correctAnswerAudio();
		//clickedCorrectAnswerFourAudio;
		points += pointsPerCorrectAnswer;
		document.getElementById("boxThree").innerHTML = points;
		stopTimer();
		disableButtons();
		responseButton.disabled = true;
		timeleft = 15;
		answerFour.style.backgroundColor = "yellow";
		answerFour.style.border = "yellow";
		document.getElementById("A4").style.backgroundColor = "yellow";
		responseButton.innerHTML = "Optime!";

		responseButton.style.color = "yellow";
		startButton.innerHTML = "Next Question!";
		startButton.disabled = false;


		unHideResponseNext();


	} else {

		wrongAnswerAudio();
		//clickedWrongAnswerFourAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;
		answerFour.style.color = "red";
		answerFour.style.backgroundColor = "black";
		answerFour.style.border = "black";
		answerFour.disabled = true;
		document.getElementById("A4").style.backgroundColor = "black";
		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";

	}


}
