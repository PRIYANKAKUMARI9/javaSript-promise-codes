let hello=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("helo this is promise");
    },5000);
   // resolve(5656666);
   reject(new Error("this is erroe bhai"));// error ko throw /likh sktehai reject ke andr new Error
});

//console.log("second hello");

//then method use

hello.then((value)=>{
    console.log(value);
});

hello.catch((Error)=>{
    console.log("recieved an error in this")
});

