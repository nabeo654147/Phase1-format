const sampleForm = document.getElementById('sampleForm');
const textCounter = document.getElementById('textCounter');
const resetBtn = document.getElementById('resetBtn');
let startStr = 400;
let str = 0;
let coment;
textCounter.textContent = `あと ${startStr - str} 文字`;

sampleForm.addEventListener('keyup', function () {
    str = sampleForm.value.length;
    textCounter.textContent = `あと ${startStr - str} 文字`;
    coment = sampleForm.value;
});

resetBtn.addEventListener('click', function () {
    str = 0;
    textCounter.textContent = `あと ${startStr - str} 文字`;
})

const iniDel = document.getElementById('iniDel');
const endDel = document.getElementById('endDel');

iniDel.addEventListener('click', function () {
    coment = coment.slice(1);
    sampleForm.value = coment;
    textCounter.textContent = `あと ${startStr - coment.length} 文字`;
});

endDel.addEventListener('click', function () {
    coment = coment.slice(0, -1);
    sampleForm.value = coment;
    textCounter.textContent = `あと ${startStr - coment.length} 文字`;
});