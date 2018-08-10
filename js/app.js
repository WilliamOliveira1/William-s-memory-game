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
    $(document).ready(function() {
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
    // Set var heros to suffle
    heros = shuffle(heros);
    // An event function to reset the game
    $("#fresh").click(function() {
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

            function shuffle(o) {
                for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
                return o;
            }
            var myArr = shuffle(range(max));
            return function() {
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
        // array to store variables that will be in the id of the each cards
        var functions1 = [
            'card1',
            'card2',
            'card3',
            'card4',
            'card7',
            'card8',
            'card9',
            'card10',
            'card13',
            'card14',
            'card15',
            'card16',
            'card19',
            'card20',
            'card21',
            'card22'
        ];
        // store the variables in the img tag
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

        // functions that will trigger the cards

        $("#card1").click(function() {
            $('#card1').addClass('animated flipInX');
            document.getElementById("card1").src = heros[0];
            moves += 1;
            checkMatch.push(1);
            checkMatchClass.push('#card1');
            checkMatchId.push('card1');
            checkMatchLose.push(3);
            setTimeout(function() {
                $('#card1').removeClass('flipInX');
            }, 1100);
        });

        $("#card2").click(function() {
            $('#card2').addClass('animated flipInX');
            document.getElementById("card2").src = heros[1];
            moves += 1;
            checkMatch.push(1);
            checkMatchClass.push('#card2');
            checkMatchId.push('card2');
            checkMatchLose.push(5);
            setTimeout(function() {
                $('#card2').removeClass('flipInX');
            }, 1100);
        });

        $("#card3").click(function() {
            $('#card3').addClass('animated flipInX');
            document.getElementById("card3").src = heros[2];
            moves += 1;
            checkMatch.push(1);
            checkMatchClass.push('#card3');
            checkMatchId.push('card3');
            checkMatchLose.push(7);
            setTimeout(function() {
                $('#card3').removeClass('flipInX');
            }, 1100);
        });

        $("#card4").click(function() {
            $('#card4').addClass('animated flipInX');
            document.getElementById("card4").src = heros[3];
            moves += 1;
            checkMatch.push(1);
            checkMatchClass.push('#card4');
            checkMatchId.push('card4');
            checkMatchLose.push(11);
            setTimeout(function() {
                $('#card4').removeClass('flipInX');
            }, 1100);
        });

        $("#card7").click(function() {
            $('#card7').addClass('animated flipInX');
            document.getElementById("card7").src = heros[4];
            moves += 1;
            checkMatch.push(1);
            checkMatchClass.push('#card7');
            checkMatchId.push('card7');
            checkMatchLose.push(13);
            setTimeout(function() {
                $('#card7').removeClass('flipInX');
            }, 1100);
        });

        $("#card8").click(function() {
            $('#card8').addClass('animated flipInX');
            document.getElementById("card8").src = heros[5];
            moves += 1;
            checkMatch.push(1);
            checkMatchClass.push('#card8');
            checkMatchId.push('card8');
            checkMatchLose.push(17);
            setTimeout(function() {
                $('#card8').removeClass('flipInX');
            }, 1100);
        });

        $("#card9").click(function() {
            $('#card9').addClass('animated flipInX');
            document.getElementById("card9").src = heros[6];
            moves += 1;
            checkMatch.push(1);
            checkMatchClass.push('#card9');
            checkMatchId.push('card9');
            checkMatchLose.push(19);
            setTimeout(function() {
                $('#card9').removeClass('flipInX');
            }, 1100);
        });

        $("#card10").click(function() {
            $('#card10').addClass('animated flipInX');
            document.getElementById("card10").src = heros[7];
            moves += 1;
            checkMatch.push(1);
            checkMatchClass.push('#card10');
            checkMatchId.push('card10');
            checkMatchLose.push(23);
            setTimeout(function() {
                $('#card10').removeClass('flipInX');
            }, 1100);
        });

        $("#card13").click(function() {
            $('#card13').addClass('animated flipInX');
            document.getElementById("card13").src = heros[0];
            moves += 1;
            checkMatch.push(1);
            checkMatchClass.push('#card13');
            checkMatchId.push('card13');
            checkMatchLose.push(3);
            setTimeout(function() {
                $('#card13').removeClass('flipInX');
            }, 1100);
        });

        $("#card14").click(function() {
            $('#card14').addClass('animated flipInX');
            document.getElementById("card14").src = heros[1];
            moves += 1;
            checkMatch.push(1);
            checkMatchClass.push('#card14');
            checkMatchId.push('card14');
            checkMatchLose.push(5);
            setTimeout(function() {
                $('#card14').removeClass('flipInX');
            }, 1100);
        });

        $("#card15").click(function() {
            $('#card15').addClass('animated flipInX');
            document.getElementById("card15").src = heros[2];
            moves += 1;
            checkMatch.push(1);
            checkMatchClass.push('#card15');
            checkMatchId.push('card15');
            checkMatchLose.push(7);
            setTimeout(function() {
                $('#card15').removeClass('flipInX');
            }, 1100);
        });

        $("#card16").click(function() {
            $('#card16').addClass('animated flipInX');
            document.getElementById("card16").src = heros[3];
            moves += 1;
            checkMatch.push(1);
            checkMatchClass.push('#card16');
            checkMatchId.push('card16');
            checkMatchLose.push(11);
            setTimeout(function() {
                $('#card16').removeClass('flipInX');
            }, 1100);
        });

        $("#card19").click(function() {
            $('#card19').addClass('animated flipInX');
            document.getElementById("card19").src = heros[4];
            moves += 1;
            checkMatch.push(1);
            checkMatchClass.push('#card19');
            checkMatchId.push('card19');
            checkMatchLose.push(13);
            setTimeout(function() {
                $('#card19').removeClass('flipInX');
            }, 1100);
        });

        $("#card20").click(function() {
            $('#card20').addClass('animated flipInX');
            document.getElementById("card20").src = heros[5];
            moves += 1;
            checkMatch.push(1);
            checkMatchClass.push('#card20');
            checkMatchId.push('card20');
            checkMatchLose.push(17);
            setTimeout(function() {
                $('#card20').removeClass('flipInX');
            }, 1100);
        });

        $("#card21").click(function() {
            $('#card21').addClass('animated flipInX');
            document.getElementById("card21").src = heros[6];
            moves += 1;
            checkMatch.push(1);
            checkMatchClass.push('#card21');
            checkMatchId.push('card21');
            checkMatchLose.push(19);
            setTimeout(function() {
                $('#card21').removeClass('flipInX');
            }, 1100);
        });

        $("#card22").click(function() {
            $('#card22').addClass('animated flipInX');
            document.getElementById("card22").src = heros[7];
            moves += 1;
            checkMatch.push(1);
            checkMatchClass.push('#card22');
            checkMatchId.push('card22');
            checkMatchLose.push(23);
            setTimeout(function() {
                $('#card22').removeClass('flipInX');
            }, 1100);
        });
        // function that when click on the body will set the conditional statement to decrease the stars rating
        $('#will1').click(function starsDecresing() {

            if (moves == 17) {
                $('#3star').removeClass('fa-star');
                $('#3star').addClass('fa-star-o');
                countingStars += 1;
                return;

            }

            if (moves == 34) {
                $('#2star').removeClass('fa-star');
                $('#2star').addClass('fa-star-o');
                countingStars += 1;
                return;
            }

            if (moves == 51) {
                $('#1star').removeClass('fa-star');
                $('#1star').addClass('fa-star-o');
                countingStars += 1;
                return;
            }

        });

    }
    // An conditional statement to set the deck when the screen is above 992 pixel's width.
    if (window.innerWidth > 992) {

        // function from http://jsfiddle.net/9h7rc/
        function randomNumbers(max) {
            function range(upTo) {
                var result = [];
                for (var i = 0; i < upTo; i++) result.push(i);
                return result;
            }

            function shuffle(o) {
                for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
                return o;
            }
            var myArr = shuffle(range(max));
            return function() {
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
        // array to store variables that will be in the id of the each cards
        var functions = [
            'card1',
            'card2',
            'card3',
            'card4',
            'card5',
            'card6',
            'card7',
            'card8',
            'card9',
            'card10',
            'card11',
            'card12',
            'card13',
            'card14',
            'card15',
            'card16',
            'card17',
            'card18',
            'card19',
            'card20',
            'card21',
            'card22',
            'card23',
            'card24'
        ];
        // store the variables in the img tag
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
        // functions that will trigger the cards
        $("#card1").click(function() {
            $('#card1').addClass('animated flipInX');
            document.getElementById("card1").src = heros[0];
            moves += 1;
            checkMatch.push(1);
            checkMatchClass.push('#card1');
            checkMatchId.push('card1');
            checkMatchLose.push(3);
            setTimeout(function() {
                $('#card1').removeClass('flipInX');
            }, 1100);
            return;
        });

        $("#card2").click(function() {
            $('#card2').addClass('animated flipInX');
            document.getElementById("card2").src = heros[1];
            moves += 1;
            checkMatch.push(1);
            checkMatchClass.push('#card2');
            checkMatchId.push('card2');
            checkMatchLose.push(5);
            setTimeout(function() {
                $('#card2').removeClass('flipInX');
            }, 1100);
            return;
        });

        $("#card3").click(function() {
            $('#card3').addClass('animated flipInX');
            document.getElementById("card3").src = heros[2];
            moves += 1;
            checkMatch.push(1);
            checkMatchClass.push('#card3');
            checkMatchId.push('card3');
            checkMatchLose.push(7);
            setTimeout(function() {
                $('#card3').removeClass('flipInX');
            }, 1100);
            return;
        });

        $("#card4").click(function() {
            $('#card4').addClass('animated flipInX');
            document.getElementById("card4").src = heros[3];
            moves += 1;
            checkMatch.push(1);
            checkMatchClass.push('#card4');
            checkMatchId.push('card4');
            checkMatchLose.push(11);
            setTimeout(function() {
                $('#card4').removeClass('flipInX');
            }, 1100);
            return;
        });

        $("#card5").click(function() {
            $('#card5').addClass('animated flipInX');
            document.getElementById("card5").src = heros[4];
            moves += 1;
            checkMatch.push(1);
            checkMatchClass.push('#card5');
            checkMatchId.push('card5');
            checkMatchLose.push(13);
            setTimeout(function() {
                $('#card5').removeClass('flipInX');
            }, 1100);
            return;
        });

        $("#card6").click(function() {
            $('#card6').addClass('animated flipInX');
            $('#card6').addClass('open');
            document.getElementById("card6").src = heros[5];
            moves += 1;
            checkMatch.push(1);
            checkMatchClass.push('#card6');
            checkMatchId.push('card6');
            checkMatchLose.push(17);
            setTimeout(function() {
                $('#card6').removeClass('flipInX');
            }, 1100);
            return;
        });

        $("#card7").click(function() {
            $('#card7').addClass('animated flipInX');
            document.getElementById("card7").src = heros[6];
            moves += 1;
            checkMatch.push(1);
            checkMatchClass.push('#card7');
            checkMatchId.push('card7');
            checkMatchLose.push(19);
            setTimeout(function() {
                $('#card7').removeClass('flipInX');
            }, 1100);
            return;
        });

        $("#card8").click(function() {
            $('#card8').addClass('animated flipInX');
            document.getElementById("card8").src = heros[7];
            moves += 1;
            checkMatch.push(1);
            checkMatchClass.push('#card8');
            checkMatchId.push('card8');
            checkMatchLose.push(23);
            setTimeout(function() {
                $('#card8').removeClass('flipInX');
            }, 1100);
            return;
        });

        $("#card9").click(function() {
            $('#card9').addClass('animated flipInX');
            document.getElementById("card9").src = heros[8];
            moves += 1;
            checkMatch.push(1);
            checkMatchClass.push('#card9');
            checkMatchId.push('card9');
            checkMatchLose.push(29);
            setTimeout(function() {
                $('#card9').removeClass('flipInX');
            }, 1100);
            return;
        });

        $("#card10").click(function() {
            $('#card10').addClass('animated flipInX');
            document.getElementById("card10").src = heros[9];
            moves += 1;
            checkMatch.push(1);
            checkMatchClass.push('#card10');
            checkMatchId.push('card10');
            checkMatchLose.push(31);
            setTimeout(function() {
                $('#card10').removeClass('flipInX');
            }, 1100);
            return;
        });

        $("#card11").click(function() {
            $('#card11').addClass('animated flipInX');
            document.getElementById("card11").src = heros[10];
            moves += 1;
            checkMatch.push(1);
            checkMatchClass.push('#card11');
            checkMatchId.push('card11');
            checkMatchLose.push(37);
            setTimeout(function() {
                $('#card11').removeClass('flipInX');
            }, 1100);
            return;
        });

        $("#card12").click(function() {
            $('#card12').addClass('animated flipInX');
            document.getElementById("card12").src = heros[11];
            moves += 1;
            checkMatch.push(1);
            checkMatchClass.push('#card12');
            checkMatchId.push('card12');
            checkMatchLose.push(41);
            setTimeout(function() {
                $('#card12').removeClass('flipInX');
            }, 1100);
            return;
        });

        $("#card13").click(function() {
            $('#card13').addClass('animated flipInX');
            document.getElementById("card13").src = heros[0];
            moves += 1;
            checkMatch.push(1);
            checkMatchClass.push('#card13');
            checkMatchId.push('card13');
            checkMatchLose.push(3);
            setTimeout(function() {
                $('#card13').removeClass('flipInX');
            }, 1100);
            return;
        });

        $("#card14").click(function() {
            $('#card14').addClass('animated flipInX');
            document.getElementById("card14").src = heros[1];
            moves += 1;
            checkMatch.push(1);
            checkMatchClass.push('#card14');
            checkMatchId.push('card14');
            checkMatchLose.push(5);
            setTimeout(function() {
                $('#card14').removeClass('flipInX');
            }, 1100);
            return;
        });

        $("#card15").click(function() {
            $('#card15').addClass('animated flipInX');
            document.getElementById("card15").src = heros[2];
            moves += 1;
            checkMatch.push(1);
            checkMatchClass.push('#card15');
            checkMatchId.push('card15');
            checkMatchLose.push(7);
            setTimeout(function() {
                $('#card15').removeClass('flipInX');
            }, 1100);
            return;
        });

        $("#card16").click(function() {
            $('#card16').addClass('animated flipInX');
            document.getElementById("card16").src = heros[3];
            moves += 1;
            checkMatch.push(1);
            checkMatchClass.push('#card16');
            checkMatchId.push('card16');
            checkMatchLose.push(11);
            setTimeout(function() {
                $('#card16').removeClass('flipInX');
            }, 1100);
            return;
        });

        $("#card17").click(function() {
            $('#card17').addClass('animated flipInX');
            document.getElementById("card17").src = heros[4];
            moves += 1;
            checkMatch.push(1);
            checkMatchClass.push('#card17');
            checkMatchId.push('card17');
            checkMatchLose.push(13);
            setTimeout(function() {
                $('#card17').removeClass('flipInX');
            }, 1100);
            return;
        });

        $("#card18").click(function() {
            $('#card18').addClass('animated flipInX');
            document.getElementById("card18").src = heros[5];
            moves += 1;
            checkMatch.push(1);
            checkMatchClass.push('#card18');
            checkMatchId.push('card18');
            checkMatchLose.push(17);
            setTimeout(function() {
                $('#card18').removeClass('flipInX');
            }, 1100);
            return;
        });

        $("#card19").click(function() {
            $('#card19').addClass('animated flipInX');
            document.getElementById("card19").src = heros[6];
            moves += 1;
            checkMatch.push(1);
            checkMatchClass.push('#card19');
            checkMatchId.push('card19');
            checkMatchLose.push(19);
            setTimeout(function() {
                $('#card19').removeClass('flipInX');
            }, 1100);
            return;
        });

        $("#card20").click(function() {
            $('#card20').addClass('animated flipInX');
            document.getElementById("card20").src = heros[7];
            moves += 1;
            checkMatch.push(1);
            checkMatchClass.push('#card20');
            checkMatchId.push('card20');
            checkMatchLose.push(23);
            setTimeout(function() {
                $('#card20').removeClass('flipInX');
            }, 1100);
            return;
        });

        $("#card21").click(function() {
            $('#card21').addClass('animated flipInX');
            document.getElementById("card21").src = heros[8];
            moves += 1;
            checkMatch.push(1);
            checkMatchClass.push('#card21');
            checkMatchId.push('card21');
            checkMatchLose.push(29);
            setTimeout(function() {
                $('#card21').removeClass('flipInX');
            }, 1100);
            return;
        });

        $("#card22").click(function() {
            $('#card22').addClass('animated flipInX');
            document.getElementById("card22").src = heros[9];
            moves += 1;
            checkMatch.push(1);
            checkMatchClass.push('#card22');
            checkMatchId.push('card22');
            checkMatchLose.push(31);
            setTimeout(function() {
                $('#card22').removeClass('flipInX');
            }, 1100);
            return;
        });

        $("#card23").click(function() {
            $('#card23').addClass('animated flipInX');
            document.getElementById("card23").src = heros[10];
            checkMatch.push(1);
            checkMatchClass.push('#card23');
            checkMatchId.push('card23');
            checkMatchLose.push(37);
            moves += 1;
            setTimeout(function() {
                $('#card23').removeClass('flipInX');
            }, 1100);
            return;
        });

        $("#card24").click(function() {
            $('#card24').addClass('animated flipInX');
            document.getElementById("card24").src = heros[11];
            moves += 1;
            checkMatch.push(1);
            checkMatchClass.push('#card24');
            checkMatchId.push('card24');
            checkMatchLose.push(41);
            setTimeout(function() {
                $('#card24').removeClass('flipInX');
            }, 1100);
            return;
        });
        // function that when click on the body will set the conditional statement to decrease the stars rating
        $('#will1').click(function starsDecresing() {

            if (moves == 25) {
                $('#3star').removeClass('fa-star');
                $('#3star').addClass('fa-star-o');
                countingStars += 1;
                return;

            }

            if (moves == 50) {
                $('#2star').removeClass('fa-star');
                $('#2star').addClass('fa-star-o');
                countingStars += 1;
                return;
            }

            if (moves == 75) {
                $('#1star').removeClass('fa-star');
                $('#1star').addClass('fa-star-o');
                countingStars += 1;
                return;
            }

        });

    }
    // An event function set when the scre  en changes it's sizes
    document.getElementsByTagName("BODY")[0].onresize = function() {
        resizeSmall();
    };
    // Function to show an alert message when the screen goes under 992 pixel's width an goes back above this width.
    function resizeSmall() {

        if (window.innerWidth < 992) {
            i = 1;

        } else if (window.innerWidth > 992 && i == 1) {
            alert("Reset the game for a full deck of cards");
        }
    }

    // Funtion time when the player hit the first card start the timer
    if (showTimer = 1) {
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
            checkMatchClass.splice(0, 1);
            checkMatchClass.splice(0, 1);
            checkMatchId.splice(0, 1);
            checkMatchId.splice(0, 1);
            checkMatch.splice(0, 1);
            checkMatch.splice(0, 1);
            checkMatchLose.splice(0, 1);
            checkMatchLose.splice(0, 1);
            setTimeout(function() {
                $(pos3).addClass('tada');
            }, 1000);
            setTimeout(function() {
                $(pos3).removeAttr('id');
                $(pos4).removeAttr('id');
            }, 1700);
            countToWin += 1;

            if (window.innerWidth > 992) {
                if (countToWin == 12) {
                    $("#welcomeTitle").text('Congratulations');
                    $(".modal-body").text('You won the williams memory game match in ' + timeCount + ' seconds and ' + (3 - countingStars) + ' of rating stars');
                    $('#modal').modal('show');
                    $('#contador').removeAttr('id');
                }
            }

            if (window.innerWidth < 992) {
                if (countToWin == 8) {
                    $("#welcomeTitle").text('Congratulations');
                    $(".modal-body").text('You won the williams memory game match in ' + timeCount + ' seconds and ' + (3 - countingStars) + ' of rating stars');
                    $('#modal').modal('show');
                    $('#contador').removeAttr('id');
                }
            }

            return;
        }
        if (checkMatchClass.length == 2) {

            if (checkMatchLose[0] % checkMatchLose[1] != 0) {
                checkMatch.splice(0, 1);
                checkMatch.splice(0, 1);
                checkMatchLose.splice(0, 1);
                checkMatchLose.splice(0, 1);
                setTimeout(function() {
                    $(pos4).addClass('shake');
                    $(pos3).addClass('shake');
                    checkMatchClass.splice(0, 1);
                    checkMatchClass.splice(0, 1);
                    checkMatchId.splice(0, 1);
                    checkMatchId.splice(0, 1);
                }, 1000);

                setTimeout(function() {
                    $(pos4).removeClass('shake');
                    $(pos3).removeClass('shake');
                }, 1600);

                setTimeout(function() {
                    $(pos4).addClass('flipOutX');
                    $(pos3).addClass('flipOutX');
                    document.getElementById(pos2).src = card0;
                    document.getElementById(pos1).src = card0;
                }, 1700);

                setTimeout(function() {
                    $(pos4).removeClass('flipOutX');
                    $(pos3).removeClass('flipOutX');
                }, 2000);

                return memory;

            }
        }

    });