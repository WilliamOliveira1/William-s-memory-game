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
$("#fresh").click(function () {
    $('#fresh').addClass('fa-spin');
    location.reload();
});
$("#resetGame").click(function () {
    location.reload();
});

// An if statement to set the deck when the screen is under 992 pixel's width.
if (window.innerWidth < 992) {
    $("#5, #6, #11, #12, #17, #18, #23, #24").remove();

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

    let randoms = randomNumbers1(16),
        rand = randoms(),
        result1 = [];
    while (rand != null) {
        result1.push(rand);
        rand = randoms();
    }
    // array to store variables that will be in the id of the each cards and store the variables in the img tag
    var functions1 = [];
    for (var a = 1; a < 26; a++) {
        functions1.push('card' + a)
        for (var z = 0; z < 16; z++) {
            document.getElementsByTagName("img")[z].setAttribute("id", functions1[result1[z]]);
        }
    }

    // functions that will trigger the cards
    $("#card12").click(function () {
        if (avoidOne === 1 & avoidOne12 === 1) {
            changeCardInfo($(this), 10, 2);
        }
        avoidOne12 = 0;
    });

    $("#card4").click(function () {
        if (avoidOne === 1 & avoidOne4 === 1) {
            changeCardInfo($(this), 10, 2);
        }
        avoidOne4 = 0;
    });

    $("#card5").click(function () {
        if (avoidOne === 1 & avoidOne5 === 1) {
            changeCardInfo($(this), 4, 3)
        }
        avoidOne5 = 0;
    });

    $("#card7").click(function () {
        if (avoidOne === 1 & avoidOne7 === 1) {
            changeCardInfo($(this), 4, 3);
        }
        avoidOne7 = 0;
    });

    $("#card8").click(function () {
        if (avoidOne === 1 & avoidOne8 === 1) {
            changeCardInfo($(this), 5, 5);
        }
        avoidOne8 = 0;
    });

    $("#card9").click(function () {
        if (avoidOne === 1 & avoidOne9 === 1) {
            changeCardInfo($(this), 5, 5);
        }
        avoidOne9 = 0;
    });

    $("#card10").click(function () {
        if (avoidOne === 1 & avoidOne10 === 1) {
            changeCardInfo($(this), 7, 7);
        }
        avoidOne10 = 0;
    });

    $("#card11").click(function () {
        if (avoidOne === 1 & avoidOne11 === 1) {
            changeCardInfo($(this), 7, 7);
        }
        avoidOne11 = 0;
    });

    $("#card1").click(function () {
        if (avoidOne === 1 & avoidOne1 === 1) {
            changeCardInfo($(this), 0, 11);
        }
        avoidOne1 = 0;
    });

    $("#card13").click(function () {
        if (avoidOne === 1 & avoidOne13 === 1) {
            changeCardInfo($(this), 0, 11);
        }
        avoidOne13 = 0;
    });

    $("#card14").click(function () {
        if (avoidOne === 1 & avoidOne14 === 1) {
            changeCardInfo($(this), 1, 13);
        }
        avoidOne14 = 0;
    });

    $("#card2").click(function () {
        if (avoidOne === 1 & avoidOne2 === 1) {
            changeCardInfo($(this), 1, 13);
        }
        avoidOne2 = 0;
    });

    $("#card15").click(function () {
        if (avoidOne === 1 & avoidOne15 === 1) {
            changeCardInfo($(this), 2, 17);
        }
        avoidOne15 = 0;
    });

    $("#card3").click(function () {
        if (avoidOne === 1 & avoidOne3 === 1) {
            changeCardInfo($(this), 2, 17);
        }
        avoidOne3 = 0;
    });

    $("#card16").click(function () {
        if (avoidOne === 1 & avoidOne16 === 1) {
            changeCardInfo($(this), 3, 19);
        }
        avoidOne16 = 0;
    });

    $("#card6").click(function () {
        if (avoidOne === 1 & avoidOne6 === 1) {
            changeCardInfo($(this), 3, 19);
        }
        avoidOne6 = 0;
    });    
}

