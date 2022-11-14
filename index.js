var Kon = document.getElementById("Kon");
var Res = document.getElementById("Res");
function load()
{
if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ){
    var Kon2 = "y = 4+x"
    Kon.innerHTML += Kon2;
}
else if(navigator.userAgent.indexOf("Chrome") != -1 ){
    var Kon2 = "y = 3*x+5"
    Kon.innerHTML += Kon2;
}
else if(navigator.userAgent.indexOf("Firefox") != -1 ){
    var Kon2 = "y = -x+2"
    Kon.innerHTML += Kon2;
}
else if(navigator.userAgent.indexOf("Yandex") != -1 ){
    var Kon2 = "y = 2*x+11"
    Kon.innerHTML += Kon2;
}
else{
   alert('unknown');
}
}
function chet()
{
    var Firs = document.getElementById("First").value;
    if(navigator.userAgent.indexOf("Chrome") != -1 ){
        var Result = (3 * Number(Firs) + 5);
        Res.innerHTML += Result;
    }
    if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ){
        var Result = (4 + Number(Firs));
        Res.innerHTML += Result;
    }
    else if(navigator.userAgent.indexOf("Firefox") != -1 ){
        var Result = (-Number(Firs) + 2);
        Res.innerHTML += Result;
    }
    else if(navigator.userAgent.indexOf("Yandex") != -1 ){
        var Result = (2 * Number(Firs) + 1);
        Res.innerHTML += Result;
    }
}