
const countVal = document.getElementById('countValue');
//const btns = document.getElementsByClassName('btn');

const btns = document.querySelectorAll('.btn');
//use query selector

let count = 0;

btns.forEach(function(index){
    index.addEventListener('click', function(e){
        let btnVal = e.currentTarget.classList;
        //console.log(btnVal);
        if(btnVal.contains("decrement")){
            count--;
        }
        else if(btnVal.contains("increment")){
            count++;
        }
        else {
            count=0;
        }

        if(count > 0){
            countVal.style.color = "green"
        }
        if(count < 0){
            countVal.style.color = "red"
        }
        if(count == 0){
            countVal.style.color = "black"
        }

        countVal.innerHTML = count;
    })
    
})

// currentTarget hernu 
