let input = document.getElementById('input');
let btn = document.getElementById('btn');
let delete_button = document.getElementById('delete');
let update_button = document.getElementById('update');



let array = [];
if(localStorage.getItem('tasks')){
    array = JSON.parse(localStorage.getItem('tasks')),
    showdata();
}
console.log(array);
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
        for(let i = 0 ; i< array.length ; i++){
            table += `
             
                <div  class="text-[26px] font-semibold flex justify-between items-baseline w-[90%] mx-auto bg-blue-300  pt-[20px] pb-[20px] pr-[10px] pl-[10px] rounded-2xl">${array[i].tasks}</div>
                
            
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
let container = document.getElementById('time');
let start_button = document.getElementById('start_button');
let stope_button = document.getElementById('stope_button');
let minute = document.getElementById('minute');
let second = document.getElementById('second');


let seconds = 0;
let minuts = 0;
let timer = null;
let isRuning = false;

function chekedData(){
    minute.textContent = minuts < 10 ? "0" + minuts : minuts;
    second.textContent = seconds < 10 ? "0" + seconds : seconds;
}

start_button.onclick = function(){
    if(isRuning)
        return;
    isRuning = true;
    container.style.color = 'green';
    timer = setInterval(() => {
        seconds++;
        if(seconds === 60){
            seconds = 0;
            minuts++;
        }
         chekedData();
          
         if(seconds === 25){
            clearInterval(timer);
            container.style.color = 'red';
            }
    } , 1000)

}
