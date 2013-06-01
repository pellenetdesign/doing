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
	$('.scroll-pane').css('width', '288px');
	$('.jspContainer').css('width', '288px');
	
});