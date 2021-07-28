const nowPassword = document.getElementById('nowPassword');
const confirmPassword = document.getElementById('confirmPassword');
const newPassword = document.getElementById('newPassword');
const setBtn = document.getElementById('setPassword');

let pass = 'jijijijiji';
nowPassword.textContent = `現在のパスワードは ${pass}`;


setBtn.addEventListener('click', function () {
    if (pass !== confirmPassword.value) {
        alert('古いパスワードが間違ってます！');

    } else if (pass === newPassword.value) {
        alert('同じパスワードはつかえませんぜ旦那！');

    } else if (pass === confirmPassword.value && newPassword.value.length < 8) {
        alert('パスワードは8文字以上にしてください。');

    } if (pass === confirmPassword.value && newPassword.value.length >= 8 && pass !== newPassword.value) {
        pass = newPassword.value;
        alert(`新しいパスワードは${pass}です`);
        nowPassword.textContent = `現在のパスワードは ${pass}`;
    }

});

//正規表現
// 1.  ^[0-9]{3}-?[0-9]{4}$
// 2.  (.)¥1
// 3.  *adc