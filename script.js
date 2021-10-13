var homeCard=document.getElementById('homeSection');

window.addEventListener('scroll', function(){
    let value=this.window.scrollY;
    homeCard.style.marginRight=value*4+'px';
    homeCard.style.marginTop=value*1.5+'px';
})