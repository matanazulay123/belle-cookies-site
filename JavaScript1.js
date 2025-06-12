

var i = 0;
var pics = new Array();

pics[0] = "blueberry.jpg";
pics[1] = "o.jpg";
pics[2] = "choco.jpg";
pics[3] = "co.jpg";
pics[4] = "brownies.jpg";
pics[5] = "m.jpg";
pics[6] = "lemon.jpg";
pics[7] = "apple.jpg";
pics[8] = "pecanpie.jpg";


function swapImage() {
    document.slide.src = pics[i];
    if (i < pics.length - 1)
        i++;
    else i = 0;
    setTimeout("swapImage()",1400);
}

window.onload = swapImage;


var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
ctx.font = 'bold 75px Ariel ';
ctx.fillStyle = "#FCB0F4";
ctx.fillText("Belle's Cookies", 20, 75);


function nav1() {
    document.getElementById("myDropdown1").classList.toggle("show1");
}


window.onclick = function (e) {
    if (!e.target.matches('.dropbtn1')) {
        var myDropdown1 = document.getElementById("myDropdown1");
        if (myDropdown1.classList.contains('show1')) {
            myDropdown1.classList.remove('show1');
        }
    }
}
function nav2() {
    document.getElementById("myDropdown2").classList.toggle("show2");
}

window.onclick = function (e) {
    if (!e.target.matches('.dropbtn2')) {
        var myDropdown2 = document.getElementById("myDropdown2");
        if (myDropdown2.classList.contains('show2')) {
            myDropdown2.classList.remove('show2');
        }
    }
}
function nav3() {
    document.getElementById("myDropdown3").classList.toggle("show3");
}


window.onclick = function (e) {
    if (!e.target.matches('.dropbtn3')) {
        var myDropdown3 = document.getElementById("myDropdown3");
        if (myDropdown3.classList.contains('show3')) {
            myDropdown3.classList.remove('show3');
        }
    }
}
$(document).ready(function () {
    var btn = $('#backToTop');
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });
    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '300');
    });
});