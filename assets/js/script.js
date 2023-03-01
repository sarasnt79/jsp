document.querySelector(".action").addEventListener('click' , show);

function show(){
    const togglemenu =document.querySelector('.menu');
    togglemenu.classList.toggle('active');
}