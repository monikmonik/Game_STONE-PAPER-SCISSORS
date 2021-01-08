const itemsToPik = [...document.querySelectorAll(".select img")];
const resultArea = document.querySelector('[data-summary="who-win"]');

const game = {
  playerItem: "",
  aiItem: "",
};

const gameSummary = {
  numbers: 0,
  wins: 0,
  losses: 0,
  draws: 0,
};

const playerChoice = (e) => {
  document.querySelector('[data-summary="ai-choice"]').src = '';
  game.playerItem = e.target.dataset.option;
  document.querySelector('[data-summary="your-choice"]').src = e.target.src;
  console.log(game.playerItem);
};

const aiChoice = () => {
  const index = Math.floor(Math.random() * itemsToPik.length);
  const aiItem = itemsToPik[index].dataset.option;
  document.querySelector('[data-summary="ai-choice"]').src =
    itemsToPik[index].src;
  return aiItem;
};

const checkResult = () => {
  console.log(game.playerItem);
  if (game.playerItem === game.aiItem) {
    resultArea.textContent = ' Remis ';
    gameSummary.draws++;
  } else if (game.playerItem === 'paper' && game.aiItem === 'stone' || game.playerItem === 'stone' && game.aiItem === 'scissors' || game.playerItem === 'scissors' && game.aiItem === 'paper') {
    resultArea.textContent = ' Wygrana ';
    gameSummary.wins++;
  } else {
    resultArea.textContent = ' Przegrana ';
    gameSummary.losses++;
  }

};

//Funkcja sterująca
const startGame = () => {
  if (!game.playerItem) return alert('Najpierw dokonaj wyboru');
  game.aiItem = aiChoice();
  checkResult();
  document.querySelector('.numbers span').textContent = ++gameSummary.numbers;
  document.querySelector('.wins span').textContent = gameSummary.wins;
  document.querySelector('.losses span').textContent = gameSummary.losses;
  document.querySelector('.draws span').textContent = gameSummary.draws;
};

itemsToPik.forEach((item) => item.addEventListener("click", playerChoice));
document.querySelector(".choice button").addEventListener("click", startGame);