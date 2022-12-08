const open = document.querySelector("#open");
const close = document.querySelector("#closeX");
const sideMenu = document.querySelector("#sidemenu")

open.addEventListener('click', () => {
    console.log('clicked')
    document.querySelector("#sidemenu").style.top = "-16px"
    
})


close.addEventListener('click', () => {
    console.log('clicked')
    document.querySelector("#sidemenu").style.top = "-500px";
})