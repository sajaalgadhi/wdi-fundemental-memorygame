 var cards = [
{
rank: "gueen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"
},
{
rank: 'queen',
suit: 'diamonds',
cardImage: 'images/queen-of-diamonds.png'
},
{
rank: 'king',
suit: 'hearts',
cardImage: 'images/king-of-hearts.png'
},
{
rank: 'king',
suit: 'diamonds',
cardImage: 'images/king-of-diamonds.png'
}
 ];


 var cardsInPlay=[];
 var cardId;

 var checkForMatch=function(){

document.setAttribute('src','cards[cardId].cardImage');

 	 if (cardsInPlay[0] === cardsInPlay[1]) {
       alert("You found a match!");
}      else {
       alert("Sorry, try again.");
}

 }


 var flipCard=function(){

this.getAttribute('data-id');

console.log("user flipped"+cards[cardId].rank);
cardsInPlay.push(cards[cardId].rank);

 console.log(cards[cardId].suit);
 cardsInPlay.push(cards[cardId].suit);

 console.log(cards[cardId].cardImage);
 cardsInPlay.push(cards[cardId].cardImage);




checkForMatch(0);
checkForMatch(2);


 
 };
 


var createBoard=function(){


	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		
		cardElement.addEventListener('click',flipCard);
		document.getElementById('game-board').appendChild(cardElement);

    
}
};
createBoard();



