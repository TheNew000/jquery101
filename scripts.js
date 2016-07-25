$(document).ready(function(){
    // This code will only run when the ready event has happened.  The DOM will be fully loaded before anything runs
    // document.getElementById('thing').style.display = "none";
    $('button').click(function(){
        var theTrick = ($(this).attr('todo'));
        if(theTrick == "hide"){
            $('#thing').hide();
        }else if(theTrick == "show"){
            $('#thing').show();
        }else if(theTrick == "toggle"){
            $('#thing').toggle();
        }else if(theTrick == "HTML"){
            console.log($('#thing').html());
            $('#thing').html('<table border="1"><tr><td>I am a Table!!</td></tr></table>');
        }else if(theTrick == 'prepend'){
            $('#thing').prepend('<div class="green"> I have a friend to my right</div>');
        }else if(theTrick == 'append'){
            $('#thing').append('<div class="blue"> I have a friend to my left</div>');
        }else if(theTrick == 'css'){
            $('#thing').css({
                'color': 'orange',
                'font-size': '50px'
            })
        }else if (theTrick == 'addClass'){
            $('#thing').addClass('fancy');
        }else if (theTrick == 'removeClass'){
            $('#thing').removeClass('fancy');
        }else if (theTrick == 'animate'){
            $('#thing').animate({
                height: 'toggle',
                right: '+= 50',
                opacity: '0.25'
            }, 3000, function(){
                alert('I am done!');
            });
        }else if (theTrick == 'delay'){
            $('#thing').delay(5000).fadeTo('fast', 0.5);
        }else if (theTrick == 'slideDown'){
            $('#thing').slideDown(5000);
        }else if (theTrick == 'wrap'){
            $('#thing').wrap(function(){
                return "<div class ='" +$(this).text() + "'></div";
            });
        }else if (theTrick == 'on'){
            $('#thing').on('click', function(){
                alert("This is the Button you're looking for")
            });
        }else if (theTrick == 'prependTo'){
            $('<p>Test</p>').prependTo('.btn');
        }

        // }else if(theTrick == 'each'){
        //     $('button').each(function(){
        //         alert($(this).html());
        //     });
        // }
    });
});


function toggle(){
    var thing = document.getElementById('thing')
    thing.style.display = "none";
    if(thing.style.display == "inline-block"){
        thing.style.display = "none";
    }else{
        thing.style.display = "inline-block";
    }   
}
