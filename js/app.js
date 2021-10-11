let pets = [
    {
        name: "Katrine Catz",
        pet_img: 'cats5',
        description: 'A lovely home Pet',
        price: '$1200'
    },
    {
        name: "Sabima kitten",
        pet_img: 'catli',
        description: 'Fun to  be with',
        price: '$800'
    },
    {
        name: "Homlez Cati",
        pet_img: 'kitten',
        description: 'Full of Life',
        price: '$1500'
    },
    {
        name: "Petrica Kitten",
        pet_img: 'catiz',
        description: 'A lovely home Pet',
        price: '$1200'
    },
    {
        name: "Katrine Catz",
        pet_img: 'cats1',
        description: 'A lovely home Pet',
        price: '$900'
    },
    {
        name: "Sabima kitten",
        pet_img: 'cats3',
        description: 'Fun to  be with',
        price: '$1400'
    },
    {
        name: "Homlez Cat2",
        pet_img: 'cats4',
        description: 'Full of Life',
        price: '$4000'
    },
    {
        name: "Petrica Kitten",
        pet_img: 'cats2',
        description: 'A lovely home Pet',
        price: '$6000'
    },
    {
        name: "Katrine Catz",
        pet_img: 'catli',
        description: 'A lovely home Pet',
        price: '$900'
    },
    {
        name: "Sabima kitten",
        pet_img: 'cats3',
        description: 'Fun to  be with',
        price: '$2100'
    },
    {
        name: "Homlez Cat2",
        pet_img: 'kitten',
        description: 'Full of Life',
        price: '$1800'
    },
    {
        name: "Petrica Kitten",
        pet_img: 'cat6',
        description: 'A lovely home Pet',
        price: '$1600'
    },
]

// console.log('The Total Pets in shop is', pets.length)

// for (let j=0; j < pets.length; j++) {
//     console.log(pets[j])
// }

function myFunction(x) {
    if (x.matches) { // If media query matches
        let petSection = document.getElementById('petWrap');
            html = "";
            pets.forEach(e => {
            html += `
        
                        <div class="pet-card w-100 mx-3 pb-4 font2">
                            <div>
                                <img src="./img/${e.pet_img}.jpg" alt="Cool Cat" class="img-fluid ">
                            </div>
                            <div class="text-white pt-3 pb-3 mx-2">
                                <h4>${e.name}</h4>
                                <h6>${e.description}</h6>
                                <h5 class="fs-6 text-danger" >${e.price}</h5>
                                <button class="btn btn-primary">Add to Cart</button> 
                            </div>                            
                        </div> 
           
    `
    console.log(e);
    
    petSection.innerHTML = html
})
    } else {
        let petSection = document.getElementById('petWrap');
        html = "";
       pets.forEach(e => {
           html += `
               
           <div class="pet-card w-25 mx-3 pb-4 font2">
           <div>
               <img src="./img/${e.pet_img}.jpg" alt="Cool Cat" class="img-fluid ">
           </div>
           <div class="text-white pt-3 pb-3 mx-2">
               <h4>${e.name}</h4>
               <h6>${e.description}</h6>
               <h5 class="fs-6 text-danger" >${e.price}</h5>
               <button class="btn btn-primary">Add to Cart</button> 
           </div>                            
           </div> 
                  
           `
           console.log(e);
           
           petSection.innerHTML = html
       })
    }
  }
  
  var x = window.matchMedia("(max-width: 500px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) 

