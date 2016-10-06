
  function digclock()
  {
  	var d = new Date();
  	var t = d.toLocaleTimeString();

      	document.getElementById("clock").innerHTML = t;
         setInterval(digclock,1000);
  }


    digclock();
    function jsonData()
    {
    var article = [
    	{
    		"author" : "prashantpraveen",
    		"datepublished" : "11-11-2015",
            "publication" : "samana",
    	},
        {
    		"author" : "chetan bhagat",
    	    "datepublished" : "1-12-2016",
            "publication" : "banglore mirror",
    	},
    	{
    	    "author" : "babajandev",
    	    "datepublished" : "29-2-2016",
    	    "publication" : "hindustan",
    	},
      	{
    	    "author" : "thetimesofindia",
    	    "datepublished" : "3-1-1942",
    	    "publication" : "rk laksham",
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
