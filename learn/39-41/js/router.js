function setPushState(){
    let pCheckBox=Array.from(document.getElementById('product-radio-wrapper').getElementsByTagName('input'));
    let rCheckBox=Array.from(document.getElementById('region-radio-wrapper').getElementsByTagName('input'));
    let p=[];
    let r=[];
    let obj={};
    let url='';
    pCheckBox.filter(x=>x.checked==true).map(x=>{p.push(x.value)});
    rCheckBox.filter(x=>x.checked==true).map(x=>{r.push(x.value)});
    
    if(p.some(x=>x=='全选')){
        p=['全选'];
    }
    if(r.some(x=>x=='全选')){
        r=['全选'];
    }

    obj.product=p;
    obj.region=r;
    url='#'+'product='+p.join(';')+'&region='+r.join(';');
    history.pushState(obj,null,url);
}

function skip(){
    let data=history.state;
    let pDom=Array.from(document.getElementById('product-radio-wrapper').getElementsByTagName('input'));
    let rDom=Array.from(document.getElementById('region-radio-wrapper').getElementsByTagName('input'));
    pDom.map(x=>x.checked=false);
    rDom.map(x=>x.checked=false);
    if(data!=null){
    if(data.product=='全选'){
        pDom.map(x=>x.checked=true);
    }else{
        data.product.map(x=>{pDom.filter(y=>y.value==x)[0].checked=true;});
    }

    if(data.region=='全选'){
        rDom.map(x=>x.checked=true);
    }else{
        data.region.map(x=>{rDom.filter(y=>y.value==x)[0].checked=true;});
    }
    }else{
        pDom[0].checked=true;
        rDom[0].checked=true;
    }
    drawTable();
}