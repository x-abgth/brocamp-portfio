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

    // $.validator.addMethod("nowhitespace", function(value, element) {
    //     return this.optional(element) || /^\S+$/i.test(value);
    // }, "No white space please");

    // $('#contact-form').validate({
    //     rules:{
    //         username:{
    //             required:true,
    //             nowhitespace: true,
    //             minlength:4
    //         },
    //         usermail:{
    //             required:true,
    //             nowhitespace: true,
    //             email:true,
    //         }
    //     }
    // })



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


var nameErr = document.getElementById('name-error');
var emailErr = document.getElementById('email-error');
var msgErr = document.getElementById('msg-error');

function validateName(){
    var name = document.getElementById('txtname').value;

    if(name.length == 0) {
        nameErr.innerHTML = 'Name is required';
        return false;
    }

    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameErr.innerHTML = 'Enter full name';
        return false;
    }
    nameErr.innerHTML = ""
    return true
}

function validateEmail(){
    var email = document.getElementById('txtemail').value;

    if(email.length == 0) {
        emailErr.innerHTML = 'Email is required';
        return false;
    }

    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailErr.innerHTML = 'Enter a valid email';
        return false;
    }
    emailErr.innerHTML = ""
    return true
}

function validateMsg(){
    var msg = document.getElementById('textAreaExample1').value;

     if(msg.length < 5) {
        msgErr.innerHTML = 'Please add more content in the message';
        return false;
    }

    msgErr.innerHTML = ""
    return true
}

function validateForm() {
    if(!validateName() || !validateEmail() || !validateMsg()) {
        return false;
    }
}