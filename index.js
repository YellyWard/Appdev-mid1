// alert("Hello");

// 1st step - Movement animation to happen
const card = document.querySelector('.card');
const container = document.querySelector('.container');

// 5th step - all items
const photo = document.querySelector('.photo img');
const title = document.querySelector('.title');
const social = document.querySelector('.social');
const info = document.querySelector('.info h4');
const profile = document.querySelector('.profile');

// 2nd step - Moving animation event
container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20; //rotating the element into x axis
    let yAxis = (window.innerWidth / 2 - e.pageY) / 20; //rotating the element into y axis
    card.style.transform  = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// 4th step - Adding animation in
container.addEventListener('mouseenter', e => {
    card.style.transform = "none";
    // Popout animation for all items
    photo.style.transform = "translateZ(50px)";
    title.style.transform = "translateZ(50px)";
    social.style.transform = "translateZ(50px)";
    info.style.transform = "translateZ(50px)";
    profile.style.transform = "translateZ(50px)";
});

// 3rd step - Removing animation in
container.addEventListener('mouseleave', e => {
    card.style.transform = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});


/*First step, The code uses document.querySelector to target specific HTML elements based on their CSS classes.

Second step, event listener is attached to the .container element, listening for mousemove
 events (when the mouse moves over the container).

Third step, A final event listener is attached to the .container, listening for mouseleave events
 (when the mouse leaves the container).


Fourth step,  Another event listener is attached to the .container, listening for 
mouseenter events (when the mouse enters the container).

Fifth step, In the fifth and last stage, we choose every component that needs to be 
animated and give it a variable that we can change The code rotates and moves the card in response to mouse movements in 
order to provide a 3D card animation effect on a webpage.

*/