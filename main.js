 var planets = [ 
    ['Pluto', 0.06], 
    ['Neptune', 1.148], 
    ['Uranus', 0.917], 
    ['Saturn', 1.139], 
    ['Jupiter', 2.640], 
    ['Mars', 0.3895], 
    ['Moon', 0.1655], 
    ['Earth', 1], 
    ['Venus', 0.9032], 
    ['Mercury', 0.377], 
    ['Sun', 27.9] 
];
planets.reverse()
planets[2][0]

    let select = document.getElementById("planets");
        planets.forEach(planet => {
    let option = document.createElement("option");
        option.innerHTML = planet[0]
        option.value = planet[0]
        select.appendChild(option)
 })

function calculateWeight(weight, planetName) { 
    for (let i = 0; i < planets.length; i++) {
     if (planets[i][0] === planetName) {
         return weight * planets[i][1]
     }

}} 

function handleClickEvent(e) { 
    var userWeight = document.getElementById("user-weight").value
    console.log(userWeight) 
    var planetName = document.getElementById("planets").value
    console.log(planetName) 
    var result = calculateWeight(userWeight, planetName)
    console.log(result)
    document.getElementById("output").innerHTML = `If you were on ${planetName}, you would weigh ${result}lbs!`
} 
     // Bonus Challenges 
    // 8. Reverse the drop down order so that the sun is first.