$(document).ready(function() {
    sortItems();
    reportTime();
    saveMonthlyTime();
    removeTime();
    //showMonthlyTime();
    getMonthlyTime();
});

function reportTime() {
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
            },
            month: month
        }

        $.post('/times', data).then(function(response) {
            var template = '';

            $('.days .day').each(function(i, el) {
                if (response.add.comment) {
                    template +=`
                    <div class="time-item col-3" data-id="${response._id}">
                        <div class="date">
                            <p class="m-0 d-none">${response.date.day}/${response.date.month}</p>
                        </div>
                        <div class="time">
                            <p class="m-0">Från: ${response.from.hour}:${response.from.minute} Till ${response.to.hour}:${response.to.minute}</p>
                        </div>
                        <div class="comment">
                            <p class="m-0">Kommentar: ${response.add.comment}</p>
                        </div>
                        <a class="remove-time my-2 btn btn-danger">Ta bort</a>
                    </div>
                    <div class="d-none">
                        <input type="hidden" class="fhDone" name="fromHour" value="${response.from.hour}">
                        <input type="hidden" class="fmDone" name="fromMin" value="${response.from.minute}">
                        <input type="hidden" class="thDone" name="toHour" value="${response.to.hour}">
                        <input type="hidden" class="tmDone" name="toMin" value="${response.to.minute}">
                        <input type="hidden" class="commentDone" name="comment" value="${response.add.comment}">
                    </div>`
                } else {
                    template +=`
                    <div class="time-item col-3" data-id="${response._id}">
                        <div class="date">
                            <p class="m-0 d-none">${response.date.day}/${response.date.month}</p>
                        </div>
                        <div class="time">
                            <p class="m-0">Från: ${response.from.hour}:${response.from.minute} Till ${response.to.hour}:${response.to.minute}</p>
                        </div>
                        <a class="remove-time my-2 btn btn-danger">Ta bort</a>
                    </div>
                    <div class="d-none">
                        <input type="hidden" class="fhDone" name="fromHour" value="${response.from.hour}">
                        <input type="hidden" class="fmDone" name="fromMin" value="${response.from.minute}">
                        <input type="hidden" class="thDone" name="toHour" value="${response.to.hour}">
                        <input type="hidden" class="tmDone" name="toMin" value="${response.to.minute}">
                    </div>`
                }

                if (response.date.day == $(el).data('day')) {
                    $(el).append(template);
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
    });
}

function saveMonthlyTime() {
    $('.time-bank').submit((e) => {
        e.preventDefault();

        const months = ['Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni', 'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December'];
        let currentTime = new Date();
        let year = currentTime.getFullYear();
        let month = months[$('.monthDone').val() - 1] + ' - ' + year;
        let monthTimes = [];
        let dataStorage = { month, monthTimes }

        $('.time-bank .time-item').each((i, el) => {
            const fromHour = $(el).find('.fhDone').val();
            const fromMin = $(el).find('.fmDone').val();
            const toHour = $(el).find('.thDone').val();
            const toMin = $(el).find('.tmDone').val();
            const month = $(el).find('.monthDone').val();
            const day = $(el).find('.dayDone').val();
            const commentt = $(el).find('.commentDone').val();

            let data = {
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
                    comment: commentt
                },
                month: month
            }

            $.post('/time-bank', data).then(function(response) {
                console.log(response);
            }).fail(function(err) {
                console.log(err)
            });
        });
    });
}

function getMonthlyTime() {
    $('.get-monthly-time').submit(function(e) {
        e.preventDefault();

        var template = '';
        var month = $('.month-select').val();

        var data = {
            month: month
        }

        $.post('/get-monthly-time', data).then(function(response) {
            console.log(response)
            for (let data of response) {
                //var data = response[item];
                if (data.add) {
                    template += `<div class="time-item col-3" data-id="${data._id}" data-day="${data.date.day}">
                        <div class="date">
                            <p class="d-none">${data.date.day}/${data.date.month}</p>
                        </div>
                        <div class="time">
                            <p class="m-0">Från: ${data.from.hour}:${data.from.minute} Till: ${data.to.hour}:${data.to.minute}</p>
                        </div>
                        <div class="comment">
                            <p class="m-0">Kommentar: ${data.add.comment}</p>
                        </div>
                        <a class="d-none remove-time btn btn-danger my-2">Ta bort</a>
                    </div>`;
                } else {
                    template += `<div class="time-item col-3" data-id="${data._id}" data-day="${data.date.day}">
                        <div class="date">
                            <p class="d-none">${data.date.day}/${data.date.month}</p>
                        </div>
                        <div class="time">
                            <p class="m-0">Från: ${data.from.hour}:${data.from.minute} Till: ${data.to.hour}:${data.to.minute}</p>
                        </div>
                        <a class="d-none remove-time btn btn-danger my-2">Ta bort</a>
                    </div>`;
                }
            }
            $('.data-holder').html(template);
            sortItems();
            console.log(template)
        }).fail((err) => {
            console.log(err);
        });
    });
}

function removeTime() {
    $('.time-report .days, .time-bank').on('click', '.remove-time', function() {
        var timeItem = $(this).closest('.time-item');
        var id = timeItem.data('id');
        var buttonLength = $(this).closest('.day').find('.time-item').length;

        if ($('.time-report').length) {
            $.post('/times/' + id).then((response) => {
                console.log(response);
                timeItem.remove();
            }).fail((err) => {
                console.log(err);
            });
        } else {
            $('.time-bank .time-item').each(function(i, el) {
                var id = $(el).data('id');

                $.post('/time-bank/' + id).then((response) => {
                    console.log(response);
                    $('.time-bank .days').remove();
                }).fail((err) => {
                    console.log(err);
                });

            });
        }

        if (buttonLength === 1) {
            $(this).closest('.day').addClass('d-none');
        }
    });
}

// function showMonthlyTime() {
//     $('.time-bank').on('click', 'h3', function() {
//         let template = '';
//         let selectedMonth = $(this).closest('div');
//         let id = selectedMonth.data('id');

//         resetHTML();

//         $.post('/time-bank/' + id).then((response) => {
//             for (let data of response.monthTimes) {

//                 if (data.add) {
//                     template += `<div class="time-item col-3" data-id="${response._id}" data-day="${data.date.day}">
//                      <div class="date">
//                          <p class="d-none">${data.date.day}/${data.date.month}</p>
//                      </div>
//                      <div class="time">
//                          <p class="m-0">Från: ${data.from.hour}:${data.from.minute} Till: ${data.to.hour}:${data.to.minute}</p>
//                      </div>
//                      <div class="comment">
//                          <p class="m-0">Kommentar: ${data.add.comment}</p>
//                      </div>
//                      <a class="d-none remove-time btn btn-danger my-2">Ta bort</a>
//                  </div>`;
//                 } else {
//                     template += `<div class="time-item col-3" data-id="${response._id}" data-day="${data.date.day}">
//                      <div class="date">
//                          <p class="d-none">${data.date.day}/${data.date.month}</p>
//                      </div>
//                      <div class="time">
//                          <p class="m-0">Från: ${data.from.hour}:${data.from.minute} Till: ${data.to.hour}:${data.to.minute}</p>
//                      </div>
//                      <a class="d-none remove-time btn btn-danger my-2">Ta bort</a>
//                  </div>`;
//                 }
//             }
//             $('.data-holder').html(template)
//             sortItems();
//         }).fail((err) => {
//             console.log(err);
//         });
//     });
// }

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
}