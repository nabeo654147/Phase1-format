const setBtn = document.getElementById('setBtn');
const resetBtn = document.getElementById('resetBtn');
const showImg = document.getElementById('showImg');

let evo = 0;

setBtn.addEventListener('click', function () {
    evo = Math.floor(Math.random() * 9 + 1);
    showImg.innerHTML = '';
    const img1 = document.createElement('div');
    img1.innerHTML = "<img src='/img/evolution1.png' alt= '原人' />";
    showImg.appendChild(img1);
    const p1 = document.createElement('p');
    p1.innerHTML = "原人"
    showImg.appendChild(p1);


    if (evo >= 4) {
        const img2 = document.createElement('div');
        img2.innerHTML = "<img src='/img/evolution2.png' alt= '旧人' />";
        showImg.appendChild(img2);
        const p2 = document.createElement('p');
        p2.innerHTML = "旧人"；
        showImg.appendChild(p2);
    };

    if (evo >= 7) {
        const img3 = document.createElement('div');
        img3.innerHTML = "<img src='/img/evolution3.png' alt= '新人' />";
        showImg.appendChild(img3);
        const p3 = document.createElement('p');
        p3.innerHTML = "新人"；
        showImg.appendChild(p3);
    };

    if (evo >= 9) {
        const img4 = document.createElement('div');
        img4.innerHTML = "<img src='/img/evolution4.png' alt= '現代人' />";
        showImg.appendChild(img4);
        const p4 = document.createElement('p');
        p4.innerHTML = "現代人"；
        showImg.appendChild(p4);
    };

});

resetBtn.addEventListener('click', function () {
    showImg.innerHTML = '';
})