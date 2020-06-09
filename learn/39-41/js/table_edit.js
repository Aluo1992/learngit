//编辑表格
let num='';
function edit(e){
    var e=e||window.event;
    if(e.target.className=='writable'){
        let editingTd=document.getElementById('editing');
        if(editingTd!=undefined){
            editingTd.innerHTML=num;
            editingTd.removeAttribute('id','editing');
        }
        e.target.setAttribute('id','editing');
        num=e.target.innerText;
        e.target.innerHTML='<div class="tableEditWrapper"><input class="editText" type="text" value=\"'+num+'\"/><ul><li class="editBtn1">确定</li><li class="editBtn0">取消</li></ul></div>';
    }
    if(e.target.className=='editBtn1'){
      queren();
    }
    if(e.target.className=='editBtn0'){
        quxiao();
    }
}


function closeEdit(e){
    var e=e||window.event;
    let td=document.getElementById('editing');
    if(td!=null){
        if(e.target.className!='writable'&&e.target.className!='editText'&&e.target.className!='editBtn1'){
            td.innerHTML=num;
            td.removeAttribute('id','editing');
        }
    }
}

function t(e){
    var e=e||window.event;
    if(e.keyCode==13){
      queren();
    }
    if(e.keyCode==27){
       quxiao();
    }
}

function quxiao(){
    let td=document.getElementById('editing');
    td.innerHTML=num;
    td.removeAttribute('id','editing');
}

function queren(){
    let s=document.getElementsByClassName('editText')[0].value;
    if(isNaN(Number(s))!=true){
        let td=document.getElementById('editing');
        td.innerHTML=s;
        td.removeAttribute('id','editing');
    }else{
        alert('输入的值不是数字！');
    }
}