// 1. & 3. & 4.

class Cat {
    constructor(name, breed, color) {
        this.name = name,
        this.breed = breed,
        this.color = color
    }
    greeting() {
        console.log(`Hello, said ${this.name} the ${this.breed}.`)
    }
}

const cat = new Cat("Bertie", "Cymric",)
const catName = cat["name"]
cat.color = "black"
const cat2 = new Cat("BB", "Tabby", "Brown")
cat.greeting()
cat2.greeting()

// 2.

const favBand = {
    name: "Black Country New Road",
    nationality: "English",
    genre: "art rock",
    members: 6,
    formed: 2018,
    split: false,
    albums: [
        {name: "For the First Time", released: 2021}, 
        {name: "Ants From Up There", released: 2022}
    ]
}

let bandInfo = `My current favourite band is ${favBand["name"]}. 
They are an ${favBand["nationality"]} band, active since ${favBand.formed}. 
In a broad sense they make ${favBand.genre}, and toured extensively 
before their first album release ("${favBand.albums[0].name}") in ${favBand.albums[0].released}.`

// 

const section = document.querySelector('section');

let para1 = document.createElement('p');
let para2 = document.createElement('p');
let para3 = document.createElement('p');

para1.textContent = `The cat's name is ${ catName }.`;
para2.textContent = `The cat's color is ${ cat.color }.`;
para3.textContent = bandInfo;

section.appendChild(para1);
section.appendChild(para2);
section.appendChild(para3);