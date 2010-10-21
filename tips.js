var tips = [];

tips.push({
	author: 'justinfrench',
	message: 'Fighting specificity with... more specificity!',
	example: [
		'p { color:red; }',
		'body.special p { color:blue; }',
		'#main p { color:green; }',
		'body.special #main p { color:red; }'
	]
});

tips.push({
	author: 'bentruyman',
	message: 'Use Microsoft_Case in Your IDs and Classes So That Others <em>Familiar</em> With the English Language (or Books) Can Easily Read Your Selectors',
	example: [
		'.A_Nice_Looking_Container_With_White_Text {',
		'	color: white;',
		'	height: 360px;',
		'	width: 960px;',
		'}',
		'',
		'.Right_Sidebar_Navigation_Item {',
		'	float: left;',
		'	margin: 0 1em;',
		'}',
		'',
		'#Generic_Copy {',
		'	font-family: Georgia, Sans-Serif;',
		'}',
		'',
		'.Masthead_Logo_Image {',
		'	background-image: url(...);',
		'	height: 95px;',
		'	width: 300px;',
		'}'
	]
});

tips.push({
	author: 'bentruyman',
	message: '<em>Organize</em> Properties/Value Pairs by Length',
	example: [
		'.container {',
		'	color: #fff;',
		'	width: 900px;',
		'	height: 300px;',
		'	padding: 1px 0;',
		'	margin: 3px 2px;',
		'	display: inline-block;',
		'	background-color: #333333;',
		'	background-repeat: no-repeat;',
		'	background-position: 100px -50px;',
		'}'
	]
});

tips.push({
	author: 'bentruyman',
	message: 'Creating As Many Classes As Possible to <em>Abstract</em> out Actual Implementation',
	example: [
		'.bold {',
		'	font-weight: bold;',
		'}',
		'',
		'.float-left {',
		'	float: left;',
		'}',
		'',
		'.float-right {',
		'	float: right;',
		'}',
		'',
		'.italic {',
		'	font-style: italic;',
		'}',
		'',
		'.red-text {',
		'	color: #ff0000;',
		'}',
		'',
		'.text-aligned-right {',
		'	text-align: right;',
		'}'
	]
});

tips.push({
	author: 'chpwn',
	message: 'Non-Existent Because we use <em>Tables</em>',
	example: [
		'<table border=0>',
		'<tr><td><table><tr><td></td></tr></table></td></tr>',
		'</table>'
	]
});


tips.push({
	author: 'artsyca',
	message: 'Use <em>meticulously</em> nested style rules including at least two ids per line',
	example: [
		'#concept #permanent .recommend {...}',
		'#concept #highlightRec.recommend {left:0px;}',
		'#concept #alpha.recommend {left:-3px;}',
		'#concept #beta.recommend {left:-3px;}',
		'#concept #gamma.recommend {left:-3px;}',
		'#concept form#conceptProducts {..}',
		'#concept #compare {...}',
		'#concept #compare .object {...}',
		'#concept #compare .object.highlight .recommend {...}',
		'#concept #compare .object h5 {...}',
		'#concept #compare .object .intro {...}',
		'#concept #compare .object .intro .productPhoto {...}',
		'#concept #compare .object .intro h4 {...}',
		'...',
		'#concept #compare .object .speed {...}',
		'#concept #compare .object .size {...}',
		'#concept #compare .object .features {...}',
		'#concept #compare .object .features li {...}',
		'#concept #compare .object div.order {...}'
	]
});

tips.push({
	author: 'artsyca',
	message: 'Avoid defaults at all costs and use <em>precise</em> pixel or % sizes for all fonts and spacing',
	example: [
		'p.messageText{',
		'	font-size: 12.5px;',
		'}',
		'',
		'h1.messagebody {',
		'	font-size 163%;',
		'	line-height: 125%;',
		'}',
		'',
		'h1.messagebody span.callout {',
		'	font-size 123%;',
		'}',
		'',
		'span.memo {',
		'	font-size: 94.5%',
		'}',
		''
	]
});

