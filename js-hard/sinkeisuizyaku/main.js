//必要な要素の取得
const panel = document.getElementById('panel');
const nextPlayer = document.getElementById('nextPlayer');
const player1Point = document.getElementById('player1Point');
const player2Point = document.getElementById('player2Point');

let cards = [];
let firstFlg = true;
let firstCard;
let player1count = 0;
let player2count = 0;
let nowPlayer = 2;

nextPlayer.textContent = `次はplayer1の番です`;
player1Point.textContent = `player1: ${player1count}`;
player2Point.textContent = `player2: ${player2count}`;

//カードを作成
function createCard() {
    let num = [];
    for (let i = 1; i <= 8; i++) {
        num.push(i);
        num.push(i);
    };

    shuffle(num);

    //div要素作成
    for (i = 0; i < num.length; i++) {
        const card = document.createElement('div');
        card.classList.add('card', 'back');
        card.index = i;
        card.number = num[i];
        card.innerHTML = '';
        card.onclick = turn;
        panel.appendChild(card);
        cards.push(card);
    };
};
createCard();

//フィッシャー イェーツのシャッフル
function shuffle(num) {
    for (let j = num.length - 1; j > 0; j--) {
        let n = Math.floor(Math.random() * j);
        let tmp = num[j];
        num[j] = num[n];
        num[n] = tmp;
    }
};

//クリックされた時の処理
function turn(e) {
    let card = e.target;

    //カードが裏向きの場合
    if (card.innerHTML === '') {
        card.classList.remove('back');
        card.innerHTML = card.number;
    } else {
        return;
    }

    //1枚目の処理
    if (firstFlg) {
        firstCard = card;
        firstFlg = false;
        //2枚目の処理
    } else {
        if (firstCard.number === card.number) {
            setTimeout(function () {
                //揃ったカードは非表示に
                card.classList.add('finish');
                firstCard.classList.add('finish');
                //揃えたplayerにポイント付与
                if (nowPlayer % 2 === 0) {
                    player1count += 1;
                    player1Point.textContent = `player1: ${player1count}`;
                } else {
                    player2count += 1;
                    player2Point.textContent = `player2: ${player2count}`;
                }
                //勝ち負けの判定
                if (player1count + player2count === 8) {
                    if (player1count > player2count) {
                        alert('player1の勝ちです！');
                    } else if (player1count < player2count) {
                        alert('player2の勝ちです！');
                    } else {
                        alert('引き分けです');
                    }
                    location.reload();
                }
            }, 500)

            //一致しない場合
        } else {
            backTimer = setTimeout(function () {
                //1枚目2枚目ともに裏返す
                card.classList.add('back');
                card.innerHTML = '';
                firstCard.classList.add('back');
                firstCard.innerHTML = '';
                firstCard = null;

                //偶数ならplayer1,奇数ならplayer2とした
                nowPlayer += 1;
                if (nowPlayer % 2 === 0) {
                    nextPlayer.textContent = `次はplayer1の番です`;
                } else {
                    nextPlayer.textContent = `次はplayer2の番です`;
                }

            }, 500);
        }
        firstFlg = true;
    }
};