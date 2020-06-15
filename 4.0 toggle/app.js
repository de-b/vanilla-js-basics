const toggle = document.getElementById('toggle');
const toggleDiv = document.querySelector('.toggleDiv');

toggle.addEventListener('click', function(e){
    toggleDiv.classList.toggle('hide');
})