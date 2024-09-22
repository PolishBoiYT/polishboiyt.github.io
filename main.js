$(document).ready(function() {
    $.easing.easeInOutQuad = function(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };

    const clickSound = $('#click-sound')[0];
    const gameSound = $('#game-sound')[0];

    $('.nav-links a, .play-audio').on('click', function(event) {
        event.preventDefault();
        clickSound.play();

        if ($(this).hasClass('play-audio')) {
            gameSound.play();
        }

        const target = $(this).attr('href');
        
        if (target && target !== '#') {
            const $targetSection = $(target);
            if ($targetSection.length) {
                $('section').removeClass('visible').css('opacity', 0);
                $targetSection.addClass('visible').css('opacity', 1);

                $('html, body').animate({
                    scrollTop: $targetSection.offset().top
                }, 800, 'easeInOutQuad');
            }
        }
    });
});

function foundme() {
	alert("You've found the hidden easter egg!")
}