// document.querySelector('.backtotop').addEventListener('click',function(e)
// {
//     window.scrollBy({
//     top :-document.body.offsetHeight ,
//     behavior : 'smooth'
//     })
// // })

//nut BacktoTop
function BacktoTop() {
    //  let scrollTop = document.querySelector('html').scrollTop;
    //  let $slider = document.querySelector('.slider');

    //  scrollTop;
    //      if(scrollTop >$slider.offsetHeight + $header.offsetHeight)
    // {
    //     document.querySelector('.BTT').classList.add('hover')
    // } else{
    //      document.querySelector('.BTT').classList.remove('hover')
    // }
    let $scrollT = $("html").scrollTop();
    let $slider = $(".slider");
    let $header = $("header");
    let $heightHTML = $("body").height();
    let $footer = $("footer");
    console.log($scrollT);
    console.log($heightHTML - ($slider.height() + 300));
    if ($scrollT > $slider.height() + $header.height()) {
        $(".BTT").addClass("hover");
    } else {
        $(".BTT").removeClass("hover");
    }
    if ($scrollT > $heightHTML - ($slider.height() + 300)) {
        $(".BTT").removeClass("hover");
    }
}

// }
// document.querySelector('.BTT').addEventListener('click',function(e)
// {
//     window.scrollBy({
//     top :-document.body.offsetHeight,
//     behavior : 'smooth'
//     })
// })
//     window.addEventListener('scroll',BacktoTop);

$(".BTT").click(function () {
    window.scrollBy({
        top: -$("body").height(),
        behavior: "smooth",
    });
});
$(window).scroll(BacktoTop);

//Back to Top
$("footer .footer .backtotop").click(function () {
    window.scrollBy({
        top: -$("body").height(),
        behavior: "smooth",
    });
});
$(window).scroll(BacktoTop);
// // header doi mau theo slide

// let $slider = document.querySelector('.slider');
// let $header = document.querySelector('header');
// window.addEventListener('scroll',function()
// {
//     let scrollTop = document.querySelector('html').scrollTop;
//     if(scrollTop > $slider.offsetHeight - $header.offsetHeight){
//      $header.style.background =' black'
//     }else {
//          $header.style.background ='transparent'
//     }
// })

$(window).scroll(function () {
    let $scrollT = $("html").scrollTop();
    let $slider = $(".slider");
    let $header = $("header");

    if ($scrollT > $slider.height() - $header.height()) {
        $header.css("background", "black");
    } else {
        $header.css("background", "transparent");
    }
});

//popup video

// let videoStr = "https://www.youtube.com/embed/";
// document.querySelectorAll('.video .playbutton ').forEach( (e)=>{
//     e.addEventListener('click',function(e){
//         let videoStr = "https://www.youtube.com/embed/"
//         let videoSrc = this.getAttribute('data-video-src')
//         videoStr+=videoSrc;
// let iframeStr =`${videoStr}?autoplay=1`;
// document.querySelector('.popup-video .wrap').classList.add('selected');
//     document.querySelector('.popup-video').classList.add('select');
//      document.querySelector('.popup-video iframe').setAttribute('src',iframeStr);
//     })
// })
// document.querySelector('.popup-video .close').addEventListener('click',function(e){
//     document.querySelector('.popup-video .wrap').classList.remove('selected');
//     document.querySelector('.popup-video').classList.remove('select');
//     document.querySelector('.popup-video iframe').setAttribute('src',"");
// })
$(".video .images").click(function () {
    let videoSrc = $(this).find(".playbutton").attr("data-video-src");
    let videoStr = "https://www.youtube.com/embed/";
    videoStr += videoSrc;
    let iframeStr = `${videoStr}?autoplay=1`;
    //    console.log(iframeStr);
    $(".popup-video").addClass("select");
    $(".popup-video .wrap").addClass("selected");
    $(".popup-video iframe").attr("src", iframeStr);
});
$(".popup-video .close").click(function () {
    $(".popup-video").removeClass("select");
    $(".popup-video .wrap").removeClass("selected");
    $(".popup-video iframe").attr("src", "");
});

// //tat mo tab hamburger
// let btnmenuSelect =   document.querySelector('header .btnmenu');

//   btnmenuSelect.addEventListener('click',(e)=>{
//       if( btnmenuSelect.classList.contains('menuSelected'))
//       {
//         btnmenuSelect.classList.remove('menuSelected');
//         document.querySelector('header .nav').classList.remove('show');

//       }else{
//           btnmenuSelect.classList.add('menuSelected');
//           document.querySelector('header .nav').classList.add('show');
//       }
//   })

let btnmenuSelect = $("header .btnmenu");

btnmenuSelect.click(function () {
    if (btnmenuSelect.hasClass("menuSelected")) {
        btnmenuSelect.removeClass("menuSelected");
        $("header .nav").removeClass("show");
    } else {
        btnmenuSelect.addClass("menuSelected");
        $("header .nav").addClass("show");
    }
});

// // slider

// $sliderImg = document.querySelectorAll('.slider__imgaes');
// $sliderDot = document.querySelectorAll('.slider .paging li');

$sliderImg = $(".slider__imgaes");
$sliderDot = $(".slider .paging li");
//  console.log($sliderImg[2]);

let sliderCurrent = 0;
// let sliderNumber = document.querySelector('.slider .paging span');

