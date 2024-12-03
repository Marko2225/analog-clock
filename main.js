// document.addEventListener('DOMContentLoaded', function() {
//     setInterval(updateClock, 1000);
// });

// // function updateClock() {
// //   // Implementation to update the clock goes here
// // }

// function updateClock(){
// // Get current time values
// const now = new Date();
// const seconds = now.getSeconds();
// const minutes = now.getMinutes();
// const hours = now.getHours() % 12;

// // Select clock hands elements
// const secondHand = document.querySelector('.second');
// const minuteHand = document.querySelector('.minute');
// const hourHand = document.querySelector('.hour');

// // Calculate rotation degrees
// const secondDegree = seconds * 6;
// const minuteDegree = minutes * 6 + seconds / 10;
// const hourDegree = hours * 30 + minutes / 2;

// // Apply rotations to clock hands
// secondHand.style.transform = `rotate(${secondDegree}deg)`;
// minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
// hourHand.style.transform = `rotate(${hourDegree}deg)`;
// }

document.addEventListener('DOMContentLoaded', function() {
    const numbersList = document.querySelector('.numbers');
    const rotationDegree = 360 / 12; // 30 stepeni

    for (let i = 1; i <= 12; i++) {
        const li = document.createElement('li');
        const span = document.createElement('span');
        const rotation = (i ) * rotationDegree; // Izračunava rotaciju za svaku cifru
        li.style.transform = `translate(-0%, -00%) rotate(${rotation}deg)`;  // Primena transformacije
        span.textContent = i; // Dodavanje broja
        span.style.transform = `translate(-0%, -00%) rotate(-${rotation}deg)`;  // Primena transformacije
        span.style.display = 'inline-block'
        li.appendChild(span); // Dodavanje span elementa u li
        numbersList.appendChild(li); // Dodavanje li elementa u ul
    }
    setInterval(updateClock, 1000);
});

function updateClock() {
    var now = new Date();
    console.log(now);
    var seconds = now.getSeconds();
    var minutes = now.getMinutes();
    var hours = now.getHours() % 12;

    var secondHand = document.querySelector('.second');
    var minuteHand = document.querySelector('.minute');
    var hourHand = document.querySelector('.hour');

    var secondDegree = seconds * 6;
    var minuteDegree = minutes * 6 + seconds/10;
    var hourDegree = hours * 30 + (minutes / 2);

    secondHand.style.transform = `rotate(${secondDegree}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
}