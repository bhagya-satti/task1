let s= document.getElementById("1");
let buttons = document.querySelectorAll("b");
buttons.forEach((button)=>{
    button.addEventListener('click',(b)=>
    {
     if(b.target.innerHTML == 'ans' || b.target.innerHTML == 'enter'){
        result = eval(s);
        document.querySelector('1').value = result;
     }
     else if(b.target.innerHTML == 'clear'){
        document.querySelector('1').value = ' ';
     }
     else if(b.target.innerHTML == 'del'){
        document.querySelector('1').value.slice(0,-1);
     }
     else if(b.target.innerHTML == '+/-'){
        document.querySelector('1').value.slice(0,-1);
     }
     else{
        s = s + b.target.innerHTML;
        document.querySelector('1').value = s;
     }

    })
});