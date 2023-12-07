// let promise=new Promise((res,rej)=>{
//     return 'data is recive'
// })
// async function myfun(){
//       return 'Data Received'
//  }

//   myfun().then(console.log)

let res1=document.getElementById('result_1');
let res2=document.getElementById('result_2');
let res3=document.getElementById('result_3');

Dell={
    Brand_Name:'Dell',
    Hard_disk:'1024mb'
}

// Using Promise

let promise1=new Promise((resolve,reject)=>{
      setTimeout(()=>{
         resolve(Dell)
      },3000)
})
 
function fun1(){
   res1.innerText='Data Fetching..'
   promise1.then((res)=>{
      console.log(res)
      res1.innerText= JSON.stringify(res);
   })
}
//Using Async Awaite
let promise2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
       resolve(Dell)
    },3000)
})

async function fun2(){
    res2.innerText='Data Fetching..';
    let data=await promise2;
    console.log(data);
    res2.innerText=JSON.stringify(data);
}


//using Fetch method
 
let fetchapi=fetch('https://jsonplaceholder.typicode.com/users')
.then((res)=>res.json())

async function fun3(){
    res3.innerText='Data Fetching..';
  let data = await fetchapi
  console.log(data)
res3.innerText=JSON.stringify(data);
}