let sliderNumber = $(".slider .paging span");
// $sliderImg[sliderCurrent].classList.add('--active');
// $($sliderImg[sliderCurrent]).addClass("--active");
// document.querySelector('.slider .--prev').addEventListener('click', ()=>{
// if(sliderCurrent >0){
//     // $sliderImg[sliderCurrent -1].classList.add('--active');
//     // $sliderImg[sliderCurrent].classList.remove('--active');
//     // $sliderDot[sliderCurrent -1].classList.add('is-selected');
//     // $sliderDot[sliderCurrent].classList.remove('is-selected');
//     // sliderCurrent--;
//     slideTo(sliderCurrent - 1 );
// }
// sliderNumber.innerText = (sliderCurrent +1).toString().padStart(2,'0');
// })

// document.querySelector('.slider .--next').addEventListener('click', ()=>{
// if(sliderCurrent < $sliderImg.length-1){
//     slideTo(sliderCurrent + 1);
// }
// sliderNumber.innerText = (sliderCurrent +1).toString().padStart(2,'0');
// })

function slideTo(to) {
    //     $sliderImg[sliderCurrent ].classList.remove('--active');
    //     $sliderImg[to].classList.add('--active');
    //     $sliderDot[sliderCurrent ].classList.remove('is-selected');
    //     $sliderDot[to].classList.add('is-selected');
    //     sliderCurrent= to;
    //     sliderNumber.innerText = (to +1).toString().padStart(2,'0');
    //
    $($sliderImg[sliderCurrent]).removeClass("--active");
    $($sliderImg[to]).addClass("--active");
    $($sliderDot[sliderCurrent]).removeClass("is-selected");
    $($sliderDot[to]).addClass("is-selected");
    sliderCurrent = to;
}
//  $sliderDot.forEach((e,i)=>{
//      e.addEventListener('click',() => {
//     slideTo(i);
//      })
//  })

//  //scroll To Section active menu

//  let aMenu = document.querySelectorAll('.menu li a');
// //lap mang ten va chieu cao Sec
//  let arrayId =[] ;
//  let arrayHeightSection = [];

// //vong lap lay id va Height cua section
// aMenu.forEach((item) =>{
// let idName = item.getAttribute('data-id');
// // console.log(idName);
// let heightSection = document.querySelector('.' +idName).offsetTop;
// arrayId.push(idName);
// arrayHeightSection.push(heightSection);
// })
// //bắt sự kiện scroll
// window.addEventListener('scroll',(e)=>{
//     let scrollPos = document.querySelector('html').scrollTop;
//     arrayHeightSection.forEach( (item,i) =>{
//         if(scrollPos >= item -document.querySelector('header').offsetHeight )
//         {
//             let tenID = arrayId[i];
//         aMenu.forEach((item)=>{
//             item.classList.remove('actived');
//         })
//         document.querySelector(`.menu li a[ data-id=${tenID}]`).classList.add('actived');
//         }
//     })
// })

// //text

// let heightH =  document.querySelector('header').offsetHeight;
// console.log(heightH);

//form-text
$(document).ready(function () {
    function ValidateEmail(mail) {
        if (
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
                mail
            )
        ) {
            return true;
        }
        return false;
    }
    $(document).on("click", "#submitForm", function () {
        let email = $('input[name = "email"]').val();
        let password = $('input[name ="password"]').val();
        let formOK = true;
        if (email == "") {
            formOK = false;
            $("#name .noEmpty p").css("display", "inline-block");
        } else {
            $("#name .noEmpty p").css("display", "none");
            $("#name .noEmpty h4").css("display", "none");
            let checkEmail = ValidateEmail(email);
            if (checkEmail) {
                // console.log("sai");
                $("#name .noEmpty h4").css("display", "none");
            } else {
                formOK = false;
                $("#name .noEmpty h4").css("display", "inline-block");
            }
        }
        if (password == "") {
            formOK = false;
            $("#password .noEmpty p").css("display", "inline-block");
        } else {
            console.log("check");
            $("#password .noEmpty p").css("display", "none");
        }
        if (formOK) {
            console.log("check ok");
            // $(".form-group .noEmpty").css("display", "none");
            // alert("pass qua tat ca");
            console.log("pass qua tat ca");
        }
    });
});
//flickity
let sliderCarousel = $(".slider .carousel");
sliderCarousel.flickity({
    cellAlign: "left",
    contain: true,
    wrapAround: true,
    prevNextButtons: false,
    on: {
        ready: function () {
            let dotted = $(".flickity-page-dots");
            paging = $(".slider__bottom .paging .dotted");
            dotted.appendTo(paging);
            console.log();
        },
        change: function (index) {
            let number = $(".slider__bottom .container-fluid .paging .number");
            let numberPage = index + 1;
            console.log(numberPage);
            number.text(numberPage.toString().padStart(2, "0"));
        },
    },
});
let prev = $(".slider__bottom .control .control__btn.--prev");
prev.click(function () {
    sliderCarousel.flickity("previous");
});
let next = $(".slider__bottom .control .control__btn.--next");
next.click(function () {
    sliderCarousel.flickity("next");
});

let newImages = $(".new__imgaes");
$(window).on("load", function () {
    newImages.flickity({
        cellAlign: "left",
        wrapAround: true,
        pageDots: false,
        // prevNextButtons: false,
        freeScroll: true,
        lazyLoad: true,
        // resize: true,
    });
});
