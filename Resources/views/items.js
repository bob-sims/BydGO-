// app design borrows liberally from Dan Stever's tutorial
// http://mobile.tutsplus.com/tutorials/appcelerator/titanium-mobile-database-driven-tables-with-sqlite/

// create var for the currentWindow
var currentWin = Ti.UI.currentWindow;
var CatID = Ti.UI.currentWindow.CatID;

// set the data from the database to the array
function setData() {

	var db = Ti.Database.install('../bydgoszcz.sqlite','bydgoszcz');
	var rows = db.execute('SELECT * FROM Items WHERE CatID = ?', CatID);

	// create the array
	var dataArray = [];
			
	while (rows.isValidRow())
	{
	    dataArray.push({title:'' + rows.fieldByName('Name') + '', id:rows.fieldByName('ID'), icon:rows.fieldByName('Icon'), 
		lat:rows.fieldByName('Lat'), longitude:rows.fieldByName('Long'), hasChild:true, path:'map.js'});
	    rows.next();	
	};
	
	// set the array to the tableView
	tableview.setData(dataArray);
};

// create table view
var tableview = Ti.UI.createTableView({
});

tableview.addEventListener('click', function(e)
{
	if (e.rowData.path)
	{
		var win = Ti.UI.createWindow({
			url:e.rowData.path,
			title:e.rowData.title
		});
		
		var prodName = e.rowData.title;
		win.prodName = prodName;
		var ID = e.rowData.id;
		win.ID = ID;
		var Icon = e.rowData.icon;
		win.Icon = Icon;
		var Lat = e.rowData.lat;
		win.Lat = Lat;
		var Longitude = e.rowData.longitude;
		win.Longitude = Longitude;

		Ti.UI.currentTab.open(win);
	}
});

//Titanium.UI.createAlertDialog({title:'Hey!',message:'Category: '+CatID}).show();
currentWin.add(tableview);
setData();
