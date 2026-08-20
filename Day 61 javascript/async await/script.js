// async await 

// let prn=new Promise((resolve,reject)=>{
//   setTimeout(() => {
//     resolve()
//   }, 3000);
// })
// prn.then(function(){
//     console.log("resolve")
// })
// .catch(function(){
//     console.log("reject")
// })

// ----------------------

// async function abcd(){
//    let raw = await fetch(`https://randomuser.me/api/`)
//    let data = await raw.json();
//    console.log(data.results[0].name.first)
// }


//-----------------------
function getNum() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 10);
      if (num < 5) {
        resolve(true);
      } else {
        reject(false);
      }
    }, 3000);
  });
}

async function abcd() {
    try{
    let v = await getNum();
    console.log("Resolved" , v)
    }
    catch(err){
     console.log("Reject",err)
    }
}

abcd();
