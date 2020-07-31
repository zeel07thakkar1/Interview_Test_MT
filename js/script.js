jQuery(document).ready(function($) {

  $('.pay_m_card').addClass('payment_method_active');
  $('.method_checked_card').css('visibility', 'visible');

  

  $('.signin_btn').click(function(event) {
    
    var email = $('.input_email').val();
    var pass = $('.input_pass').val();
    
    if(email == "" && pass =="")
    {
      $('.input_blue').css('border', '1px solid #ab0f0f');
    }
    if(email == "")
    {
      $('.input_email').css('border', '1px solid #ab0f0f');
    }
    if(pass == "")
    {
      $('.input_pass').css('border', '1px solid #ab0f0f');
    }

});

  



   $('.show_password').click(function(event) {
    var pass = $('.input_pass');

    if((pass).attr('type', 'password'))
    {
        pass.attr('type', 'text');
        $(this).css('display', 'none');
        $('.hide_password').css('display', 'block');
    }
  });


   $('.hide_password').click(function(event) {
        var pass = $('.input_pass');

        if((pass).attr('type', 'text'))
        {
            pass.attr('type', 'password');
            $(this).css('display', 'none');
            $('.show_password').css('display', 'block');
        }
        
   });

   $('.pay_m_card').click(function(event) {
    
    $(this).addClass('payment_method_active');
    $('.method_checked_card').css('visibility', 'visible');
    $('.method_checked_crypto').css('visibility', 'hidden');
    $('.pay_m_crypto').removeClass('payment_method_active');
     
   });

   $('.pay_m_crypto').click(function(event) {
    
    $(this).addClass('payment_method_active');
    $('.method_checked_crypto').css('visibility', 'visible');
    $('.method_checked_card').css('visibility', 'hidden');
    $('.pay_m_card').removeClass('payment_method_active');
     
   });



   $('.payment_method_select_btn').click(function(event) {
     
     if($('.pay_m_card').hasClass('payment_method_active'))
     {
      
        $('#pay_container').hide();
        $('#creditcard_container').fadeIn('slow');
     }

      if($('.pay_m_crypto').hasClass('payment_method_active'))
     {
     
        $('#pay_container').hide();
        $('#crypto_container').fadeIn('slow');
     }

   });


// screen3-------------------------------

$('.select_plan_btn').click(function(event) {
  
  $('#plan_container').hide();
  $('#acc_container').fadeIn('slow');
  $('.acc_item , .plan_item').css('border-top', '2px solid #2ad694');
  $(this).parentsUntil('html').find('.nav-item .radio').eq(1).addClass('radio_active');
  // $('.radio').not(active_radio_btn).removeClass('radio_active');
});


$('.cont_btn_acc_cont').click(function(event) {
    
    var email = $('.input_email').val();
    var pass = $('.input_pass').val();

    
    if(email != "" && pass !="")
    {
      $('#acc_container').hide();
      $('#pay_container').fadeIn('slow');
      $('.pay_item').css('border-top', '2px solid #2ad694');
      $(this).parentsUntil('html').find('.nav-item .radio').eq(2).addClass('radio_active');
      // $('.radio').not(active_radio_btn).removeClass('radio_active');
    }
    
});


$('.plan_item').click(function(event) {
  $('#plan_container').fadeIn();
  $('#acc_container').hide();
  $('#pay_container').hide();
});

$('.acc_item').click(function(event) {
  $('#plan_container').hide();
  $('#acc_container').fadeIn();
  $('#pay_container').hide();
});

$('.pay_item').click(function(event) {
  $('#plan_container').hide();
  $('#acc_container').hide();
  $('#pay_container').fadeIn();
});



$('.process_link').eq(0).click(function(event) 
{

      $(this).siblings('.radio').addClass('radio_active');
      $(this).parents('.nav').find('.nav-item .radio').eq(1).removeClass('radio_active');
      $(this).parents('.nav').find('.nav-item .radio').eq(2).removeClass('radio_active');

      $(this).parent('.nav-item').css('border-top', '2px solid #2ad694');
      $(this).parents('.nav').find('.nav-item').eq(1).css('border-top', '2px solid #4b4f53');
      $(this).parents('.nav').find('.nav-item').eq(2).css('border-top', '2px solid #4b4f53');

});


$('.process_link').eq(1).click(function(event) 
{

     $(this).parents('.nav').find('.nav-item .radio').eq(0).addClass('radio_active');
     $(this).siblings('.radio').addClass('radio_active');
     $(this).parents('.nav').find('.nav-item .radio').eq(2).removeClass('radio_active');

      $(this).parent('.nav-item').css('border-top', '2px solid #2ad694');
      $(this).parents('.nav').find('.nav-item').eq(0).css('border-top', '2px solid #2ad694');
      $(this).parents('.nav').find('.nav-item').eq(2).css('border-top', '2px solid #4b4f53');

  });

$('.process_link').eq(2).click(function(event) 
{
      $(this).parents('.nav').find('.nav-item .radio').eq(0).addClass('radio_active');
      $(this).parents('.nav').find('.nav-item .radio').eq(1).addClass('radio_active');
      $(this).siblings('.radio').addClass('radio_active');

      $(this).parent('.nav-item').css('border-top', '2px solid #2ad694');
      $(this).parents('.nav').find('.nav-item').eq(0).css('border-top', '2px solid #2ad694');
      $(this).parents('.nav').find('.nav-item').eq(1).css('border-top', '2px solid #2ad694');
});

 
  
$('.back_link').click(function(event) {
    
    $('#creditcard_container,#crypto_container').hide();
    $('#pay_container').fadeIn('slow');
  
});

function display_prc (price) {
  
  var p=price;
  var prc1=$('#creditcard_container').find('.navy_div .selected_plan_prc');
  var prc2=$('#creditcard_container').find('.pay_btn .selected_plan_prc');
  var prc3=$('#crypto_container').find('.navy_div .selected_plan_prc');
  prc1.text(p);
  prc2.text(p);
  prc3.text(p);

}
$('.plan_btn_129').click(function(event) {
  
  display_prc(129);

});

$('.plan_btn_249').click(function(event) {
  
  display_prc(249);

});




});


 




