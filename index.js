const button1 = document.getElementById("roll-button");

let historyList = [];

function rollDice() {
  const rollResult = Math.floor(Math.random() * 6) + 1;
  const diceFace = getDiceFace(rollResult);

  document.getElementById("dice").innerHTML = diceFace;
  historyList.push(rollResult);
  updateRollHistory();
}

function updateRollHistory() {
  let orderOfRolls = 1;
  let historyHTML = "";

  historyList.forEach((rollResult) => {
    historyHTML += `
      <li>Roll ${orderOfRolls}: <span>${getDiceFace(rollResult)}</span></li>
    `;

    orderOfRolls += 1;
  });

  document.getElementById("roll-history").innerHTML = historyHTML;
}

function getDiceFace(rollResult) {
  switch (rollResult) {
    case 1:
      return "&#9856;";
    case 2:
      return "&#9857;";
    case 3:
      return "&#9858;";
    case 4:
      return "&#9859;";
    case 5:
      return "&#9860;";
    case 6:
      return "&#9861;";
    default:
      return "";
  }
}

button1.addEventListener("click", () => {
  document.getElementById("dice").classList.add("roll-animation");

  setTimeout(() => {
    document.getElementById("dice").classList.remove("roll-animation");
    rollDice();
  }, 1000);
});

document.getElementById("clear-history").addEventListener("click", () => {
  historyList = [];
  updateRollHistory();
});
