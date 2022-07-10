function simpleintrest(){
	var p=document.getElementById('n1').value; 
	var r=document.getElementById('n2').value;
	var n=document.getElementById('n3').value;
	var d=(p*r*n)/100
	document.getElementById('n4').value=d;
}