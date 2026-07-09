const orderdetails ={
    userid:123,
    item:["pizza"],
    cost:450,
    res:"jind"
}
function order(orderdetails,callback){
    console.log(`${orderdetails.cost}Payment in progress`);
    setTimeout(()=>{
        console.log("Payment is received")
           orderdetails.status = true; 

        if(orderdetails.status){
            callback(orderdetails);  
        } else {
            console.log("Payment failed ");
        }

    },2000)
}

function prepare(orderdetails,callback){
    console.log(`Preparing food: ${orderdetails.item}`);
    setTimeout(()=>{
        console.log("Food Prepared");
        orderdetails.token= 123;
        callback(orderdetails);
        
    },2000)
    
}
function placeorder(orderdetails ,callback){
    
    console.log(`Delivery boy going to the restaurant from ${orderdetails.res}`);
    setTimeout(()=>{
        console.log("Picked the order");
        callback(orderdetails);
        
    },2000)
}
function deliver(orderdetails){
    console.log(`Delivering order with token ${orderdetails.token}`);
    setTimeout(()=>{
        console.log("Order deliver successfully");
    },1000)
    
}
order(orderdetails,(orderdetails)=>{
    prepare(orderdetails,(orderdetails)=>{
        placeorder(orderdetails,(orderdetails)=>{
            deliver(orderdetails);
        });
    });
});
