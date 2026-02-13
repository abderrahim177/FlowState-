import { getData, saveData } from "./storage.js";
let update_button = document.getElementById('update');
let input = document.getElementById('input');
let btn = document.getElementById('btn');
let delete_button = document.getElementById('delete');

export let array = getData();
showdata();

btn.onclick = function () {
    if (input.value === '') {
        alert('file the input')

    } else {
        let objet = {
            tasks: input.value,
        }
        array.push(objet);
        saveData(array);
        showdata();
        clearData();
    }
}

function showdata() {
    let table = '';
    for (let i = 0; i < array.length; i++) {
        table += `
            <div class="text-[26px] font-semibold flex justify-between items-baseline w-[90%] mx-auto bg-gray-200 border-solid border-2 border-black shadow-xl pt-[20px] pb-[20px] pr-[10px] pl-[10px] rounded-2xl lg:pt-[5px] lg:pb-[5px] lg:pr-[10px] lg:pl-[10px] lg:font-medium lg:text-[20px]">
                <p>🎉</p>

            ${array[i].tasks}
            </div>
        `;
    }

    document.getElementById('tasks_container').innerHTML = table;
}

function clearData() {
    input.value = "";
}
update_button.onclick = function () {
    for (let i = 0; i < array.length; i++) {
        input.value = array[i].tasks;
        btn.innerHTML = 'update';
    }
}
btn.onclick = function(){
    
}
delete_button.onclick = function () {
    array.splice(0, 1);
    saveData(array);
    showdata();
}

export { };
