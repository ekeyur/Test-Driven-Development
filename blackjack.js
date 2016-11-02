function getCardImageUrl(card){
  var name = '';

  if      (card.point === 1) {name = 'ace';}
  else if (card.point === 11) {name ='jack';}
  else if (card.point === 12) {name ='queen';}
  else if (card.point === 13) {name ='king';}
  else {name = card.point;}

  return 'images/'+name+'_of_'+card.suit+'.png';

}


function calculatePoints(cards){
  var sum = 0;
  cards.sort(function(b,a){
    return a.point - b.point;
  });

  for (var i =0; i<cards.length;i++){
      if(cards[i].point === 1) {
        if((sum + 11) > 21) {
          sum += 1;
        }
        else {
          sum += 11;
        }
      }
      else if (cards[i].point > 1 && cards[i].point < 10){
        sum += cards[i].point;
      }

      else {
        sum += 10;
      }
}
return sum;
}


function newDeck(){
var suit = ['spades','hearts','clubs','diamonds'];
var card = ['1','2','3','4','5','6','7','8','9','10','11','12','13'];
var deck = [];
for (var j=0;j<card.length;j++){
  for (var i =0;i<suit.length;i++){
    deck.push({'suit':suit[i],'point':card[j]});
  }
}
return deck;
}
