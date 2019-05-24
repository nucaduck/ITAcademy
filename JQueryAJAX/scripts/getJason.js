$('#button').click(function() {

    $('#placeholder').remove();

    $.getJSON( 'http://api.icndb.com/jokes/random', function(data) {
        $('#show').html('<p>'+ data.value.joke + '</p>');
    });

});
