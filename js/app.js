//Var's global of the game.
var timeCount = 0;
var showTimer;
var countToWin = 0;
var moves = 0;
var countingStars = 0;
var card0 = 'img/shield.jpg';
var checkMatch = [];
var checkMatchClass = [];
var checkMatchId = [];
var checkMatchLose = [];
var sec;
var i;
var avoidOne = 1;
var avoidOne1 = 1;
var avoidOne2 = 1;
var avoidOne3 = 1;
var avoidOne4 = 1;
var avoidOne5 = 1;
var avoidOne6 = 1;
var avoidOne7 = 1;
var avoidOne8 = 1;
var avoidOne9 = 1;
var avoidOne10 = 1;
var avoidOne11 = 1;
var avoidOne12 = 1;
var avoidOne13 = 1;
var avoidOne14 = 1;
var avoidOne15 = 1;
var avoidOne16 = 1;
var avoidOne17 = 1;
var avoidOne18 = 1;
var avoidOne19 = 1;
var avoidOne20 = 1;
var avoidOne21 = 1;
var avoidOne22 = 1;
var avoidOne23 = 1;
var avoidOne24 = 1;


// Array with heros card's image path. 
var heros = [
    'img/hero/america.png',
    'img/hero/arqueiro.jpg',
    'img/hero/capMarvel.jpg',
    'img/hero/coisa.jpg',
    'img/hero/demolidor.jpg',
    'img/hero/estranho.jpg',
    'img/hero/falcao.jpg',
    'img/hero/feiticeira.jpg',
    'img/hero/hulk.jpg',
    'img/hero/invisivel.jpg',
    'img/hero/ironMan.jpg',
    'img/hero/motoqueiro.jpg',
    'img/hero/spidey.jpg',
    'img/hero/surfer.jpg',
    'img/hero/thor.jpg',
    'img/hero/tocha.jpg'
];

//Show a modal when the page loads
$(document).ready(function () {
    $('#startModal').modal('show');
});

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, x;
    while (0 !== currentIndex) {
        x = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[x];
        array[x] = temporaryValue;
    }
    return array;
}

// Set var heros to shuffle
heros = shuffle(heros);

// Two events function to reset the game
$("#fresh, #resetGame").click(function () {
    if($(this)[0].id === "fresh") {
        $(this).addClass('fa-spin');
    }
    location.reload();
});

// An if statement to set the deck when the screen is under 992 pixel's width.
if (window.innerWidth > 300) {
    let cardList = 24;
    if(window.innerWidth < 992) {
        cardList = 16;
        $("#5, #6, #11, #12, #17, #18, #23, #24").remove();
    }    

    // function from http://jsfiddle.net/9h7rc/
    function randomNumbers1(max) {
        function range(upTo) {
            var result1 = [];
            for (var i = 0; i < upTo; i++) result1.push(i);
            return result1;
        }

        function shuffle(o) {
            for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
            return o;
        }
        var myArr = shuffle(range(max));
        return function () {
            return myArr.shift();
        };
    }

    let randoms = randomNumbers1(cardList),
        rand = randoms(),
        result1 = [];
    while (rand != null) {
        result1.push(rand);
        rand = randoms();
    }
    // array to store variables that will be in the id of the each cards and store the variables in the img tag
    var functions1 = [];
    result1.forEach(function(i) {
        functions1.push(`card${i+1}`)
      });
    for (var z = 0; z < cardList; z++) {
        document.getElementsByTagName("img")[z].setAttribute("id", functions1[result1[z]]);
    }        

    $(".card").attr("cardSelected", true);
    let heroPosLess = [0, 1, 2, 10, 4, 3, 4, 5, 5, 7, 7, 10, 0, 1, 2, 3];
    let losePosLess = [11, 13, 17, 2, 3, 19, 3, 5, 5, 7, 7, 2, 11, 13, 17, 19];
    let heroPos = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    let losePos = [3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41];

    $(".card").click(function() {
        let cardElement = $(this);
        let isCardSelected = $(this).attr("cardSelected");
        let cardIndex = parseInt($(this)[0].id.replace("card", "")) - 1;
        if(isCardSelected) {
            cardElement.removeAttr("cardSelected");
            if(window.innerWidth < 992)                
                changeCardInfo($(this), heroPosLess[cardIndex], losePosLess[cardIndex]);
            else
                changeCardInfo($(this), heroPos[cardIndex], losePos[cardIndex]);
        }
    });    
}

