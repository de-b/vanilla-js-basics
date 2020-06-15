hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('colorGenerate');
const colorShow = document.querySelector('.colorShow');
const colorCode = document.getElementById('colorCode');

function getRandomNum(){
    return Math.floor(Math.random()*hex.length);
}

btn.addEventListener('click', function() {
    let hexCode = "#";
    for(var i = 0; i < 6; i++){
        hexCode = hexCode + hex[getRandomNum()];
    }
    //console.log(hexCode);
    colorCode.innerHTML = hexCode;
    colorShow.style.backgroundColor = hexCode;
    colorCode.style.color = hexCode;
})