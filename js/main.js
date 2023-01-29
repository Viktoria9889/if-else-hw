
const elModal = document.querySelector('.modal');
const elBrthd = document.querySelector('.birthday');
const years = document.querySelector('.years');
const btnC = document.querySelector('.btn_c');
let input = document.getElementById('inp_2');
const btnD = document.querySelector('.btn_d');
const grittingsA = document.querySelector('.helo');
const grittingsB = document.querySelector('.helo_b');


function gender(chose) {
    
    if(chose.value === '2') {
        elModal.classList.add('show');
    } 
    else {
        elModal.classList.remove('show');
    
    };

    if(chose.value === '1') {
        elBrthd.classList.add('input')
    } else {
        elBrthd.classList.remove('input');
        grittingsB.classList.remove('helob');
        grittingsA.classList.remove('helo_a');
        years.classList.remove('years_a');
    };

};


btnC.addEventListener('click', () => {
    years.classList.add('years_a');
})

btnD.addEventListener('click', () => {
   if (input.value >= 18) {
    grittingsA.classList.add('helo_a')
    grittingsB.classList.remove('helob')
   } if (input.value < 18) {
    grittingsA.classList.remove('helo_a')
    grittingsB.classList.add('helob')
   } 
   

});

