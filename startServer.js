var express = require( "express" );

var port = 3000;
if( process.argv.length > 1 ){
  port = process.argv[2];
}

var app = express();
var server = app.listen( port );

app.get( '/stop', function( req, res ){
  server.close();
  process.exit( 0 );
});

app.use( function( req, res, next ){
  if( req.method !== "GET" ){
    res.redirect( req.originalUrl );
  }
  next();
});

app.use( express.static( 'public' ) );
