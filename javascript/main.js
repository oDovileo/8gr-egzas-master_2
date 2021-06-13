/* 
Kiekviena užduotis turi būti aprašyta kaip atskira funkcija
kuriai yra paduodami duomenys. Aprašykite visas funkcijas žemiau. 
Visas funkcijas iškvieskite vieną po kitos, žemiau šio komentaro.

Taip pat parašykite funkciją kuri: isikviesdama save pačią atspausdina skaičius nuo 1 iki 10


*/
 countCafes(data);
countKaunasCafes(data);
countFirstCafeMealNumber(data);
countDifferentMealsKaunas(data);
countAveragePriceOfMeals(data);
isHigherAveragePriceOfMealsInKaunas(data);
countPercentegeOfMealsVegetarian(data);
isMoreOfVegetarianMealsInVilniusPercentage(data); 



//1. Kiek yra kavinių?
function countCafes(data) {
    console.log("Kavinių yra", data.length);
}

//2. Kiek yra kavinių yra Kaune?
function countKaunasCafes(data) {
    let count = 0;
    data.forEach(kavine => {
        if (kavine.adresas.toLowerCase().includes("kaunas")) {
            count++;
        }
    });
   
    console.log("Kavinių Kaune yra", count);
    
}
   
//3. Kiek pirmoje kavinėje yra patiekalų?
function countFirstCafeMealNumber(data) {
    console.log("Pirmoje kavinėje patiekalų yra", data[0].meniu.length);
    
}


//4. Kiek skirtingų patiekalų yra Kauno filialuose?
function countDifferentMealsKaunas(data) {
    let meniu = [];
    data.forEach(kavine => {
        if (kavine.adresas.toLowerCase().includes("kaunas")) {
           kavine.meniu.forEach(meal => {
                if (!meniu.includes(Object.keys(meal)[0]))
                    meniu.push(Object.keys(meal)[0]);
            });
        }
    });
    console.log("Skirtingų meniu Kaune yra", meniu.length);
}


//5. Kokia vidutinė patiekalų kaina tinkle? (2 sk po kablelio)
function countAveragePriceOfMeals(data) {
    let count = 0;
    let sum = 0;
    data.forEach(kavine => {
        kavine.meniu.forEach(meal => {
            count++;
            sum += Object.values(meal)[0];
        });
    }); 
    let result = Math.round(sum / count * 100) / 100;
    console.log ("Vidutinė patiekalų kaina tinkle yra", result);

}

//6. Ar vidudinė patiekalų kaina Kauno filialuose aukštesnė už vidutinę patiekalų kainą kituose filialuose?
function isHigherAveragePriceOfMealsInKaunas(data) {
    let countKaunas = 0;
    let sumKaunas = 0;
    let countOthers = 0;
    let sumOthers = 0;
    data.forEach(kavine => {
        if (kavine.adresas.toLowerCase().includes("kaunas")) {
            kavine.meniu.forEach(meal => {
                countKaunas++;
                sumKaunas += Object.values(meal)[0];
            });
        } else {
            kavine.meniu.forEach(meal => {
                countOthers++;
                sumOthers += Object.values(meal)[0];
            });
        }

    });
    let resultKaunas = Math.round(sumKaunas / countKaunas * 100) / 100;
    let resultOthers = Math.round(sumOthers / countOthers * 100) / 100;
    console.log("Ar vidudinė patiekalų kaina Kauno filialuose aukštesnė:", resultKaunas > resultOthers);
}

//7. Kiek procentų patiekalų yra vegetariški? (visame tinkle)
function countPercentegeOfMealsVegetarian(data) {
    let count = 0;
    let countVeg = 0;
    data.forEach(kavine => {
        kavine.meniu.forEach(meal => {
            count++;
            if (Object.values(meal)[1] == "taip") {
                countVeg++;
            }
        });
        let result = Math.round(countVeg / (count / 100) * 100) / 100;
        console.log("Vegetariškų patiekalų procentas", result);
    });
    
}

//8. Ar Vilniuje procentaliai daugiau vegetariškų patiekalų, nei kituose miestuose?
function isMoreOfVegetarianMealsInVilniusPercentage(data) {
    let countVilnius = 0;
    let countVegVilnius = 0;
    let countOther = 0;
    let countVegOther = 0;
    data.forEach(kavine => {
        kavine.meniu.forEach(meal => {

            if (kavine.adresas.toLowerCase().includes('vilnius')) {
                countVilnius++;
                if (Object.values(meal)[1] == "taip") {
                    countVegVilnius++;
                }
            } else {
                countOther++;
                if (Object.values(meal)[1] == "taip") {
                    countVegOther++;
                }
            }
        });
    });
    let resultVilnius = countVegVilnius / (countVilnius / 100);
    console.log(countVegVilnius, countVilnius);
    console.log(countVegOther, countOther);
    let resultOther = countVegOther / (countOther / 100);
    console.log("Ar Vilniuje procentaliai daugiau vegetariškų patiekalų:", resultVilnius > resultOther);
    
}