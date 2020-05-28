//初始化函数 
function init(){
    let id=arguments;
    let arr=[];
    for(let i=0;i<arguments.length;i++){
        arr.push(document.getElementById(id[i]));
    }
    arr.map(x=>{x.getElementsByTagName('input')[0].checked=true;});
    drawTable();
}