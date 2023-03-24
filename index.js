const bt=document.querySelector(".btn");
bt.addEventListener("mouseover",function(event){
    const x=event.pageX-bt.offsetLeft;
    const y=event.pageY-bt.offsetTop;
    bt.style.setProperty("--xPos",x+"px");
    bt.style.setProperty("--yPos",y+"px");
})