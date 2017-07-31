var container = $("#container");
var html = "";
html = "<table>\ "


function colonne(nb, numLg){
  var html2 = "";
  for(var i = 1; i < nb + 1; i++){    
    html2 += "<td>Ligne : " + numLg + " Colonne :" + i + "</td>\ ";    
  };  
        return html2;  
};

function ligne (nbLigne, nbColonne){
    var html2 = "";
  for(var i = 1; i < nbLigne + 1; i++){    
    html2 += "<tr>\ " + colonne(nbColonne, i) + "</tr>\ ";    
  };  
        return html2; 
}
html += ligne(5, 3);


html += "</table>";
container.html(html);
