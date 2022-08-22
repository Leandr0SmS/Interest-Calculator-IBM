//compute function
function compute()
{
    var principal = document.getElementById("principal").value;
    //validation for "Principal" input box
    if(principal == "" || principal <= 0)
    {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }
    //interest calculation
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    //logic to convert the 'No of Years' into the actual year in the future
    var dateToday = new Date();
    var year = parseInt(dateToday.getFullYear()) + parseInt(years);
    //print result
    var resultDisplay = document.getElementById("result");
    resultDisplay.innerHTML = "<br>If you deposit " + "<span class='highlight'>" + principal + "</span>"  + ", <br> at an interest rate of "+ "<span class='highlight'>" + rate + "</span>%." + "<br> You will receive an amount of " + "<span class='highlight'>" + interest + "</span>" + ", <br> in the year " + "<span class='highlight'>" + year + "</span>";
}

//reads the value of the range slider and displays it the <span>adjacent to the slider
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
