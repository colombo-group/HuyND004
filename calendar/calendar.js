var dateofmonth=new Array(31,28,31,30,31,30,31,31,30,31,30,31);
var day= new Array('Sun','Mon','Tus','Web','Thus','Fri','Sat');
var nameofmonth= new Array('January','February','March','April','June','July','August','September','October','November','December');
var curyear;
var curmonth;
var curdate;
var today;
window.onload= function(){
    today=new Date();
    curmonth=today.getMonth();
    curdate = today.getDate();
    curyear=today.getFullYear();
    curday=today.getDay();
    name_of_curmonth=today.toDateString().substring(4,8); 
    calendar();
}
function calendar(){
    // document.write(curyear);
    document.getElementById("calendar-dates").innerHTML="";
    var first_date=new Date(curyear,curmonth,01);
    var first_day=first_date.getDay();
    table=document.createElement('table');
    tr=document.createElement('tr');
    //dien thang nam cua lich
    document.getElementById('calendar-month-year').innerHTML=name_of_curmonth+" - "+curyear;
    //dien cac thu trong tuan
    for(i=0;i<=6;i++){
        td=document.createElement('td');  
        td.innerHTML=day[i];
        td.setAttribute('class','no-border');
        tr.appendChild(td);
    }
    table.appendChild(tr);
    //dien vao cac ngay truoc ngay dau tien cua thang ki tu rong
    tr=document.createElement('tr');
    for(i=0;i<first_day;i++){
        // document.write(i);
        td=document.createElement('td');
        td.innerHTML=" ";
        td.setAttribute('class','no-border');
        tr.appendChild(td);
    }
    eachday=1;
    // document.write(i);
    //dien vao cac ngay cua tuan dau tien
    for(;i<=6;i++){
        td=document.createElement('td');
        td.innerHTML=eachday;
        eachday++;
        tr.appendChild(td);
    }
    table.appendChild(tr);
    for(i=0;i<=4;i++){
        tr=document.createElement('tr');
        for(j=0;j<=6;j++){
            td=document.createElement('td');
            td.innerHTML=eachday;
            tr.appendChild(td);
            
            if(eachday==dateofmonth[curmonth]){
                table.appendChild(tr);
                document.getElementById("calendar-dates").appendChild(table);
                return 0;
            }
            d=new Date();
            month=d.getMonth();
            year=d.getFullYear();
            date=d.getDate();
            if(eachday==date&&year==curyear&&month==curmonth){
                td.setAttribute('class','today');
            }

            eachday++;  
        }
        table.appendChild(tr);
    }
    document.getElementById("calendar-dates").appendChild(table);
}

function moveNext(){
    today.setDate(1); 
    today.setMonth(today.getMonth()+1);
    curmonth = today.getMonth();   
    curyear = today.getFullYear();
    name_of_curmonth=today.toDateString().substring(4,7);
    pos=nameofmonth.indexOf(name_of_curmonth);
    calendar();
}
function movePre(){
    today.setDate(1); 
    today.setMonth(today.getMonth()-1);
    curmonth = today.getMonth();   
    curyear = today.getFullYear();
    name_of_curmonth=today.toDateString().substring(4,7);
    calendar();
}

