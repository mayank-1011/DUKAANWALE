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

