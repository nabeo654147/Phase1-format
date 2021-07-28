const myHand = document.getElementById('myHand');
const gameStart = document.getElementById('gameStart');
const cpHand = document.getElementById('cpHand');
const log = document.getElementById('log');

let yourHand = '';
let result = '';
cpHand.textContent = `相手の手 : ${yourHand}`;
log.textContent = `結果 : ${result}`;

let num = 0;
let hands = ['グー', 'チョキ', 'パー'];
let goodHand = hands[myHand.value];

gameStart.addEventListener('click', function () {
    num = Math.floor(Math.random() * hands.length);
    yourHand = hands[num];
    goodHand = hands[myHand.value];
    cpHand.textContent = `相手の手 : ${yourHand}`;
    switch (goodHand) {
        case 'グー':
            switch (yourHand) {
                case 'グー':
                    result = '引き分け';
                    log.textContent = `結果 : ${result}`;
                    break;
                case 'チョキ':
                    result = '勝ち';
                    log.textContent = `結果 : ${result}`;
                    break;
                case 'パー':
                    result = '負け';
                    log.textContent = `結果 : ${result}`;
                    break;
            }
            break;
        case 'チョキ':
            switch (yourHand) {
                case 'グー':
                    result = '負け';
                    log.textContent = `結果 : ${result}`;
                    break;
                case 'チョキ':
                    result = '引き分け';
                    log.textContent = `結果 : ${result}`;
                    break;
                case 'パー':
                    result = '勝ち';
                    log.textContent = `結果 : ${result}`;
                    break;
            }
            break;
        case 'パー':
            switch (yourHand) {
                case 'グー':
                    result = '勝ち';
                    log.textContent = `結果 : ${result}`;
                    break;
                case 'チョキ':
                    result = '負け';
                    log.textContent = `結果 : ${result}`;
                    break;
                case 'パー':
                    result = '引き分け';
                    log.textContent = `結果 : ${result}`;
                    break;
            }
            break;
    }
});