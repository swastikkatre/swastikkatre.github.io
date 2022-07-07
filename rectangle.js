function rectangle(){
	var len=document.getElementById('n1').value;
	var wid=document.getElementById('n2').value;
	var r1=parseInt(len)*parseInt(wid);
	document.getElementById('n3').value=r1;
	var r2=2*((parseInt(len))+(parseInt(wid)));
	document.getElementById('n4').value=r2;
	
}