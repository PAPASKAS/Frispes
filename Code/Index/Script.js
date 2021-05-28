/* var color */
let secondary = "#FF5722"
let secondary120 = "#DD2C00"
let primary = "#00345d"
let white = "#FFFFFF"
let black = "#222831"
let gray3 = "#DFDFDF"


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
let m = 0
let z = 0
if(document.querySelector("body").offsetWidth < 991){
    document.querySelector(".our_spaces .nav-slider p:last-of-type span:last-of-type").innerHTML = "05"
}
if(document.querySelector("body").offsetWidth < 700){
    document.querySelector(".our_spaces .nav-slider p:last-of-type span:last-of-type").innerHTML = "06"
}

function our_spaces_over(n){

    if(n === 0){
        m = 0
        z = 1
    }else if(n === 1){
        m = 2
        z = 3
    }else if(n === 2){
        m = 4
        z = 5
    }else if(n === 3){
        m = 6
        z = 7
    }else if(n === 4){
        m = 8
        z = 9
    }else if(n === 5){
        m = 10
        z = 11
    }else if(n === 6){
        m = 12
        z = 13
    }
    

    document.querySelectorAll(".our_spaces .slide")[n].style.background = primary
    document.querySelectorAll(".our_spaces .slide .img img")[n].src = "../../Source/Img/background spaces.png"//delete old img

    document.querySelectorAll(".our_spaces .slide .square")[n].style.display = "block"
    
    document.querySelectorAll(".our_spaces .slide a")[n].style.transform = "translateY(-23px)"
    document.querySelectorAll(".our_spaces .slide a")[n].style.width = "255px"
    document.querySelectorAll(".our_spaces .slide a p")[n].innerHTML = "Check avaibility"
    document.querySelectorAll(".our_spaces .slider a")[n].style.gap = "32px"

    document.querySelectorAll(".our_spaces .slide > p:last-of-type")[n].innerHTML = "Comfortable space, Full speed wifi, Free coffe & Snack and many more"

    
    document.querySelectorAll(".our_spaces .slide > p")[m].style.transform = "translateY(-310px)"
    document.querySelectorAll(".our_spaces .slide > p")[m].style.fontFamily = "Lora"
    document.querySelectorAll(".our_spaces .slide > p")[m].style.position = "absolute"
    document.querySelectorAll(".our_spaces .slide > p")[m].style.width = "350px"
    document.querySelectorAll(".our_spaces .slide > p")[m].style.fontWeight = "normal"
    document.querySelectorAll(".our_spaces .slide > p")[m].style.fontSize = "32px"
    document.querySelectorAll(".our_spaces .slide > p")[m].style.lineHeight = "41px"
    document.querySelectorAll(".our_spaces .slide > p")[m].style.color = white
    
    document.querySelectorAll(".our_spaces .slide > p")[z].style.width = "253px"
    document.querySelectorAll(".our_spaces .slide > p")[z].style.transform = "translate(50px, -230px)"
    document.querySelectorAll(".our_spaces .slide > p")[z].style.position = "absolute"
    document.querySelectorAll(".our_spaces .slide > p")[z].style.fontWeight = "500"
    document.querySelectorAll(".our_spaces .slide > p")[z].style.fontSize = "18px"
    document.querySelectorAll(".our_spaces .slide > p")[z].style.lineHeight = "28px"
    document.querySelectorAll(".our_spaces .slide > p")[z].style.color = white

}
function our_spaces_out(n){
    let img = [""," 1"]

    if(n % 2 === 0){
        a = 0
    }else{
        a = 1
    }

    if(n === 0){
        m = 0
        z = 1
    }else if(n === 1){
        m = 2
        z = 3
    }else if(n === 2){
        m = 4
        z = 5
    }



    document.querySelectorAll(".our_spaces .slide")[n].style.background = "none"
    document.querySelectorAll(".our_spaces .slide .img img")[n].src = "../../Source/Img/our spaces" + img[a] + ".jpg"

    document.querySelectorAll(".our_spaces .slide .square")[n].style.display = "none"
    
    document.querySelectorAll(".our_spaces .slide a")[n].style.transform = "translateY(-72px)"
    document.querySelectorAll(".our_spaces .slide a")[n].style.width = "72px"
    document.querySelectorAll(".our_spaces .slide a p")[n].innerHTML = ""
    document.querySelectorAll(".our_spaces .slider a")[n].style.gap = "0px"

    document.querySelectorAll(".our_spaces .slide > p:last-of-type")[n].innerHTML = ""



    document.querySelectorAll(".our_spaces .slide > p")[m].style.transform = "translateY(0px)"
    document.querySelectorAll(".our_spaces .slide > p")[m].style.fontFamily = "Lato"
    document.querySelectorAll(".our_spaces .slide > p")[m].style.position = "static"
    document.querySelectorAll(".our_spaces .slide > p")[m].style.fontWeight = "bold"
    document.querySelectorAll(".our_spaces .slide > p")[m].style.fontSize = "20px"
    document.querySelectorAll(".our_spaces .slide > p")[m].style.lineHeight = "24px"
    document.querySelectorAll(".our_spaces .slide > p")[m].style.color = black
}
let current_slide_spaces = 0
let block_cpaces = 0
document.querySelectorAll(".our_spaces .nav-slider p:first-of-type span")[current_slide_spaces].style.background = secondary120
function slider_next_spaces(link, gap){
    let quantity_slide = document.querySelectorAll(link + "> span").length
    let slide_width = document.querySelector(link + "> span").offsetWidth
    let width_slider = document.querySelector(link).offsetWidth

    if(slide_width * 4 < width_slider){//Колличество слайдов на экране
        quantity_slide-=4
    }else if(slide_width * 3 < width_slider){
        quantity_slide-=3
    }else if(slide_width * 2 < width_slider){
        quantity_slide-=2
    }else{
        quantity_slide-=1
    }

    document.querySelectorAll(".our_spaces .nav-slider p:first-of-type span")[current_slide_spaces].style.background = gray3
    
    if(current_slide_spaces < quantity_slide){
        current_slide_spaces++
    }else{
        current_slide_spaces = 0
    }
    document.querySelector(".our_spaces .nav-slider p:last-of-type span:first-of-type").innerHTML = "0" + (current_slide_spaces + 1)
    document.querySelectorAll(".our_spaces .nav-slider p:first-of-type span")[current_slide_spaces].style.background = secondary120
    

    document.querySelector(link).style.right = slide_width * current_slide_spaces + gap * current_slide_spaces + "px"
}

