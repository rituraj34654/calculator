
let showTextAC = document.querySelector('#Ac')
let showTextCU = document.querySelector('#Cu')
let showTextMode = document.querySelector('#mode')
let showTextDevide = document.querySelector('#devide')
let showText7 = document.querySelector('#seven')
let showText8 = document.querySelector('#eight')
let showText9 = document.querySelector('#nine')
let showTextMultiply = document.querySelector('#multiply')
let showText4 = document.querySelector('#foure')
let showText5 = document.querySelector('#five')
let showText6 = document.querySelector('#six')
let showTextSubstract = document.querySelector('#substract')
let showText1 = document.querySelector('#one')
let showText2 = document.querySelector('#two')
let showText3 = document.querySelector('#three')
let showTextAdd = document.querySelector('#add')
let showTextCli = document.querySelector('#Cli')
let showText0 = document.querySelector('#zerro')
let showTextDot = document.querySelector('#dot')
let showTextEqualtoo = document.querySelector('#equalto')

let text1 = '';

const disPlay = document.querySelector('#display')
function updateScreen(){
  if(text1 === '') disPlay.value=''
  else{
    disPlay.value = text1;
      }
}


 

showTextAC.addEventListener('click',()=>{
  text1 = '';
  updateScreen()
})

showText0.addEventListener('click', ()=>{
  text1 += '0';
  updateScreen();
})

showText1.addEventListener('click',()=>{
  text1 += '1';
  updateScreen();
});
showText2.addEventListener('click',()=>{
  text1 += '2';
  updateScreen();
});
showText3.addEventListener('click',()=>{
  text1 += '3';
  updateScreen();
});
showText4.addEventListener('click',()=>{
  text1 += '4';
  updateScreen();
});
showText5.addEventListener('click',()=>{
  text1 += '5';
  updateScreen();
});
showText6.addEventListener('click',()=>{
  text1 += '6';
  updateScreen();
});
showText7.addEventListener('click',()=>{
  text1 += '7';
  updateScreen();
});
showText8.addEventListener('click',()=>{
  text1 += '8';
  updateScreen();
});
showText9.addEventListener('click',()=>{
  text1 += '9';
  updateScreen();
});
showTextDot.addEventListener('click',()=>{
  text1 += '.';
  updateScreen();
});
showTextAdd.addEventListener('click',()=>{
  text1 += '+';
  updateScreen();
});
showTextSubstract.addEventListener('click',()=>{
  text1 += '-';
  updateScreen();
});
showTextMultiply.addEventListener('click',()=>{
  text1 += '*';
  updateScreen();
});
showTextDevide.addEventListener('click',()=>{
  text1 += '/';
  updateScreen();
})

showTextEqualtoo.addEventListener('click',(e)=>{
  if(text1 ==='') text1 = 'enter any number'
  else{
  text1 = eval(text1)
  
  } 
  updateScreen();
})

