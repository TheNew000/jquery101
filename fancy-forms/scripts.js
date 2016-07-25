$(document).ready(function(){
    //Add a listener for the form submission... when we want validation to happen
    $('.signup-form').submit(function(){
        event.preventDefault();

        //Check to see if field is empty
        $('input').each(function(){
            if($(this).val() == ''){
                $(this).before("<div class='empty'></div>");
                $('.empty').html('This field is required!');
            }
        });

        //Password must be 6 characters and match
        var password = $('.password').val();
        var password2 = $('.password2').val();
        if(password.length < 6){
            $('.password').focus();
            $('.pass-error').html('Your password must be at least 6 characters');
        }else if(password != password2){
            $('.password2').focus();
            $('.password2').before("<div class='unmatched'></div>");
            $('.unmatched').html('Your passwords do not match!'); 
        }

        // Checkbox must be checked
        if($('input[type="checkbox"]').is(":checked") == 0){
            $('.privacy').before("<div class='unchecked'></div>");
            $('.unchecked').html('Please read and agree to our terms and policies');
        }

        //Valid Email Address
        var validEmail = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        if(!validEmail.test($('.email'))){
            $('.privacy').before("<div class='unValid'></div>");
            $('.unValid').html('Email invalid!');
        }

        //Valid Phone Number
        var validPhone = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
        if(!validPhone.test($('.phone'))){
            $('.phone').before("<div class='unvalidPhone'></div>");
            $('.unvalidPhone').html('Phone Number is incorrect');
        }
    });
});