function slider_prev_spaces(link, gap){
    let quantity_slide = document.querySelectorAll(link + "> span").length
    let slide_width = document.querySelector(link + "> span").offsetWidth
    let width_slider = document.querySelector(link).offsetWidth

    if(slide_width * 4 < width_slider){//Колличество слайдов на экране
        quantity_slide-=4
    }else if(slide_width * 3 < width_slider){
        quantity_slide-=3
    }else if(slide_width * 2 < width_slider){
        quantity_slide-=2
    }else{
        quantity_slide-=1
    }

    document.querySelectorAll(".our_spaces .nav-slider p:first-of-type span")[current_slide_spaces].style.background = gray3
    
    if(current_slide_spaces > 0){
        current_slide_spaces--
    }else{
        current_slide_spaces = quantity_slide
    }

    document.querySelector(".our_spaces .nav-slider p:last-of-type span:first-of-type").innerHTML = "0" + (current_slide_spaces + 1)
    document.querySelectorAll(".our_spaces .nav-slider p:first-of-type span")[current_slide_spaces].style.background = secondary120

    document.querySelector(link).style.right = slide_width * current_slide_spaces + gap * current_slide_spaces + "px"
}



//our facilities
document.querySelectorAll(".our-facilities .nav-slider div")[2].style.background = secondary
document.querySelectorAll(".our-facilities .nav-slider div")[2].style.boxShadow = "7px 7px 15px rgba(255, 87, 34, 0.3)"
document.querySelectorAll(".our-facilities .nav-slider div")[2].style.color = white

document.querySelectorAll(".our-facilities .indicator-slider > div")[2].style.background = secondary

let selected_facilities = 2
const image_facilities = ["our facilities 0.jpg","our facilities 1.jpg","our facilities 2.jpg","our facilities 3.jpg","our facilities 4.jpg"]

function our_facilities(n){    
    clear_selected_slide_facilities(selected_facilities)
    selected_facilities = n
    selected_slide_facilities(selected_facilities)
}

