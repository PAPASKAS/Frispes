/* var color */
let secondary = "#FF5722"


$.get("https://ipinfo.io", function (response) { 
    $("#address").html(response.city + ", " + response.region); 
}, "jsonp");




//intro
slider_intro_img = ['url("../../Source/Img/intro.jpg")', 'url("../../Source/Img/intro1.jpg")', 'url("../../Source/Img/intro2.jpg")', 'url("../../Source/Img/intro3.jpg")']
document.querySelector(".background_intro .background").style.backgroundImage = slider_intro_img[0]

document.querySelectorAll(".intro .slider-button span")[0].style.animationName = "button_intro_slider_anima_plus"

n=0
let intro_auto_slider = setInterval(function(){ 
    document.querySelectorAll(".intro .slider-button span")[n].style.animationName = "button_intro_slider_anima_minus"
    if(n < 3){
        n++
    }
    else{
        n = 0
    }
    document.querySelectorAll(".intro .slider-button span")[n].style.animationName = "button_intro_slider_anima_plus"
    opacity_slider(n)
},7000)




let current_opacity = 1
function opacity_slider(n){
    let opacity_interval = setInterval(function(){
        
        if(current_opacity > 0.2){
            current_opacity-=0.1
            document.querySelector(".background_intro .background").style.opacity = current_opacity.toFixed(2)
        }else{
            clearInterval(opacity_interval)
            document.querySelector(".background_intro .background").style.backgroundImage = slider_intro_img[n]
            opacity_interval_plus()
        }
    },50)
}
function opacity_interval_plus(){
    let opacity_interval_plus = setInterval(function(){
        if(current_opacity < 1){
            current_opacity+=0.1
            document.querySelector(".background_intro .background").style.opacity = current_opacity.toFixed(2)
        }else{
            clearInterval(opacity_interval_plus)
        }
    },50)
}



//our spaces