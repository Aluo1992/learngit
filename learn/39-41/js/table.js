//绘制表格
function drawTable(){
    let r_arr=getDate('region-radio-wrapper');
    let p_arr=getDate('product-radio-wrapper');
    render(r_arr,p_arr);
}

//表格渲染
function render(arr1,arr2){
    let r=arr1.filter(x=>x!='全选');
    let p=arr2.filter(x=>x!='全选');
    let c='';
    let dataList=[];
    let saleStr='';
    let table=document.getElementById('table');
    function month(){
        let str='';
        for(let i=1;i<13;i++){
            str=str+'<th>'+i+'月</th>'
        }
        return str;
    }
    if(r.length==1&&p.length==1){
       c='<tr><th>地区</th><th>商品</th>'+month()+'</tr>';
       dataList=sourceData.filter(x=>x.region==r[0]&&x.product==p[0]);
       dataList[0].sale.map(x=>{saleStr=saleStr+'<td class="writable">'+x+'</td>';});
       c=c+'<tr><td>'+dataList[0].region+'</td><td>'+dataList[0].product+'</td>'+saleStr+'</tr>';
       table.innerHTML=c;
       return;
    }
    if(r.length==1&&p.length>1){
        dataList=sourceData.filter(x=>x.region==r[0]).filter(x=>{for(let i=0;i<p.length;i++){
            if(x.product==p[i]){
                return true;
            }
        }});
        c='<tr><th>地区</th><th>商品</th>'+month()+'</tr>';
        c=c+'<tr><td rowspan=\"'+p.length+'\">'+r[0]+'</td><td>'+p[0]+'</td>';
        dataList[0].sale.map(x=>{c=c+'<td class="writable">'+x+'</td>'});
        c=c+'</tr>';
        for(let i=1;i<dataList.length;i++){
            c=c+'<tr><td>'+dataList[i].product+'</td>';
            dataList[i].sale.map(x=>{c=c+'<td class="writable">'+x+'</td>';});
        }
        c=c+'</tr>';
        table.innerHTML=c;
    }
    if(r.length>1&&p.length==1){
        dataList=sourceData.filter(x=>x.product==p[0]).filter(x=>{for(let i=0;i<r.length;i++){
            if(x.region==r[i]){
                return true;
            }
        }});
        c='<tr><th>商品</th><th>地区</th>'+month()+'</tr>';
        c=c+'<tr><td rowspan=\"'+r.length+'\">'+p[0]+'</td><td>'+r[0]+'</td>';
        dataList[0].sale.map(x=>{c=c+'<td class="writable">'+x+'</td>'});
        c=c+'</tr>';
        for(let i=1;i<dataList.length;i++){
            c=c+'<tr><td>'+dataList[i].region+'</td>';
            dataList[i].sale.map(x=>{c=c+'<td class="writable">'+x+'</td>';});
        }
        c=c+'</tr>';
        table.innerHTML=c;

    }
    if(r.length>1&&p.length>1){
        dataList=sourceData.filter(x=>{ if(r.some(i=>i==x.region)&&p.some(j=>j==x.product)){
            return true;}});
        c='<tr><th>商品</th><th>地区</th>'+month()+'</tr>';
        for(let i=0;i<p.length;i++){
            c=c+'<tr><td rowspan=\"'+r.length+'\">'+p[i]+'</td><td>'+r[0]+'</td>';
            dataList.filter(x=>x.region==r[0]&&x.product==p[i])[0].sale.map(x=>{c=c+'<td class="writable">'+x+'</td>'});
            c=c+'</tr>';
            for(let j=1;j<r.length;j++){
               c=c+'<tr><td>'+r[j]+'</td>';
               dataList.filter(x=>x.region==r[j]&&x.product==p[i])[0].sale.map(x=>{c=c+'<td class="writable">'+x+'</td>'});
               c=c+'</tr>';
            }
        }
        table.innerHTML=c;
    }
}

