// SLICE FUNCTION E ORIGINAL ARRAY THIK REKHE CUT KORE;
let friends = [2, 5, 9, 22, 90, 45, 100, 48, 29, 70, 34, 79, 489];
let partial = friends.slice(3, 6);
console.log(partial);

// SPLICE FUNCTION E ORIGINAL ARRAY THIK THIK THAKENA; SPLICE METHOD JEKHAN THEK KATA AROMVO KORE SEKHAN THEK AG PORJONTO KATE. OI JAIGAY KICHU INSERT KORTE CHAILE KORTE PARBO

let friends1 = [2, 5, 9, 22, 90, 45, 100, 48, 29, 70, 34, 79, 489,50];
console.log(friends1);
let partial1 = friends1.splice(4, 5, 600,700,800);
console.log(friends1);
console.log(partial1);


//REMOVE DUPLICAT IN ARRAY

const studentNames = ['A', 'B', 'C', 'A', 'D', 'E', 'F', 'B', 'C', 'G', 'D', 'H', 'I', 'G', 'I', ];

function removeDuplicate(addName){
    let addStud = [];
    for(let b = 0; b <addName.length; b++){
       let allNames = addName[b];
       if(addStud.includes(allNames) === false){
          addStud.push(allNames);
       }
       
    }
    return addStud;
}

let alphabetNames = removeDuplicate(studentNames)

console.log(alphabetNames);



//SHOW DIVISIBLE SHONKHA //ATA FUNCTION CHARA FOR LOOP DEYA O KORA JAY

function showDivisibleNUM(num2){
    for(let c = 1; c <= countingNumbers; c++){
        //console.log(c);
        if(c % 3 == 0 && c % 5 == 0){
            console.log('Foo-Bars');
        }else if(c % 3 == 0){
            console.log('Foo');
        }else if(c % 5 == 0){
            console.log('Bars');
        }else{
            console.log(c);
        }
    }
}
let countingNumbers = 150;
showDivisibleNUM(countingNumbers);

//CALCULATION WOOD REQUIREMENTS
/*CHAIR 3CFT  TABLE 10CFT  BED  50CFT*/ 
function woodToNeed(chairQuant, tableQuant, bedQuant){
    let chairWood = 3;
    let tableWood = 10;
    let bedWood = 50;

    let totalChairWood = chairQuant * chairWood;
    let totalTableWood = tableQuant * tableWood;
    let totalBedCost =  bedQuant * bedWood ;
    let totalWoodCost = totalChairWood + totalTableWood + totalBedCost;
    return totalWoodCost;
}

let total1 = woodToNeed(6, 1, 1);
console.log(total1);

let total2 = woodToNeed(10, 2, 4);
console.log(total2);

//MOBILE PRICE

const myPhones = [
    {name: 'Samsung', camera:12, storage: '32gb', price: 36000, color:'Silver'},
    {name: 'Walton', camera:8, storage: '10gb', price: 8000, color:'Green'},
{name: 'Oppo', camera:12, storage: '32gb', price: 25000, color:'Silver'},
{name: 'Micromax', camera:14, storage: '15gb', price: 18000, color:'red'},
{name: 'Iphon', camera:14, storage: '15gb', price: 80000, color:'red'},
{name: 'Nokia', camera:10, storage: '15gb', price: 40000, color:'red'}

]

function cheapsPhones(phones){
    let cheapest = phones[0];
    for(let i = 0; i < phones.length; i++){
         let allPhones = phones[i];
         //console.log(allPhones);
         if(allPhones.price < cheapest.price){
             cheapest = allPhones;
         }
    }
    return cheapest;
}
let showPhonePrice = cheapsPhones(myPhones);
console.log(showPhonePrice);

//SHOPPINGCART SUMITION

const shoppingCart = [
    {name: 'shoe', price: 1200},
    {name: 'shirt', price: 1800},
    {name: 'pant', price: 3500},
    {name: 'belt', price: 500}
]
function myShoppingCart(mycart){
    let emptyCart = 0;
    for(let k = 0; k < mycart.length; k++ ){
        let safaCart = mycart[k];
        //console.log(safaCart);
        emptyCart += safaCart.price;
    }

    return emptyCart;
}

let price1 = myShoppingCart(shoppingCart);
console.log(price1);

//HOW TO SUM QUANTITY

const shoppingCart1 = [
    {name: 'shoe', price: 1200, quantity: 5},
    {name: 'shirt', price: 1800, quantity: 3},
    {name: 'pant', price: 3500, quantity: 6},
    {name: 'belt', price: 500, quantity: 2}
]
function myShoppingCart1(mycart1){
    let emptyCart1 = 0;
    for(let l = 0; l < mycart1.length; l++ ){
        let safaCart1 = mycart1[l];
        console.log(safaCart1);
        let productTotal = safaCart1.price * safaCart1.quantity;
        emptyCart1 += productTotal;
    }

    return emptyCart1;
}

