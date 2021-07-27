const pushBtn = document.getElementById('pushBtn');
const seasonNum = document.getElementById('seasonNum');
const viewImg = document.getElementById('viewImg');
const skipBtn = document.getElementById('skipBtn');

const spring = { img: '/img/slide1.png', text: '春へ' };
const summer = { img: '/img/slide2.png', text: '夏へ' };
const autum = { img: '/img/slide3.png', text: '秋へ' };
const winter = { img: '/img/slide4.png', text: '冬へ' };

const season = [spring, summer, autum, winter];

let imgNum = 0;
pushBtn.textContent = (season[imgNum].text);
viewImg.setAttribute('src', season[imgNum].img);

pushBtn.addEventListener('click', function () {
    if (imgNum === 3) {
        imgNum = 0;
    } else {
        imgNum += 1;
    }

    viewImg.setAttribute('src', season[imgNum].img);
    pushBtn.textContent = season[imgNum].text;
});

let num = seasonNum.value;

skipBtn.addEventListener('click', function () {
    let num = seasonNum.value;
    viewImg.setAttribute('src', season[num].img);
    pushBtn.textContent = season[num].text;
});