// promises -> ek kaam jaake karo
// pending state
// hojaayega -> resolved
// nahi hoga -> reject


// const prm = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve();
//     }, 3000);
// })

// prm.then(function(){
//     console.log('helheheh')
// })
// .catch(function(){
//     console.log("reject")
// })

// -----------------------------------------

// fetch se kisi bhi url par jaa sakte hai
// fetch ka data readable nhi hota.
// usey json bannaake readable karte hai
//iske baad jo data milta hai wo readable hota hai 

fetch(`https://randomuser.me/api/`)
.then (function(raw){
    return raw.json();
})
.then(function(realdata){
    console.log(realdata.results[0].name.first)
}) 
.catch(function(err){
    console.log("errr",err.name)
})