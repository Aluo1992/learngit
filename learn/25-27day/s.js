function addZero(n){
    n=String(n);
    if(n.length==1){
        n='0'+n;
    }
    return n;
}

function getYearMothsDay(d){
    var arr=[];
    var year=d.getFullYear();
    var moths=addZero(d.getMonth());
    var day=addZero(d.getDate());
    arr.push(year);
    arr.push(moths);
    arr.push(day);
    return arr;
}

function getHoursMinSec(d){
    var h=addZero(d.getHours());
    var m=addZero(d.getMinutes());
    var s=addZero(d.getSeconds());
    return [h,m,s];
}

function format(d){
    //console.log(d);
    var str=[];
    var part1=getYearMothsDay(d);
    //var part2=day1(d);
    var part3=getHoursMinSec(d);
    part3=part3.join(':');
    str.push(part1[0]);
    str.push('年');
    str.push(part1[1]);
    str.push('月');
    str.push(part1[2]);
    str.push('日');
    //str.push(part2);
    str.push(part3);
    str=str.join(' ');
    return str;
}