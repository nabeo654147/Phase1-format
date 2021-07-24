// const title = document.getElementById('title')
// console.log(`<h1>タグの中身のテキストは＄{title.textContent}です。`)

// const list = document.querySelector('.list')
// console.log(`<ul>タグの２つめの子要素のテキストは${list.children[1].textContent}です。`)

// const newItem = document.createElement('li')
// newItem.textContent = 'もも'
// list.appendChild(newItem)

// const button = document.getElementById('button')
// button.addEventListener('click', event => {
//     confirm("削除してよろしいですか？")
// })

window.alert(`これはalert()で表示したアラートです`)

const addButton = document.getElementById('add')
const removeButton = document.getElementById('remove')
const list = document.querySelector('.list') // ※既に書いている場合は省略

addButton.addEventListener('click', (event) => { // <button id="add">がクリックされたとき…
    const newItem = document.createElement('li')
    newItem.textContent = '新しいアイテム'
    list.appendChild(newItem)
})
removeButton.addEventListener('click', (event) => { // <button id="remove">がクリックされたとき…
    list.removeChild(list.lastElementChild)
})
