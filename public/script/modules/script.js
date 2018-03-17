$(document).ready(function() {
    // const form = document.createBooking;

    $('.time-form').submit((e) => {
        e.preventDefault();

        const fromHour = $('#fh').val();
        const fromMin = $('#fm').val();
        const toHour = $('#th').val();
        const toMin = $('#tm').val();
        const month = $('#month').val();
        const day = $('#day').val();
        const comment = $('#comment').val();

        data = {
            from: {
                hour: fromHour,
                minute: fromMin
            },
            to: {
                hour: toHour,
                minute: toMin
            },
            date: {
                month: month,
                day: day
            },
            add: {
                comment: comment
            }
        }

        $.post('/times', data).then(function(response){

            setTimeout(function(){
                // template broken make js
                // var template = Handlebars.templates['time'](response);
                // $('.time-wrap').append(template);
                $('.time-wrap').append('<div>' + response.date.month+ '</div>');
            }, 1000);

            
            console.log(response);
        }).fail(function(err){
            console.log(err)
        });

        // $[form.method](form.action, $(form).serialize()).then((response) => {
        //     console.log(response);
        // }).fail((err) => {
        //     console.error(err);
        // });
    });
});

$('.remove-time').click(function() {
    var timeItem = $(this).parent();
    var id = timeItem.data('id');


    $.post('/times/' + id).then((response) => {
        console.log(response);
        timeItem.remove();
    }).fail((err) => {
        console.log(err);
    });
});