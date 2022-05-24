// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

const destructivelyAppendCat = (name) => {
    cats.push(name); 
}

const destructivelyPrependCat = (name) => {
    cats.unshift(name);
}

const destructivelyRemoveLastCat = () => {
    cats.pop();
}

const destructivelyRemoveFirstCat = () => {
    cats.shift();
}

const appendCat = (name) => {
    let copycats = [...cats, name];
    return copycats;
}

const prependCat = (name) => {
    let copycats = [name, ...cats];
    return copycats;
}

const removeLastCat = () => {
    let copycats = cats.slice(0, cats.length - 1);
    return copycats;
}

const removeFirstCat = () => {
    let copycats = cats.slice(1);
    return copycats;
}