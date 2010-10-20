process.chdir(__dirname);
require.paths.push('/usr/local/lib/node');

var express = require('express')
  , hl = require("highlight").Highlight
  , io = require('socket.io');

var app = express.createServer()
  , socket = io.listen(app);

app.configure(function () {
	app.use(express.methodOverride());
	app.use(express.bodyDecoder());
	app.use(app.router);
	app.use(express.staticProvider(__dirname + '/public'));
});

// Colors
var colors = 'ff0090,ffff00,0bff00,08e3ff,ff460d'.split(',');

// Tips
var tips = require('./tips');

// Make 'em sexy
tips.forEach(function (tip) {
	if (tip.example) {
		tip.example = hl(tip.example.join('\n'));
	}
});

// Routes
app.get('/', function (req, res) {
	showTip(req, res, generateRandomIndex());
});

app.get('/:permalink', function (req, res) {
	var index = req.params.permalink;

	if (tips[index - 1]) {
		showTip(req, res, index);
	} else {
		res.redirect('/');
	}
});

// WebSocket
socket.on('connection', function(client){
	client.on('message', function (action) {
		if (action === 'refresh') {
			client.send(JSON.stringify(generateTip(generateRandomIndex())));
		}
	});
});

// Utilities
function showTip (req, res, index) {
	res.render('index.jade', {
		locals: {
			tip: tips[index - 1],
			color: colors[Math.floor(Math.random() * colors.length)],
			index: index
		}
	});
}

function generateTip (index) {
	return {
		tip: tips[index - 1],
		color: colors[Math.floor(Math.random() * colors.length)],
		index: index
	};
}

function generateRandomIndex() {
	return Math.ceil(Math.random() * tips.length);
}

app.listen(3001);