console.log('\'Allo \'Allo!');

(function($) {

  'use strict';

  // variables


// initialize fullPage
  $('#fullpage').fullpage({
    anchors: ['firstPage', 'secondPage', 'thirdPage'],
    afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex, direction, nextSlideIndex){
      

       if (slideIndex == 1) {
            $('#ucf').addClass('animated fadeInLeft');
            $('#svad').addClass('animated fadeInRight');
            $('.grad').addClass('animated fadeInUp');
          }
       if (slideIndex == 0) {
            $('#ucf').removeClass('animated fadeInLeft');
            $('#svad').removeClass('animated fadeInRight');
            $('.grad').removeClass('animated fadeInUp');
          }
       if (slideIndex == 2) {
            $('#ucf').removeClass('animated fadeInLeft');
            $('#svad').removeClass('animated fadeInRight');
            $('.grad').removeClass('animated fadeInUp');
            funnelChart();
          }

    }   

  });

  // initialize fullPage

  $('.tlt').textillate({ 
    in: { 
      effect: 'fadeInUp' 
      } 
    });

  $('.fp-next').on('click', function(){
    $('.sheepy').toggleClass('animated bounce');
   });

  // portfolio

   $('.carousel').carousel();

})(jQuery);

// d3

function funnelChart() {
  var data = [
['HTML', 70, '#71b6e1', '#FFFFFF'],
['CSS', 50, '#e3b6fb', '#FFFFFF'],
['Materialize', 80, '#ffc3e1', '#FFFFFF'],
['jQuery', 40, '#ffe2a7', '#FFFFFF'],
['JavaScript', 40, '#fffa9d', '#FFFFFF'],
['PHP', 30, '#c6f8a6', '#FFFFFF'],
['MySQL', 30, '#71b6e1', '#FFFFFF'],
['SEO', 40, '#e3b6fb', '#FFFFFF'],
['E-commerce', 30, '#ffc3e1', '#FFFFFF'],
['Photoshop', 60, '#ffe2a7', '#FFFFFF'],
['Illustrator', 60, '#fffa9d', 'FFFFFF'],
['Flash', 40, '#c6f8a6', '#FFFFFF'],
// Background ---^ ^--- Label
];
  var options = {
    block: {
    dynamicHeight: true,
    highlight: true
   },
    chart: {
    width: $(window).width() -200,
    height: $(window).height() -200,
    animate: 500
   },
    label: {
    fontFamily: 'Helvetica',
    fontSize: '20px'
  }
  };
    d3.select('#funnel').selectAll('*').remove();
    var chart = new D3Funnel('#funnel');
    chart.draw(data, options);
}

