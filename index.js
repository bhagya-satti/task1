let screen = document.getElementById('display');
buttons = document.querySelectorAll('button');

for (item of buttons) {
    item.addEventListener('click', (e) => {
        txt = e.target.innerText; 
        let screenval = ''
        if (txt == 'Clear') {
            screen.value = "";
        }
        else if(txt=='^'){
            txt = '**';
            screenval +=txt;
            screen.value += screenval

        }
        else if (txt == 'Enter' || txt == 'Ans') {
            screen.value = eval(screen.value);
        }
        else if(txt == 'Del'){
            screen.value = screen.value.slice(0,-1);
        }
        else if(txt == '+/-'){
            var n =  screen.value; 
            n = n * -1;
            screen.value = n;
        }
        else {
            screen.value += txt;
        }

    })

}