function clear_selected_slide_facilities(x){
    document.querySelectorAll(".our-facilities .indicator-slider > div")[x].style.background = gray3

    document.querySelectorAll(".our-facilities .nav-slider div")[x].style.background = "none"
    document.querySelectorAll(".our-facilities .nav-slider div")[x].style.boxShadow = "none"
    document.querySelectorAll(".our-facilities .nav-slider div")[x].style.color = black

}
function selected_slide_facilities(x){
    document.querySelectorAll(".our-facilities .indicator-slider > div")[x].style.background = secondary

    document.querySelector(".our-facilities .indicator-slider p span:first-of-type").innerHTML = "0" + (x + 1)

    document.querySelectorAll(".our-facilities .nav-slider div")[x].style.background = secondary
    document.querySelectorAll(".our-facilities .nav-slider div")[x].style.boxShadow = "7px 7px 15px rgba(255, 87, 34, 0.3)"
    document.querySelectorAll(".our-facilities .nav-slider div")[x].style.color = white

    document.querySelector(".our-facilities .bottom-side > div:last-of-type img").src="../../Source/Img/" + image_facilities[x]
    
}







//reviews 
let reviews_current_slide = 0
document.querySelectorAll(".reviews .nav-slider span")[0].style.background = secondary

function slider_reviews_next(link, gap){
    let quantity_slide = document.querySelectorAll(link + "> span").length
    let slide_width = document.querySelector(link + "> span").offsetWidth
    let width_slider = document.querySelector(link).offsetWidth

    if(slide_width * 4 < width_slider){//Колличество слайдов на экране
        quantity_slide-=4
    }else if(slide_width * 3 < width_slider){
        quantity_slide-=3
    }else if(slide_width * 2 < width_slider){
        quantity_slide-=2
    }else{
        quantity_slide-=1
    }

    document.querySelectorAll(".reviews .nav-slider span")[reviews_current_slide].style.background = gray3


    if(reviews_current_slide < quantity_slide){
        reviews_current_slide++
    }else{
        reviews_current_slide = 0
    } 

    document.querySelectorAll(".reviews .nav-slider span")[reviews_current_slide].style.background = secondary

    document.querySelector(link).style.right = slide_width * reviews_current_slide + gap * reviews_current_slide + "px"
}

function slider_reviews_prev(link, gap){
    let quantity_slide = document.querySelectorAll(link + "> span").length
    let slide_width = document.querySelector(link + "> span").offsetWidth
    let width_slider = document.querySelector(link).offsetWidth

    if(slide_width * 4 < width_slider){//Колличество слайдов на экране
        quantity_slide-=4
    }else if(slide_width * 3 < width_slider){
        quantity_slide-=3
    }else if(slide_width * 2 < width_slider){
        quantity_slide-=2
    }else{
        quantity_slide-=1
    }

    document.querySelectorAll(".reviews .nav-slider span")[reviews_current_slide].style.background = gray3

    if(reviews_current_slide > 0){
        reviews_current_slide--
    }else{
        reviews_current_slide = quantity_slide
    }

    document.querySelectorAll(".reviews .nav-slider span")[reviews_current_slide].style.background = secondary

    document.querySelector(link).style.right = slide_width * reviews_current_slide + gap * reviews_current_slide + "px"
}






//help center
function help_center_over(n){
    document.querySelectorAll(".help-center .item h4")[n].style.background = secondary
    document.querySelectorAll(".help-center .item h4")[n].style.color = white
    document.querySelectorAll(".help-center .item h4")[n].style.boxShadow = "none"

    document.querySelectorAll(".help-center .item a img")[n].style.background = white
    document.querySelectorAll(".help-center .item a img")[n].src = "../../Source/Img/arrow down secondary.svg"
    document.querySelectorAll(".help-center .item a img")[n].style.boxShadow = "-7px 6px 10px rgba(221, 44, 0, 0.24)"
}
function help_center_out(n){
    document.querySelectorAll(".help-center .item h4")[n].style.background = white
    document.querySelectorAll(".help-center .item h4")[n].style.color = "#000000"
    document.querySelectorAll(".help-center .item h4")[n].style.boxShadow = "10px 10px 10px rgba(223, 223, 223, 0.5)"

    document.querySelectorAll(".help-center .item a img")[n].style.background = secondary
    document.querySelectorAll(".help-center .item a img")[n].src = "../../Source/Img/arrow down white.svg"
    document.querySelectorAll(".help-center .item a img")[n].style.boxShadow = "none"
}