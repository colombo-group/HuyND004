var value1="";
var value2 ="";
var cacul="";
var value3="";
var m=0;
var test=document.getElementById('re_screen').value;
window.onload= function(){
	document.getElementById('re_screen').value=0;
}
function caculator(x){
    if(x!=""&&value1==""){
    	value1=test;
    }
    if(value2!=""){
    	result();
    	value2="";
    }
    if(value3!=""&&value1==""&&x!=""){
    	cacul=x;
    	value1=document.getElementById('re_screen').value;
    		
    }
    if(value1 != ""){
        cacul = x;
    }
}
function val(y){
	 if(cacul==""){
	 	if(y=="0"){
	 		if(value1.indexOf(y)==0){
	 			y=y.substring(1);

	 		}
	 		if(value1.indexOf('.')==1){
	 			y="0";
	 		}
	 		for(i=1;i<=9;i++){
	 			if(value1.indexOf(i)==1||value1.indexOf(i)==0){
	 				y="0";
	 			}
	 		}
	 	}
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
	// document.write('<div id="test"></div>');
	else if(cacul!=""){

			if(y=="0"){
	 		if(value2.indexOf(y)==0){
	 			y=y.substring(1);

	 		}
	 		if(value2.indexOf('.')==1){
	 			y="0";
	 		}
	 		for(i=1;i<=9;i++){
	 			if(value2.indexOf(i)==1||value2.indexOf(i)==0){
	 				y="0";
	 			}
	 		}
	 	}
			if(y=="."){
				// if(value2.indexOf(y)==0){
				// 	alert('ok');
				// }
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
		// document.getElementById('')
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
					document.getElementById('re_screen').value="Math Error";
				}
				else{
					value2=parseFloat(value2);
					value1=parseFloat(value1);
					document.getElementById('re_screen').value=eval(value1+cacul+value2);	
					// document.write(value3);

					value1="";
					value2="";
					cacul="";
					value3="tmp";
				}
				break;
			}
			case '*': {
				value2=parseFloat(value2);
				value1=parseFloat(value1);
				document.getElementById('re_screen').value=eval(value1+cacul+value2);
				// document.write(value3);
				value1="";
				value2="";
				cacul="";
				value3="tmp";
				break;
			}
			case '+': {
				value2=parseFloat(value2);
				value1=parseFloat(value1);
				document.getElementById('re_screen').value=eval(value1+cacul+value2);
				// document.write(value1+cacul+value2);
				// document.write(value3);
				value1="";
				value2="";
				cacul="";
				value3="tmp";
				break
			}
			case '-': {
				value2=parseFloat(value2);
				value1=parseFloat(value1);
				document.getElementById('re_screen').value=eval(value1+cacul+value2);
				
				
				value1="";
				value2="";
				cacul="";
				value3="tmp";
				break;
			}
		}
}
function clearScr(){
	value1="";
	value2="";
	value3=""
	cacul="";
	// alert('ok');
	document.getElementById('re_screen').value=0;
}

function memory(x){
	memo= document.getElementById('re_screen').value;
	memo=parseFloat(memo);
	m=parseFloat(m);
	switch(x){
		case 'MC':{
			m=0;
			value2="";
			value1="";
			
			document.getElementById('re_screen').value=0;
			break;
		}
		case 'M+': {
			value1="";
			value2="";
			cacul="";

			m=eval(m+"+"+memo);
			break;
		}
		case 'M-': {
			value2="";
			value1="";
			memo2=document.getElementById('re_screen').value;
			// m-=memo;
			// m=eval(m+"-"+memo);
			m-=memo;

			// document.getElementById('test').innerHTML=memo;
			break;
		}
		case "MR":{
			document.getElementById('re_screen').value=m;
			// clearScr();
			m=parseFloat(m);
			value2=m;
			value3="tmp";
			break;
		}
	}
}