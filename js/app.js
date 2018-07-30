//Var's global of the game.
var timeCount = 0;
var showTimer;
var started = false;
var moves = 0;
var solvedCount = 0;
var count1 = 0;
var count2 = 0;
var count3 = 0;
var count4 = 0;
var count5 = 0;
var count6 = 0;
var count7 = 0;
var count8 = 0;
var count9 = 0;
var count10 = 0;
var count11 = 0;
var count12 = 0;
var count13 = 0;
var count14 = 0;
var count15 = 0;
var count16 = 0;
var count17 = 0;
var count18 = 0;
var count19 = 0;
var count20 = 0;
var count21 = 0;
var count22 = 0;
var count23 = 0;
var count24 = 0;
// Array with heros card's image path. 
var heros = ['img/hero/america.png',
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
             'img/hero/tocha.jpg'];
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
// Set var heros to suffle
heros = shuffle(heros);
// An event function to reset the game
$("#fresh").click(function () {
    $('#fresh').addClass('fa-spin');
    location.reload();
});
// An if to set the deck when the screen is under 992 pixel's width.
if (window.innerWidth < 992) {

    $("#5").remove();
    $("#6").remove();
    $("#11").remove();
    $("#12").remove();
    $("#17").remove();
    $("#18").remove();
    $("#23").remove();
    $("#24").remove();

    // function from http://jsfiddle.net/9h7rc/
    function randomNumbers1(max) {
        function range(upTo) {
            var result1 = [];
            for (var i = 0; i < upTo; i++) result1.push(i);
            return result1;
        }

        function shuffle(o) { //v1.0
            for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
            return o;
        }
        var myArr = shuffle(range(max));
        return function () {
            return myArr.shift();
        };
    }

    var randoms = randomNumbers1(16),
        rand = randoms(),
        result1 = [];
    while (rand != null) {
        result1.push(rand);
        rand = randoms();
    }

    var functions1 = ['card1', 'card2', 'card3', 'card4', 'card7', 'card8', 'card9', 'card10', 'card13', 'card14', 'card15', 'card16', 'card19', 'card20', 'card21', 'card22'];

    document.getElementsByTagName("img")[0].setAttribute("id", functions1[result1[0]]);
    document.getElementsByTagName("img")[1].setAttribute("id", functions1[result1[1]]);
    document.getElementsByTagName("img")[2].setAttribute("id", functions1[result1[2]]);
    document.getElementsByTagName("img")[3].setAttribute("id", functions1[result1[3]]);
    document.getElementsByTagName("img")[4].setAttribute("id", functions1[result1[4]]);
    document.getElementsByTagName("img")[5].setAttribute("id", functions1[result1[5]]);
    document.getElementsByTagName("img")[6].setAttribute("id", functions1[result1[6]]);
    document.getElementsByTagName("img")[7].setAttribute("id", functions1[result1[7]]);
    document.getElementsByTagName("img")[8].setAttribute("id", functions1[result1[8]]);
    document.getElementsByTagName("img")[9].setAttribute("id", functions1[result1[9]]);
    document.getElementsByTagName("img")[10].setAttribute("id", functions1[result1[10]]);
    document.getElementsByTagName("img")[11].setAttribute("id", functions1[result1[11]]);
    document.getElementsByTagName("img")[12].setAttribute("id", functions1[result1[12]]);
    document.getElementsByTagName("img")[13].setAttribute("id", functions1[result1[13]]);
    document.getElementsByTagName("img")[14].setAttribute("id", functions1[result1[14]]);
    document.getElementsByTagName("img")[15].setAttribute("id", functions1[result1[15]]);

    $("#card1").click(function () {
        $('#card1').addClass('animated flipInX');
        document.getElementById("card1").src = heros[0];
    });

    $("#card2").click(function () {
        $('#card2').addClass('animated flipInX');
        document.getElementById("card2").src = heros[1];
    });

    $("#card3").click(function () {
        $('#card3').addClass('animated flipInX');
        document.getElementById("card3").src = heros[2];
    });

    $("#card4").click(function () {
        $('#card4').addClass('animated flipInX');
        document.getElementById("card4").src = heros[3];
    });

    $("#card7").click(function () {
        $('#card7').addClass('animated flipInX');
        document.getElementById("card7").src = heros[4];
    });

    $("#card8").click(function () {
        $('#card8').addClass('animated flipInX');
        document.getElementById("card8").src = heros[5];
    });

    $("#card9").click(function () {
        $('#card9').addClass('animated flipInX');
        document.getElementById("card9").src = heros[6];
    });

    $("#card10").click(function () {
        $('#card10').addClass('animated flipInX');
        document.getElementById("card10").src = heros[7];
    });

    $("#card13").click(function () {
        $('#card13').addClass('animated flipInX');
        document.getElementById("card13").src = heros[0];
    });

    $("#card14").click(function () {
        $('#card14').addClass('animated flipInX');
        document.getElementById("card14").src = heros[1];
    });

    $("#card15").click(function () {
        $('#card15').addClass('animated flipInX');
        document.getElementById("card15").src = heros[2];
    });

    $("#card16").click(function () {
        $('#card16').addClass('animated flipInX');
        document.getElementById("card16").src = heros[3];
    });

    $("#card19").click(function () {
        $('#card19').addClass('animated flipInX');
        document.getElementById("card19").src = heros[4];
    });

    $("#card20").click(function () {
        $('#card20').addClass('animated flipInX');
        document.getElementById("card20").src = heros[5];
    });

    $("#card21").click(function () {
        $('#card21').addClass('animated flipInX');
        document.getElementById("card21").src = heros[6];
    });

    $("#card22").click(function () {
        $('#card22').addClass('animated flipInX');
        document.getElementById("card22").src = heros[7];
    });
}
// An if to set the deck when the screen is above 992 pixel's width.
if (window.innerWidth > 992) {

    // function from http://jsfiddle.net/9h7rc/
    function randomNumbers(max) {
        function range(upTo) {
            var result = [];
            for (var i = 0; i < upTo; i++) result.push(i);
            return result;
        }

        function shuffle(o) { //v1.0
            for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
            return o;
        }
        var myArr = shuffle(range(max));
        return function () {
            return myArr.shift();
        };
    }

    var randoms = randomNumbers(24),
        rand = randoms(),
        result = [];
    while (rand != null) {
        result.push(rand);
        rand = randoms();
    }

    var functions = ['card1', 'card2', 'card3', 'card4', 'card5', 'card6', 'card7', 'card8', 'card9', 'card10', 'card11', 'card12', 'card13', 'card14', 'card15', 'card16', 'card17', 'card18', 'card19', 'card20', 'card21', 'card22', 'card23', 'card24'];

    document.getElementsByTagName("img")[0].setAttribute("id", functions[result[0]]);
    document.getElementsByTagName("img")[1].setAttribute("id", functions[result[1]]);
    document.getElementsByTagName("img")[2].setAttribute("id", functions[result[2]]);
    document.getElementsByTagName("img")[3].setAttribute("id", functions[result[3]]);
    document.getElementsByTagName("img")[4].setAttribute("id", functions[result[4]]);
    document.getElementsByTagName("img")[5].setAttribute("id", functions[result[5]]);
    document.getElementsByTagName("img")[6].setAttribute("id", functions[result[6]]);
    document.getElementsByTagName("img")[7].setAttribute("id", functions[result[7]]);
    document.getElementsByTagName("img")[8].setAttribute("id", functions[result[8]]);
    document.getElementsByTagName("img")[9].setAttribute("id", functions[result[9]]);
    document.getElementsByTagName("img")[10].setAttribute("id", functions[result[10]]);
    document.getElementsByTagName("img")[11].setAttribute("id", functions[result[11]]);
    document.getElementsByTagName("img")[12].setAttribute("id", functions[result[12]]);
    document.getElementsByTagName("img")[13].setAttribute("id", functions[result[13]]);
    document.getElementsByTagName("img")[14].setAttribute("id", functions[result[14]]);
    document.getElementsByTagName("img")[15].setAttribute("id", functions[result[15]]);
    document.getElementsByTagName("img")[16].setAttribute("id", functions[result[16]]);
    document.getElementsByTagName("img")[17].setAttribute("id", functions[result[17]]);
    document.getElementsByTagName("img")[18].setAttribute("id", functions[result[18]]);
    document.getElementsByTagName("img")[19].setAttribute("id", functions[result[19]]);
    document.getElementsByTagName("img")[20].setAttribute("id", functions[result[20]]);
    document.getElementsByTagName("img")[21].setAttribute("id", functions[result[21]]);
    document.getElementsByTagName("img")[22].setAttribute("id", functions[result[22]]);
    document.getElementsByTagName("img")[23].setAttribute("id", functions[result[23]]);

    $("#card1").click(function () {
        $('#card1').addClass('animated flipInX');
        document.getElementById("card1").src = heros[0];
        car1()
    });

    $("#card2").click(function () {
        $('#card2').addClass('animated flipInX');
        document.getElementById("card2").src = heros[1];
        car2()
    });

    $("#card3").click(function () {
        $('#card3').addClass('animated flipInX');
        document.getElementById("card3").src = heros[2];
        car3()
    });

    $("#card4").click(function () {
        $('#card4').addClass('animated flipInX');
        document.getElementById("card4").src = heros[3];
        car4()
    });

    $("#card5").click(function () {
        $('#card5').addClass('animated flipInX');
        document.getElementById("card5").src = heros[4];
        car5();
    });

    $("#card6").click(function () {
        $('#card6').addClass('animated flipInX');
        document.getElementById("card6").src = heros[5];
        car6();
    });

    $("#card7").click(function () {
        $('#card7').addClass('animated flipInX');
        document.getElementById("card7").src = heros[6];
        car7()
    });

    $("#card8").click(function () {
        $('#card8').addClass('animated flipInX');
        document.getElementById("card8").src = heros[7];
        car8()
    });

    $("#card9").click(function () {
        $('#card9').addClass('animated flipInX');
        document.getElementById("card9").src = heros[8];
        car9()
    });

    $("#card10").click(function () {
        $('#card10').addClass('animated flipInX');
        document.getElementById("card10").src = heros[9];
        car10()
    });

    $("#card11").click(function () {
        $('#card11').addClass('animated flipInX');
        document.getElementById("card11").src = heros[10];
        car11()
    });

    $("#card12").click(function () {
        $('#card12').addClass('animated flipInX');
        document.getElementById("card12").src = heros[11];
        car12()
    });

    $("#card13").click(function () {
        $('#card13').addClass('animated flipInX');
        document.getElementById("card13").src = heros[0];
        car13()
    });

    $("#card14").click(function () {
        $('#card14').addClass('animated flipInX');
        document.getElementById("card14").src = heros[1];
        car14()
    });

    $("#card15").click(function () {
        $('#card15').addClass('animated flipInX');
        document.getElementById("card15").src = heros[2];
        car15()
    });

    $("#card16").click(function () {
        $('#card16').addClass('animated flipInX');
        document.getElementById("card16").src = heros[3];
        car16()
    });

    $("#card17").click(function () {
        $('#card17').addClass('animated flipInX');
        document.getElementById("card17").src = heros[4];
        car17();
    });

    $("#card18").click(function () {
        $('#card18').addClass('animated flipInX');
        document.getElementById("card18").src = heros[5];
        car18();
    });

    $("#card19").click(function () {
        $('#card19').addClass('animated flipInX');
        document.getElementById("card19").src = heros[6];
        car19();
    });

    $("#card20").click(function () {
        $('#card20').addClass('animated flipInX');
        document.getElementById("card20").src = heros[7];
        car20()
    });

    $("#card21").click(function () {
        $('#card21').addClass('animated flipInX');
        document.getElementById("card21").src = heros[8];
        car21()
    });

    $("#card22").click(function () {
        $('#card22').addClass('animated flipInX');
        document.getElementById("card22").src = heros[9];
        car22()
    });

    $("#card23").click(function () {
        $('#card23').addClass('animated flipInX');
        document.getElementById("card23").src = heros[10];
        car23()
    });

    $("#card24").click(function () {
        $('#card24').addClass('animated flipInX');
        document.getElementById("card24").src = heros[11];
        car24()
    });

}
// An event function set when the screen changes it's sizes
document.getElementsByTagName("BODY")[0].onresize = function () {
    resizeSmall()
};
// Function to show an alert message when the screen goes under 992 pixel's width an goes back above this width.
function resizeSmall() {

    if (window.innerWidth < 992) {
        i = 1;

    } else if (window.innerWidth > 992 && i == 1) {
        alert("Reset the game for a full deck of cards")
    }
}
// Funtion time when the player hit the first card start the timer
if(showTimer == 1 ) {
    sec = 'second'
}
$("#will1").click( function timer(){
        timeCount += 1;
    if(showTimer >=2) { sec = 'seconds'}
        $("#contador").html(timeCount + ' '+sec);
        showTimer = setTimeout(timer, 1000);
    
});
//functions to return if a pair of the cards is made.
function car1 () {
    count1 += 1;
    moves += 1;
    if (count1 >= 1 && count13 >= 1) {
        $("#card1").removeClass( "flipInX" )
        $("#card13").removeClass( "flipInX" )
        $("#card1").addClass("zoomIn");
        $("#card13").addClass("zoomIn");
    }
    return
}
function car2 () {
    count2 += 1;
    moves += 1;
    if (count2 >= 1 && count14 >= 1) {
        $("#card2").removeClass( "flipInX" )
        $("#card14").removeClass( "flipInX" )
        $("#card2").addClass("zoomIn");
        $("#card14").addClass("zoomIn");
    }
    return
}
function car3 () {
    count3 += 1;
    moves += 1;
    if (count3 >= 1 && count15 >= 1) {
        $("#card3").removeClass( "flipInX" )
        $("#card15").removeClass( "flipInX" )
        $("#card3").addClass("zoomIn");
        $("#card15").addClass("zoomIn");
    }
    return
}
function car4 () {
    count4 += 1;
    moves += 1;
    if (count4 >= 1 && count16 >=1) {
        $("#card4").removeClass( "flipInX" )
        $("#card16").removeClass( "flipInX" )
        $("#card4").addClass("zoomIn");
        $("#card16").addClass("zoomIn");
    }
    return
}
function car5 () {
    count5 += 1;
    moves += 1;
    if (count5 >= 1 && count17 >=1) {
        $("#card5").removeClass( "flipInX" )
        $("#card17").removeClass( "flipInX" )
        $("#card5").addClass("zoomIn");
        $("#card17").addClass("zoomIn");
    }
    return
}
function car6 () {
    count6 += 1;
    moves += 1;
    if (count6 >= 1 && count18 >=1) {
        $("#card6").removeClass( "flipInX" )
        $("#card18").removeClass( "flipInX" )
        $("#card6").addClass("zoomIn");
        $("#card18").addClass("zoomIn");
    }
    return
}
function car7 () {
    count7 += 1;
    moves += 1;
    if (count7 >= 1 && count19 >= 1) {
        $("#card7").removeClass( "flipInX" )
        $("#card19").removeClass( "flipInX" )
        $("#card7").addClass("zoomIn");
        $("#card19").addClass("zoomIn");
    }
    return
}
function car8 () {
    count8 += 1;
    moves += 1;
    if (count8 >= 1 && count20 >= 1) {
        $("#card8").removeClass( "flipInX" )
        $("#card20").removeClass( "flipInX" )
        $("#card8").addClass("zoomIn");
        $("#card20").addClass("zoomIn");
    }
    return
}
function car9 () {
    moves += 1;
    count9 += 1;
    if (count9 >= 1 && count21 >= 1) {
        $("#card9").removeClass( "flipInX" )
        $("#card21").removeClass( "flipInX" )
        $("#card9").addClass("zoomIn");
        $("#card21").addClass("zoomIn");
    }
    return
}
function car10 () {
    moves += 1;
    count10 += 1;
    if (count10 >= 1 && count22 >= 1) {
        $("#card10").removeClass( "flipInX" )
        $("#card22").removeClass( "flipInX" )
        $("#card10").addClass("zoomIn");
        $("#card22").addClass("zoomIn");
    }
    return
}
function car11 () {
    count11 += 1;
    moves += 1;
    if (count11 >= 1 && count23 >= 1) {
        $("#card11").removeClass( "flipInX" )
        $("#card23").removeClass( "flipInX" )
        $("#card11").addClass("zoomIn");
        $("#card23").addClass("zoomIn");
    }
    return
}
function car12 () {
    count12 += 1;
    moves += 1;
    if (count12 >= 1 && count24 >= 1) {
        $("#card12").removeClass( "flipInX" )
        $("#card24").removeClass( "flipInX" )
        $("#card12").addClass("zoomIn");
        $("#card24").addClass("zoomIn");
    }
    return
}
function car13 () {
    count13+= 1;
    moves += 1;
    if (count1 >= 1 && count13 >= 1) {
        $("#card1").removeClass( "flipInX" )
        $("#card13").removeClass( "flipInX" )
        $("#card1").addClass("zoomIn");
        $("#card13").addClass("zoomIn");
    }
    return
}
function car14 () {
    moves += 1;
    count14+= 1;
        if (count2 >= 1 && count14 >= 1) {
        $("#card2").removeClass( "flipInX" )
        $("#card14").removeClass( "flipInX" )
        $("#card2").addClass("zoomIn");
        $("#card14").addClass("zoomIn");
    }
    return    
}
function car15 () {
    count15 +=1;    
    moves += 1;
    if (count3 >= 1 && count15 >= 1) {
        $("#card3").removeClass( "flipInX" )
        $("#card15").removeClass( "flipInX" )
        $("#card3").addClass("zoomIn");
        $("#card15").addClass("zoomIn");
    }
    return
}
function car16 () {
    moves += 1;
    count16 += 1;
    if (count4 >= 1 && count16 >=1) {
        $("#card4").removeClass( "flipInX" )
        $("#card16").removeClass( "flipInX" )
        $("#card4").addClass("zoomIn");
        $("#card16").addClass("zoomIn");
    }
    return
}
function car17 () {
    count17 += 1;
    moves += 1;
    if (count5 >= 1 && count17 >=1) {
        $("#card5").removeClass( "flipInX" )
        $("#card17").removeClass( "flipInX" )
        $("#card5").addClass("zoomIn");
        $("#card17").addClass("zoomIn");
    }
    return
}
function car18 () {
    moves += 1;
    count18 += 1;
    if (count6 >= 1 && count18 >=1) {
        $("#card6").removeClass( "flipInX" )
        $("#card18").removeClass( "flipInX" )
        $("#card6").addClass("zoomIn");
        $("#card18").addClass("zoomIn");
    }
    return
}
function car19 () {
    count19 += 1;
    moves += 1;
    if (count7 >= 1 && count19 >= 1) {
        $("#card7").removeClass( "flipInX" )
        $("#card19").removeClass( "flipInX" )
        $("#card7").addClass("zoomIn");
        $("#card19").addClass("zoomIn");
    }
    return
}
function car20 () {
    count20 += 1;
    moves += 1;
     if (count8 >= 1 && count20 >= 1) {
        $("#card8").removeClass( "flipInX" )
        $("#card20").removeClass( "flipInX" )
        $("#card8").addClass("zoomIn");
        $("#card20").addClass("zoomIn");
    }
    return
}
function car21 () {
    count21 += 1;
    moves += 1;
    if (count9 >= 1 && count21 >= 1) {
        $("#card9").removeClass( "flipInX" )
        $("#card21").removeClass( "flipInX" )
        $("#card9").addClass("zoomIn");
        $("#card21").addClass("zoomIn");
    }
    return
}
function car22 () {
    count22 += 1;
    moves += 1;
    if (count10 >= 1 && count22 >= 1) {
        $("#card10").removeClass( "flipInX" )
        $("#card22").removeClass( "flipInX" )
        $("#card10").addClass("zoomIn");
        $("#card22").addClass("zoomIn");
    }
    return
}
function car23 () {
    count23 += 1;
    moves += 1;
    if (count11 >= 1 && count23 >= 1) {
        $("#card11").removeClass( "flipInX" )
        $("#card23").removeClass( "flipInX" )
        $("#card11").addClass("zoomIn");
        $("#card23").addClass("zoomIn");
    }
    return
}
function car24 () {
    count24 += 1;
    moves += 1;
    if (count12 >= 1 && count24 >= 1) {
        $("#card12").removeClass( "flipInX" )
        $("#card24").removeClass( "flipInX" )
        $("#card12").addClass("zoomIn");
        $("#card24").addClass("zoomIn");
    }
}