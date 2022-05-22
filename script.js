const loadingPage=document.querySelector(".loadingPage");

window.addEventListener("load",function(){
    this.setTimeout(()=>{
        loadingPage.style.top='-100vh'
    },2000)
})