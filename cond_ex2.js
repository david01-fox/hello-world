function performOperation(operation) 
{
    var n1 = +document.getElementById("num1").nodeValue;
    var n2 = +document.getElementById("num2").nodeValue;
    if(operation== '+') 
    {
        document.getElementById("answer").innerHTML = n1 + n2;
    }
    else if(operation== '-') 
    {
        document.getElementById("answer").innerHTML = n1 - n2;
    }
    else if(operation== '*') 
    {
        document.getElementById("answer").innerHTML = n1 * n2;
    }
    else if(operation== '/') 
    {
        document.getElementById("answer").innerHTML = n1 / n2;
    }
}