let price2 = myShoppingCart1(shoppingCart1);
console.log(price2);

//PRODUCT DISCOUNT 100 ER NICHE TICKET KINLE DAM 100TK,KINTU 100 ER UPOR 200ER NICHE TICKET KINLE OI 100 TKT VADE BAKIGULOR DAM PER PISE 90TK .200 ER UPOR KINLE PROTHOM 100TKT ER DAM 100TK & 101 -200TKT ER DAM 90TK 200+ DAM 70TK

// function ticketPric(ticketQuantity){
//    const first100Rate = 100;
//    const second100Rate = 90;
//    const restTickets = 70;
//    if(){

//    }
// }

// const ticket = 

let num1 = 7;
        while(num1 <= 19){
         if(num1 % 2 != 0){
          console.log(num1);
         }
         num1++;
        }


let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(myArr.length);
 myArr[4] = 10;
 console.log(myArr);
  myArr.push(11,12);
 console.log(myArr);
 myArr.pop();
 console.log(myArr);


const myArrs3 = ['A', 'B', 'C', 'D','E'];
for(let i = 0; i < myArrs3.length; i++){
    let elements = myArrs3[i];
    console.log(elements );

}
//SHOW 80 ER CHEYE BORO SHONKHA
let maa = [1,29,300,487,50,620,70];

for(let p = 0; p < maa.length; p++){
    let baba = maa[p];
    if(baba <= 80){
        continue;
    }
    console.log(baba);
}

function paperRequirements(firstCopyOfBook, secondCopyOfBook, thirdCopyOfBook){ 
   let books1 = 100;
   let books2 = 200;
   let books3 = 300;
   let needToPage1 = firstCopyOfBook * books1;
   let needToPage2 = secondCopyOfBook * books2;
   let needToPage3 = thirdCopyOfBook * books3;
   let totalNeedToPage = needToPage1 + needToPage2 + needToPage3;
   return  totalNeedToPage;
}
let myBook = paperRequirements(3,5,10);
console.log(myBook);


//CREATE FUNCTION BESTFRIENDS

const friendsName = ['abdus sobhan', 'fatema begum',  'jhara islam', 'nazrul islam', 'jannatul islam safa', 'nabila islam shifa'];
function bestFriends(names){
    let longFriendsName = names[0].length;
    let longName = names[0];
    for(let q = 1; q < names.length; q++){
     let allNames = names[q].length;
     if(allNames > longFriendsName){
        longName = names[q];
        longFriendsName = allNames;
     }
    }
    return longName;
}
let myFriends = bestFriends(friendsName);
console.log(myFriends);

//NEGATIVE ARRAY
 const numbers = [20, 50, 100, -300, 56, -5, 22, 90];
function findPositive(posNum){
     let positivesNums = [];
    for(let r = 0; r < posNum.length; r++){
     let allNumbers = posNum[r];
     console.log(allNumbers);
     if(allNumbers >= 0){
        positivesNums.push(allNumbers);
     }else{
        break;
     }
    }
    return positivesNums
}
showPositives = findPositive(numbers);
console.log(showPositives);

//FITTOEENCHI
function fitToInch(feet){
  let inches = feet * 12;
  return inches;
}

let inches1 = fitToInch(3);
console.log(inches1, 'inche');

//centimeterToMeter
function centimeterToMeter(meter){
    let centimeters = 100;
    result = centimeters * meter;
    return result; 
}

let meter1 = centimeterToMeter(5);
console.log(meter1);

// function longest_str_in_array(arra)
//   {
//     var max_str = arra[0].length;
//     var ans = arra[0];
//     for (var i = 1; i < arra.length; i++) {
//         var maxi = arra[i].length;
//         if (maxi > max_str) {
//             ans = arra[i];
//             max_str = maxi;
//         }
//     }
//     return ans;
// }
// console.log(longest_str_in_array(["abcdefghijklmnopqrst", "a", "abcdhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh", "abcdefgh"]));
// console.log(longest_str_in_array(["ab", "abooooooooooooooooooooooooooooooooooooooooooooooooo", "ab","eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"]));
// let maa4 = 'baba';
// console.log(maa4);
// maa4 = 'shifa safa';
// console.log(maa4);

// const baba1 = 'mammy';
// console.log(baba1);
// baba1 = 'mammy2';
// console.log(baba1);

//COMPARISON
const taka = 100;
const jama = 5;
if(taka >= 100 || jama === 8 ){
    console.log('You can go scic');
}else{
    console.log('You can not to go scic');
}


let isGirls =false;

if(isGirls == true){
   console.log('good')
}else{
    console.log('bad');
}

//FEBONAS [0,1,1,2,3,5,8,13,21,34,55,89,144]

let fibo = [0,1,1,2,3];
for(let m = 2; m <=20; m++){
  fibo[m] = fibo[m-1] + fibo[m-2];
}
console.log(fibo);