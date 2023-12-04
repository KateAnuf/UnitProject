$(document).ready(function(){

    const owl = $("#clients-slider");
    
    owl.owlCarousel({
        items: 1  //массив .один слайдер 
        //nav: true //стрелки 
    });

    const prev = $("#sliderPrev");
    const next = $("#sliderNext");

    prev.click(function(){
        owl.trigger('prev.owl.carousel');
    })

    next.click(function(){
        owl.trigger('next.owl.carousel');
    })


  });


 