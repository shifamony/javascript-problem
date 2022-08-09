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