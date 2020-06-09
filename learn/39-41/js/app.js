//初始化函数 
function init(){
    let id=arguments;
    let arr=[];
    for(let i=0;i<arguments.length;i++){
        arr.push(document.getElementById(id[i]));
    }
    if(history.state==null){
        if(location.hash.indexOf('#')==-1){
            arr.map(x=>{x.getElementsByTagName('input')[0].checked=true;});
            alert('新打开');
        }else{
            let s='#';
            let p='product=';
            let r='region=';
            let obj={};
            let str=decodeURI(location.hash).replace('#product=','').replace('region=','').split('&');
            alert('复制黏贴');
            s=s+p+str[0]+'&'+r+str[1];
            obj.product=str[0].split(';');
            obj.region=str[1].split(';');
            history.replaceState(obj,null,s);
            pDom=Array.from(document.getElementById('product-radio-wrapper').getElementsByTagName('input'));
            rDom=Array.from(document.getElementById('region-radio-wrapper').getElementsByTagName('input'));
            if(obj.product.length==1){
                if(obj.product=='全选'){
                    pDom.map(x=>x.checked=true);
                }else{
                    pDom.filter(x=>x.value==obj.product)[0].checked=true;
                }
            }else{
                obj.product.map(x=>{pDom.filter(y=>y.value==x)[0].checked=true;});
            }

            if(obj.region.length==1){
                if(obj.region=='全选'){
                    rDom.map(x=>x.checked=true);
                }else{
                    rDom.filter(x=>x.value==obj.region)[0].checked=true;
                }
            }else{
                obj.region.map(x=>{rDom.filter(y=>y.value==x)[0].checked=true;});
            }
        }
        drawTable();
    }else{
        alert('刷新');
        skip();
    }
}