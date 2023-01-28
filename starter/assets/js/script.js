// 1. Show the current date and time at the top
const today = moment();
window.setInterval(function () {
    $('#currentDay').html(moment().format('dddd Do, MMMM YYYY, hh:mm:ss'))
}, 1000);


// add event listener to the save button on click
$('.saveBtn').on('click',function(){
    var inputValue = $(this).siblings('.description').val();
    var hour = $(this).parent().attr('id');


    //save to local storage
    localStorage.setItem(hour, inputValue);
    
    
});


    
var taskedColours = function(){
    
    var currentTime = moment().hour();
    $('.row').each( function(){
        var time = parseInt($(this).attr('id'));
        
        if(time < currentTime){
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