const phrase ="maman aime le pain et mange un pain au chocolat";
function lettreCapitalize(str) {
    const arr = str.split(" ");
    const arrCapitalize =  arr.map(str => str.charAt(0).toUpperCase() + str.slice(1));
    return arrCapitalize.join(" ")
}

console.log(lettreCapitalize(phrase));