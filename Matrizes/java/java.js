var calculo = document.getElementById("a");
calculo.addEventListener('click', function () {
	// esse código de botão eu copiei, porque o que eu estava fezendo não tava funcionando
	var i, termo, mat1 = [];
	var i, termo, mat2 = [];
	var m1 = document.getElementById("m1");
	var m2 = document.getElementById("m2");
	//aqui eu to fazedno um link do id com o java, para ler o valores depois 

	for (i = 0; i < 4; i++) {
		termo = prompt("Digite os 4 numeros da primeira matriz(um por vez): ");
		mat1.push(termo);
		m1.innerHTML += "<li>" + mat1[i] + "</li>";
		//esse innerHTML serve para editar o id lá no html
	}
	for (i = 0; i < 4; i++) {
		termo = prompt("Digite os 4 numeros da segunda matriz(um por vez): ");
		mat2.push(termo);
		m2.innerHTML += "<li>" + mat2[i] + "</li>";
	}
	var multi = [];
	for (i = 0; i < 4; i++) {
		var res = parseFloat(mat1[i]) * parseFloat(mat2[i]);
		multi.push(res);
		console.log(multi[i]);
		m.innerHTML += "<li>" + multi[i] + "</li>";

	}

}, false)

//aqui fecha a função do botão, para que quando você clicar no botão a função acontecer, e se não clicar nada acontece

//usei uma lista ordenada porque a tag table não funcionava, então achei melhor fazer assim, não sei se tem problema
