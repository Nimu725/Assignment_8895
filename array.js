// let arr1=[1,2,3,4,5];
// let new_arr= arr1.map((element, index)=>{
//     return element*100;
// }).filter((element, index)=>{
//     return element>=300
//     //filter is used to apply conditions
// }).reduce((firstelement, nextelement)=>{
//     return firstelement+nextelement;
//     //reduce is used find the summation
// }, 800);// additional value is called accumalator
// console.log(new_arr);
// let arr1=[10,20,30,40,50,60,70,80,90,100];
// arr1.splice(4,3);//
// console.log(arr1);
// // delete 100
// arr1.splice(6,1);
// console.log(arr1);
// //delete 10
// arr1.splice(0,1);
// console.log(arr1);
// //delete 20 and add 10,20
// arr1.splice(0,1,10,20);
// console.log(arr1);
// //delete 80 index, add 50 , 60, 70
// arr1.splice(4,0,50,60,70);
// console.log(arr1);

// // add 100 
// arr1.splice(9,0, 100);
// console.log(arr1);

// let arr1=[10,20,30,40,50,60,70,80,90,100];

// // arr1.splice(2,1,300);
// // console.log(arr1);

// // arr1.splice(-2,2);
// // console.log(arr1);

// // arr1.splice(7,2,100,200);
// // console.log(arr1);
// // let arr1=[10,20,30,40,50,60,70,80,90,100];


// // let indexpos= arr1.indexOf(30);
// // document.write(indexpos)
// let arr1=[10,20,30,40,50,60,70,80,90,100];

// arr1.splice(arr1.findIndex((element,index)=>{
//     return element==20
// }),1);
// console.log(arr1);
// //second method
// arr1.splice(1,1);
// console.log(arr1);


// // delete 10
// arr1.splice(arr1.findIndex((element,index)=>{
//     return element==10
// }),1);
// console.log(arr1);

// //delete 50 
// arr1.splice(arr1.findIndex((element,index)=>{
//     return element==50
// }),1);
// console.log(arr1);

// let arr1=[10,20,30,10, 40,50,20,70,80,30,10];

// let new_arr=arr1.filter((element, index)=>{
//     return arr1.indexOf(element)==index;
// });
// console.log(new_arr);


// let str=`hello`;
// console.log(Array.from(str).reverse().toString().replace(",", ""));

// console.log(
//     Array.from(str).reverse().toString().replaceAll(",", "")
// );

// console.log(
//     Array.from(str).reverse().toString().replace(/,/g, "")
// );

// console.log(
// str.split("").reverse().join("")
// // );
// let arr1=[20,30,40];
// // add 50 at last
// arr1.push(50);
// console.log(arr1);

// // add 10 at start 
// arr1.unshift(10);
// console.log(arr1);

// //delete last item
// arr1.pop();
// console.log(arr1);

// //delete first item
// arr1.shift();
// console.log(arr1);

// let arr1=[10,20,30,40,50,60,70,80,90,100];

// let arr2=arr1.slice(0,5);
// console.log(arr2);


// let arr3=arr1.slice(5);
// console.log(arr3);

// let finalarr=[...arr2, ...arr3];
// console.log(finalarr);

// let str= `welcome to fullstack`;
// console.log(str.slice(11));
// console.log(str.slice(-9));


// console.log(str.substr(11));
// console.log(str.substr(8,2));


// console.log(str.substring(8,10))
// console.log(str.substring(11))


// let str=`kluniversity`;
// console.log(str.padStart(10,"*").padEnd(15, "*"));


let arr1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(arr1.includes(30));
console.log(arr1.includes(300));

console.log(
    arr1.find((element, index) => {
        return element == 20;
    })
);//20

console.log(
    arr1.find((element, index) => {
        return element == 220;
    })
);//undefined 