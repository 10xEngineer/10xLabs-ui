$(function () {
    $('.service-feed .messages-list').cycle(
        {
            fx:'scrollHorz',
            easeIn:'easeOutQuart',
            next:'.next-message-link',
            prev:'.previous-message-link'
        }
    );
});