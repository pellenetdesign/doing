// mes animations jQuery
$( document ).ready(function() {
	//activation plugs
	$('#actusCarousel').carousel({
		interval: 6000
		});
	$('#produitCarousel').carousel({
		interval: 10000
		});
	$(function()
	{
		$('.scroll-pane').jScrollPane();
	});
	//scroll-pane correction
	$('.scroll-pane').css('width', '274px');
	$('.jspContainer').css('width', '274px');
	//Tooltip defaults
	$('.ttTop a').tooltip({placement:'top', trigger:'hover focus'});
	$('.ttBottom a').tooltip({placement:'bottom', trigger:'hover focus'});
	$('.ttLeft a').tooltip({placement:'left', trigger:'hover focus'});
	$('.ttRight a').tooltip({placement:'right', trigger:'hover focus'});
	$('.ttTop a.active').tooltip('destroy');
	$('header ul.ttTop li.span3 a').tooltip('destroy');
	
});