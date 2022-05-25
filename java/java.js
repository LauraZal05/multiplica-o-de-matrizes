var calculo = document.getElementById ("a");
calculo.addEventListener = ('click', function() {
var i, termo, matriz1 = [ ];
var i, termo, matriz2 = [ ];
var m1 = document.getElementById ("m1");
var m2 = document.getElementById ("m2");

for (i = 0; i < 4; i++) {
termo = prompt ("Digite os 4 numeros da primeira matriz(um por vez): ");
matriz1.push(termo);
console.log(matriz1[i]);
m1.innerHTML += "<li>" + matriz1[i] + "</li>";
}
for (i = 0; i < 4; i++) {
termo = prompt ("Digite os 4 numeros da segunda matriz(um por vez): ");
matriz2.push(termo);
console.log(matriz2[i]);
m2.innerHTML += "<li>" + matriz2[i] + "</li>";
}
var multi = [ ];
for (i=0; i < 4; i++ ) {
	var res = parseFloat( matriz1[i] ) * parseFloat( matriz2[i] );
	multi.push(res);
	console.log(multi[i]);
	s.innerHTML +=  "<li>" +  multi[i] + "</li>";
};
  
}, false)

