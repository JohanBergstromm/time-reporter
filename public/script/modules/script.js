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

        $.post('/times', data).then(function(response) {
            $('.days .day').each(function(i, el) {

                if (response.date.day == $(el).data('day')) {
                    $(el).append(`
                    <div class="time-item col-3" data-id="${response._id}">
	                	<div class="date">
	                		<p class="m-0 d-none">${response.date.day}/${response.date.month}</p>
	                	</div>
	                	<div class="time">
	                		<p class="m-0">Från: ${response.from.hour}:${response.from.minute} till ${response.to.hour}:${response.to.minute}</p>
	                	</div>
	                	<a class="remove-time my-2 btn btn-danger">Ta bort</a>
                	</div>`);
                    if ($(el).hasClass('d-none')) {
                        var date = $(el).find('.date p').eq(0).text();

                        $(el).removeClass('d-none');
                        $(el).find('#date').html(date);
                    }
                }
            });

            console.log(response);
        }).fail(function(err) {
            console.log(err)
        });

        // $[form.method](form.action, $(form).serialize()).then((response) => {
        //     console.log(response);
        // }).fail((err) => {
        //     console.error(err);
        // });
    });
});

$('.days').on('click', '.remove-time', function() {
    var timeItem = $(this).closest('.time-item');
    var id = timeItem.data('id');
    var buttonLength = $(this).closest('.day').find('.time-item').length;

    console.log(buttonLength)

    $.post('/times/' + id).then((response) => {
        console.log(response);
        timeItem.remove();
    }).fail((err) => {
        console.log(err);
    });
    if (buttonLength === 1) {
    	$(this).closest('.day').addClass('d-none');
    }
});

let daysValue = [];

$('.days .day').each(function(i, el) {
    daysValue.push($(el).data('day'));
    setTimeout(() => {
        if ($(el).find('.time-item').length) {
            var date = $(el).find('.date p').eq(0).text();

            $(el).removeClass('d-none');
            $(el).closest('.day').find('#date').html(date);
        }
    })
});

$('.time-item').each(function(i, el) {
    for (var i = 0; i < daysValue.length; i++) {
        if ($(el).data('day') == daysValue[i]) {
            var daysItem = $(`.days .day[data-day="${daysValue[i]}"]`);

            $(el).appendTo(daysItem);
            return;
        }
    }
});