$(document).ready(function () {


    let $btns = $('.project-area .button-group button');


    $btns.click(function (e) {

        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter: selector
        });

        return false;
    })

    $('.project-area .button-group #btn1').trigger('click');


    // sticky navigation menu

    let nav_offset_top = $('.header_area').height() + 50;

    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header_area .main-menu').addClass('navbar_fixed');
                } else {
                    $('.header_area .main-menu').removeClass('navbar_fixed');
                }
            })
        }
    }

    navbarFixed();

    $('#contact-form').validate({
        rules:{
            username:{
                required:true,
                minlength:4
            },
            usermail:{
                required:true,
                email:true,
            }
        }
    })

    $("#submit-form").submit((e)=>{
        e.preventDefault()
        $.ajax({
            url:"https://script.google.com/macros/s/AKfycbwBI39PXQHPV7ZbtX3eAffvM3ENRwLuAUreVFEyz5Erhg1nQUxGDCk-GFfS8BCWhTekKQ/exec",
            data:$("#submit-form").serialize(),
            method:"post",
            success:function (response){
                alert("Form submitted successfully")
                window.location.reload()
            },
            error:function (err){
                alert("Something Error")

            }
        })
    })

    // scroll page to id
    $("#hire-bt").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#contact-area").offset().top
        }, 3000);
    });
});