//设置checkbox
function setCheckboxes(id,data){
    let container=document.getElementById(id);
    let str='';
    for(let i=0;i<data.length;i++){
        str=str+'<input type="checkbox" value="'+data[i]+'"><label>'+data[i]+'</label><br>';
    }
    container.innerHTML=str;
}

//checkbox的勾选逻辑
function select(e){
    var e=e||window.event;
    if(e.target.value=='全选'){//勾全选
        let father=e.target.parentNode;
        let checkbox=father.getElementsByTagName('input');
        if(e.target.checked==true){
            for(let i=0;i<checkbox.length;i++){
                if(checkbox[i].value!='全选'){
                    checkbox[i].checked=true;
                }
            }
            drawTable();
        }
    }
    if(e.target.value!='全选'&&e.target.tagName=='INPUT'){
        let father=e.target.parentNode;
        let checkbox=father.getElementsByTagName('input');
        let singlebox=[];
        let allbox={};
        for(let i=0;i<checkbox.length;i++){
            if(checkbox[i].value!='全选'&&checkbox[i].value!=e.target.value){
                singlebox.push(checkbox[i]);
            }
        }
        for(let i=0;i<checkbox.length;i++){
            if(checkbox[i].value=='全选'){
               allbox=checkbox[i];
            }
        }
        if(singlebox.every(x=>x.checked==true)){
            if(e.target.checked==true){
            allbox.checked=true;
            }else{
                allbox.checked=false;
            }
            drawTable();
        }else{
            if(singlebox.every(x=>x.checked==false)){
                e.target.checked=true;
                }
                drawTable();
        }
    }
}