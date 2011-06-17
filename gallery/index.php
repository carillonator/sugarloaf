<?php

function loadThumbs($dir) {
	$dh = opendir($dir);
	$nopics = 0;
	$images = array();
	
	while (false !== ($filename = readdir($dh))) {
		
		if (preg_match("/\.jpg/",$filename,$matches)) {
			$nopics++;
			$images[] = $filename;
		}
	}
	
	sort($images);
	
	foreach ( $images as $image ) {
		echo "<img src='$dir/$image' />";
	}
}

?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
<meta property="og:title" content="Sugarloaf Gallery" />
<meta property="og:type" content="school" />
<meta property="og:url" content="http://sugarloafcamp.org/gallery/" />
<meta property="og:site_name" content="Sugarloaf Fine Arts Camp" />
<meta property="fb:admins" content="1445951708" />
<meta property="og:description" content="A Gallery of Art, Photography, Textile Arts, Crafts, and Slideshows from Sugarloaf 2010." />
<meta property="og:image" content="http://sugarloafcamp.org/gallery/img/logo.jpg" />
<meta property="og:email" content="gallery@sugarloafcamp.org"/>
<title>Sugarloaf Gallery</title>

<link href="css/gallery.css" rel="stylesheet" type="text/css" />
<link href="css/viewer.css" rel="stylesheet" type="text/css" />

<script type="text/javascript" src="js/jquery-1.4.2.min.js"></script>
<script type="text/javascript" src="js/jquery.cookie.js"></script>
<script type="text/javascript" src="js/main.js"></script>
<script type="text/javascript" src="js/viewer.js"></script>
<script type="text/javascript" src="js/flowplayer-3.2.3.min.js"></script>


</head>
<body>
<div id="viewer">
	<div id="controls">
		<span id="name"></span>
		<div id="left_arrow" class="control"></div>
		<div id="right_arrow" class="control"></div>
		<div id="close_x" class="control"></div>
	</div>
	<img id="viewer_img" src="img/blank.png" alt="" />
	<img id="loading" src="img/loading.gif" alt="" />
</div>

<div id="page_header">
	<img id="title_image" src="img/gallery_top.png" alt="" />
	<div id="top_menu">
		<a id="about_link" href="#">about</a>
	</div>
	<!--<div id="tw_share"></div>-->
	<div id="fb_share"></div>
	<div id="loading_page">Loading</div>
</div>

<div id="slides_header" class="class_header">Slideshow <span style="font-size:75%">(click to show/hide)</span></div>
<div id="slides_body">
	<div id="slides_info1">
		<b>Week 1</b><br /><br />
		Emily<br />
		Karl<br />
		Leigh<br />
		Taylor<br />
		Toby<br />
		Will<br />
		Justin<br />
		
	</div>
	<a id="wk1slideshow" href="img/2010w1slideshow.mov"></a>
	<script language="JavaScript">
		flowplayer("wk1slideshow", {src: "js/flowplayer-3.2.3.swf", wmode: 'transparent'}, {
			clip: {
				autoPlay: false,
				scaling: 'fit'
			}, canvas: {
				backgroundColor: '#000',
				backgroundGradient: 'none'
			}				
		});
	</script>
	<div id="slides_help_link">
		help!
	</div>
	<div id="slides_help">
		<ul>
			<li>If the video stops and starts, press <b>pause</b> and wait a while for the video to load. You can see the download progress in grey.</li>
			<li>Press the square button on the bottom-right for full screen, Esc to exit full screen.</li>
			<li>Or, you can download week 1 slideshow <a href="img/2010w1slideshow.mov">here</a> (right-click and Save As...) and watch it in your own player (we recommend <a href="http://videolan.org" target="_blank">VLC Player</a> for Windows or Mac).</li>
		</ul>
		
		<button class="popup_close">Close</button>
	</div>
</div>

<div class="class_header">Art - Week 1</div>
<div class="grid"><?php loadThumbs('artwk1-th'); ?></div>

<!--
<div class="class_header">Black &amp; White Photography - Week 1</div>
<div class="grid"><?php loadThumbs('photo1wk1-th'); ?></div>
-->

<div class="class_header">Art - Week 2</div>
<div class="grid"><?php loadThumbs('artwk2-th'); ?></div>

<div class="class_header">Black &amp; White Photography - Week 2</div>
<div class="grid"><?php loadThumbs('photo1wk2-th'); ?></div>

<div id="splash">	
	<p><b>Welcome to the Sugarloaf Gallery!</b></p>

	<p>This page features work from the Sugarloaf Fine Arts Camp 2010 Art &amp; Photography classes. Not all work was available to include from this year's camp.</p>
	
	<p>If you are on a slow internet connection, please be patient as all the small images load - it may take a few minutes! Click on any small image to view a larger version. Once the viewer is open, use your arrow keys or space bar to browse, Esc to close, or click the controls with your mouse.</p> 

	<p>Artist names are given where known &mdash; if you can provide a name for any of the others, or for any questions, please email <a href="mailto:gallery@sugarloafcamp.org">gallery@sugarloafcamp.org</a>.</p>

	<p>All artwork is the property of the artist and may not be copied without their permission.</p>

	<p>This message won't show again, but you can see it by clicking <b>about</b>.</p>	
	
	<button class="popup_close">Close</button>
</div>

<div id="dimmer"></div>
</body>
</html>