


// let radius = prompt("Enter the radius:");
// let circumference = 2 * Math.PI * radius;
// console.log("Circumference: " + circumference);

const PI = 3.14159;

document.getElementById("submit").onclick = function () {
    let radius = Number(document.getElementById("radius").value);
    
    if (isNaN(radius)) {
        document.getElementById("myH3").textContent = "Please enter a valid number.";
        return;
    }

    let circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = "The circumference is: " + circumference;
    console.log(circumference);
};
