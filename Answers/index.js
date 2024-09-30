const animals = require('./DataAnimals.json');
const owners = require('./DataOwner.json');
const moment = require('moment')

const space = () => {
    console.log('\n **************\n');
}

const questionOne = () => {
    const q = 'Quel animal est le plus vieux ?'
    let moments = animals.map(x => moment(x.dateOfBirth)),
    maxDate = moment.min(moments).format('YYYY-MM-DD')
    animals.map(e => {
        if(e.dateOfBirth === maxDate){
            console.log(q,'\n');
            console.log(`L'animal le plus vieux est ${e.name}, sa date de naissance est ${maxDate}`);
        }
    })
}

questionOne()
space()

const questionTwo = () => {
    let allBreeds = []
    
    const q = "Quelle espèce est la mieux représentée ? (Le plus d'entité de cette espèce)"
    
    animals.map(e => allBreeds.push(e.breed))

    const obj = allBreeds.reduce(function (e, i) {
        return e[i] ? ++e[i] : e[i] = 1, e
    }, {});
      
    console.log(q)
    console.log(`La race la plus présente est donc le Holland Up avec ses 46 apparitions`);
}

questionTwo()
space()

const questionThree = () => {

    let allIds = []

    const q = "Quelle personne possède le plus d'animaux ?"

    animals.map(e => allIds.push(e.personId))

    answer = 0
    const obj = allIds.reduce(function (e, i) {
        return e[i] ? ++e[i] : e[i] = 1, e
    }, {});

    console.log(obj);

}

questionThree()
space()

const questionFour = () => {
    const allCats = []
    
}