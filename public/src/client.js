(function () {
    $(window).on('action:app.load', function (event, data) {
        
        if (window.location.hash === '#new_topic') {
            let article = getParameterByName('article'),
                lang = getParameterByName('lang') || 'tr';

            if(!article) return;

            let url = 'http://dkblog.com/reader/' + lang + '/article/' + article;
            
            $.ajax(url, {
                contentType: 'application/json',
                crossDomain: true,
                method: 'GET',
                complete: function(data, status) {
                   
                    console.log(data, status);
                },
                success: function (data) {

                    console.log(data);
                    $(window).trigger('action:composer.topic.new', {
                        body: data.content.sub_title || '',
                        title: data.content.title || '',
                        cid: 1,
                        tags: data.content.keywords || []
                    });
                }
            })
            
        }
    });
})();

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
