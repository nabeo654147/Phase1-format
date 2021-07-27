const inputTime = document.getElementById('inputTime');
const setTime = document.getElementById('setTime');
const startTimer = document.getElementById('startTimer');
const stopTimer = document.getElementById('stopTimer');
const nowTime = document.getElementById('nowTime');

let sec = 0;

function makeTime() {
    let timeH = Math.floor(sec / (60 * 60));
    let timeM = Math.floor(sec % (60 * 60) / 60);
    let timeS = sec % (60 * 60) % 60;
    let timeHMS = `残り${timeH}時間${timeM}分${timeS}秒`;
    return timeHMS;
};


setTime.addEventListener('click', function () {
    sec = inputTime.value;
    nowTime.textContent = `${makeTime(sec)}:セット完了です`;
});

const countDown = function () {
    sec -= 1;
    nowTime.textContent = makeTime();
    if (sec === 0) {
        clearInterval(timer);
        alert('終了でごわす。');
        sec = 0;
    }

};

let timer;

startTimer.addEventListener('click', function () {
    clearInterval(timer);
    timer = setInterval('countDown()', 1000);

});

stopTimer.addEventListener('click', function () {
    clearInterval(timer);
    nowTime.textContent = `${makeTime(sec)}:止めます止めます！`;
})