$(document).ready(function() {
	$('.modalwind').click(function() {
		$('#modal').css('left', '0');
		$('#modal').css('width', '100%');
		$('#modal').css('height', '100%');
	});
	$('.overlay').click(function() {
		$('#modal').css('width', '0');
		$('#modal').css('height', '0');
		$('#modal').css('left', '-100%');
	});
	$('.close').click(function() {
		$('#modal').css('width', '0');
		$('#modal').css('height', '0');
		$('#modal').css('left', '-100%');
	});
});