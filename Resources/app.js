// app design borrows liberally from Dan Stever's tutorial
// http://mobile.tutsplus.com/tutorials/appcelerator/titanium-mobile-database-driven-tables-with-sqlite/

// create tab group  
var tabGroup = Ti.UI.createTabGroup();  
  
// create main window  
var main = Ti.UI.createWindow({  
    title:'Location Categories',  
    url:'views/tab_categories.js'  
});  
  
// craete main tab  
var tab = Ti.UI.createTab({  
    icon:'KS_nav_ui.png',  
    title:'Locations',  
    window:main  
});  
  
// add the tab to the tab group  
tabGroup.addTab(tab);  
  
// open tab group  
tabGroup.open(); 
