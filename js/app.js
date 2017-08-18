$(document).ready(function() {
$('ul').on('click', 'li', function(event){
	$(this).toggleClass('linethrough');
});