// Because of the bug that must be fix this will be stoped for a time, until I have time to fix
// Because of this I will set the innerWidth much higher
// An conditional statement to set the deck when the screen is above 992 pixel's width.
if (window.innerWidth > 992) {
    // function from http://jsfiddle.net/9h7rc/
    function randomNumbers(max) {
        function range(upTo) {
            var result = [];
            for (var i = 1; i < upTo; i++) result.push(i);
            return result;
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

    var randoms = randomNumbers(26),
        rand = randoms(),
        result = [];
    while (rand != null) {
        result.push(rand);
        rand = randoms();
    }
    // array to store variables that will be in the id of the each cards
    var functions = [];
    for (var y = 1; y < 26; y++) {
        functions.push('card' + y)
        for (var i = 0; i < 16; i++) {
            document.getElementsByTagName("img")[i].setAttribute("id", functions[result[i]]);
        }

    }

    // functions that will trigger the cards
    var elements = document.getElementsByClassName("card1");
    var myFunction = function () {
        var attribute = this.getAttribute("data-myattribute");
        alert(attribute);
    };

    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', myFunction, false);
    }    

    $("#card13").click(function() {
        if (avoidOne === 1 & avoidOne13 === 1) { 
            changeCardInfo($(this), 0, 3);
        }
        avoidOne13 = 0;        
    });

    $("#card1").click(function() {
        if (avoidOne === 1 & avoidOne1 === 1) { 
            changeCardInfo($(this), 0, 3);
        }
        avoidOne1 = 0;        
    });

    $("#card14").click(function() {
        if (avoidOne === 1 & avoidOne14 === 1) { 
            changeCardInfo($(this), 1, 5);
        }
        avoidOne14 = 0;        
    });

    $("#card2").click(function() {
        if (avoidOne === 1 & avoidOne2 === 1) { 
            changeCardInfo($(this), 1, 5);
        }
        avoidOne2 = 0;        
    });

    $("#card15").click(function() {
        if (avoidOne === 1 & avoidOne15 === 1) { 
            changeCardInfo($(this), 2, 7);
        }
        avoidOne15 = 0;        
    });

    $("#card3").click(function() {
        if (avoidOne === 1 & avoidOne3 === 1) { 
            changeCardInfo($(this), 2, 7);
        }
        avoidOne3 = 0;        
    });

    $("#card16").click(function() {
        if (avoidOne === 1 & avoidOne16 === 1) { 
            changeCardInfo($(this), 3, 11);
        }
        avoidOne16 = 0;        
    });

    $("#card4").click(function() {
        if (avoidOne === 1 & avoidOne4 === 1) { 
            changeCardInfo($(this), 3, 11);
        }
        avoidOne4 = 0;        
    });

    $("#card17").click(function() {
        if (avoidOne === 1 & avoidOne17 === 1) { 
            changeCardInfo($(this), 4, 13);
        }
        avoidOne17 = 0;        
    });

    $("#card5").click(function() {
        if (avoidOne === 1 & avoidOne5 === 1) { 
            changeCardInfo($(this), 4, 13);
        }
        avoidOne5 = 0;        
    });

    $("#card18").click(function() {
        if (avoidOne === 1 & avoidOne18 === 1) { 
            changeCardInfo($(this), 5, 17);
        }
        avoidOne18 = 0;        
    });

    $("#card6").click(function() {
        if (avoidOne === 1 & avoidOne6 === 1) { 
            changeCardInfo($(this), 5, 17);
        }
        avoidOne6 = 0;       
    });

    $("#card19").click(function() {
        if (avoidOne === 1 & avoidOne19 === 1) { 
            changeCardInfo($(this), 6, 19);
        }
        avoidOne19 = 0;        
    });

    $("#card7").click(function() {
        if (avoidOne === 1 & avoidOne7 === 1) { 
            changeCardInfo($(this), 6, 19);
        }
        avoidOne7 = 0;        
    });

    $("#card20").click(function() {
        if (avoidOne === 1 & avoidOne20 === 1) { 
            changeCardInfo($(this), 7, 23);
        }
        avoidOne20 = 0;        
    });

    $("#card8").click(function() {
        if (avoidOne === 1 & avoidOne8 === 1) { 
            changeCardInfo($(this), 7, 23);
        }
        avoidOne8 = 0;        
    });

    $("#card21").click(function() {
        if (avoidOne === 1 & avoidOne21 === 1) { 
            changeCardInfo($(this), 8, 29);
        }
        avoidOne21 = 0;        
    });

    $("#card9").click(function() {
        if (avoidOne === 1 & avoidOne9 === 1) { 
            changeCardInfo($(this), 8, 29);
        }
        avoidOne9 = 0;        
    });

    $("#card22").click(function() {
        if (avoidOne === 1 & avoidOne22 === 1) { 
            changeCardInfo($(this), 9, 31);
        }
        avoidOne22 = 0;        
    });

    $("#card10").click(function() {
        if (avoidOne === 1 & avoidOne10 === 1) { 
            changeCardInfo($(this), 9, 31);
        }
        avoidOne10 = 0;        
    });

    $("#card23").click(function() {
        if (avoidOne === 1 & avoidOne23 === 1) { 
            changeCardInfo($(this), 10, 37);
        }
        avoidOne23 = 0;        
    });

    $("#card11").click(function() {
        if (avoidOne === 1 & avoidOne11 === 1) { 
            changeCardInfo($(this), 10, 37);
        }
        avoidOne11 = 0;        
    });

    $("#card24").click(function() {
        if (avoidOne === 1 & avoidOne24 === 1) { 
            changeCardInfo($(this), 11, 41);
        }
        avoidOne24 = 0;        
    });

    $("#card12").click(function() {
        if (avoidOne === 1 & avoidOne12 === 1) { 
            changeCardInfo($(this), 11, 41);
        }
        avoidOne12 = 0;        
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
        if (checkMatchLose[0] % checkMatchLose[1] != 0) {
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
                avoidOne = avoidOne1 = avoidOne2 = avoidOne3 = avoidOne4 = avoidOne5 = avoidOne6 = avoidOne7 = avoidOne8 = avoidOne9 = avoidOne10 = 1;
                avoidOne11 = avoidOne12 = avoidOne13 = avoidOne14 = avoidOne15 = avoidOne16 = avoidOne17 = avoidOne18 = avoidOne19 = avoidOne20 = avoidOne21 = avoidOne22 = avoidOne23 = avoidOne24 = 1;
            }, 1000);

            setTimeout(() => {
                $(`${pos4}, ${pos3}`).removeClass('shake');
            }, 1600);

            setTimeout(() => {
                $(`${pos4}, ${pos3}`).addClass('flipOutX');
                $(`#${pos2}`)[0].attributes[1].value = card0;
                $(`#${pos1}`)[0].attributes[1].value = card0;
            }, 1700);

            setTimeout(() => {
                $(`${pos4}, ${pos3}`).removeClass('flipOutX');
            }, 2000);

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