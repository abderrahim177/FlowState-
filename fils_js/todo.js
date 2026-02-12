let input = document.getElementById('input');
let btn = document.getElementById('btn');
let delete_button = document.getElementById('delete');

let array = [];

if(localStorage.getItem('tasks')){
    array = JSON.parse(localStorage.getItem('tasks'));
    showdata();
}

btn.onclick = function(){
    let objet = {
        tasks : input.value,
    }

    array.push(objet);
    localStorage.setItem('tasks',JSON.stringify(array));
    showdata();
    clearData();
}

function showdata(){
    let table = '';
    for(let i = 0 ; i < array.length ; i++){
        table += `
            <div class="text-[26px] font-semibold flex justify-between items-baseline w-[90%] mx-auto bg-blue-300 pt-[20px] pb-[20px] pr-[10px] pl-[10px] rounded-2xl">
                ${array[i].tasks}
            </div>
        `;
    }

    document.getElementById('tasks_container').innerHTML = table;
}

function clearData(){
    input.value = "";
}

delete_button.onclick = function(){
    array.splice(0 , 1);
    localStorage.setItem('tasks', JSON.stringify(array));
    showdata();
}
