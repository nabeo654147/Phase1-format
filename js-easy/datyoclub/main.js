let count = 0;

const cntUp = function () {
    count += 1;
}
const reply = function () {
    const str = 'どうぞ〜どうぞぉぉ';
    const action = str.repeat(count);
    alert(action);
    cunto = 0;
};

const cntDown = function () {
    count -= 1;
    if (count < 0) {
        const action2 = 'もう誰もいないよ...';
        alert(action2);
        count = 0;
    };
};
