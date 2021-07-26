// const startBtn = document.getElementById('diceBtn');
// const body = document.querySelector('body');
// const dice = document.createElement('img');
// dice.style.width = '100px';
// dice.style.height = ' 100px';

// let diceNum = './img/saikoro1.png';
// dice.setAttribute('src', diceNum);
// body.appendChild(dice);

// let timer;

// startBtn.addEventListener('click', function () {
//     clearInterval(timer);
//     timer = setInterval('random()', 10);

//     setTimeout(function () {
//         clearInterval(timer);
//     }, 2000);
// });

// const random = function () {
//     diceNum = `./img/saikoro${Math.floor(Math.random() * 6 + 1)}.png`;
//     dice.setAttribute('src', diceNum);
// };

// 追加チャレンジ
// const player1Btn = doucument.getElementById('player1Btn');
// const player2Btn = doucument.getElementById('player2Btn');
// const setPlayer1dice = document.getElementById('setPlayer1dice');
// const setPlayer2dice = document.getElementById('setPlayer2dice');
// const result = document.getElementById('result');

// let player1Timer;
// let player2Timer;
// let player1Num = 1;
// let player2Num = 1;
// let turn = 2;

// let player1Dice = `/img/saikoro${player1Num}.png`;
// setPlayer1dice.setAttribute('src', player1Dice);
// let player2Dice = `/img/saikoro${player2Num}.png`;
// setPlayer2dice.setAttribute('src', player2Dice);

// const createPlayerDice = (player) => {
//     const playerNum = Math.floor(Math.random() * 6 + 1);
//     if (player === 1) {
//         player1Num = playerNum;
//     } else if (player === 2) {
//         plsyer2Num = playerNum;
//     }
//     const playerDice = `/img/saikoro${playerNum}.png`;
//     return playerDice;
// };

// const playerRandom = function (player) {
//     playerDice = createPlayerDice(player);
//     if (player === 1) {
//         setPlayer1dice.setAttribute("src", playerDice);
//     } else if (player === 2) {
//         setPlayer2dice.setAttribute('src', playerDice);
//     }
// };

// const player1 = 1;
// const player2 = 2;
// player1Btn.addEventListener('click', function () {
//     clearInterval(player1Timer);
//     player1Timer = setInterval(() => playerRandom(player1), 20);
//     player1Btn.disabled = true;
//     asyncFunc(player1);
// });

// player2Btn.addEventListener('click', function () {
//     clearInterval(player2Timer);
//     player2Timer = setInterval(() => playerRandom(player2), 20);
//     player2Btn.disabled = true;
//     asyncFunc(player2);
// });

// const check = () => {
//     if (turn !== 0) {
//         return;
//     }
//     if (player1Num > player2Num) {
//         result.textContent = "player1の勝利";
//     } else if (player1Num === player2Num) {
//         result.textContent = "引き分け";
//     } else {
//         result.textContent = "player2の勝利";
//     }
//     player1Btn.disabled = false;
//     player2Btn.disabled = false;
//     turn = 2;
// };

// const asyncFunc = async (player) => {
//     const random = async () => {
//         await new Promise((resolve) => {
//             result.textContent = "???";
//             setTimeout(() => {
//                 resolve();
//                 if (player === 1) {
//                     clearInterval(player1Timer);
//                 } else if (player === 2) {
//                     clearInterval(player2Timer);
//                 }
//             }, 2000);
//         });
//     };
//     await random();
//     turn -= 1;
//     check();
// };


const player1Btn = document.getElementById("player1Btn");
const player2Btn = document.getElementById("player2Btn");
const setPlayer1dice = document.getElementById("setPlayer1dice");
const setPlayer2dice = document.getElementById("setPlayer2dice");
const result = document.getElementById("result");

let player1Timer;
let player2Timer;
let player1Num = 1;
let player2Num = 5;
let turn = 2;

let player1Dice = `./img/saikoro${player1Num}.png`;
setPlayer1dice.setAttribute("src", player1Dice);
let player2Dice = `./img/saikoro${player2Num}.png`;
setPlayer2dice.setAttribute("src", player2Dice);
//プレイヤーのダイスの番号を決めて画像のパスを返す
const createPlayerDice = (player) => {
    const playerNum = Math.floor(Math.random() * 6 + 1);
    if (player === 1) {
        player1Num = playerNum;
    } else if (player === 2) {
        player2Num = playerNum;
    }
    const playerDice = `./img/saikoro${playerNum}.png`;
    return playerDice;
};
// サイコロを振る
const playerRandom = function (player) {
    playerDice = createPlayerDice(player);
    if (player === 1) {
        setPlayer1dice.setAttribute("src", playerDice);
    } else if (player === 2) {
        setPlayer2dice.setAttribute("src", playerDice);
    }
};
// ボタン
const player1 = 1;
const player2 = 2;
player1Btn.addEventListener("click", function () {
    clearInterval(player1Timer);
    player1Timer = setInterval(() => playerRandom(player1), 10);
    player1Btn.disabled = true;
    asyncFunc(player1);
});
player2Btn.addEventListener("click", function () {
    clearInterval(player2Timer);
    player2Timer = setInterval(() => playerRandom(player2), 50);
    player2Btn.disabled = true;
    asyncFunc(player2);
});
const check = () => {
    if (turn !== 0) {
        return;
    }
    if (player1Num > player2Num) {
        result.textContent = "player1の勝利";
    } else if (player1Num === player2Num) {
        result.textContent = "引き分け";
    } else {
        result.textContent = "player2の勝利";
    } player1Btn.disabled = false;
    player2Btn.disabled = false;
    turn = 2;
};
const asyncFunc = async (player) => {
    const random = async () => {
        await new Promise((resolve) => {
            result.textContent = "???";
            setTimeout(() => {
                resolve();
                if (player === 1) {
                    clearInterval(player1Timer);
                } else if (player === 2) {
                    clearInterval(player2Timer);
                }
            }, 2000);
        });
    };
    await random();
    turn -= 1;
    check();
};
