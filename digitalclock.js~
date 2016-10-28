
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
startTime();
    function jsonData()
    {
    var article = [
    	{
    		"author" : "prashant praveen"+"<br>",
    		"datepublished" : "11/11/2015"+"<br>",
            "publication" : "samana"+"<br>",
    	},
        {
    		"author" : "chetan bhagat"+"<br>",
    	    "datepublished" : "1/12/2016"+"<br>",
            "publication" : "banglore mirror"+"<br>",
    	},
    	{
    	    "author" : "babajandev"+"<br>",
    	    "datepublished" : "29/2/2016"+"<br>",
    	    "publication" : "hindustan"+"<br>",
    	},
      	{
    	    "author" : "thetimesofindia"+"<br>",
    	    "datepublished" : "3/1/1942"+"<br>",
    	    "publication" : "rk laksham"+"<br>",
    	}
     ]
    //function to print json objects
    function display(i)
    {
    	var print = document.getElementById("data");
    	print.innerHTML =article[i].author+" "+article[i].datepublished+" "+article[i].publication+"<br/>";
        if(++i<article.length)
        setTimeout(display,3000,i);
    }
        setTimeout(display,3000,0);
    }
    jsonData();