// An event function set when the screen changes it's sizes
document.getElementsByTagName("BODY")[0].onresize = function () {
    resizeSmall();
};
// Function to show an alert message when the screen goes under 992 pixel's width an goes back above this width.
function resizeSmall() {
    if (window.innerWidth < 992) {
        resizeWindow = true;
    } else if (window.innerWidth > 992 && resizeWindow === true) {
        alert("Reset the game for a full deck of cards");
    }
}

// Funtion time when the player hit the first card start the timer
if (showTimer === 1) {
    sec = 'second';
}
$("#will1").one('click', (function timer() {
    timeCount += 1;
    if (showTimer >= 2) { sec = 'seconds'; }
    $("#contador").html(timeCount + ' ' + sec);
    showTimer = setTimeout(timer, 1000);
}));

//functions to return if a pair of the cards is made or not.

$('#will1').click(function memory() {
    $('#moves').html(moves);
    var pos1 = checkMatchId[0];
    var pos2 = checkMatchId[1];
    var pos3 = checkMatchClass[0];
    var pos4 = checkMatchClass[1];
    if (checkMatchLose[0] % checkMatchLose[1] == 0) {
        $(pos4).addClass('tada');
        [1,2].forEach(function(i) {
            checkMatchClass.splice(0, 1);
            checkMatchId.splice(0, 1);
            checkMatch.splice(0, 1);
            checkMatchLose.splice(0, 1);
          });
        setTimeout(function () {
            $(pos3).addClass('tada');
        }, 1000);
        setTimeout(function () {
            $(`${pos3}, ${pos4}`).removeAttr('id');
        }, 1700);
        countToWin += 1;

        if (countToWin === 12 || countToWin === 8) {
            $("#welcomeTitle").text('Congratulations');
            $(".modal-body").text('You won the williams memory game match in ' + timeCount + ' seconds and ' + (3 - countingStars) + ' of rating stars');
            $('#modal').modal('show');
            $('#contador').removeAttr('id');
        }
        return;
    }
    if (checkMatchClass.length === 2) {
        if (checkMatchLose[0] % checkMatchLose[1] !== 0) {
            $(".card").removeAttr("cardSelected");
            [1,2].forEach(function(i) {
                checkMatch.splice(0, 1);
                checkMatchLose.splice(0, 1);
              });
            setTimeout(function () {
                $(`${pos4}, ${pos3}`).addClass('shake');
                [1,2].forEach(function(i) {
                    checkMatchClass.splice(0, 1);
                    checkMatchId.splice(0, 1);
                  });
                  $(".card").attr("cardSelected", true);
            }, 300);

            setTimeout(() => {
                $(`${pos4}, ${pos3}`).removeClass('shake');
            }, 1000);

            setTimeout(() => {
                $(`${pos4}, ${pos3}`).addClass('flipOutX');
                $(`#${pos2}`)[0].attributes[1].value = card0;
                $(`#${pos1}`)[0].attributes[1].value = card0;
            }, 1300);

            setTimeout(() => {
                $(`${pos4}, ${pos3}`).removeClass('flipOutX');                
            }, 1500);

            return memory;
        }
    }
});

// function when click on the body will set the conditional statement to decrease the stars rating
$('#will1').click(function starsDecresing() {
    let starId = null;
    starId = moves == 17 ? '#3star' : moves == 34 ? '#2star' : moves == 51 ? '#1star' : null;
    if(starId) {
        $(starId).removeClass('fa-star');
        $(starId).addClass('fa-star-o');
        countingStars += 1;
        return;
    }
});

function changeCardInfo(card, heroPosition, LoseNumber) {
    card.addClass('animated flipInX');
    document.getElementById(card[0].id).src = heros[heroPosition];
    moves += 1;
    checkMatch.push(1);
    checkMatchClass.push(`#${card[0].id}`);
    checkMatchId.push(card[0].id);
    checkMatchLose.push(LoseNumber);
    setTimeout(() => {
        card.removeClass('flipInX');
    }, 1100);
}