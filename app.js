/* ทบทวน Js ก่อนขึ้น React.js */


//การประกาศ function แบบปกติ
/* function fullname(fname, lname){
    return fname + " "+ lname;
}
console.log(fullname("wachirawit", "mool-ang"));


//การประกาศ function แบบ arrow function =>
Fullname=(fname,lname) => fname + " " + lname;
console.log(Fullname("Hi!", "Wachirawit"));

//arrow function
setAge=(age) => "อายุ = " + age;
console.log(setAge("20")); 

//object
const customer = {
    customerName : "JJ",
    age: 20,
    address: "chiang mai"
}

console.log(customer ); */


//Multiline String คือสามารถทำงานกับข้อความยาวๆได้ หรือการขึ้นบรรทัดใหม่ โดยใช้เครื่องหมาย `` backtick

/*const address = `ชื่อลูกค้า : เด็กชายวชิรวิทย์ 
ที่อยู่: 777/77 ถนน: ร่วมสุข อำเภอเมือง จังหวัดซักที่ 
เบอร์ติดต่อ: 01-23456789`
console.log(address); */

//Interpolation คือการแทรกตัวแปรลงในพิ้นที่ String ได้โดยใช้ ${ตัวแปร} ร่วมกับ `

/*let customerName = "เด็กชายJJ"
let tel = "0-00000000"
let city = "chiang mai"

const address = `ชื่อลูกค้า : ${customerName}
ที่อยู่: ${city}  
เบอร์ติดต่อ: ${tel}`
console.log(address); */

//Spread Operator ใช้ในการกระจายสมาชิกใน Array ออกมาใช้งานโดยเติมเครื่องหมาย ... ด้านหน้าตัวแปร Array

/* const newArr = [100, 200, 300];
const data = [10, 20,...newArr];

const brightColor = ["ฟ้า", "เหลือง", "ขาว"];
const darkColor = ["ดำ","ม่วง", "น้ำตาล"];

const newBrightColor = ["ชมพู", "แสด"];

brightColor.push(...newBrightColor);

console.log(data);
console.log(brightColor); */

// Rest Patameter ใช้ในการส่งค่า parameter เข้าไปทำงานใน function โดยไม่จำกัดจำนวนโดยใช้เครื่องหมาย ...

/* summation = (...numberArr) => {
    let total = 0;
        for( let number of numberArr) 
            total += number;
            return total;
}
// นำ numberArr(คือเก็บค่า parameter ที่รับมา) มาวน loop แล้วดึงค่าที่รับเข้ามานำมา + กันอย่างละตัว โดยให้ total มีค่า= 0; of คือการดึงค่า parameter มาnumber ที่เก็บค่ามาจาก numberArr มาบวกทีละตัวกับ total (0+200(รอบที่1)) (0+200+500(รอบที่2))

console.log(summation(200, 500)); */

//Destructuring (การสลายโครงสร้าง)

//****************Array***************** */

/* const colors = ["เขียว", "แดง", "เหลือง"];
const [green,red,yellow] = colors;
//ถ้าต้องการจะระบุแค่ชุดข้อมูลใน array หล่ะ ?
// const [,,yellow]
//โดยข้อมูลไหนที่เราไม่ได้ต้องการจะใช้ค่านั้นก็ให้ใส่เครื่องหมาย , 

console.log(green);
console.log(red);
console.log(yellow); */


//****************Object***************** */
/* const product = {
    productName : "Computer",
    price: 30000,
    stock: 10
}

//const {productName:productName, price:price, stock: stock} = product;
//ในกรณีถ้าชื่อ property กับตัวแปรเหมือนกันเราสามารถเขียนแค่อันเดียวก็พอ

const {productName, price, stock} = product;

console.log(productName);
console.log(price);
console.log(stock); */ 

//Default Parameter
/* getDataCustomer = (customerName, customerAddress = "กรุงเทพมหานคร") => {

    //คือการเขียนแบบเดิม
    // if(!customerAddress){
    //     customerAddress = "กรุงเทพมหานคร";
    // }

    const address = `ชื่อลูกค้า: ${customerName}
ที่อยู่: ${customerAddress}`;
    return address;
}

console.log(getDataCustomer("Wachirawit", "chiang mai"));

console.log(getDataCustomer("JJ")); */

