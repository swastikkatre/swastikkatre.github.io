function ci(){
	var p=document.getElementById('s1').value;
	var n=document.getElementById('s2').value;
	var r=document.getElementById('s3').value;
	var a= parseInt(p)*(1+((parseInt(r))/100))*parseInt(n);
            document.getElementById('S4').value =a;
}