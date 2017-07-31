var html = "";
var damier = $("#damier");

//Version 1
// function colonne1(nbColonne, b){
//   var colonne = "";
//   for(var i = 0; i < nbColonne / 2; i++){
//   colonne += "<div class='col-xs-1 black'></div>";
//   colonne += "<div class='col-xs-1 white'></div>";
// }
// return colonne;
// }
// function colonne2(nbColonne){
//   var colonne = "";
//   for(var i = 0; i < nbColonne / 2; i++){
//     colonne += "<div class='col-xs-1 white'></div>";
//     colonne += "<div class='col-xs-1 black'></div>";
//   }
//   return colonne;
// }
// function ligne(nbLigne, nbCol ){
//   var ligne ="";
//   for(var i = 0; i < nbLigne / 2; i++){
//     ligne += "<section class='row'>" + colonne1(nbCol) + "</section>";
//     ligne += "<section class='row'>" + colonne2(nbCol) + "</section>";
//   }
//   return ligne;
// }


// html = ligne(10,10);
// console.log(html);

// damier.html(html);



//version 2
function colonne1(nbColonne, b){
  var colonne = "";
  var fin = parseInt(nbColonne)  +1 

  if (b === "white"){
    for(var i = 1  ; i < nbColonne +1 ; i++){
     if (i%2 == 0) {
      //pair
      colonne += "<div class='col-xs-1 black value='"+ i +"'></div>";
    }
    else{
     //impair
     colonne += "<div class='col-xs-1 white value='"+ i +"'></div>";
   }
 }
}

  if (b === "black"){
    for(var i = 1  ; i < nbColonne +1 ; i++){
     if (i%2 == 0) {
      //pair
      colonne += "<div class='col-xs-1 white value='"+ i +"'></div>";
    }
    else{
     //impair
     colonne += "<div class='col-xs-1 black value='"+ i +"'></div>";
   }
 }
}

return colonne;
}
//version 2
function ligne(nbLigne, nbCol ){
  var ligne ="";
  for(var i = 1  ; i < nbLigne +1; i++){
    if (i%2 == 0) {
      //pair
      ligne += "<section class='row' value='"+ i +"'>" + colonne1(nbCol, "white") + "</section>";

    }
    else{
     //impair
     ligne += "<section class='row' value='"+ i +"'>" + colonne1(nbCol, "black") + "</section>";
   }
 }
 return ligne;
}
html = ligne(5,5);
console.log(html);

damier.html(html);