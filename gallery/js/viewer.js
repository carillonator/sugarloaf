jQuery.setName = function(next) {
	if ( next.match(/[a-zA-Z]+_[a-zA-Z]+\d/) ) {
		var name = next.replace(/\w+\/([a-zA-Z\.]+)_([A-Z])[a-zA-Z]*\d.jpg$/,"$1 $2");
		$('#name').html(name);
	} else {
		$('#name').html('');
	}	
}	

$(function() {
	
	var active;
	var active1;
	
	$('.grid img').click(function() {
	
		var w = $(window).width() - 60;
		var h = $(window).height() - 60;
	
		$('#dimmer').show();
		$('#viewer').show();
		var file = $(this).attr('src');
		file = file.replace(/-th/i,"");
		$('#viewer_img').attr('src',file)
			.css({'maxWidth':w,'maxHeight':h});
		
		$.setName(file);
		
		active = $(this);
		//position of active
		//console.log(active.index()+1);
		
	});
	
	$('#viewer_img').load(function() {
		$('#loading').css('zIndex',-10);
		$('#viewer_img').css({'filter':'alpha(opacity = 100)','opacity':1});
	});
	
	$('#right_arrow').click(function() {
		if ( active.next('img').length != 0 ) {
			
			$('#loading').css('zIndex',1000);
			$('#viewer_img').css({'filter':'alpha(opacity = 10)','opacity':.10});
			active = active.next('img');
			var next = active.attr('src');
			next = next.replace(/-th/i,"");
			$('#viewer_img').attr('src',next);		
	
			$.setName(next);
		}
	});
	$('#viewer_img').click(function() {
		$('#right_arrow').click();
	});	
	
	$('#left_arrow').click(function() {
		
		if ( active.prev('img').length != 0 ) {
			$('#loading').css('zIndex',1000);
			$('#viewer_img').css({'filter':'alpha(opacity = 10)','opacity':.10});
			active = active.prev('img');
			var next = active.attr('src');
			next = next.replace(/-th/i,"");
			$('#viewer_img').attr('src',next);
		
			$.setName(next);
		}
	});	
	
	
	$('#close_x').click(function() {
		$('#viewer').hide();
		$('#dimmer').hide();
		$('#viewer_img').attr('src','img/blank.png');
		$('#name').html('');
	});
	$('#dimmer').click(function() {
		$('#close_x').click();
	});
			
	$('#viewer_img').hover(function() {
		$('#right_arrow').css({'backgroundPosition':'-28px 0'});		
	}, function() {
		$('#right_arrow').css({'backgroundPosition':'0 0'});
	});

	$('#close_x').hover(function() {
		$(this).css({'backgroundPosition':'-129px 0'});		
	}, function() {
		$(this).css({'backgroundPosition':'-114px 0'});
	});
	$('#dimmer').hover(function() {
		$('#close_x').css({'backgroundPosition':'-129px 0'});		
	}, function() {
		$('#close_x').css({'backgroundPosition':'-114px 0'});
	});

	$('#right_arrow').hover(function() {
		$(this).css({'backgroundPosition':'-28px 0'});		
	}, function() {
		$(this).css({'backgroundPosition':'0 0'});
	});
	
	$('#left_arrow').hover(function() {
		$(this).css({'backgroundPosition':'-85px 0'});		
	}, function() {
		$(this).css({'backgroundPosition':'-57px 0'});
	});
	
	$(document).keydown(function(e) {
				
		if ( $('#viewer').is(':visible')) {
			switch (e.which) {
				case 37:
					$('#left_arrow').click();
					break;
				case 39:
					$('#right_arrow').click();
					break;
				case 32:
					$('#right_arrow').click();
					break;
				case 27:
					$('#close_x').click();
					break;
			}
			return false;
		}
	});
	

	
});

