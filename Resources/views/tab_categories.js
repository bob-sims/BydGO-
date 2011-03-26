// app design borrows liberally from Dan Stever's tutorial
// http://mobile.tutsplus.com/tutorials/appcelerator/titanium-mobile-database-driven-tables-with-sqlite/

// create var for the currentWindow
var currentWin = Ti.UI.currentWindow;

// set the data from the database to the array
function setData() {	

	var db = Ti.Database.install('../bydgoszcz.sqlite','bydgoszcz');

	var rows = db.execute('SELECT * FROM Categories');

	// create the array
	var dataArray = [];
			
	while (rows.isValidRow())
	{
	    dataArray.push({title:'' + rows.fieldByName('Name') + '', CatID:'' + rows.fieldByName('ID') + '', hasChild:true, path:'items.js'});
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
		
		var CatID = e.rowData.CatID;
		win.CatID = CatID;
		Ti.UI.currentTab.open(win);
	}
});

// add the tableView to the current window
currentWin.add(tableview);

// call the setData function to attach the database results to the array
setData();
