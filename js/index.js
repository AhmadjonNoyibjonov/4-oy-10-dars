// ForEach metodi yordamida ishlanadigan masalalar
// 1-masala
// let arr1 = [1, 2, 5, 12, 24];
// let arr2 = [];

// arr1.forEach(function(value) {
//     arr2.push(value ** 2)
// });
// console.log(arr2);

// 2-masala
// let arr1 = [1, 2,-3 ,5,-6, 12, 24,-32];
// let arr2 = [];
// arr1.forEach(function(value) {
//     if(value > 0 ) {
//         arr2.push(value)
//     }
// });
// console.log(arr2);

// 3-masala
// let mass = [1,3,5,4,7,12,32];
// mass.forEach(function(value) {
//     console.log(value ** 2);
// });

// 4-masala
// let arr = [1, 2, 5, 12, 24];
// let summ = 0;
// arr.forEach(function(value) {
//     summ = summ + value;
// });

// console.log(summ);

// Filter metodi yordamida ishlanadigan masalalar
// 1-masala
// let mass = [1, 2,-3 ,5,-6, 12, 24,-32];
// let result =  mass.filter(function(value) {

//     return value > 0;
// });
// console.log(result);

// 2-masala
// let mass = [1,3,5,4,7,12,32];
// let result = mass.filter(function(value) {

//     return value % 2 == 0;
// });
// console.log(result);

// 3-masala
// let arr = ['salom','yes','ok','log','bye','hello','good bye','good',];
// let res = arr.filter(function(value) {
//     return value.length < 5;
// });
// console.log(res);

// 4-masala
// let mass = [
//   { name: "Botir", age: 21 },
//   { name: "Shokir", age: 18 },
//   { name: "Bobur", age: 15 },
//   { name: "Temur", age: 24 },
//   { name: "Ikrom", age: 32 },
// ];

// let res = mass.filter(function (value) {
//   return value.age > 18;
// });
// res.forEach(function (value) {
//   console.log(value.age);
// });

// Map metodi yordamida ishlanadigan masalalar
// 1-masala
// let arr = [1, 2, 5, 12, 24];
// let res = arr.map(function (value) {
//   return value ** 2;
// });

// console.log(res);

// 2-masala
// let mass = [2,4,5,7,12,32,43]
// let res = mass.map(function (value) {
//   return value + 5;
// });

// console.log(res);

// 3-masala
// let arr = ['salom','yes','bye','hello','good',];
// let res = arr.map(function(value) {
//     return value.at(0);
// });
// console.log(res);

// 4-masala
// let arr = [1, 4, 9, 25, 36,64,144];
// let res = arr.map(function (value) {
//   return value ** (1/2);
// });
// console.log(res);

// Some va every metodi yordamida ishlanadigana masalalar
// 1-masala
// let arr = [1, 2, 5, 12, 24];
// let res = arr.some(function(value) {
//     return value < 0;
// });
// console.log(res);

// 2-masala
// let arr = ['salom','yes','bye','Noyibjonov.A','good',];
// console.log(arr.some(function(value) {
//     return value.length > 10;
// }));

// 3-masala
// let mass = [2,4,5,7,12,32,43];
// console.log(mass.every(function(value) {
//     return value > 0;
// }));

// Umumiy
// 1-masala
// let mass = [1, "hello"];
// console.log(mass.includes('hello'));

// 2-masala
// let arr = [1, 2, 5, 12, 24,12];
// let res = arr.indexOf(12);
// console.log(res);

// 3-masala
// let arr = [1, 2, 5, 12, 24,12];
// let res = arr.lastIndexOf(12)
// console.log(res);

// 4 - masala
// let arr = [1, 2, 5, 12, 24];
// let res = arr.find(function (value) {
//   return (value > 20);
// });

// console.log(res);

// 5-masala
// let arr = [1, 2, 5, 12, 24];
// let res = arr.findIndex(function (value) {
//   return (value > 10);
// });

// console.log(res);

// 6-masala
// let arr = [1, 2, 5, 12, 24];
// let res = arr.findLast(function (value) {
//   return value < 10;
// });

