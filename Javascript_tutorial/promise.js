var p1 = new Promise((resolve, reject) => {
    let sqldata = {
        id:1,
        name:'Code Improve',
        ssID:1212
    };
    resolve(sqldata)
});

var p2 = new Promise((resolve, reject) => {
    let sms = 'Text message';
    // resolve(sms);
    reject(new Error('sms template error: '));
});

var p3 = new Promise((resolve, reject) => {
    let API = 'API Call message';
    resolve(API)
});

Promise.all([p1, p2, p3]).then((results) =>{
    console.log(results);
})
.catch(err=>{
    console.log(err);
})