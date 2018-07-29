$(document).ready(function() {
    getMonthlyTime();
    removeTime();
    reportTime();
    saveMonthlyTime();
    setYear();
    sortItems();
    if ($('.time-report').length) {
        calcTime();
    }
});

let currentTime = new Date();
let year = currentTime.getFullYear();

function setYear() {
    $('.year').val(year)
}

function reportTime() {
    $('.time-form').submit(e => {
        e.preventDefault();

        var selectedMonth = $('select#month').val();
        var savedMonths = $('.time-item')
            .find('.monthDone')
            .val();

        const fromHour = $('#fh').val();
        const fromMin = $('#fm').val();
        const toHour = $('#th').val();
        const toMin = $('#tm').val();
        const month = $('#month').val();
        const day = $('#day').val();
        const comment = $('#comment').val();
        const noTime = $('#no-time').is(':checked');

        if ($('.time-item').length > 0 && selectedMonth !== savedMonths) {
            alert('Ny månad är inte tillgänglig');
            console.log($('.time-item').length, savedMonths);
            return;
        }

        data = {
            from: {
                hour: fromHour,
                minute: fromMin,
            },
            to: {
                hour: toHour,
                minute: toMin,
            },
            date: {
                month: month,
                day: day,
            },
            add: {
                comment: comment,
            },
            month: month,
            year: year,
            noTime: noTime
        };

        $.post('/times', data)
            .then(function(response) {
                let template = Handlebars.templates['time']({ response });

                $('.days .day').each(function(i, el) {
                    if (response.date.day == $(el).data('day')) {
                        $(el).append(template);
                        if ($(el).hasClass('d-none')) {
                            var date = $(el)
                                .find('.date p')
                                .eq(0)
                                .text();

                            $(el).removeClass('d-none');
                            $(el)
                                .find('#date')
                                .html(date);
                        }
                    }
                });
                calcTime();
                setYear();
                console.log(response);
            })
            .fail(function(err) {
                console.log(err);
            });
    });
}

function saveMonthlyTime() {
    $('.time-bank').submit(e => {
        e.preventDefault();

        const months = [
            'Januari',
            'Februari',
            'Mars',
            'April',
            'Maj',
            'Juni',
            'Juli',
            'Augusti',
            'September',
            'Oktober',
            'November',
            'December',
        ];

        let month = months[$('.monthDone').val() - 1] + ' - ' + year;
        let monthTimes = [];
        let dataStorage = { month, monthTimes };

        $('.time-bank .time-item').each((i, el) => {
            const fromHour = $(el)
                .find('.fhDone')
                .val();
            const fromMin = $(el)
                .find('.fmDone')
                .val();
            const toHour = $(el)
                .find('.thDone')
                .val();
            const toMin = $(el)
                .find('.tmDone')
                .val();
            const month = $(el)
                .find('.monthDone')
                .val();
            const day = $(el)
                .find('.dayDone')
                .val();
            const commentt = $(el)
                .find('.commentDone')
                .val();
            const year = $(el)
                .find('.year')
                .val();
            const noTime = $(el)
                .find('.no-time').val();

            let data = {
                from: {
                    hour: fromHour,
                    minute: fromMin,
                },
                to: {
                    hour: toHour,
                    minute: toMin,
                },
                date: {
                    month: month,
                    day: day,
                },
                add: {
                    comment: commentt,
                },
                month: month,
                year: year,
                noTime: noTime
            };

            $.post('/time-bank', data)
                .then(function(response) {
                    console.log(response);
                })
                .fail(function(err) {
                    console.log(err);
                });
        });
    });
}

function getMonthlyTime() {
    $('.get-monthly-time').submit(function(e) {
        e.preventDefault();

        let month = $('.month-select').val();
        let year = $('.year-select').val();

        let data = {
            month: month,
            year: year
        };

        $.post('/get-monthly-time', data)
            .then(function(response) {

                let template = Handlebars.templates['monthlyTime']({ response });

                $('.data-holder').html(template);
                sortItems();
                if ($('.time-item').length) {
                    calcTime();
                    $('.remove-time-wrap').removeClass('d-none');
                }
                console.log(template);
            })
            .fail(err => {
                let template = Handlebars.templates['errorMessage']({ err });
                console.log(err.responseText);
                $('.data-holder').html(template);
                if ($('.alert.alert-danger').length) {
                    setTimeout(() => {
                        $('.alert.alert-danger').remove();
                    }, 3000)
                }
            });
    });
}

function removeTime() {
    $('.time-report .days, #saved-time').on('click', '.remove-time', function(e) {
        e.preventDefault();

        var timeItem = $(this).closest('.time-item');
        var id = timeItem.data('id');
        var buttonLength = $(this)
            .closest('.day')
            .find('.time-item').length;


        setTimeout(() => {
            calcTime();
        }, 100)

        if ($('.time-report').length) {
            $.post('/times/' + id)
                .then(response => {
                    console.log(response);
                    timeItem.remove();
                })
                .fail(err => {
                    console.log(err);
                });
        } else {
            $('#saved-time .time-item').each(function(i, el) {
                var id = $(el).data('id');

                $.post('/time-bank/' + id)
                    .then(response => {
                        console.log(response);
                        $('#saved-time .days').remove();
                    })
                    .fail(err => {
                        console.log(err);
                    });
            });
        }

        if (buttonLength === 1) {
            $(this)
                .closest('.day')
                .addClass('d-none');
        }

        if ($('#saved-time').length) {
            $('.total-time-wrap').remove();
            $('.remove-time-wrap').remove();
        }

        if ($('.time-report').length && $('.time-item').length == 1) {
            $('.total-time-wrap').remove();
        }
    });
}

function calcTime() {
    if (!$('.time-item').length) {
        return;
    }

    if ($('.time-item').length) {
        $('.total-time-wrap').removeClass('d-none');
    }

    let timeThisMonth = [];

    $('.time-item').each(function(i, el) {
        let $el = $(el);
        let noTime = $el.find('.no-time').val();
        let fromHour = parseInt($el.find('.time .fhDone').val() * 60);
        let fromMin = parseInt($el.find('.time .fmDone').val());
        let fromTime = fromHour + fromMin;
        let toHour = parseInt($el.find('.time .thDone').val() * 60);
        let toMin = parseInt($el.find('.time .tmDone').val());
        let toTime = toHour + toMin;
        let timeSpent = toTime - fromTime;

        if (noTime == 'true') {
            return;
        } else {
            timeThisMonth.push(timeSpent);
        }

    });
    let totalTimeThisMonth = (timeThisMonth.reduce((a, b) => a + b) / 60).toFixed(2);

    $('#total-time').html(totalTimeThisMonth);
}

function resetHTML() {
    $('.day').addClass('d-none');
    $('.time-item').remove();
}

function sortItems() {
    let daysValue = [];

    $('.days .day').each(function(i, el) {
        daysValue.push($(el).data('day'));
        setTimeout(() => {
            if ($(el).find('.time-item').length) {
                var date = $(el)
                    .find('.date p')
                    .eq(0)
                    .text();

                $(el).removeClass('d-none');
                $(el)
                    .closest('.day')
                    .find('#date')
                    .html(date);
            }
        });
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
}