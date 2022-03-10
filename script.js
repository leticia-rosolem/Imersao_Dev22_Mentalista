var numeroSecreto = parseInt(Math.random() * 11);
let tentativa = 3;

function Chutar() {
  debugger;
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);

  while (tentativa > 0) {
    if (chute == numeroSecreto) {
      console.log("Correto! 50 pontos para Grifinória!");
      elementoResultado.innerHTML = "Correto! 50 pontos para Grifinória!";
      break;
    } else if (chute > 10 || chute < 0) {
      console.log("Digite um número de 0 a 10");
      elementoResultado.innerHTML = "Digite um número de 0 a 10";
      tentativa--;
      break;
    } else if (numeroSecreto < chute) {
      console.log("Quase lá, o número é menor!");
      elementoResultado.innerHTML = "Quase lá, o número é menor!";
      tentativa--;
      break;
    } else if (numeroSecreto > chute) {
      console.log("Quase lá, o número é maior!");
      elementoResultado.innerHTML = "Quase lá, o número é maior!";
      tentativa--;
      break;
    } else {
      console.log("Você Errou, restam " + (tentativa - 1) + " tentativas");
      elementoResultado.innerHTML =
        "Você Errou, restam " + (tentativa - 1) + " tentativas";
      tentativa--;
      break;
    }
  }
  if (tentativa < 1) {
    elementoResultado.innerHTML = "Suas tentativas acabaram! Estupefaço.";
  }
}

