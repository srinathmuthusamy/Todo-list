//Selections
const who = document.querySelector('.who')
const main = document.querySelector(".main");
const todoi = document.querySelector("#todo-input");
const btn = document.querySelector(".btn");
const btnid = document.querySelector("#own");
const two = document.querySelector("#two");
const result = document.querySelector(".output");
const one = document.querySelector("#one");
const ow = document.querySelector('#own')

//Prompt function
const whoprompt = prompt("What's your name")
who.textContent = whoprompt + "'s" + ' ' + 'Todo List';

if(whoprompt === ''){
    who.textContent = 'Unknown' + "'s" + ' ' + 'Todo List';
}

//New functioning

one.addEventListener('click', function (){
   result.classList.remove('output')
   btnid.classList.remove('output')
   result.innerHTML = `${todoi.value}`;
   todoi.value = ''
})
//Delete functioning
ow.addEventListener('click', function(){
  result.classList.add('output')
  btnid.classList.add('output')
})
