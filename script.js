//Need to finish step 13 in exercise 4 to highlight the numbers
function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year=new Date().getFullYear()+parseInt(years);
    var interestExplanation="If you deposit " +principal+",\<br\>at an interest rate of "+rate+"%,\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year;
    if (principal<=0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }
    document.getElementById("result").innerHTML=interestExplanation;
}

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}
        