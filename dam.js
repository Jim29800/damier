var col = 10;
var ligne = 10;

for (var i = 1; i < ligne + 1; i++) {
	if (i%2 === 0) {
		$("#tableau").append("<tr class='line' data-ligne='" + i + "'></tr>");
	}
	else{
		$("#tableau").append("<tr class='underline' data-ligne='" + i + "'></tr>");
	}
}
for (var i = 1; i < col + 1; i++) {
	if (i%2 === 0) {
		$(".line").append("<td data-col='" + i + "'></td>");
		$(".underline").append("<td class='black' data-col='" + i + "'></td>");
	}
	else{
		$(".underline").append("<td data-col='" + i + "'></td>");
		$(".line").append("<td class='black' data-col='" + i + "'></td>");
	}
}
// test recup X Y
$("td").click(function(){
  var choix2 = $(this).data("col");
  var choix1 = $(this).parent().data("ligne");
  alert("Selection : " + "Ligne :" + choix1 + " Colonne :" + choix2)
})