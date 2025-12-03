// 1. Coffee Shop Billing
let coffee = 120;
let cost = coffee * 3;
if (cost >= 360){
    let taxt = cost *.18 ;
    let total = cost + taxt;
    console.log(total);
}
else{
    console.log("taxt dite hobe na")
}



//2. Grocery Shopping Discount
let shopping = 1200;
if (shopping > 1000){
    let discount = shopping * .10;
    let total = shopping - discount;
    console.log("Final Price",total);

}
else{
    console.log("no discount.");
}