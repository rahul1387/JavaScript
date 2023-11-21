let p1 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve(true);
    }, 2000);
})
p1.then((value)=>{
    console.log(p1);
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Promice 2");
        }, 2000);
         
    })
}).then((value)=>{
    console.log("We are done");
    return 2;
}).then((value)=>{
    console.log("We can use then() if there no promice only return value then the javascript will convert it into promice immideatly");
})