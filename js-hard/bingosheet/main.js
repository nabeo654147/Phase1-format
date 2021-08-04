const view = document.getElementById('view');
const hitNum = document.getElementById('hitNum');

//6x5のますを作る
function sheet() {
    for (let row = 0; row < 6; row++) {
        const tr = document.createElement('tr');
        for (let col = 0; col < 5; col++) {
            const td = document.createElement('td');
            td.textContent = columns[col][row];
            td.setAttribute('id', columns[col][row]);
            tr.appendChild(td);
        }
        view.appendChild(tr);
    }
};

function createNum(col) {
    //行に合わせて数字を作成 col=何行目か 1〜75までの数字を配列に格納
    const num = [];
    for (let i = 0; i < 15; i++) {
        num[i] = i + 1 + 15 * col;
    }

    const column = [];
    for (let i = 0; i < 6; i++) { //numからランダムに数字を一つずつとってくる
        column[i] = num.splice(Math.floor(Math.random() * num.length), 1);
    }
    return column;
};
//数字を枡へ
function set() {
    const columns = [];
    for (let j = 0; j < 5; j++) {
        columns[j] = createNum(j);
    }
    columns[2][3] = 'free';
    columns[0][0] = 'B';
    columns[1][0] = 'I';
    columns[2][0] = 'N';
    columns[3][0] = 'G';
    columns[4][0] = 'O';
    return columns;
};

//表示する
const columns = set();
sheet(columns);

//追加問題
const allNum = columns.flat();
const numIndex = allNum.flat();
document.getElementById('free').setAttribute('class', 'hit-num');

//セットボタンでリセット
hitNum.addEventListener('click', () => {
    location.reload();
});

//追加で必要な要素取得
const body = document.querySelector('body');
const startBtn = document.createElement('button');
let open = document.createElement('h2');
let historyBox = document.createElement('div');
startBtn.textContent = 'スタート';
body.appendChild(startBtn);
body.appendChild(open);
body.appendChild(historyBox);

let timer;
let history = [];
let count = 24;

//1~75までの抽選番号を作る
max = 75;
roulette = [];
for (i = 1; i <= max; i++) {
    roulette.push(i);
}

//75回まわしたら終了
startBtn.addEventListener('click', function () {
    if (roulette.length === 0) {
        alert('終了！');
        clearInterval(timer);
        location.reload();
        return;
    }
    //スタートボタンでルーレットを回す
    if (startBtn.textContent === 'スタート') {
        startBtn.textContent = 'ストップ';
        timer = setInterval(() => {
            let target = Math.floor(Math.random() * roulette.length);
            open.textContent = roulette[target];
        }, 100)
        //ストップボタンを押した時
    } else {
        startBtn.textContent = 'スタート';
        clearInterval(timer);

        let target = roulette.indexOf(Number(open.textContent)); //抽選番号の配列は番号順なので止めた番号を取得
        roulette.splice(target, 1); //一度出た数字は取り除く
        history.push(open.textContent);
        historyBox.textContent = history;

        let check = Number(open.textContent); //文字列を数値に直していなかったので２時間くらい悩んだ。気をつけて！
        if (numIndex.includes(check)) {  //inculudes()は多次元配列には効かない
            document.getElementById(check).setAttribute('class', 'hit-num'); //出た番号があれば色を変える
            count -= 1;
            if (count === 0) {
                alert('おめでとう！コンプリート!!');
                location.reload();
            }
        }
    }
});



