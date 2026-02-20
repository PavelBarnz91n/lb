import { db } from './db/db.js';
const inputTTK = document.querySelector('.LB_search-ttk');
const clearBTN = document.querySelector('.clear');
const contentBox = document.querySelector('.LB_content-box');

clearBTN.addEventListener('click', () => {
    inputTTK.value = "";
    contentBox.innerHTML = "";
})

inputTTK.addEventListener('input', () => {
    contentBox.innerHTML = "";
    let inputValue = inputTTK.value.toLowerCase();

    if(inputValue.length === 0) {
        contentBox.innerHTML = "";
        return false;
    };

    db.forEach((v, i)=>{
        if(v.name.includes(inputValue)){
            let newDiv = document.createElement('div');
            newDiv.classList.add('card');
            let pic = document.createElement('img');
            pic.classList.add('ttk-image');
            pic.src = db[i].pic;
            newDiv.append(pic)
            contentBox.append(newDiv)
        };     
    });

})