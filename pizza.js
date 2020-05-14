anime({
  targets:'#circle',
  translateX: [
    { value: 200, duration: 1000, delay: 500 },
    { value: 0, duration: 1000, delay: 500 }
  ],

  scaleX: [
    { value: 6, duration: 100, delay: 500, easing: 'easeOutExpo' },
    { value: 1, duration: 900 },
    { value: 6, duration: 100, delay: 500, easing: 'easeOutExpo' },
    { value: 1, duration: 900 }
  ],

  easing: 'easeOutElastic(1, .8)',
  loop: true
});

$(document).ready(function(){
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  $(".photo").mouseover(function(){
    $(".openi").animate({
      width:'100%'
    });

  });

  $(".photo").mouseout(function(){
    $(".openi").animate({
      width:'30px'
    });

  });
});



$(document).ready(function(){

  
  $(".photo").mouseover(function(){
    $(".openi").animate({
      width:'100%'
    });

  });

  $(".photo").mouseout(function(){
    $(".openi").animate({
      width:'30px'
    });

  });

  $(".change-border-0").mouseover(function(){
      $(".up-0").css("display","block");
  });
  $(".change-border-0").mouseout(function(){
      $(".up-0").css("display","none");
  });
  
  $("#cross").click(function(){
      document.querySelector('#login-pop').style.visibility='hidden';
      
    });

    $("#cross1").click(function(){
        document.querySelector('#sign-up').style.visibility='hidden';
      });

     //window.setTimeout(popup,5000);

    $("#signin").click(function(){
        $("#login-pop").css('visibility','visible');
    });
    
    $("#signup").click(function(){
        $("#sign-up").css('visibility','visible');
    });    
    $("#submit2").click(function(){
        $("#sign-up").css('visibility','visible');
    });



});



function go(){
  var srch=document.getElementById("srch-text").value;
 
  if(srch=='pizza' || srch=='PIZZA' || srch=="Pizza")
  {
      window.location.href='pizza.html';
  }

  if(srch=='burger' || srch=='BURGER' || srch=='Burger')
  {
      window.location.href='burger.html';
  }

  if(srch=='shakes' || srch=="Shakes" || srch=='SHAKES' || srch=='shake' || srch=="Shake" || srch=="SHAKE")
  {
      window.location.href='shakes.html';
  }

}





function popup(){
  document.querySelector('#login-pop').style.visibility='visible';
}


function validate()
{
  var email=document.getElementById("email");
  var pass=document.getElementById("password");

  
  var regx1=/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9\-]+).([a-z]+)(.[a-z]+)?$/;
  var regx2=/^[7-9]\d{9}$/;





  if(regx1.test(email.value) || regx2.test(email.value))
  {}

  else
  {
      alert("Enter valid data");
      return false;
  }


  if(pass.value.length<8)
  {
      alert("Password too short");
      pass.style.border="solid 3px red";
      return false;
  }

  if(pass.value.length>=8 && (regx1.test(email.value) || regx2.test(email.value) ))
  {
          alert("Logged in successfully");
          window.setTimeout(function(){
              document.querySelector('#login-pop').style.visibility="hidden";
          },1500);
          
      
      
  }
}


  var mail=document.getElementById("mail");
  var name=document.getElementById("name");
function signup_val(){

  var regx1=/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9\-]+).([a-z]+)(.[a-z]+)?$/;
  var regx2=/^[7-9]\d{9}$/;

  if(regx1.test(mail.value) || regx2.test(mail.value))
  {}

  else
  {
      alert("Enter valid data");
      return false;
  }


  if(name.value!="" && (regx1.test(mail.value) || regx2.test(mail.value) ))
  {
          alert("Signed up successfully");
          window.setTimeout(function(){
              document.querySelector('#sign-up').style.visibility="hidden";
          },1500);
          
      
      return false;
  }
}
