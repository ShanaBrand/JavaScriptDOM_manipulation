// from data.js
var tableData = data;

// YOUR CODE HERE!

//Reference to filter table button 
var search_btn = d3.select("#filter-btn");
search_btn.on("click", handleClick); //event listener when the "Filter Table" button is clicked

//Reference to the input area
var input_area = d3.select("#datetime");
//input_area.on("change",handleInput); //event listener when the user inputs a datetime value

//Reference to the table body
var tbl_body = d3.select("tbody");
//Loads the table body with data of each UFO sightings
tableCreate(tableData);

search_btn.on("click", handleClick); 

var drop_dates = [];
var drop_City = [];
var drop_States = [];
var drop_Country = [];
var drop_Shape = [];
var drop_Duration = []; 

var mydates = tableData.map(myDt=>myDt.datetime);
var myCity = tableData.map(cty=>cty.city);
var myState = tableData.map(st=>st.state);
var myCoun = tableData.map(con=>con.country);
var myShape = tableData.map(shp=>shp.shape);
var myDur = tableData.map(dur=>dur.durationMinutes);

drop_dates = mydates.filter(onlyUnique);
drop_City = myCity.filter(onlyUnique);
drop_States = myState.filter(onlyUnique);
drop_Country = myCoun.filter(onlyUnique);
drop_Shape = myShape.filter(onlyUnique);
drop_Duration = myDur.filter(onlyUnique);

//populateDropDwn(drop_dates);

document.getElementsByTagName

function handleClick()
{   //do not refresh the page
    d3.event.preventDefault();
    //console.log("The Filter Table button was clicked");
    handleInput;
 
}

function handleInput()
{
    //d3.event.target;
    user_input = input_area.property("value");
    if(user_input == "")
    {
        window.alert("Please enter an date time")
    } 
    else 
    {
        console.log("The user entered this date", user_input);
        filterData(user_input);
    }
  
}

function filterData(dt_value)
{
    var filteredData = tableData.filter(ufo =>ufo.datetime === dt_value);
    numUfo_sightings = filteredData.length;
    console.log("There were ", numUfo_sightings, "UFOs sighted on", dt_value);
    tableCreate(filteredData);            
}


//function getUnique(tableData)
//{
//    for (var i = 0; i<tableData.length; i++)
//}


function onlyUnique(value, index, self) 
{ 
    return self.indexOf(value) === index;
}

function tableCreate(data) {

    //var ufoheader = ["Date","City","State","Country", "Shape", "Duration","Comment"];

    var tbl = document.getElementById('ufo-table')
    
    //var tbl = document.createElement('table');

    for (var i = 0; i < data.length; i++) {
    
        var tr = document.createElement('tr'); 
        var keys = Object.keys(data[i]);    
        var thead = document.createElement('thead');

        tbl.appendChild(thead);

        keys.forEach(function(k) {
            var td = document.createElement('td'); 
            td.appendChild(document.createTextNode(data[i][k]));
            tr.appendChild(td);
        });

        tbl.appendChild(tr);
    }

    document.body.appendChild(tbl);
}


function tblFilter(){
    window.alert("you are trying to filter code coming soon")
}



function populateDropDwn(arr)
{ 
    var ufo_item = document.getElementById("btnGenerate");
    
    for(var i = 0; i < arr.length; i++) {
        var option = document.createElement("option");
        //option.innerHTML = arr[i];
        option.value = arr[i];
        //Add the Option element to DropDownList.
        ufo_item.add(option);
        
    
}}

