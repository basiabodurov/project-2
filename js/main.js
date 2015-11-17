// js/RED Academy Project 2 Basia Bodurov October 5, 2015

(function ($) {
	"use strict";

// Business Hours
var date = new Date().getDay();
var weekdays = [
{day:"Sunday", status: "closed"},
{day:"Monday", status: "open"},
{day:"Tuesday", status:"open"},
{day:"Wednesday", status: "open"},
{day:"Thursday", status: "open"},
{day:"Friday", status: "open"},
{day:"Saturday", status: "closed"},
];
var status = weekdays[date+0].status;
var day = weekdays[date+0].day;
document.getElementById("day").innerHTML = day;
document.getElementById("status").innerHTML = status;

// Smooth scrolling
$(function() {
$('a[href*=#]:not([href=#])').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});
});


// BX Slider
$(function(){
  $('.bxslider').bxSlider({
    slideWidth: 450,
    mode: 'horizontal',
    minSlides: 1,
    maxSlides: 3,
    moveSlides: 1,
    slideMargin: 0,
    controls: false,
    pager: false,
    autoReload: true,
    auto: true
  });
});

// Datepicker and Timepicker
	$(function() {
		$('#date').datepicker({
			dateFormat : 'yy-mm-dd',
			minDate: 0,
			showOtherMonths: true,
			selectOtherMonths: true
		});

		$('#time').timepicker({
			'minTime': '5:00pm',
			'maxTime': '11:30pm',
		});
	});

}(jQuery));
