
if(new Date().getHours()>=0 && new Date().getHours()<6 ){
    document.body.style.backgroundColor='black'
alert(`GECENIZ XEYIRE XOS GELMISINIZ`);

}

else if(new Date().getHours()>=6 && new Date().getHours()<12 ){
    document.body.style.backgroundColor='blue'
alert(`HER VAXTINIZ XEYIRLI OLSUN   `);

}

else if(new Date().getHours()>=12 && new Date().getHours()<18 ){
    document.body.style.backgroundColor='blue'
alert(`GUNORTANIZ XEYIRLI OLSUN`);

}

else if(new Date().getHours()>=18 && new Date().getHours()<24 ){
    document.body.style.backgroundColor='orange'
alert(`AXSAMINIZ XEYIRLI UGURLU OLSUN`);

}

else{
    alert(`NO EMPTY`);
}