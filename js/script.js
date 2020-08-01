jQuery(document).ready(function($) {

  $('.pay_m_card').addClass('payment_method_active');
  $('.method_checked_card').css('visibility', 'visible');

  
  // --------Check email & password in modal-----
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


  // ----------show password---------
  $('.show_password').click(function(event) {
      var pass = $('.input_pass');

      if((pass).attr('type', 'password'))
      {
          pass.attr('type', 'text');
          $(this).css('display', 'none');
          $('.hide_password').css('display', 'block');
      }
    });


  //-------hide password-----------------------
   $('.hide_password').click(function(event) {
        var pass = $('.input_pass');

        if((pass).attr('type', 'text'))
        {
            pass.attr('type', 'password');
            $(this).css('display', 'none');
            $('.show_password').css('display', 'block');
        }
    });


   //-------select payment method div-------------
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


//-------select plan---------------------------
  $('.select_plan_btn').click(function(event) {
    
    $('#plan_container').hide();
    $('#acc_container').fadeIn('slow');
    $('.acc_item , .plan_item').css('border-top', '2px solid #2ad694');
    $(this).parentsUntil('html').find('.nav-item .radio').eq(1).addClass('radio_active');
  });

  //-----account container continue btn--------
  $('.cont_btn_acc_cont').click(function(event) {
      
      var email = $('.input_email').val();
      var pass = $('.input_pass').val();
      if(email != "" && pass !="")
      {
        $('#acc_container').hide();
        $('#pay_container').fadeIn('slow');
        $('.pay_item').css('border-top', '2px solid #2ad694');
        $(this).parentsUntil('html').find('.nav-item .radio').eq(2).addClass('radio_active');
        
      }
    });


  //-------plan tab click-----------------------
  $('.process_link').eq(0).click(function(event) 
  {
      const parent= $(this).parents('.nav');

        $(this).siblings('.radio').addClass('radio_active');
        parent.find('.nav-item .radio').eq(1).removeClass('radio_active');
        parent.find('.nav-item .radio').eq(2).removeClass('radio_active');

        $(this).parent('.nav-item').css('border-top', '2px solid #2ad694');
        parent.find('.nav-item').eq(1).css('border-top', '2px solid #4b4f53');
        parent.find('.nav-item').eq(2).css('border-top', '2px solid #4b4f53');

        $('#plan_container').fadeIn();
        $('#acc_container').hide();
        $('#pay_container').hide();

  });

  //------account tab click------------------
  $('.process_link').eq(1).click(function(event) 
  {
      const parent= $(this).parents('.nav');

       parent.find('.nav-item .radio').eq(0).addClass('radio_active');
       $(this).siblings('.radio').addClass('radio_active');
       parent.find('.nav-item .radio').eq(2).removeClass('radio_active');

        $(this).parent('.nav-item').css('border-top', '2px solid #2ad694');
        parent.find('.nav-item').eq(0).css('border-top', '2px solid #2ad694');
        parent.find('.nav-item').eq(2).css('border-top', '2px solid #4b4f53');

            $('#plan_container').hide();
            $('#acc_container').fadeIn();
            $('#pay_container').hide();

    });

  //---------payment tab click------------------
  $('.process_link').eq(2).click(function(event) 
  {
       
        var email = $(this).parentsUntil('html').find('#acc_container .input_email').val();
        var pass = $(this).parentsUntil('html').find('#acc_container .input_pass').val();

        const parent= $(this).parents('.nav');

       if(email == "" && pass =="")
        {
            alert("You can't Go Dirctly to Payment!!! Please Fill the E-mail & Password");
            $('#plan_container, #pay_container').hide();
            $('#acc_container').fadeIn();

            parent.find('.nav-item .radio').eq(0).addClass('radio_active');
            parent.find('.nav-item .radio').eq(1).addClass('radio_active');

            parent.find('.nav-item').eq(0).css('border-top', '2px solid #2ad694');
            parent.find('.nav-item').eq(1).css('border-top', '2px solid #2ad694');

        }
        else
        {
            $('#plan_container, #acc_container').hide();
            $('#pay_container').fadeIn();


            parent.find('.nav-item .radio').eq(0).addClass('radio_active');
            parent.find('.nav-item .radio').eq(1).addClass('radio_active');
            $(this).siblings('.radio').addClass('radio_active');

            $(this).parent('.nav-item').css('border-top', '2px solid #2ad694');
            parent.find('.nav-item').eq(0).css('border-top', '2px solid #2ad694');
            parent.find('.nav-item').eq(1).css('border-top', '2px solid #2ad694');
        }
  });

 
  //--------back link click------------
  $('.back_link').click(function(event) 
  {
      $('#creditcard_container,#crypto_container').hide();
      $('#pay_container').fadeIn('slow');
    
  });


});


//------function which display the price which call on <a> tag in html file-------
function display_prc (price) 
{

  $('#creditcard_container').find('.navy_div .selected_plan_prc, .pay_btn .selected_plan_prc').text(price);
  $('#crypto_container').find('.navy_div .selected_plan_prc').text(price);
 
}

function onTabNavigation (pageInfo) {
  
  $('#creditcard_container').hide();
  $('#crypto_container').hide();

}