function ajax (method,url,fnsucc){
    var a=new XMLHttpRequest()||ActiveXObject('microsoftXMLHttp');
    a.open(method,url,true);
    a.send();
    a.onreadystatechange=function () {
        if(a.readyState==4){
            if(a.status==200)
            {
                fnsucc(a.responseText);
            }
            else{
                alert(a.status);
            }
        }
    }
}