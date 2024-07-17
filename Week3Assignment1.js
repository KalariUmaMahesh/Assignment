function tellFortune(noc,futurepartner,nativeplace,jobtitle){
    console.log(`You will be a ${jobtitle} in ${nativeplace},and married to ${futurepartner} with ${noc} kids.`);
}
tellFortune(2,"Kajal","Hyderabad","Engineer");
tellFortune(3,"Samantha","Chennai","Doctor");
tellFortune(4,"Disha","Mumbai","Business Man");

function calculatePetAge(age,pet){
    if(pet=="cat"){
        console.log(`Your kitty is ${age*7} years old in cat years!`);
    }
    else if(pet=="dog"){
        console.log(`Your kitty is ${age*12} years old in dog years!`);
    }
    else if(pet=="rabbit"){
        console.log(`Your kitty is ${age*21} years old in rabbit years!`)
    }
}
calculatePetAge(3,"cat");
calculatePetAge(2,"dog");
calculatePetAge(1,"rabbit");

function calcPerimeter(length,width){
    console.log(`The perimeter is ${2*(length+width)}`);
}
calcPerimeter(4,5);

const calcArea=(length,width)=>{
    console.log(`The area is ${length*width}`);
}
calcArea(4,5);

const calculateCoffeeSupply=(age,cups)=>{
    var constantmaxage=60;
    var cupsroundvalue=Math.round(cups);
    var cupsperyear=365*cups;
    console.log(`You will need ${(constantmaxage-age)*cupsperyear} cups of coffee to keep you awake until the age of X.`)
}
calculateCoffeeSupply(30,2);
calculateCoffeeSupply(20,2.6);
calculateCoffeeSupply(50,1.7);

function metersToFeet(meters){
    console.log(`${meters} meters is equal to ${meters*3.28084} feet.`);
}
metersToFeet(10);
metersToFeet(12);

const feetToMeters=(feet)=>{
    console.log(`${feet} feet is equal to ${feet*0.3048} meters.`);
}
feetToMeters(10);
feetToMeters(15);