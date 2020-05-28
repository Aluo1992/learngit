//获取数据
function getDate(id){
    let dom=document.getElementById(id).getElementsByTagName('input');
    let arr=[];
    for(let i=0;i<dom.length;i++){
        if(dom[i].checked==true){
            arr.push(dom[i].value);
        }
    }
    return arr;
}