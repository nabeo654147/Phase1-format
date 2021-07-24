const setBtn = function () {
    const hoge = Math.random() * 10;
    // hoge < 5 ? alert('ペッペッペー') : alert('斎藤さんだぞぉぉぉぉぉぉ〜');

    if (hoge < 5) {
        const res1 = confirm('ペッペッペー');
        if (res1 === true) {
            confirm('ペッペッペー');
        } else {
            confirm('斎藤さんだぞぉぉぉぉぉぉ〜');
        };
        location.reload;

    } else {
        const res2 = confirm('斎藤さんだぞぉぉぉぉぉぉ〜');
        if (res2 === true) {
            confirm('斎藤さんだぞぉぉぉぉぉぉ〜');
        } else {
            confirm('ペッペッペー');
        };
        location.reload;
    }
};

