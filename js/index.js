$(function() {
    setupContent();
    $(window).resize(function() {
        setupContent();
    });
});

function setupContent() {
    $('.content').each(function() {
        if ($(this).children('.content-body').outerHeight() < $(
            window).innerHeight()) {
            $(this).css('height', $(window).innerHeight());
        } else {
            $(this).css('height', $(this).children('.content-body')
                .outerHeight());
        }
    });
    $('.content-body').each(function() {
        if ($(this).outerHeight() > $(window).innerHeight()) {
            $(this).css('top', '0').css('transform', 'inherit');
        } else {
            $(this).css('top', '50%').css('transform',
                'translateY(-50%)');
        }
    });
}
