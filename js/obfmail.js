$(document).ready(function() {
	$('a.mail').each(function() {
		this.href = this.href.replace('(at)', '@').replace('(dot)', '.');
		// Remove this line if you don't want to set the email address as link text:
		//this.innerHTML = "Email: "+this.href.replace('mailto:', '');
	});
	$('a.phone').each(function(){
		this.href = 'tel:' + $(this).attr('title').split('').reverse().join('');
	});
	$('.obfEmail').each(function(){
		this.title = $(this).attr('title').replace('(at)','@').replace('(dot)','.');
		$(this).text($(this).attr('title'));
	});
	$('.obfNumber').each(function(){
		this.title = $(this).attr('title').split('').reverse().join('');
		$(this).text($(this).attr('title'));
	});
});