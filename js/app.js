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
     /*$(document).ready(function() {
        $('#startModal').modal('show');
    });
    */

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
    $("#fresh").click(function() {
        $('#fresh').addClass('fa-spin');
        location.reload();
    });
    $("#resetGame").click(function() {
        location.reload();
    });
    
    // An if statement to set the deck when the screen is under 992 pixel's width.
    if (window.innerWidth < 2999) {

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
        // array to store variables that will be in the id of the each cards and store the variables in the img tag
        var functions1 = [];
        for(var a = 1; a < 26; a++) {
            functions1.push('card'+a)
            for(var z = 0; z < 16; z++) {
                document.getElementsByTagName("img")[z].setAttribute("id", functions1[result1[z]]);        
            }            
        }

        // functions that will trigger the cards

        $("#card12").click(function() {
            if(avoidOne == 1 & avoidOne12 == 1) {
                $('#card12').addClass('animated flipInX');
                document.getElementById("card12").src = heros[10];
                moves += 1;
                checkMatch.push(1);
                checkMatchClass.push('#card12');
                checkMatchId.push('card12');
                checkMatchLose.push(2);
                setTimeout(function() {
                    $('#card12').removeClass('flipInX');
                }, 1100);
            }
            console.log(avoidOne);
            avoidOne12 = 0;
        });

        $("#card4").click(function() {
            if(avoidOne == 1 & avoidOne4 == 1) {
                $('#card4').addClass('animated flipInX');
                document.getElementById("card4").src = heros[10];
                moves += 1;
                checkMatch.push(1);
                checkMatchClass.push('#card4');
                checkMatchId.push('card4');
                checkMatchLose.push(2);
                setTimeout(function() {
                    $('#card4').removeClass('flipInX');
                }, 1100);
            }
            console.log(avoidOne);
            avoidOne4 = 0;
        });

        $("#card5").click(function() {
            if(avoidOne == 1 & avoidOne5 == 1) {
                $('#card5').addClass('animated flipInX');
                document.getElementById("card5").src = heros[4];
                moves += 1;
                checkMatch.push(1);
                checkMatchClass.push('#card5');
                checkMatchId.push('card5');
                checkMatchLose.push(3);
                setTimeout(function() {
                    $('#card5').removeClass('flipInX');
                }, 1100);
            }
            console.log(avoidOne);
            avoidOne5 = 0;
        });

        $("#card7").click(function() {
            if (avoidOne == 1 & avoidOne7 == 1) {
                $('#card7').addClass('animated flipInX');
                document.getElementById("card7").src = heros[4];
                moves += 1;
                checkMatch.push(1);
                checkMatchClass.push('#card7');
                checkMatchId.push('card7');
                checkMatchLose.push(3);
                setTimeout(function() {
                    $('#card7').removeClass('flipInX');
                }, 1100);
            }
            console.log(avoidOne);
            avoidOne7 = 0;
        });

        $("#card8").click(function() {
            if (avoidOne == 1 & avoidOne8 == 1) {
                $('#card8').addClass('animated flipInX');
                document.getElementById("card8").src = heros[5];
                moves += 1;
                checkMatch.push(1);
                checkMatchClass.push('#card8');
                checkMatchId.push('card8');
                checkMatchLose.push(5);
                setTimeout(function() {
                    $('#card8').removeClass('flipInX');
                }, 1100);
            }
            console.log(avoidOne);
            avoidOne8 = 0;
        });

        $("#card9").click(function() {
            if (avoidOne == 1 & avoidOne9 == 1) {
                $('#card9').addClass('animated flipInX');
                document.getElementById("card9").src = heros[5];
                moves += 1;
                checkMatch.push(1);
                checkMatchClass.push('#card9');
                checkMatchId.push('card9');
                checkMatchLose.push(5);
                setTimeout(function() {
                    $('#card9').removeClass('flipInX');
                }, 1100);
            }
            console.log(avoidOne);
            avoidOne9 = 0;
        });

        $("#card10").click(function() {
            if (avoidOne ==1 & avoidOne10 == 1) {
                $('#card10').addClass('animated flipInX');
                document.getElementById("card10").src = heros[7];
                moves += 1;
                checkMatch.push(1);
                checkMatchClass.push('#card10');
                checkMatchId.push('card10');
                checkMatchLose.push(7);
                setTimeout(function() {
                    $('#card10').removeClass('flipInX');
                }, 1100);
            }
            console.log(avoidOne);
            avoidOne10 = 0;
        });

        $("#card11").click(function() {
            if (avoidOne == 1 & avoidOne11 == 1) {
                $('#card11').addClass('animated flipInX');
                document.getElementById("card11").src = heros[7];
                moves += 1;
                checkMatch.push(1);
                checkMatchClass.push('#card11');
                checkMatchId.push('card11');
                checkMatchLose.push(7);
                setTimeout(function() {
                    $('#card11').removeClass('flipInX');
                }, 1100);
            }
            console.log(avoidOne);
            avoidOne11 = 0;
        });

        $("#card1").click(function() {
            if (avoidOne ==1 & avoidOne1 == 1) {
                $('#card1').addClass('animated flipInX');
                document.getElementById("card1").src = heros[0];
                moves += 1;
                checkMatch.push(1);
                checkMatchClass.push('#card1');
                checkMatchId.push('card1');
                checkMatchLose.push(11);
                setTimeout(function() {
                    $('#card1').removeClass('flipInX');
                }, 1100);
            }
            console.log(avoidOne);
            avoidOne1 = 0;
        });

        $("#card13").click(function() {
            if (avoidOne == 1 & avoidOne13 == 1) {
                $('#card13').addClass('animated flipInX');
                document.getElementById("card13").src = heros[0];
                moves += 1;
                checkMatch.push(1);
                checkMatchClass.push('#card13');
                checkMatchId.push('card13');
                checkMatchLose.push(11);
                setTimeout(function() {
                    $('#card13').removeClass('flipInX');
                }, 1100);
            }
            console.log(avoidOne);
            avoidOne13 = 0;
        });

        $("#card14").click(function() {
            if (avoidOne == 1 & avoidOne14 == 1) {
                $('#card14').addClass('animated flipInX');
                document.getElementById("card14").src = heros[1];
                moves += 1;
                checkMatch.push(1);
                checkMatchClass.push('#card14');
                checkMatchId.push('card14');
                checkMatchLose.push(13);
                setTimeout(function() {
                    $('#card14').removeClass('flipInX');
                }, 1100);
            }
            console.log(avoidOne);
            avoidOne14 =0;
        });

        $("#card2").click(function() {
            if (avoidOne ==1 & avoidOne2 == 1) {
                $('#card2').addClass('animated flipInX');
                document.getElementById("card2").src = heros[1];
                moves += 1;
                checkMatch.push(1);
                checkMatchClass.push('#card2');
                checkMatchId.push('card2');
                checkMatchLose.push(13);
                setTimeout(function() {
                    $('#card2').removeClass('flipInX');
                }, 1100);
            }
            console.log(avoidOne);
            avoidOne2 = 0;
        });

        $("#card15").click(function() {
            if (avoidOne == 1 & avoidOne15 == 1) {
                $('#card15').addClass('animated flipInX');
                document.getElementById("card15").src = heros[2];
                moves += 1;
                checkMatch.push(1);
                checkMatchClass.push('#card15');
                checkMatchId.push('card15');
                checkMatchLose.push(17);
                setTimeout(function() {
                    $('#card15').removeClass('flipInX');
                }, 1100);
            }
            console.log(avoidOne);
            avoidOne15 = 0;
        });

        $("#card3").click(function() {
            if (avoidOne ==1 & avoidOne3 ==1) {
                $('#card3').addClass('animated flipInX');
                document.getElementById("card3").src = heros[2];
                moves += 1;
                checkMatch.push(1);
                checkMatchClass.push('#card3');
                checkMatchId.push('card3');
                checkMatchLose.push(17);
                setTimeout(function() {
                    $('#card3').removeClass('flipInX');
                }, 1100);
            }
            console.log(avoidOne);
            avoidOne3 = 0;
        });

        $("#card16").click(function() {
            if (avoidOne ==1 & avoidOne16 == 1) {
                $('#card16').addClass('animated flipInX');
                document.getElementById("card16").src = heros[3];
                moves += 1;
                checkMatch.push(1);
                checkMatchClass.push('#card16');
                checkMatchId.push('card16');
                checkMatchLose.push(19);
                setTimeout(function() {
                    $('#card16').removeClass('flipInX');                
                }, 1100);
            }
            console.log(avoidOne);
            avoidOne16 = 0;
        });

        $("#card6").click(function() {
            if (avoidOne == 1 & avoidOne6 == 1) {
                $('#card6').addClass('animated flipInX');
                document.getElementById("card6").src = heros[3];
                moves += 1;
                checkMatch.push(1);
                checkMatchClass.push('#card6');
                checkMatchId.push('card6');
                checkMatchLose.push(19);
                setTimeout(function() {
                    $('#card6').removeClass('flipInX');
                }, 1100);
            }
            console.log(avoidOne);
            avoidOne6 = 0;
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

    // Because of the bug that must be fix this will be stoped for a time, until I have time to fix
    // Because of this I will set the innerWidth much higher
    // An conditional statement to set the deck when the screen is above 992 pixel's width.
    if (window.innerWidth > 3000) {

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
            return function() {
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
        for(var y = 1; y < 26; y++) {
            functions.push('card'+y)
            for(var i = 0; i < 16; i++) {
                document.getElementsByTagName("img")[i].setAttribute("id", functions[result[i]]);
            }
            
        }
    
        // functions that will trigger the cards
        
        var elements = document.getElementsByClassName("card1");

        var myFunction = function() {
            var attribute = this.getAttribute("data-myattribute");
            alert(attribute);
        };
        
        for (var i = 0; i < elements.length; i++) {
            elements[i].addEventListener('click', myFunction, false);
        }
            
        

        /*

                   document.getElementsByClassName(intClassJq+card).click(function() {
                $(intClassJq+card).addClass('animated flipInX');
                document.getElementById(intClass+card).src = heros[0];
                moves += 1;
                checkMatch.push(1);
                checkMatchClass.push(intClassJq+card);
                checkMatchId.push(intClassJq+card);
                checkMatchLose.push(3);
                setTimeout(function() {
                    $(intClassJq+card).removeClass('flipInX');
                }, 1100);           
                return;
            });
            console.log(intClassJq+card);

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
        */
        // function that when click on the body will set the conditional statement to decrease the stars rating
        $('#will1').click(function starsDecresing() {

            if (moves == 35) {
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
    // An event function set when the screen changes it's sizes
    document.getElementsByTagName("BODY")[0].onresize = function() {
        resizeSmall();
    };
    // Function to show an alert message when the screen goes under 992 pixel's width an goes back above this width.
    function resizeSmall() {

        if (window.innerWidth < 992) {
            resizeWindow = true;

        } else if (window.innerWidth > 992 && resizeWindow == true) {
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
                    avoidOne = 1;
                    avoidOne1 = 1;
                    avoidOne2 = 1;
                    avoidOne3 = 1;
                    avoidOne4 = 1;
                    avoidOne5 = 1;
                    avoidOne6 = 1;
                    avoidOne7 = 1;
                    avoidOne8 = 1;
                    avoidOne9 = 1;
                    avoidOne10 = 1;
                    avoidOne11 = 1;
                    avoidOne12 = 1;
                    avoidOne13 = 1;
                    avoidOne14 = 1;
                    avoidOne15 = 1;
                    avoidOne16 = 1;

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