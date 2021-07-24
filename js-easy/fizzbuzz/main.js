let i = 0;
const showNum = document.getElementById('showNum');
showNum.innerHTML = i;

const numBtn = function btn() {
    i += 1;
    if (i % 3 === 0 || i % 5 === 0) {
        alert("残念でした〜");
        location.reload();
    } else {
        showNum.innerHTML = i;
    }
};

const fizzBtn = function btn() {
    i += 1;
    if (i % 3 === 0) {
        showNum.innerHTML = "fizz";
    } else {
        alert("残念でした〜");
        location.reload();
    }
}

const buzzBtn = function btn() {
    i += 1;
    if (i % 5 === 0) {
        showNum.innerHTML = "buzz";
    } else {
        alert("残念でした〜");
        location.reload();
    }
}

const fizzbuzzBtn = function btn() {
    i += 1;
    if (i % 3 === 0 && i % 5 === 0) {
        showNum.innerHTML = "fizzbuzz";
    } else {
        alert("残念でした〜");
        location.reload();
    }
}




// チャレンジ問題
// const button = document.querySelector('button');
// let i = 0;
// const rewriteNum = document.getElementById('rewriteNum');
// rewriteNum.innerHTML = i;

// const rewriteCntUp = function () {
//     i += 1;
//     if (i % 3 === 0 && i % 5 === 0) {
//         rewriteNum.innerHTML = "fizzbuzz";
//     } else if (i % 3 === 0) {
//         rewriteNum.innerHTML = "fizz";
//     } else if (i % 5 === 0) {
//         rewriteNum.innerHTML = "buzz";
//     } else {
//         rewriteNum.innerHTML = i;
//     }
// };


    // for (let i = 1; i <= 20; i++) {

    //     if (i % 3 === 0 && i % 5 === 0) {
    //         console.log("fizzbuzz");
    //     } else if (i % 3 === 0) {
    //         console.log("fizz")
    //     } else if (i % 5 === 0) {
    //         console.log("buzz")
    //     } else {
    //         console.log(i)
    //     }