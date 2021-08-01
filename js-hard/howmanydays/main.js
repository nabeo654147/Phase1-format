// //文字を表示するための要素を作成
// const body = document.querySelector('body');
// const birthday = document.createElement('p');
// body.appendChild(birthday);

// //21世紀獲得!!
// const birthdayTime = moment('2100-01-01');

// const year = 365 * 24 * 60 * 60; //1年を秒で表す
// const day = 24 * 60 * 60; //1日を秒で表す
// const hour = 60 * 60; //１時間を秒で表す
// const minute = 60; //１分を秒で表す


// function transform() {
//     let nowTime = moment(); //現在時刻の獲得
//     let time = birthdayTime.diff(nowTime, 'seconds'); //現在から21世紀までの時間を秒で取得

//     //秒をそれぞれの単位に変換
//     let years = Math.floor(time / year);
//     let days = Math.floor(time % year / day);
//     let hours = Math.floor(time % year % day / hour);
//     let minutes = Math.floor(time % year % day % hour / minute);
//     let seconds = time % year % day % hour % minute;

//     birthday.textContent = `ドラえもんが生まれるまであと ${years}年${days}日${hours}時間${minutes}分${seconds}秒 `;
// };
// setInterval('transform()', 1000); //１秒ごとに繰り返す


//<追加チャレンジ>
//必要な要素のid取得
const diffTime = document.getElementById('diffTime');
const searchBtn = document.getElementById('dateSearch');
const dateSet = document.getElementById('dateSet');

const year = 365 * 24 * 60 * 60; //1年を秒で表す
const day = 24 * 60 * 60; //1日を秒で表す
const hour = 60 * 60; //１時間を秒で表す
const minute = 60; //１分を秒で表す
const second = 60;

//現在と選択された日時の差を出して表示
function transform() {
    let nowTime = moment();
    let time = moment(dateSet.value).diff(nowTime, 'seconds');
    //秒をそれぞれの単位に変換
    let years = Math.floor(time / year);
    let days = Math.floor(time % year / day);
    let hours = Math.floor(time % year % day / hour);
    let minutes = Math.floor(time % year % day % hour / minute);
    let seconds = time % year % day % hour % minute;

    diffTime.textContent = `${dateSet.value} まであと ${years}年${days}日${hours}時間${minutes}分${seconds}秒 `;
};

//検索ボタンを押すとカウント開始
searchBtn.addEventListener('click', function () {
    setInterval('transform()', 1000);
});