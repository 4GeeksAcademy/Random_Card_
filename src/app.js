import "bootstrap";
import "./style.css";

const cardValue = document.getElementById("numberCard"); //Enlazamiento del valor númerico arriba/izquierda.
const symbolValue = document.getElementById("symbolCard"); //Enlazamiento del simbolo usado en el centro.
const cardValue2 = document.getElementById("numberCard2"); //Enlazamiento del valor númerico abajo/derecha.
const buttonReset = document.getElementById("reset"); //Enlazamiento del "botón reset" para generar una nueva carta.

let numberValue = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
]; //As, {Numerico}, Jota, Queen, King. Valores de los costados de carta

let symbolType = ["♥", "♦", "♣", "♠"]; //Corazones, Diamantes, Tréboles, Picas. Symbolo en el centro de la carta

function cardThrow() {
  const randomCard = Math.floor(Math.random() * numberValue.length); //Ecuaciones usadas para elegir un valor aleatorio
  const randomSymbol = Math.floor(Math.random() * symbolType.length); //de "numberValue" y "symbolType".

  const currentCard = numberValue[randomCard]; //Valores escogidos de la ecuación anterior,
  const currentSymbol = symbolType[randomSymbol]; //se convierten en variables para usarlas posteriormente.
  const currentCard2 = numberValue[randomCard];

  cardValue.textContent = currentCard; //Se agrega el valor obtenido anteriormente el los <tag> enlazados
  symbolValue.textContent = currentSymbol; //a los ID mencionados arriba del todo ("cardValue", "symbolValue", "cardValue2").
  cardValue2.textContent = currentCard2;

  if (currentSymbol === symbolType[0]) {
    symbolValue.style.color = "red";
    cardValue.style.color = "red";
    cardValue2.style.color = "red";
  } else if (currentSymbol === symbolType[1]) {
    symbolValue.style.color = "red";
    cardValue.style.color = "red"; //Condicional para que si toca Corazones (symbolType[0]) o Picas (symbolType[1])
    cardValue2.style.color = "red"; //los textos agregados se vuelven rojos y si es diferente a los mencionados sean negro.
  } else {
    symbolValue.style.color = "black";
    cardValue.style.color = "black";
    cardValue2.style.color = "black";
  }
}

window.onload = cardThrow; //La funcion "cardThrow" se activa al iniciar la web.

buttonReset.addEventListener("click", cardThrow);
//El <Button> enlazado por un ID arriba del todo
//ahora activa la funcion "cardThrow".
