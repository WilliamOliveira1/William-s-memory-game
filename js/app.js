var functions = ['card1', 'card2', 'card3', 'card4', 'card5', 'card6', 'card7', 'card8', 'card9', 'card10', 'card11', 'card12', 'card13', 'card14', 'card15', 'card16', 'card17', 'card18', 'card19', 'card20', 'card21', 'card22', 'card23', 'card24'];

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
// function from http://jsfiddle.net/9h7rc/
    function randomNumbers(max) {
        function range(upTo) {
            var result = [];
            for(var i = 0; i < upTo; i++) result.push(i);
            return result;
        }
        function shuffle(o){ //v1.0
            for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
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
while(rand != null) {
    result.push(rand);
    rand = randoms();
}

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

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, x;

  while (0 !== currentIndex) {

    x = Math.floor(Math.random() * currentIndex);
    
      currentIndex -= 1;

    temporaryValue = array[currentIndex];
      
    array[currentIndex] = array[x];
      
    array[x] = temporaryValue;
      
  }

  return array;
}

heros = shuffle(heros);

$( "#fresh" ).click(function() {
  $('#fresh').addClass('fa-spin');
     location.reload();
});

if (window.innerWidth < 992) {

    $("#5").remove();
    $("#6").remove();
    $("#11").remove();
    $("#12").remove();
    $("#17").remove();
    $("#18").remove();
    $("#23").remove();
    $("#24").remove();

    function randomNumbers(max) {
        function range(upTo) {
            var result = [];
            for(var i = 0; i < upTo; i++) result.push(i);
            return result;
        }
        function shuffle(o){ //v1.0
            for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
            return o;
        }
        var myArr = shuffle(range(max));
        return function() {
            return myArr.shift();
        };
    }

var randoms = randomNumbers(16),
    rand = randoms(),
    result = [];
while(rand != null) {
    result.push(rand);
    rand = randoms();
}
    
   $("#card1" ).click(function() {
        $('#card1').addClass('animated zoomIn');
        document.getElementById("card1").src = heros[0];
});
   
    $("#card2" ).click(function() {
        $('#card2').addClass('animated zoomIn');
        document.getElementById("card2").src = heros[1];
});
 
    $("#card3" ).click(function() {
        $('#card3').addClass('animated zoomIn');
        document.getElementById("card3").src = heros[2];
});
   
    $("#card4" ).click(function() {
        $('#card4').addClass('animated zoomIn');
        document.getElementById("card4").src = heros[3];
});
 
    $("#card7" ).click(function() {
        $('#card7').addClass('animated zoomIn');
        document.getElementById("card7").src = heros[4];
});
 
    $("#card8" ).click(function() {
        $('#card8').addClass('animated zoomIn');
        document.getElementById("card8").src = heros[5];
});
 
    $("#card9" ).click(function() {
        $('#card9').addClass('animated zoomIn');
        document.getElementById("card9").src = heros[6];
});
 
    $("#card10" ).click(function() {
        $('#card10').addClass('animated zoomIn');
        document.getElementById("card10").src = heros[7];
});
 
    $("#card13" ).click(function() {
        $('#card13').addClass('animated zoomIn');
        document.getElementById("card13").src = heros[0];
});

    $("#card14" ).click(function() {
        $('#card14').addClass('animated zoomIn');
        document.getElementById("card14").src = heros[1];
});

    $("#card15" ).click(function() {
        $('#card15').addClass('animated zoomIn');
        document.getElementById("card15").src = heros[2];
});
 
    $("#card16" ).click(function() {
        $('#card16').addClass('animated zoomIn');
        document.getElementById("card16").src = heros[3];
});
   
    $("#card19" ).click(function() {
        $('#card19').addClass('animated zoomIn');
        document.getElementById("card19").src = heros[4];
});
 
    $("#card20" ).click(function() {
        $('#card20').addClass('animated zoomIn');
        document.getElementById("card20").src = heros[5];
});
 
    $("#card21" ).click(function() {
        $('#card21').addClass('animated zoomIn');
        document.getElementById("card21").src = heros[6];
});
   
    $("#card22" ).click(function() {
        $('#card22').addClass('animated zoomIn');
        document.getElementById("card22").src = heros[7];
});
   
    
}

if (window.innerWidth > 992) {

    
    $("#card1" ).click(function() {
        $('#card1').addClass('animated flipInX');
        document.getElementById("card1").src = heros[0];
});
   
    $("#card2" ).click(function() {
        $('#card2').addClass('animated flipInX');
        document.getElementById("card2").src = heros[1];
});
 
    $("#card3" ).click(function() {
        $('#card3').addClass('animated flipInX');
        document.getElementById("card3").src = heros[2];
});
   
    $("#card4" ).click(function() {
        $('#card4').addClass('animated flipInX');
        document.getElementById("card4").src = heros[3];
});
 
    $("#card5" ).click(function() {
        $('#card5').addClass('animated flipInX');
        document.getElementById("card5").src = heros[4];
});    
    
    $("#card6" ).click(function() {
        $('#card6').addClass('animated flipInX');
        document.getElementById("card6").src = heros[5];
});
   
    $("#card7" ).click(function() {
        $('#card7').addClass('animated flipInX');
        document.getElementById("card7").src = heros[6];
});
   
    $("#card8" ).click(function() {
        $('#card8').addClass('animated flipInX');
        document.getElementById("card8").src = heros[7];
});
   
    $("#card9" ).click(function() {
        $('#card9').addClass('animated flipInX');
        document.getElementById("card9").src = heros[8];
});
   
    $("#card10" ).click(function() {
        $('#card10').addClass('animated flipInX');
        document.getElementById("card10").src = heros[9];
});
   
    $("#card11" ).click(function() {
        $('#card11').addClass('animated flipInX');
        document.getElementById("card11").src = heros[10];
});
   
    $("#card12" ).click(function() {
        $('#card12').addClass('animated flipInX');
        document.getElementById("card12").src = heros[11];
});
   
    $("#card13" ).click(function() {
        $('#card13').addClass('animated flipInX');
        document.getElementById("card13").src = heros[0];
});
   
    $("#card14" ).click(function() {
        $('#card14').addClass('animated flipInX');
        document.getElementById("card14").src = heros[1];
});
   
    $("#card15" ).click(function() {
        $('#card15').addClass('animated flipInX');
        document.getElementById("card15").src = heros[2];
});
   
    $("#card16" ).click(function() {
        $('#card16').addClass('animated flipInX');
        document.getElementById("card16").src = heros[3];
});
   
     $("#card17" ).click(function() {
        $('#card17').addClass('animated flipInX');
        document.getElementById("card17").src = heros[4];
});
   
    $("#card18" ).click(function() {
        $('#card18').addClass('animated flipInX');
        document.getElementById("card18").src = heros[5];
});
   
    $("#card19" ).click(function() {
        $('#card19').addClass('animated flipInX');
        document.getElementById("card19").src = heros[6];
});
   
    $("#card20" ).click(function() {
        $('#card20').addClass('animated flipInX');
        document.getElementById("card20").src = heros[7];
});
  
    $("#card21" ).click(function() {
        $('#card21').addClass('animated flipInX');
        document.getElementById("card21").src = heros[8];
});
   
    $("#card22" ).click(function() {
        $('#card22').addClass('animated flipInX');
        document.getElementById("card22").src = heros[9];
});
   
    $("#card23" ).click(function() {
        $('#card23').addClass('animated flipInX');
        document.getElementById("card23").src = heros[10];
});
   
    $("#card24" ).click(function() {
        $('#card24').addClass('animated flipInX');
        document.getElementById("card24").src = heros[11];
});
   
}

document.getElementsByTagName("BODY")[0].onresize = function () {
    resizeSmall()
};

function resizeSmall() {

    if (window.innerWidth < 992) {
        $("#5").remove();
        $("#6").remove();
        $("#11").remove();
        $("#12").remove();
        $("#17").remove();
        $("#18").remove();
        $("#23").remove();
        $("#24").remove();

        i = 1;

    } else if (window.innerWidth > 992 && i == 1) {
        alert("Reset the game for a full deck of cards")
    }
}

/*
Verificar esse codigo para embaralhar cartas funciona
// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var arr = [2, 11, 37, 42];
arr = shuffle(arr);
console.log(arr);

anotar link e pessoa fotos controles
https://www.behance.net/gallery/17027353/CONTROLLERS

function updateCards() {
    deck = shuffle(deck);
    var index = 0;
    $.each($(".card i"), function(){
      $(this).attr("class", "fa " + deck[index]);
      index++;
    });
    resetTimer();
};

function setupDeck() {
	cards = shuffle(cards);

	for(let i = 0; i < 16; i++) {
		// Create the card
		let card = document.createElement('ls');
		card.classList.add('card');
		card.setAttribute('id', i);
		card.setAttribute('name', cards[i]);
		card.setAttribute('onclick', 'cardTapped(this)');

		// Create the item
		let item = document.createElement('i');
		item.classList.add('fa');
		item.classList.add(cards[i]);

		card.appendChild(item); // Append item to card
		document.getElementById('deck').appendChild(card); $(element).attr('id', 'newID');
	}
}

 */
