if (typeof jQuery === 'undefined') {
    throw new Error('Requires jQuery')
}

var pathname = window.location.pathname,
pages = ['/','/members/', '/publications/', '/class/', '/research/','/pictures/'];
$('.nav > li').each(function(i) {
 if (pathname == pages[i]) $(this).addClass('active');
 else if (this.className.includes('active')) this.removeClass('active');
});
