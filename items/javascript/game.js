
var words = ["impeach", "dnc", "gop", "election", "doj", "pac", "dod"]


var randomWord = "";
var lettersOfWord = []
var blanks = 0;
var blanksAndCorrect = [];
var wrongGuess = [];


var wins = 0;
var losses = 0;
var guessesRemaining = 9;




function Game() {
    //computer generates random word from words array
    randomWord = words[Math.floor(Math.random() * words.length)];

    // split the individual word into separate arrays, and store in new array 
    lettersOfWord = randomWord.split("");

    //store length of word in blanks, for later use
    blanks = lettersOfWord.length;

    //creating a loop to generate "_" for each letter in array stored in blanks
    for (var i = 0; i < blanks; i++) {
        blanksAndCorrect.push("_");
    }

    //showing the "_" within HTML
    document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join("  ");

    //console logging 
    console.log(randomWord);
    console.log(lettersOfWord)
    console.log(blanks)
    console.log(blanksAndCorrect)
}
//__________________________________________________________
//AUDIO FUNCTION
//__________________________________________________________

//variables for audio function
var impeach = document.getElementById("impeach");
var dnc = document.getElementById("dnc");
var gop = document.getElementById("gop");
var election = document.getElementById("election");
var doj = document.getElementById("doj");
var pac = document.getElementById("pac");
var dod = document.getElementById("dod");


function aud() {
    //Arthur Audio & Image
    //---------------------------
    if (randomWord === words[0]) {
        impeach.pause();
        dnc.pause();
        gop.pause();
        election.pause();
        doj.pause();
        pac.pause();
        dod.play();
        document.getElementById("image").src = "./assets/images/impeach.jpg";
    }
    //Rugrats Audio & Image
    //---------------------------
    else if (randomWord === words[1]) {
        scoobydoo.pause();
        spongebob.pause();
        danny.pause();
        teent.pause();
        simpsons.pause();
        a.pause();
        r.play();
        document.getElementById("image").src = "./assets/images/rugrats.gif";
    }
    //Simpsons Audio & Image
    //---------------------------
    else if (randomWord === words[2]) {
        scoobydoo.pause();
        spongebob.pause();
        danny.pause();
        teent.pause();
        r.pause();
        a.pause();
        simpsons.play();
        
    }
  
    else if (randomWord === words[3]) {
        spongebob.pause();
        danny.pause();
        teent.pause();
        simpsons.pause();
        r.pause();
        a.pause();
        scoobydoo.play();
      
    }
    
    else if (randomWord === words[4]) {
        danny.pause();
        teent.pause();
        simpsons.pause();
        r.pause();
        a.pause();
        scoobydoo.pause();
        spongebob.play();
    
    }
   
    else if (randomWord === words[5]) {
        spongebob.pause();
        teent.pause();
        simpsons.pause();
        r.pause();
        a.pause();
        scoobydoo.pause();
        danny.play();
        
    }
  
    else if (randomWord === words[6]) {
        spongebob.pause();
        danny.pause();
        simpsons.pause();
        r.pause();
        a.pause();
        scoobydoo.pause();
        teent.play();
       
    }
};



function reset() {
    guessesRemaining = 9;
    wrongGuess = [];
    blanksAndCorrect = [];
    Game()
}


function checkLetters(letter) {
    var letterInWord = false;
    
    for (var i = 0; i < blanks; i++) {
        if (randomWord[i] == letter) {
            letterInWord = true;
        }
    }
   
    if (letterInWord) {
        
        for (var i = 0; i < blanks; i++) {
            if (randomWord[i] == letter) {
                blanksAndCorrect[i] = letter;
            }
        }
    }
    
    else {
        wrongGuess.push(letter);
        guessesRemaining--;
    }
    console.log(blanksAndCorrect);
}


function complete() {
    console.log("wins:" + wins + "| losses:" + losses + "| guesses left:" + guessesRemaining)

   
    if (lettersOfWord.toString() == blanksAndCorrect.toString()) {
        wins++;

        reset()
        
        document.getElementById("image").src = "./items/images/200.webp";
        
        document.getElementById("winstracker").innerHTML = " " + wins;

    } else if (guessesRemaining === 0) {
        losses++;
        reset()
        document.getElementById("image").src = "./items/images/TryAgain.gif";
        document.getElementById("losstracker").innerHTML = " " + losses;
    }
  
    document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join(" ");
    document.getElementById("guessesremaining").innerHTML = " " + guessesRemaining;
}



Game()


document.onkeyup = function (event) {
    var guesses = String.fromCharCode(event.keyCode).toLowerCase();
    
    checkLetters(guesses);
  
    complete();
   e 
    console.log(guesses);

  
    document.getElementById("playerguesses").innerHTML = "  " + wrongGuess.join(" ");
}




