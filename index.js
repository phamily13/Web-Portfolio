document.addEventListener("scroll", ()=>{
    const nav = document.querySelector(".navbar");
    
    if (pageYOffset > 20){
        nav.classList.remove("hide");
    } else{
        nav.classList.add("hide");
    }

});


