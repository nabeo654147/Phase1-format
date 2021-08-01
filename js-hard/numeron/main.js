//必要な要素の取得
const numCheck = document.getElementById('numCheck');
const remainTurn = document.getElementById('remainTurn');

let turn = 5;
remainTurn.textContent = `あと残り${turn}回です`;

const cpNum = []; //答えの数字

//3桁の異なる数字を作る
function answer() {
    cpNum[0] = Math.floor(Math.random() * 9 + 1);
    do {
        cpNum[1] = Math.floor(Math.random() * 9 + 1);
    } while (cpNum[0] === cpNum[1]);
    do {
        cpNum[2] = Math.floor(Math.random() * 9 + 1);
    } while (cpNum[0] === cpNum[2] || cpNum[1] === cpNum[2])
};
answer();

//ボタンを押して答え合わせ
numCheck.addEventListener('click', function () {
    let answerNum = document.getElementById('answerNum').value;
    let check = [Math.floor(answerNum / 100), Math.floor(answerNum / 10) % 10, Math.floor(answerNum / 1) % 10];
    if (!/^\d{3}$/.test(answerNum)) { //正規表現で3桁の数字/^\d{3}$/
        alert('3桁の数をいれてください');
        document.getElementById('answerNum').value = '';
    } else if (check[0] === check[1] || check[0] === check[2] || check[1] === check[2]) {
        alert('異なる3桁の数を入力してください');
        document.getElementById('answerNum').value = ''
    } else {
        //入力値と答えが一致しているかチェック
        let eat = 0;
        let bite = 0;
        for (let i = 0; i < check.length; i++) {
            for (j = 0; j < cpNum.length; j++) {
                if (check[i] === cpNum[j]) {
                    if (i === j) {
                        eat = eat + 1;
                    } else {
                        bite = bite + 1;
                    }
                }
            }
        };
        alert(`${eat} EAT ${bite} BITE`);
        document.getElementById('answerNum').value = '';
        turn -= 1;
        remainTurn.textContent = `あと残り${turn}回です`;
        if (turn === 0) {
            remainTurn.textContent = `ゲームオーバー 答えは${cpNum[0] * 100 + cpNum[1] * 10 + cpNum[2]}です。`
            turn = 5;
            answer();
        }
        if (eat === 3) {
            alert('大正解！！おめでとう！！');
            turn = 5;
            remainTurn.textContent = `あと残り${turn}回です`;
            answer();
        }
    }
});
