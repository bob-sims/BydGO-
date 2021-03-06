// app design borrows liberally from Dan Stever's tutorial
// http://mobile.tutsplus.com/tutorials/appcelerator/titanium-mobile-database-driven-tables-with-sqlite/

// create var for the currentWindow
var currentWin = Ti.UI.currentWindow;

/*
var db = Ti.Database.install('../products.sqlite','productSpecs');

var prodName = Ti.UI.currentWindow.prodName;

var rows = db.execute('SELECT * FROM products WHERE name="' + prodName + '"');
var data = [
{title:'' + rows.fieldByName('width') + '', header:'Width'},
{title:'' + rows.fieldByName('height') + '', header:'Height'},
{title:'' + rows.fieldByName('color') + '', header:'Color'},
{title:'' + rows.fieldByName('qty') + '', header:'Quantity'}
];

var tableview = Ti.UI.createTableView({
	data:data
});
*/

var ID = Ti.UI.currentWindow.ID;
var Icon = Ti.UI.currentWindow.Icon;
var Lat = Ti.UI.currentWindow.Lat;
var Longitude = Ti.UI.currentWindow.Longitude;

//
// CREATE MAP VIEW
//
var mapview = Titanium.Map.createView({
	mapType: Titanium.Map.STANDARD_TYPE,
	region:{latitude:Lat, longitude:Longitude, latitudeDelta:0.008, longitudeDelta:0.008},
	animate:true,
	regionFit:true,
	userLocation:true,
});

var marker = Titanium.Map.createAnnotation({
    animate:true,
//    pincolor:Titanium.Map.ANNOTATION_RED,
    latitude:parseFloat(Lat),
    longitude:parseFloat(Longitude),
    image:'../icons/'+Icon,
//  myid:sales[s]['id']
  });

mapview.addAnnotation(marker);

currentWin.add(mapview);

