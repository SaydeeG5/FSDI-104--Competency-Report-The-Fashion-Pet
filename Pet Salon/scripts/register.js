//object literal notation
let petSalon = {
    //properties 
    name:"The Fashion Pet",
    address:{
        street:"University",
        number:"262",
        zip:"22408"
    },
    pets:[]
}
        //this is a counter  
    let c=0; 
        //create the constructor; A way to define how to make an object from a class. 
    function Pet(name,age,gender,breed,service,owner,phone){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.ownerName=owner; //***** 
    this.contactPhone=phone; //***** 
    this.id=c++; 
}

    //create pets - this is for test purposes ; 
let pet1 = new Pet("Scooby",60,"Male","Dane","Grooming","Shaggy","555-555-5555");

let pet2 = new Pet("Nessa",3,"Female","Border Collie","Vaccines","Monica","555-444-5555");

let pet3 = new Pet("Shoyu",9,"Female","Hybrid Bully","Nail Cut","Clarissa","555-333-5555");

console.log(pet1,pet2,pet3);

    //getting the input from users field
let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let inputService = document.getElementById("selService");
let inputownerName = document.getElementById("txtOwner");
let inputcontactPhone = document.getElementById("txtContactPhone");

function isValid(aPet){
    let valid=true;
    inputName.classList.remove("error");
    inputService.classList.remove("error");
    inputownerName.classList.remove("error");
    inputcontactPhone.classList.remove("error");
        //check the conditions 
    if(aPet.name==""){
        valid=false;
        inputName.classList.add("error");
        //alert("Please, fill the name"); <- this is how you do an alert for erorr 
    }
    if(aPet.service==""){
        valid=false;
        inputService.classList.add("error");
    }
    if(aPet.ownerName==""){
        valid=false;
        inputownerName.classList.add("error");
    }
    if(aPet.contactPhone==""){
        valid=false;
        inputcontactPhone.classList.add("error");
    }
    return valid; 
}

        //register function 
function register(){
        //create the object; this is going to get the values form the user input   
    let thePet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value,inputownerName.value,inputcontactPhone.value);
        //validating the pet
    if (isValid(thePet)==true){
        //push the object this is what is going to push the object ( the values from the users input ) to the array of thePet 
        petSalon.pets.push(thePet);
        //display the petSalon.pets 
        displayCards();
    
        //display the petSalon array
        console.log(petSalon.pets);
        clearForm();
    }      
}
    
function clearForm(){
    inputName.value="";
    inputAge.value="";
    inputGender.value="";
    inputBreed.value="";
    inputService.value="";
    inputownerName.value="";
    inputcontactPhone.value="";
}

function deletePet(aPetID) {
    console.log("Deleting the pet" + aPetID);
    document.getElementById(aPetID).remove(); //delete the card from HTML 
    let deleteIndex;
    for(let i=0;i<petSalon.length;i++){
        let pet = petSalon.pets[i];
        if(pet.id==aPetID){
            deleteIndex=i;
    }

}
petSalon.pets.splice(deleteIndex,1);
}

function init(){
    //this is the main function 
    console.log("init");
    petSalon.pets.push(pet1,pet2,pet3); 
    displayCards();
}

window.onload=init;


//Past Assignments :
//console.log(petSalon.address.street);
//console.log(petSalon.pets)

// function displayNames(petSalon){
//     alert(petSalon.pets.length);
// }
// for(let i=0;i<petSalon.pets.length;i++){
//         console.log(petSalon.pets[i].name);
// }

// displayNames(petSalon)
