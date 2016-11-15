//Navigation Transition
$(window).scroll(function() {
    if ($(document).scrollTop() > 40) {
        $('nav, .oo-social-icons, .oo-social-list, .oo-logo-transition').addClass('shrink');
    } else {
        $('nav, .oo-social-icons, .oo-social-list, .oo-logo-transition').removeClass('shrink');
    }
});

//Select Box - Class Update
var select = document.getElementById('oo-contribute-select');
select.onchange = function () {
    select.className = this.options[this.selectedIndex].className;
}