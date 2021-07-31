//<フローチャート>
// スタートボタンでスロットを回す
// それぞれストップボタンで数字を止める
//一度押したボタンは全部押すまでもう押せない
// 三つとも揃った時だけ「揃いました」
// 揃わなかったら「再挑戦」

let timers = []; //スロット
let results = []; //止めたスロットの数字
let stopCount = 0; //スロットを止めるためのカウント(３つ貯まると止まるようにする。)
let interval = 50; //スロットの速さ

//スロットの数字を入れる要素のid取得
const nowTime1 = document.getElementById('nowTime1');
const nowTime2 = document.getElementById('nowTime2');
const nowTime3 = document.getElementById('nowTime3');

//スロットの初期値
nowTime1.textContent = 0;
nowTime2.textContent = 0;
nowTime3.textContent = 0;

const slots = [nowTime1, nowTime2, nowTime3];

//スロットを回す処理
function runSlot(num) {
    timers[num] = setInterval(function () {
        if (slots[num].textContent < 9) {
            slots[num].textContent++;
        } else {
            slots[num].textContent = 0;
        };
    }, interval);
};

//スタートボタンのid取得
const startTimer = document.getElementById('startTimer');

//スタートボタンでスロットを回す
startTimer.addEventListener('click', function () {
    runSlot(0);
    runSlot(1);
    runSlot(2);
    startTimer.disabled = true;

    //2回目以降のストップボタンを有効化する
    setTime1.disabled = false;
    setTime2.disabled = false;
    setTime3.disabled = false;
});

//ストップボタンのidを取得
const setTime1 = document.getElementById('setTime1');
const setTime2 = document.getElementById('setTime2');
const setTime3 = document.getElementById('setTime3');

const stopTimes = [setTime1, setTime2, setTime3];

//スロットを止める処理
function stopSlot(num) {
    clearInterval(timers[num]);
    results[num] = slots[num].textContent;
    stopCount++;
    if (stopCount === 3) {
        startTimer.disabled = false;
        checkResult();
    };
};

//ストップボタンを押した後ボタン無効にする処理
function stopBtn(num) {
    stopTimes[num].addEventListener('click', function () {
        stopSlot(num);
        stopTimes[num].disabled = true;
    });
};

//それぞれのストップボタン
stopBtn(0);
stopBtn(1);
stopBtn(2);

//スロットの結果を判定
function checkResult() {
    if (results[0] === results[1] && results[0] === results[2]) {
        alert('おめでとう！！');
        startSlot();
        //interval = interval * 0.5; //クリアしたらスロットの回転が速くなる
    } else {
        alert('残念。もう一回挑戦してみよう！');
        startSlot();
    }
};

//スロットの値を初期値に戻す
function startSlot() {
    timers = [];
    results = [];
    stopCount = 0;
    nowTime1.textContent = 0;
    nowTime2.textContent = 0;
    nowTime3.textContent = 0;
};
