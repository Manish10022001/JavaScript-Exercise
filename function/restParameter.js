//rest parameter (...paraName): one parameter allow multiple arguments

function products(...details){
    let [id,name,price,stock]=details;
    console.log("Id : "+id+"\n"+"name :"+name+"\n"+"Price :"+price+"\n"+"Stock : "+stock);
    // document.write(`
    //         Id    :${id} <br>
    //         Name  :${name} <br>      if used as resttPrameter.html
    //         Price :${price} <br>
    //         Stock :${stock}
    //     `)
}
products(1,"TV",33423,true);