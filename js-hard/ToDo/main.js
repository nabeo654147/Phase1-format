const addArea = document.getElementById('add-area');
const addBtn = document.getElementById('add-btn');
const todo = document.getElementById('todo');

addBtn.addEventListener('click', function () {
    const addText = addArea.value;
    if (addText === '') {
        alert('空欄です');
    } else {
        const li = document.createElement('li');
        li.append(addText);
        todo.appendChild(li);

        const endBtn = document.createElement('button');
        endBtn.innerText = '完了';
        li.appendChild(endBtn);

        //矢印↓６行目で一度addTextと言う文字列に代入してしまっているので、次にaddTextに
        //  ''を代入してもただの文字列を’’にしているだけなので、一向に入力欄は空にならない。
        //メソッドの考え方が重要！ なので、元のaddArea.value自体を空にしなければならない。
        //６行目より前だと入る 

        //addText = '';
        //addText.innerHTML = '';
        addArea.value = '';

        endBtn.addEventListener('click', function () {
            const endli = endBtn.parentNode;
            endli.remove();

        });

    }

});


// let i = 0;
// let lis = `li${i}`;

// addBtn.addEventListener('click', function () {
//     let addTxet = document.createTextNode(addArea.value);
//     i += 1;
//     lis = document.createElement('li');
//     lis.appendChild(addTxet);
//     todo.appendChild(lis);

//     let endBtnNew = `endBtn${i}`;
//     endBtnNew = document.createElement('span');
//     endBtnNew.classList.add('endBtnNew');
//     endBtnNew.innerHTML = '<button id="endBtnNew">完了</button >';
//     lis.appendChild(endBtnNew);

//     endBtnNew = document.getElementById('endBtnNew');
//     endBtnNew.addEventListener('click', function () {
//         lis.parentNode.remove(lis);
//     });

//     // endBtn = document.getElementsByClassName('endBtn');
//     // for (let i = 0; i < endBtn.lenght; i++) {
//     //     endBtn[i].addEventListener('click', function () {
//     //         this.parentNode.remove();
//     //     });
//     // }

// });




//let text = '';
//addArea.innerHTML = '';
//todo.innerHTML = `<li>${addTxet}</li> <button id ="endBtn">完了</button >`;

// let addTxet = addArea.value;
// addTxet = '';

// addBtn.addEventListener('click', function () {
//     if (addTxet = '') {
//         alert('テキストが空です！');
//     } else {
//         let addTxet = addArea.value;
//         const li = document.createElement('li');
//         li.innerHTML = `<li>${addTxet}</li><button id ="endBtn">完了</button >`;
//         todo.appendChild(li);
//         addArea.innerHTML = '';
//     };

//     let endBtn = document.getElementById('endBtn');
//     endBtn.addEventListener('click', function () {
//         todo.li.remove();
//     });
// });
