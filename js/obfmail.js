$(document).ready(function() {
	$('a.mail').each(function() {
		this.href = this.href.replace('(at)', '@').replace('(dot)', '.');
		// Remove this line if you don't want to set the email address as link text:
		//this.innerHTML = "Email: "+this.href.replace('mailto:', '');
	});
	$('.obfEmail').each(function(){
		this.title = $(this).attr('title').replace('(at)','@').replace('(dot)','.');
		$(this).text('Email: ' + $(this).attr('title'));
	});
	$('.obfNumber').each(function(){
		this.title = $(this).attr('title').split('').reverse().join('');
		$(this).text('Phone: ' + $(this).attr('title'));
	});
});