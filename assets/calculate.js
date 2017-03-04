
function getTotal(){
    var rate_value;
    alert("inside getTotal()")
    if ($("#rad1")[0].checked)
    {
        rate_value = $("#rad1")[0].value;
        return rate_value;
        alert("inside total r1")
    }
    if($("#rad2")[0].checked)
    {
        rate_value = $("#rad2")[0].value;
        return rate_value;
    }
    if($("#rad3")[0].checked)
    {
        rate_value = $("#rad3")[0].value;
        return rate_value;
    }
}
function myFun(){
    var z = $("#select")[0].value;
    return z;
}
function Calculate(){
    var answer=getTotal()*myFun();
    console.log("answer", answer);
    document.getElementById("cost").value = answer;
    
}
