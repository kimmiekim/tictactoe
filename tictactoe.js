$(document).on('ready', function(){
  var turn = 0;
  //turn here defines the player's turn here

  var winningCombos = [[1,2,3],[4,5,6],[7,8,9],[1,5,9],[3,5,7],[1,4,7],[2,5,8],[3,6,9]];
  function checkWinner(){
    for(var i = 0; i < winningCombos.length; i++){
      var combo = winningCombos[i];

      if ($('.x').hasClass(combo[0]) && $('.x').hasClass(combo[1]) && $('.x').hasClass(combo[2])) {
             alert("X wins!")
             return
           } else if ($('.o').hasClass(combo[0]) && $('.o').hasClass(combo[1]) && $('.o').hasClass(combo[2])) {
             alert("O wins!")
             return
         };
      }
    }


  $('td').on('click', function(){
    if (turn % 2 === 0){
      $(this).html("x").addClass("x");
    }else{
      $(this).html("o").addClass("o");
    }

    checkWinner();
    //ensuring double click on the same box won't do anything
    $(this).off('click')
    turn++;
  });
});
