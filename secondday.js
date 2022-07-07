function add(){
	var a=document.getElementById('n1').value;
	var b=document.getElementById('n2').value;
	document.getElementById('n3').value=parseInt(a)+parseInt(b);
}
function subtract(){
	var a=document.getElementById('n1').value;
	var b=document.getElementById('n2').value;
	document.getElementById('n3').value=parseInt(a)-parseInt(b);
}
function multiply(){
	var a=document.getElementById('n1').value;
	var b=document.getElementById('n2').value;
	document.getElementById('n3').value=parseInt(a)*parseInt(b);
	
}
function divide(){
	var a=document.getElementById('n1').value;
	var b=document.getElementById('n2').value;
	document.getElementById('n3').value=parseInt(a)/parseInt(b);
	
}