var intid = 0;
var loaded_thumbs = 0;
function load_meter() {
	var pct = Math.round(loaded_thumbs/thumb_count*100);
	var string = 'Loading  &nbsp;' + pct + '%';
	$('#loading_page').html(string);
	console.log(string)
}

$(window).load(function() {

	$('.grid').each(function() {
		var ht = $(this).height() + 'px';
		$(this).data('ht',ht);
	});
	$('.grid').css('height','113px');
	
	$('.grid').hover(function() {
		$('.grid').stop();
		$(this).delay(100).animate({'height':$(this).data('ht')},750);
		$('.grid').not($(this)).delay(100).animate({'height':'113px'},900);
	});	
	$('#slides_header,#slides_body,#page_header').hover(function() {
		$('.grid').animate({'height':'113px'},650);
	});
	/* trying to get expanded hight to change with window resize
	$(window).resize(function() {
		$('.grid').each(function() {
			var ht = $(this).height() + 'px';
			$(this).data('ht',ht);
			console.log(ht);
		});
	});
	*/
	
	//$('#tw_share').html('<a href="http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script>');
	$('#fb_share').html('<iframe src="http://www.facebook.com/plugins/like.php?href=http%3A%2F%2Fsugarloafcamp.org%2Fgallery%2F&amp;layout=standard&amp;show_faces=false&amp;width=250&amp;action=like&amp;colorscheme=light&amp;height=35" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:200px; height:40px;" allowTransparency="true"></iframe>');
	
	$('#loading_page').hide();
	console.log(intid + ' reached');
	clearInterval(intid);
		
});

$(function() {
		
	var visited = $.cookie('visited3');	
	if ( !visited ) {
		$('#splash').show();
		$('#dimmer').show();
		$.cookie('visited3', '1', { expires: 40 });
	}
	
	$('#about_link').click(function() {
		$('#splash').show();
		$('#dimmer').show();
		return false;
	});
			
	$('.popup_close').click(function() {
		$(this).parent().hide();
		$('#dimmer').hide();
		return false;
	});
	
	$('#slides_help_link').click(function() {
		$('#dimmer').show();
		$('#slides_help').show();
	});
	
	$('#slides_header').click(function() {
		$('#slides_body').slideToggle();
	});
	
	thumb_count = $('.grid img').length;
	
	$('.grid img').load(function(){ loaded_thumbs++; });
	
	intid = setInterval("load_meter()", 1000);
		
	$.extend($.fn.disableTextSelect = function() {
			return this.each(function(){
				if($.browser.mozilla){//Firefox
					$(this).css('MozUserSelect','none');
				}else if($.browser.msie){//IE
					$(this).bind('selectstart',function(){return false;});
				}else{//Opera, etc.
					$(this).mousedown(function(){return false;});
				}
			});
	});
	$('#viewer').disableTextSelect();
	
});