tips.push({
	author: 'kentbrew',
	message: 'Avoiding all those icky specificity questions through the use of inline <em>!important</em> styles',
	example: [
		'<div style="color:red!important">No, Seriously: This Is Important!</div>'
	]
});

tips.push({
	author: 'madrobby',
	message: 'Make sure your CSS <em>file names</em> do everything but end in .css.',
	example: [
		'/en/shared/core/2/css/css.ashx?sc=/en/us/site.config&amp;pt=cspMscomHomePage&amp;c=c',
		'spMscomSiteBrand;cspSearchComponent;cspMscomFeaturePanel;cspMscomMasterNavigation;cs',
		'pMscomNewsBand;cspVerticalRolloverTab;cspAdControl;cspMscomVerticalTab;cspSilverGate'
	]
});

tips.push({
	author: 'ricardobeat',
	message: 'Using <em>hard-core</em> abstractions to ease and speed-up development',
	example: [
		'/* General (!) */',
		'.fl  {float:left !important;}',
		'.fr  {float:right !important;}',
		'.clr {clear:both;}',
		'.leg {font-size:10px !important;}',
		'.fc1 {color:#7AC3B4 !important;}',
		'.w60p  {width:60% !important;}',
		'.w63p  {width:63% !important;}',
		'.w100p {width:100% !important;}',
		'.w25  {width:25px !important;}',
		'.w40  {width:40px !important;}',
		'.w70  {width:70px !important;}',
		'.w124 {width:124px !important;}',
		'.w140 {width:140px !important;}',
		'.w187 {width:187px !important;}',
		'.w300 {width:300px !important;}',
		'.w307 {width:307px !important;}',
		'.w310 {width:310px !important;}',
		'.w317 {width:317px !important;}',
		'.w342 {width:342px !important;}',
		'.w940 {width:940px !important;}',
		'.noBg {background:none !important;}',
		'',
		'/* Margins and Paddings */',
		'.mb0  {margin-bottom:0px !important;}',
		'.mb10 {margin-bottom:10px !important;}',
		'.mb20 {margin-bottom:20px !important;}',
		'.mb30 {margin-bottom:30px !important;}',
		'.mt8  {margin-top:8px !important;}',
		'.mt10 {margin-top:10px !important;}',
		'.mt20 {margin-top:20px !important;}',
		'.mt30 {margin-top:30px !important;}',
		'.mt35 {margin-top:35px !important;}',
		'.mr5  {margin-right:5px !important;}',
		'.mr10 {margin-right:10px !important;}',
		'.ml10 {margin-left:10px !important;}',
		'.ml20 {margin-left:20px !important;}',
		'.ml30 {margin-left:30px !important;}',
		'.pb10 {padding-left:10px !important;}',
		'.pb20 {padding-bottom:20px !important;}',
		'',
		'/* Text */',
		'.fs10 {font-size:10px !important;}',
		'.fc01 {color:#7AC3B4;}'
	]
});

tips.push({
	author: 'PHLAK',
	message: 'Coding with IE8 in mind... and IE7... and IE6...',
	example: [
		'<head>',
		'	<link rel="stylesheet" type="text/css" href="/css/style.css" />',
		'	<!--[if IE]><link rel="stylesheet" type="text/css" href="/css/ie-all.css" /><![endif]-->',
		'	<!--[if lte IE 7]><link rel="stylesheet" type="text/css" href="/css/ie7.css" /><![endif]-->',
		'	<!--[if lte IE 6]><link rel="stylesheet" type="text/css" href="/css/ie6.css" /><![endif]-->',
		'</head>'
	]
});

tips.push({
	author: 'geirarne',
	message: 'Desktop publishing-like control over presentation by inserting blank gifs ... with JS',
	example: [
		'var blank = "blank.gif";',
		' ... ',
		'<td>',
		'<script language="javascript">',
		'document.write(\'<img src=\' + blank + \' width=1 height=\'+boxheight+\'>\');',
		'</script>',
		'</td> '
	]
});

module.exports = tips;
