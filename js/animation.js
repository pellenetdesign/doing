// mes animations jQuery
$( document ).ready(function() {
	//activation plugs
	$('#actusCarousel').carousel({
		interval: 15000
		});
	$('#produitCarousel').carousel({
		interval: 10000
		});

		//$('.scroll-pane').jScrollPane();
		$('.scroll-pane').jScrollPane({
		    autoReinitialise: true
		});
	//------------------//
	//scroll-pane correction
	
	//Window check and resize scroll-pane
	/*
	if( window.width>768 ) {
		$('.scroll-pane').css('width', '10px');
		$('.jspContainer').css('width', '10px');
			$('.scroll-pane').css('width', '274px');
			$('.jspContainer').css('width', '274px');
	}*/
	/*else {
		$('.scroll-pane').css('width', '10px');
		$('.jspContainer').css('width', '10px');
	}*/
	//-------------------//
	//Tooltip defaults
	$('.ttTop a').tooltip({placement:'top', trigger:'hover focus'});
	$('.ttBottom a').tooltip({placement:'bottom', trigger:'hover focus'});
	$('.ttLeft a').tooltip({placement:'left', trigger:'hover focus'});
	$('.ttRight a').tooltip({placement:'right', trigger:'hover focus'});
	$('.ttTop a.active').tooltip('destroy');
	$('header ul.ttTop a').tooltip('destroy');
	$('article.ttTop#gauche a').tooltip('destroy');
	$('article.ttTop#millieu a').tooltip('destroy');
	$('article.ttTop#droite a').tooltip('destroy');
	$('article.ttTop#produits a').tooltip('destroy');
	$('article.ttTop#categories a').tooltip('destroy');
	$('article#rubriques.ttTop a').tooltip('destroy');
	//footer
	$('div#sociallinks .ttTop a').tooltip('destroy');
	$('footer #credits .ttTop a').tooltip('destroy');
	$('footer div.ttTop#footernav a').tooltip('destroy');
	
});