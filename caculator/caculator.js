var value1="";
var value2 ="";
var cacul="";

window.onload= function(){
	document.getElementById('re_screen').value=0;
}
function caculator(x){
    if(value1 != ""){
        cacul = x;
        
    }
   
    
}
function val(y){
	if(cacul==""){
		if(y=="."){
			//kiem tra dau vao
			if(value1.indexOf(y)==-1){
				value1+=y;
			}
		}
		else if (y=="+/-"){
			value1=eval("-1" * value1);
			document.getElementById('re_screen').value=value1;
		}
		else {
			value1+=y;
		}
	document.getElementById('re_screen').value=value1;	
	}
	else{
			if(y=="."){
				if(value2.indexOf(y)==-1){
					value2+=y;
				}
			}
			else if(y=="+/-"){
				value2=eval('-1'*value2);
				document.getElementById('re_screen').value=value2;
			}
			else{
				value2+=y;
			}
		document.getElementById('re_screen').value=value2;
		}
}
function result(){
	// document.write(cacul)
		switch(cacul){
			case '/': {
				if(value2==0){
					value1="";
					value2="";
					cacul="";
					alert('Math Error');
					document.getElementById('re_screen').value=0;
				}
				else{
					document.getElementById('re_screen').value=eval(value1+cacul+value2);
					value1="";
					value2="";
					cacul="";
				}
				break;
			}
			case '*': {
				document.getElementById('re_screen').value=eval(value1+cacul+value2);
				value1="";
				value2="";
				cacul="";
				break;
			}
			case '+': {
				document.getElementById('re_screen').value=eval(value1+cacul+value2);
				value1="";
				value2="";
				cacul="";
				break
			}
			case '-': {
				document.getElementById('re_screen').value=eval(value1+cacul+value2);
				value1="";
				value2="";
				cacul="";
				break;
			}
		}
}
function clearScr(){
	value1="";
	value2="";
	// alert('ok');
	document.getElementById('re_screen').value=0;
}
var m=0;
function memory(x){
	memo= document.getElementById('re_screen').value;
	memo=parseFloat(memo);
	switch(x){
		case 'MC':{
			m=0;
			document.getElementById('re_screen').value=0;
			break;
		}
		case 'M+': {
			m=eval(m+"+"+memo);
			break;
		}
		case 'M-': {
			m=eval(m+"-"+memo);
			break;
		}
		case "MR":{
			document.getElementById('re_screen').value=m;
			break;
		}
	}
}