// console.log(res);

// 7-masala
// let arr = [1, 2, 5, 12, 24];
// let res = arr.findLastIndex(function (value) {
//   return value > 10;
// });

// console.log(res);

// 8-masala
// let arr = [2, 5, 12, 24, "hello"];
// let result = arr.reverse();
// console.log(result);

// 9-masala
// let arr = [101, 43, 9, 5, 36,64];
// let mass = arr.sort(function(a,b) {
//     return a-b;
// });
// console.log(mass);

// 10-masala
// let mass = [2,4,5,12,32,45];
// let res = mass.forEach(function(value) {
//     console.log( value * 2);
// });

// 11-masala
// let mass = [-5, -9, 2, -6, 5, 9, 12, 29];
// let res = mass.filter(function(value) {
//     return value > 0;
// });
// console.log(res);

// 12-masala
// let mass = [2,4,5,12,32,45,29];
// let res = mass.map(function(value){
//     return value ** 2;
// });
// console.log(res);

// 13-masala
// let mass = [-5, -9, 2, -6, 5, 9, 12, 29];
// console.log(mass.some(function(value) {
//     return value < 0;
// }));

// 14-masala
// let mass = [-5, -9, 2, -6, 5, 9, 12, 29];
// console.log(mass.every(function(value) {
//     return value > 0;
// }));

// 15-masala
// let mass = [-5, -9, 2, -6, 5, 9, 12, 7];
// let arr = mass.map(function (value) {
//   return value * 3;
// });

// let result = arr.filter(function (value) {
//   return value > 10;
// });
// console.log(result);


// Qo'shimcha
// 1-masala
// let arr = [1, 2, 5, 12, 24];
// let n = arr.includes(56);
// let m = arr.indexOf(12);
// console.log(n);
// console.log(m);

// 2-masala
// let arr = [1, 2, 5, 12, 24];
// let result = arr.find(function(n,b) {
//     console.log(n,b);

//     return n % 5 == 0 && b > 2;
// })

// console.log(result);


// 3-masala
// let arr = [1, 2, 5, 12, 24];
// arr.sort(function(a,b) {
//     return b-a;
// })
//  let m = arr.at(0);
// console.log(m);



// 4-masala
// let arr = [1, 2, 5, 12, 24];
// let summ = 0;
// arr.forEach(function(value) {
//     if (value % 2 == 1)

//     summ = summ + value;
// });

// console.log(summ);


// 5-masala
// let arr = [1, 2, 5, 12, 24];
// let New = [];
// arr.forEach(function(value) {
//     if (value % 2 == 0 && value % 3 == 0) {
//         New.push(value);
//     }

//     New.sort(function(a,b) {
//         return b-a;
//     })

// });

// console.log(New);


// 6-masala
// let arr = [1, 2, 5, 12, 24,'salom',true];
// let res = arr.filter(function (value) {
//   return typeof value === 'number';
// });

// console.log(res);


// 7-masala
// let arr = [1, 2, 5, 12, 24];
// let result = arr.filter(function(value) {
//     return value % 3 == 0 && value > 9 && value <100;
// })

// console.log(result);


// 8-masala
// let arr = [1, 2, 5, 12, 24];
// let res = arr.map(function (value, index) {
//   return value / 2;
// });

// console.log(res);


// 9-masala
// let arr = [1, 2, 5, 12, 24];
// let res = arr.map(function (value, index) {
//   if (index == 2) {
//     return value ** 2;
//   } else {
//     return value;
//   }
// });

// console.log(res);



// 10-masal
// const person = {
//   name: "Ahrorbek",
//   age: 19,
//   nationality: "uzbek",
//   phone: "+998901234567",
//   work: ["dasturchi", "student", "farzand"],
// };

// console.log(person.name);


// 11-masala
//  const arr = [
//     {name: 'Messi', age: 35 },
//     {name: 'Ronaldo', age:37},
//     {name: 'Neymar', age: 33}
//  ];

//  let summ;
//  summ = arr[0].age + arr[1].age + arr[2].age;
//  console.log(summ);