var calendar = {

    init: function() {


        /**
         * Get current date
         */
        var d = new Date();
        var strDate = d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate();


        /**
         * Get current month and set as '.current-month' in title
         */
        var monthNumber = d.getMonth() + 1;

        function GetMonthName(monthNumber) {
            var months = ['Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni', 'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December'];
            return months[monthNumber - 1];
        }

        $('.month').text(GetMonthName(monthNumber));

        /**
         * Get current day and set as '.current-day'
         */
        $('tbody td:contains("' + d.getDate() + '")').addClass('current-day');

        /**
         * Add class '.active' on calendar date
         */
        $('tbody td').on('click', function(e) {
            if ($(this).hasClass('event')) {
                $('tbody td').removeClass('active');
                $(this).toggleClass('active');
            } else {
                $('tbody td').removeClass('active');
            };
        });

        /**
         * Get current day on click in calendar
         * and find day-event to show
         */
        $('tbody td').on('click', function(e) {
            $('.day-event').slideUp('fast');
            var dayEvent = $(this).text();
            $('.day-event[date-id="' + dayEvent + '"]').slideDown('fast');
        });

        /**
         * Close day-event
         */
        $('.close').on('click', function(e) {
            $(this).parent().slideUp('fast');
        });

    },
};

$(document).ready(function() {

    calendar.init();

});