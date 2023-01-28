// 1. Show the current date and time at the top
const today = moment();

window.setInterval(function () {
    $('#currentDay').html(moment().format('dddd Do, MMMM YYYY, hh:mm:ss'));
    currentTime = moment().hour();
    taskedColours();
}, 1000);


// add event listener to the save button on click
$('.saveBtn').on('click',function(){
    var inputValue = $(this).siblings('.description').val();
    var hour = $(this).parent().attr('id');


    //save to local storage
    localStorage.setItem('hour', inputValue);

    var savedInput = localStorage.getItem('hour');

    var inputValue = $(this)
    
    
});


    
var taskedColours = function(){
    
    
    $('.row').each( function(){
        var time = parseInt($(this).attr('id'));
        $(this).removeClass('past present future');
        
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