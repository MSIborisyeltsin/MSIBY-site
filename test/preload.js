document.addEventListener("DOMContentLoaded", function(){
    var preloader = document.getElementsByClassName("preloader");
    console.log("[preload.js]: Step 1");
    
    preloader.addEventListener("animationend", function(){
        preloader.remove();
        console.log("[preload.js]: Step 2");
    });
});