//join, concat
/* const data1 = [100, 200, 300];
const data2 = [400, 500, 600];

//แปลง Array => string
console.log(data1.join());
//เป็นการนำ Array มาต่อกัน
const allData = data1.concat(data2);
console.log(allData); */

//การ Loop Array 
//For Loop, ForEach, Forof

// const data = [10, 20, 30, 40, 50];
// const data1 = [60, 70, 80, 90, 100];

/* for(let i = 0; i< data.length; i++){
    // if(data [i]>= 30)
    // break;
    console.log(`ลำดับที่: ${i} = ${data[i]}`);
} */

// data.forEach(element => {
//     if(element >=30){
//         console.log("Hello!");
//         //forEach ไม่สามารถเขียน break,continue ได้
//     }
//     console.log(`สมาชิกใน Array Data = ${element}`);
// });

// let sum = 0;
// data1.forEach(Number => {
//     sum+=Number;
//     console.log(`ผลรวมลำดับที่ = ${sum}`);    
// });

//***************For of******************** 
// for(const element of data){
//     if(element >=30) break;
//     console.log(`สมาชิก Array Data = ${element}`);
// }

//ค้นหาข้อมูลใน Array 
//indexOf(ตามด้วยข้อมูลที่ต้องการจะหา) ถ้าหาไม่เจอจะได้ -1
//find (ตามด้วยข้อมูลที่ต้องการจะหา)ถ้าหาไม่เจอจะได้ undefined
//findIndex(ตามด้วยข้อมูลที่ต้องการจะหา)ถ้าหาไม่เจอจะได้ -1
/* const colors = ["red", "green", "blue", "purple", "white"];

const result = colors.indexOf("red");
console.log(result);
console.log(colors.indexOf("white"))

const search = colors.find(element => element === "blue");
console.log(search);

const search1 = colors.findIndex(element  => element === "blue");
console.log(search1); */

//Array Map

// const numbers = [10, 20, 30, 40];
// console.log(`number = ${numbers}`);

// const result = numbers.map(element =>{
//     let a = element*2
//     return a
// });

// const result = numbers.map(element => element*2); //เป็นการเขียนย่ออีกทีนึง
// console.log(`Array Map = ${result}`);

// const data = ["Jhonny", "David", "Jeramy", "Garry"];
// console.log(`data = ${data}`);

// const result1 = data.map((e, i) => {                //ถ้าต้องการจะรับค่า parameter มากกว่า 1 ตัวนั้นต้องใส่ ( , ) ในที่นี้ i คือ เลขindex
//     return i
//     return `คนที่ ${i+1} มีชื่อว่า = ${e}`;               
// });
// console.log(`result = ${result1}`);

//Array Fliter
// const data = [10, 20, 30, 40];

//  const result = data.filter(element => element >20);

// console.log(`result = ${result}`);


// Array Reduce
/*const data = [10, 20, 30, 40];

const mapData = data.map(e=>100);
const filterData = data.filter(e=>e>20);

//array.reduce((ค่าที่ถูกประมวลผล, e)=>{}, ค่าเริ่มต้น) //value = 0
// const summation = data.reduce((value, e)=>{
//     const total = e + value;
//     return total;
// },0);

const sum = data.reduce((value, element)=>element+value)


console.log(mapData);
console.log(filterData);
// console.log(summation);
console.log(sum);


//ใช้งานกับ Obj
const cart = [
    {name: "กระเป๋า", price: 500},
    {name: "หนังสือ", price: 900},
    {name: "กล้องถ่ายรูป", price: 5000}
];

const summation1 = cart.reduce((value, e)=>e.price+value,0)
// const summation1 = cart.reduce((value, e)=>{
//    const total = e.price+value;
//    return total; 
// },0)

console.log(`ลูกค้าต้องชำระเงิน = ${summation1} บาท`); */