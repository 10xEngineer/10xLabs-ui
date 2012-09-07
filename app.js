/**
 * Module dependencies.
 */
var mongoose = require('mongoose');
var db = mongoose.createConnection('localhost', 'test');
var schema = mongoose.Schema({ name:'string' });
var Cat = db.model('Cat', schema);

var kitty = new Cat({ name:'Zildjian' });
kitty.save();

var express = require('express')
    , routes = require('./routes')
    , http = require('http')
    , path = require('path')
    , api = require('./routes/api');


var app = express();

app.configure(function () {
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(require('stylus').middleware(__dirname + '/public'));
    app.use(express.static(path.join(__dirname, 'public')));
    app.locals.pretty = true;
});

app.configure('development', function () {
    app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/partials/:name', routes.partials);
app.get('/api/widgets/:pagetype', api.widgets);


http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});
