function displayCards(){
    let card="";
    //travel the array 
    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        card+=`
            <tr id="${pet.id}" class="pet">
                <td>${pet.name}</td>
                <td>${pet.age}</td>
                <td>${pet.gender}</td>
                <td>${pet.breed}</td>
                <td>${pet.service}</td>
                <td>${pet.ownerName}</td>
                <td>${pet.contactPhone}</td>
                <td><button class="delete" onclick="deletePet(${pet.id})">Delete</button></td>
            </tr> 
            
            `;
    }

     console.log(card);
    //create the HTML template for the cards (This is the table above)
    // //append the template on tne html 
     document.getElementById("pets-table").innerHTML=card;
     
}


