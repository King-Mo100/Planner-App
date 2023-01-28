// 1. Show the current date and time at the top
const today = moment();

window.setInterval(function () {
    $('#currentDay').html(moment().format('dddd Do, MMMM YYYY, 0LTS'));
}, 1000);

currentTime = moment().format('H');

// add event listener to the save button on click
$('.saveBtn').on('click',function(){
    var inputValue = $(this).siblings('.description').val();
    var hour = $(this).parent().attr('id');

    //save to local storage
    localStorage.setItem(hour, inputValue);
});
console.log(localStorage)
// retrieve the inputValue from local storage once page is loaded
$(document).ready(function(){
    $('.row').each( function(){
        var hour = $(this).attr('id');
        var task = localStorage.getItem(hour);
        $(this).find('.description').val(task);
    });
});

var taskedColours = function(){
    $('.row').each( function(){
        var time = parseInt($(this).attr('id'));
        $(this).removeClass('past present future');

        if (time < currentTime){
            $(this).addClass('past');
        }

        else if (time === currentTime){
            $(this).addClass('present');
        }
        else{
            $(this).addClass('future');
        }
    });
}

taskedColours();