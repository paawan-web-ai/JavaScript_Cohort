//syntax error -> aapne code mein likhte waqt galti kardi

//runtime error => code likhte waqt error nahi hai chalte waqt error hai

//logical error => aapke code ko kuchh karna chahiye tha par vo kar kuchh aur rha hai.

// understanding the error object -


// try{
//     let a=12;
//     console.log(a.age.name)
// }
// catch(err){
//    console.log(err)
// }

 //------------------------------------
 
// try{
//     let a = 12;
//     console.log(a.name.age)
// }
// catch(err){
//     // console.log(err.message)
//     // console.log(err.name)
//     console.log(err.stack)
// }

//---------------------------------------
//finally code always runs in both situation (try , catch)
// try{
//     let a = 12;
//     console.log(a.name.age)
// }
// catch(err){
//     // console.log(err.message)
//     // console.log(err.name)
//     // console.log(err.stack)
//     console.log(err)
// }

// finally{
//     console.log("hello world")
// }

// ----------------------------------

// how to throw errors in javascript

try{
    let a = 12;
    console.log(a.name.age)
}
catch(err){
    // console.log(err)
   throw new Error("something went wrong from our side please wait for sometime")
}