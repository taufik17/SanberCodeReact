console.log("###########################################")
console.log("1. Mengubah fungsi menjadi fungsi arrow")
console.log("ES5 : ")
const golden = function goldenFunction(){
    console.log("this is golden!!")
}
   
golden()

console.log("\nES6 : ")
const goldenes6 = () => {
    console.log("this is golden!!") 
}

goldenes6()

//////////////////////////////////////////////////////////////////////////////
console.log("###########################################")
console.log("\n###########################################")
console.log("2. Sederhanakan menjadi Object literal di ES6")
console.log("ES5 : ")
const newFunction = function literal(firstName, lastName){
    return {
        firstName: firstName,
        lastName: lastName,
        fullName: function(){
            console.log(firstName + " " + lastName)
            return 
        }
    }
}   
//Driver Code 
newFunction("William", "Imoh").fullName() 

console.log("\nES6 : ")
const newFunctionEs6 = (firstName, lastName) => {
    return {
        firstName: firstName,
        lastName: lastName,
        fullName: function(){
            console.log(firstName + " " + lastName)
            return 
        }
    }
}
newFunctionEs6("William", "Imoh").fullName() 

//////////////////////////////////////////////////////////////////////////////
console.log("###########################################")
console.log("\n###########################################")
console.log("3. Destructuring")
console.log("\nES5 : ")
const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
}
const firstName = newObject.firstName;
const lastName = newObject.lastName;
const destination = newObject.destination;
const occupation = newObject.occupation;
console.log(firstName, lastName, destination, occupation)
console.log("\nES6 : ")
const newObjectes6 = {
    firstNamees6: "Harry",
    lastNamees6: "Potter Holt",
    destinationes6: "Hogwarts React Conf",
    occupationes6: "Deve-wizard Avocado",
    spelles6: "Vimulus Renderus!!!"
}
const { firstNamees6, lastNamees6, destinationes6, occupationes6, spelles6 } = newObjectes6;
console.log(firstNamees6, lastNamees6, destinationes6, occupationes6, spelles6)

//////////////////////////////////////////////////////////////////////////////
console.log("###########################################")
console.log("\n###########################################")
console.log("4. Array Spreading")
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
console.log("ES5 : ")
const combined = west.concat(east)
//Driver Code
console.log(combined)
console.log("\nES6 : ")
let combinedArray = [...west, ...east]
console.log(combinedArray)

//////////////////////////////////////////////////////////////////////////////
console.log("###########################################")
console.log("\n###########################################")
console.log("5. Template Literals")
console.log("ES5 : ")
const planet = "earth"
const view = "glass"
var before = 'Lorem ' + view + 'dolor sit amet, ' +  
    'consectetur adipiscing elit, ' + planet + ' do eiusmod tempor ' +
    'incididunt ut labore et dolore magna aliqua. Ut enim' +
    ' ad minim veniam'
 
// Driver Code
console.log(before) 

console.log("\nES6 : ")
const theString = `Lorem ${view}dolor sit amet, consectetur adipiscing elit, ${planet} do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`
 
console.log(theString)