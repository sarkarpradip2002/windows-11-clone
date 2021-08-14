let audio=new Audio('startsound.mp3');
playsound=()=>{
    audio.play();
}
playsound();

showmenu=()=>{
    let menu=document.querySelector('.menu');
    if(menu.style.bottom=="-530px"){
        menu.style.bottom="35px";
    }
    else{
        menu.style.bottom="-530px";
    }
}