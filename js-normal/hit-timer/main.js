const confirmTime = document.getElementById('confirmTime');
const startTimer = document.getElementById('startTimer');
//const now__time = document.getElementById('now__time');

let startTime;
let elapsedTime = 0;

confirmTime.addEventListener('click', function () {
    if (elapsedTime === 20) {
        alert('正解です！！')
    } else if (elapsedTime < 20) {
        alert(`まだ${elapsedTime}秒、、、再スタートだ`);
    } else {
        alert(`もう${elapsedTime}秒だ、、再挑戦だ。`);
    }
    clearInterval(startTime);
    elapsedTime = 0;
});

startTimer.addEventListener('click', function () {
    clearInterval(startTime);
    timer = setInterval('countUp()', 1000);
});

const countUp = function () {
    elapsedTime += 1;
    if (elapsedTime === 40) {
        clearInterval(startTime);
        alert('時間切れでやんすー');
        elapsedTime = 0;
    }

};
