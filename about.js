       
var q=anime.timeline({
    targets: '#circle',
    duration: 1000,
    easing: 'easeOutElastic(1, .8)',
    direction:'alternate',
    loop: true
  });

  q
  .add({
      translateX:210, 
      delay:500,
      background:'#8AAAE5',
      
  })

  .add({
    
    translateY:-45, 
    background:'#FFF',
    
})
.add({
    translateX:0, 
    background:'#4831D4',
})

.add({
  translateY:0, 
  background:'#CCF381',
});

$(document).ready(function(){
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
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
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